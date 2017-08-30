import React, {Component} from 'react';
import {addInput} from '../../actions/index';
import {connect} from 'react-redux';

class PhotoInput extends Component {
  constructor(props) {
    super(props);
    this.validate = this
      .validate
      .bind(this);

    this.selectFile = this
      .selectFile
      .bind(this);
  }

  validate(event) {
    const file = this.refs.photoInput.files[0]
    const inputName = this.refs.photoInput.name;

    let isValid = false;

    if(file.size > 5000000){
      this.refs.error.classList.remove('inputBlock__errorMessage--hidden');
      this.refs.error.textContent = 'image size cannot exceed 5MB';
    } else if(!file.type.includes('image')){
      this.refs.error.classList.remove('inputBlock__errorMessage--hidden');
      this.refs.error.textContent = 'selected file must be image';
    } else {
      const selectedImage = new Image();
      selectedImage.onload = () => {
        if(selectedImage.width <= 300 && selectedImage.height <= 300){
          this.refs.error.classList.add('inputBlock__errorMessage--hidden');
          this.props.dispatch(addInput({name: inputName, value: file}));
          isValid = true;
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
    return (
      <div className="inputBlock">
        <div className="photoInput" onClick={this.selectFile}>
          <h3 className="photoInput__title">Add photo</h3>
          <p className="phtotoInput__text">Minimum size of 300x300 jpeg ipg png 5 MB</p>
          <input
            className="photoInput__input"
            name="photo"
            type="file"
            accept="image/*"
            onChange={this.validate}
            ref="photoInput"
            multiple
            />
        </div>
        <div className="inputBlock__errorMessage" ref="error"></div>
      </div>
    );
  }
}

export default connect()(PhotoInput);