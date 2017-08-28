import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../../assets/images/logo.png';

const Header = () => (
  <header className="supportHeader">
    <Link className="supportHeader__logo" to="/">
      <img src={logo} alt="Company"/>
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