import React, {Component} from 'react';
import {addInput} from '../../actions/index';
import {connect} from 'react-redux';

class PhotoInput extends Component {
  constructor(props) {
    super(props);
    this.validate = this.validate.bind(this);
    this.selectFile = this.selectFile.bind(this);

    this.state = {
      image: null
    }
  }

  validate(event) {
    const file = this.refs.photoInput.files[0]
    const inputName = this.refs.photoInput.name;

    let isValid = false;

    if(!file.type.includes('image')){
      this.refs.error.classList.remove('inputBlock__errorMessage--hidden');
      this.refs.error.textContent = 'selected file must be image';
    } else if(file.size > 5000000){
      this.refs.error.classList.remove('inputBlock__errorMessage--hidden');
      this.refs.error.textContent = 'image size cannot exceed 5MB';
    } else {
      const selectedImage = new Image();
      selectedImage.onload = () => {
        if(selectedImage.width <= 300 && selectedImage.height <= 300){
          this.refs.error.classList.add('inputBlock__errorMessage--hidden');
          this.props.dispatch(addInput({name: inputName, value: file}));
          isValid = true;
          this.setState({
            image: selectedImage
          });
        } else {
          this.refs.error.classList.remove('inputBlock__errorMessage--hidden');
          this.refs.error.textContent = 'image dimensions cannot exceed 300x300 px';
        }
      }
      selectedImage.src = URL.createObjectURL(file);
    }

    return isValid;
  }

  selectFile(event) {
    this.refs.photoInput.click();
  }

  render() {
    let uploadedPhoto = null;
    if(this.state.image){
      uploadedPhoto = <img className="uploadedImage" src={this.state.image.src} alt="user photo"/>
    }

    return (
      <div>
        <div className="inputBlock--photo">
          <div className="photoInput" onClick={this.selectFile}>
                <div className="photoInput__wrapper">
                  <h3 className="photoInput__title">Add photo</h3>
                  <p className="photoInput__text">Minimum size of<br/>
                    300x300 jpeg ipg<br/>
                    png 5 MB</p>
                </div>
            <input
              className="photoInput__input"
              name="photo"
              type="file"
              accept="image/*"
              onChange={this.validate}
              ref="photoInput"
              />
          </div>
          <div className="inputBlock__errorMessage inputBlock__errorMessage--hidden" ref="error"></div>
        </div>
        {
          uploadedPhoto
        }
      </div>
    );
  }
}

export default connect()(PhotoInput);