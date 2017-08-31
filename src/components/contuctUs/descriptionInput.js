import React from 'react';
import {addInput} from '../../actions/index';
import Input from './input';
import {connect} from 'react-redux';

class DescriptionInput extends Input {
  constructor(props) {
    super(props);
    this.validate = this.validate.bind(this);
    this.displayLength = this.displayLength.bind(this);
  }

  validate(event) {
    let name = event.target.name,
      value = event.target.value;

    if (!value.length || value.length > 1000) {
      this.makeInputInvalid(event.target);
      this.refs.error.textContent = 'description cannot be empty or >1000 characters';
    } else {
      this.makeInputValid(event.target);
      this.props.dispatch(addInput({name, value}));
    }
  }

  displayLength(event){
    this.refs.charNumber.textContent = event.target.value.length;
  }

  render() {
    return (
      <div className="inputBlock">
        <label className="inputBlock__label" htmlFor="descriptionInput">Description *</label>
        <span className="charactersNumber">(<span ref="charNumber">0</span>/1000)</span>
        <textarea
          className="inputBlock__input inputBlock__input--textarea"
          id="descriptionInput"
          name="description"
          required
          maxLength="1000"
          onChange={this.displayLength}
          onBlur={this.validate}></textarea>
        <div className="inputBlock__errorMessage inputBlock__errorMessage--hidden" ref="error"></div>
      </div>
    );
  }
}

export default connect()(DescriptionInput);