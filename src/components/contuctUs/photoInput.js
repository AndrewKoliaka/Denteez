import React, {Component} from 'react';
import {addPhoto, removePhoto} from '../../actions/index';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

class PhotoInput extends Component {
  constructor(props) {
    super(props);
    this.validate = this.validate.bind(this);
    this.selectFile = this.selectFile.bind(this);
    this.removeFile = this.removeFile.bind(this);
  }

  static PropTypes = {
    photos: PropTypes.arrayOf(PropTypes.instanceOf(File)).isRequired,
    addPhoto: PropTypes.func.isRequired,
    removePhoto: PropTypes.func.isRequired
  }

  validate(event) {
    const file = this.refs.photoInput.files[0];
    let isValid = false;

    if (!file.type && !file.type.includes('image')) {
      this.refs.error.classList.remove('inputBlock__errorMessage--hidden');
      this.refs.error.textContent = 'selected file must be image';
    } else if (file.size > 5000000) {
      this.refs.error.classList.remove('inputBlock__errorMessage--hidden');
      this.refs.error.textContent = 'image size cannot exceed 5MB';
    } else {
      let selectedImage = new Image();
      selectedImage.onload = () => {
        if (selectedImage.width <= 300 && selectedImage.height <= 300) {
          this.refs.error.classList.add('inputBlock__errorMessage--hidden');
          this.props.addPhoto(file)
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

  selectFile() {
    this.refs.photoInput.click();
  }

  removeFile(event) {
    event.preventDefault();
    let index = event.target.dataset.index;
    let fileToRemove = this.props.photos[index];
    this.props.removePhoto(fileToRemove);
  }

  render() {
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
              ref="photoInput"/>
          </div>
          <div
            className="inputBlock__errorMessage inputBlock__errorMessage--hidden"
            ref="error"></div>
        </div>
        {
          this.props.photos.map((photo, index) => (
            <div className="uploadedImage" key={index}>
              <a className="uploadedImage__remove" data-index={index} onClick={this.removeFile} href="#" alt="remove"></a>
              <img className="uploadedImage__image" src={URL.createObjectURL(photo)} alt={photo.name}/>
            </div>
          ))
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({photos: state.form.inputsData.file});

const mapDispatchToProps = dispatch => ({
  addPhoto(file) {
    dispatch(addPhoto(file));
  },
  removePhoto(file) {
    dispatch(removePhoto(file));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(PhotoInput);