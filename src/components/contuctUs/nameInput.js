import React from 'react';
import {connect} from 'react-redux';
import {addInput} from '../../actions/index';
import Input from './input';

class NameInput extends Input {
  constructor(props) {
    super(props);

    this.validate = this.validate.bind(this);
  }

  validate(event) {
    let name = event.target.name,
        value = event.target.value;
    
    if (value.length < 5 || value.length > 30 || value.match(/\d/g)) {
        this.makeInputInvalid(event.target);
        this.refs.error.textContent = 'Name must be >4 and <30 and without digital characters';
    } else {
        this.makeInputValid(event.target);
        this.props.dispatch(addInput({name, value}));
    }
  }

  render() {
    return (
      <div className="inputBlock inputBlock--left">
        <label className="inputBlock__label" htmlFor="userNameInput">Name *</label>
        <input
          className="inputBlock__input"
          id="userNameInput"
          type="text"
          name="user_name"
          placeholder="Dentist"
          required
          onBlur={this.validate}/>
        <div className="inputBlock__errorMessage inputBlock__errorMessage--hidden" ref="error"></div>
      </div>
    );
  }
}

export default connect()(NameInput);