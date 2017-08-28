import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import avatar from '../../assets/images/avatar.jpg';

const TopMenu = () => (
  <header className="topMenu">
    <div className="container">
      <Link className="topMenu__logo" to="/">
        <img src={logo} alt="logo"/>
      </Link>
      <input className="topMenu__searchInput" type="text" placeholder="Company Name"/>
      <div className="userPanel">
        <a className="userPanel__chat" href="#" title="chat"></a>
        <a className="userPanel__notifications" href="#" title="notifications"></a>
        <a className="userPanel__profile" href="#" title="profile">
          <img className="profileAvatar" src={avatar} alt="user"/>
          Maximillian Beekeeper
        </a>
      </div>
    </div>
  </header>
);

export default TopMenu;