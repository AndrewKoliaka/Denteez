import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => (
  <header className="supportHeader">
    <Link className="supportHeader__logo" to="/">
      <div className="siteLogo"></div>
    </Link>
    <button className="supportHeader__loginBtn">
      Log In Now
    </button>
    <h1 className="supportHeader__title">Home of Dentistry</h1>
    <p className="supportHeader__text">Denteez was created by dentists for dentistry in order to<br/>
      make the life of everyone involved in dentistry easier.</p>
  </header>
);

export default Header;