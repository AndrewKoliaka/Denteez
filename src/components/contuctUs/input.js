import {Component} from 'react';

// parent class for all inputs
export default class Input extends Component {
  makeInputValid(input) {
    input.classList.add('inputBlock__input--valid');
    input.classList.remove('inputBlock__input--invalid');
    this.refs.error.classList.remove('inputBlock__errorMessage--hidden');
  }

  makeInputInvalid(input) {
    input.classList.remove('inputBlock__input--valid');
    input.classList.add('inputBlock__input--invalid');
    this.refs.error.classList.add('inputBlock__errorMessage--hidden');
  }
}