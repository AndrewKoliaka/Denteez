import React from 'react';
import {connect} from 'react-redux';
import {addInput} from '../../actions/index';
import Input from './input';
import {getEnquiryTypes} from '../../scripts/api';

class EnquiryTypeInput extends Input {
  constructor(props) {
    super(props);

    this.state = {
      enquiryTypes: [],
      isOtherSelected: false,
      selectedValue: ''
    }

    this.changeSelect = this.changeSelect.bind(this);
    this.validate = this.validate.bind(this);
  }

  componentDidMount() {
    getEnquiryTypes().then(data => {
      let name = this.refs.input.name;

      this.setState({enquiryTypes: data.data.data, selectedValue: data.data.data[0]});
      this.props.dispatch(addInput({name, value: this.state.selectedValue.name}));
    }).catch(err => {
      this.setState({
        enquiryTypes: [
          {
            name: 'Other'
          }
        ],
        selectedValue: 'Other'
      });
    });
  }

  changeSelect(event) {
    let value = event.target.value,
      name = event.target.name;

    if (event.target.value === 'Other') {
      this.setState({isOtherSelected: true, selectedValue: value});
    } else {
      this.setState({isOtherSelected: false, selectedValue: value});
      this.props.dispatch(addInput({name, value}));
    }
  }

  validate(event) {
    let value = event.target.value,
      name = event.target.name;

    if (value.length > 4 && value.length < 25) {
      this.props.dispatch(addInput({name, value}));
      this.makeInputValid(event.target);
    } else {
      this.refs.error.textContent = 'Enquiry type must be >2 and <25 characters';
      this.makeInputInvalid(event.target);
    }
  }

  render() {
    let otherInput = null;

    if (this.state.isOtherSelected) {
      otherInput = (
        <div className="inputBlock">
          <input
            className="inputBlock__input"
            id="customEnquiryTypeInput"
            type="text"
            name="enquiryType"
            placeholder="Other"
            required
            onBlur={this.validate}/>
          <div className="inputBlock__errorMessage inputBlock__errorMessage--hidden" ref="error"></div>
        </div>
      );
    }

    return (
      <div>
        <div className="inputBlock">
          <label className="inputBlock__label" htmlFor="enquiryTypeInput">Enquiry Type *</label>
          <select
            className="inputBlock__input"
            name="enquiry_type"
            id="enquiryTypeInput"
            onChange={this.changeSelect}
            ref="input"
            value={this.state.selectedValue}>
            {this
              .state
              .enquiryTypes
              .map((type, index) => (
                <option key={index} value={type.name}>{type.name}</option>
              ))
            }
          </select>
        </div>
        {otherInput}
      </div>
    );
  }
}

export default connect()(EnquiryTypeInput);