import React from 'react';
import {Link} from 'react-router-dom';
import ServiceList from './serviceList';

const MainContent = () => (
  <section className="serviceDirectory">
    <header className="serviceDirectory__header">
      <h2 className="serviceDirectory__title">Service Directory</h2>
      <Link className="serviceDirectory__link" to="/contactUs">Add New Service</Link>
    </header>
    <ServiceList/>
  </section>
);

export default MainContent;