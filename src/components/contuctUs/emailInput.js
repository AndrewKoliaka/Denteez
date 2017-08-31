import React from 'react';
import Input from './input';
import {addInput} from '../../actions/index';
import {connect} from 'react-redux';

class EmailInput extends Input {
    constructor(props){
        super(props);
        this.validate = this.validate.bind(this);
    }

    validate(event) {
        let name = event.target.name,
            value = event.target.value;

        const emailReg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        
        if (!emailReg.test(value)) {
            this.makeInputInvalid(event.target);
            this.refs.error.textContent = 'Invalid email address';
        } else {
            this.makeInputValid(event.target);
            this.props.dispatch(addInput({name, value}));
        }
      }

  render() {
    return (
      <div className="inputBlock inputBlock--right">
        <label className="inputBlock__label" htmlFor="userEmailInput">Email *</label>
        <input
          className="inputBlock__input"
          id="userEmailInput"
          type="email"
          name="email"
          placeholder="rachelm@gmail.com"
          required
          onBlur={this.validate}
          />
        <div className="inputBlock__errorMessage inputBlock__errorMessage--hidden" ref="error"></div>
      </div>
    );
  }
}

export default connect()(EmailInput);