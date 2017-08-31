import React, {Component} from 'react';
import EnquiryTypeInput from './enquiryTypeInput';
import DescriptionInput from './descriptionInput';
import PhotoInput from './photoInput';
import NameInput from './nameInput';
import EmailInput from './emailInput';
import SubjectInput from './subjectInput';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {postSupport} from '../../scripts/api';
import {withRouter} from 'react-router-dom';
import {submitForm} from '../../actions/index';

class SupportForm extends Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
  }

  static PropTypes = {
    inputsData: PropTypes.shape({
      department: PropTypes.number.isRequired,
      enquiryType: PropTypes.string.isRequired,
      userName: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      subject: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      photo: PropTypes.instanceOf(File)
    }).isRequired,
    submit: PropTypes.func.isRequired
  }

  submit(event) {
    event.preventDefault();
    let canSubmit = false,
      data = this.props.inputsData;

    for (var key in data) {
      if (key !== 'file' && !data[key]) {
        canSubmit = false;
        break;
      } else {
        canSubmit = true;
      }
    }

    if (canSubmit) {
      postSupport(data).then(response => {
        this.props.submit(response.data);
      }).catch(error => {
        this.props.submit(error);
      });
      this.props.history.push('/');
      return true;
    } else {
      alert('Please fill out all fields correctly');
      return false;
    }
  }

  render() {
    return (
      <form className="supportForm" method="POST" action="#" onSubmit={this.submit}>
        <span className="supportForm__topText">Fields marked
          <sup> "+" </sup>
          are required</span>
        <EnquiryTypeInput/>
        <div className="supportForm__inputsRow">
          <NameInput/>
          <EmailInput/>
        </div>
        <SubjectInput/>
        <DescriptionInput/>
        <PhotoInput/>
        <input className="supportForm__submitBtn" type="submit" value="Submit"/>
      </form>
    );
  }
}

const mapStateToProps = state => ({inputsData: state.form.inputsData});

const mapDispatchToProps = dispatch => ({
  submit(data){
    dispatch(submitForm(data));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SupportForm));