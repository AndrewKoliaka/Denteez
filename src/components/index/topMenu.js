import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import avatar from '../../assets/images/avatar.jpg';

class TopMenu extends Component {
  render() {
    return (
      <header className="topMenu">
        <div className="container">
          <Link className="topMenu__logo" to="/">
            <img src={logo} alt="logo"/>
          </Link>
          <input className="topMenu__searchInput" type="text" placeholder="Company Name"/>
          <div className="userPanel">
            <a className="userPanel__chat" href="#"></a>
            <a className="userPanel__notifications" href="#"></a>
            <a className="userPanel__profile" href="#">
              <img className="profileAvatar" src={avatar} alt="user"/>
              Maximillian Beekeeper
            </a>
          </div>
        </div>
      </header>
    );
  }
}

export default TopMenu;