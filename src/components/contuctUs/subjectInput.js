import React from 'react';
import Input from './input';
import {addInput} from '../../actions/index';
import {connect} from 'react-redux';

class SubjectInput extends Input {
  constructor(props) {
    super(props);

    this.validate = this
      .validate
      .bind(this);
  }

  validate(event) {
    let name = event.target.name,
      value = event.target.value;

    if (value.length < 5 || value.length > 50) {
      this.makeInputInvalid(event.target);
      this.refs.error.textContent = 'invalid subject';
    } else {
      this.makeInputValid(event.target);
      this
        .props
        .dispatch(addInput({name, value}));
    }
  }

  render() {
    return (
      <div className="inputBlock">
        <label className="inputBlock__label" htmlFor="userNameInput">Subject *</label>
        <input
          className="inputBlock__input"
          id="subjectInput"
          type="text"
          name="subject"
          required
          onBlur={this.validate}/>
        <div className="inputBlock__errorMessage" ref="error"></div>
      </div>
    );
  }
}

export default connect()(SubjectInput);