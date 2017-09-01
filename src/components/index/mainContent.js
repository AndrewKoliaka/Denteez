import React from 'react';
import {Link} from 'react-router-dom';
import ServiceList from './serviceList';
import SubmittErrorPopup from './errorPopup';
import SubmittSuccessPopup from './submittSuccessPopup';
import {connect} from 'react-redux';

const MainContent = ({isFormSubmitted, success, error}) => {
  let popup = null;

  if (isFormSubmitted) {
    popup = success
      ? <SubmittSuccessPopup data={success}/>
      : <SubmittErrorPopup error={error}/>
  }

  return <section className = "serviceDirectory">
    {popup}
    <header className="serviceDirectory__header">
    <h2 className="serviceDirectory__title">Service Directory</h2>
    <Link className="serviceDirectory__link" to="/contactUs">Add New Service</Link>
  </header> < ServiceList /> </section>
};

const mapStateToProps = state => ({
  isFormSubmitted: state.form.isSubmitted,
  success: state.form.success,
  error: state.form.error
});

export default connect(mapStateToProps)(MainContent);