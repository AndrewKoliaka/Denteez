import React from 'react';
import Advertisement from './advertisement';
import {COMPANIES} from '../../scripts/constants';
import advImage from '../../assets/images/adv1.png';

const LeftSidebar = () => (
  <aside className="leftSidebar">
    <nav className="leftSidebar__menu">
      <ul className="mainMenu">
        <li className="mainMenu__el">
          <a className="mainMenu__link mainMenu__link--feed" href="#feed">Feed</a>
        </li>
        <li className="mainMenu__el">
          <a className="mainMenu__link mainMenu__link--ask" href="#ask">Ask a Colleague</a>
        </li>
        <li className="mainMenu__el">
          <a className="mainMenu__link mainMenu__link--companies" href="#companies">Companies</a>
        </li>
        <li className="mainMenu__el">
          <a className="mainMenu__link mainMenu__link--services" href="#services">Service Directory</a>
        </li>
      </ul>
    </nav>
    <Advertisement className="leftSidebar__advertisement" img={advImage}/>
    <section className="companiesList">
      <header className="companiesList__header">
        <h4 className="companiesList__title">Featured Companies</h4>
        <a className="companiesList__seeAll" href="#" alt="See All">See All</a>
      </header>
      <ul className="companiesList__list">

        {COMPANIES.map((company) => (
          <li className="company" key={company.id}>
            <img className="company__img" src={company.img} alt="Company Name"/>
            <div className="company__dataWrapper">
              <a className="company__name" href="#" title="Company Name">
                <h3>Company Name</h3>
              </a>
              <p className="company__data">
                <span className="company__type">{company.type}</span>
                <br/>
                <span className="company__city">{company.city}</span>
              </p>
              <a className="company__followBtn" href="#">Follow Now</a>
            </div>
          </li>
        ))
        }
        
      </ul>
    </section>
    <footer className="leftSidebar__footer">
      <p className="leftSidebar__copyright">Denteez Copyright 2015</p>
      <a className="leftSidebar__termsOfUse" href="#" title="terms of use">Terms of use</a>
      <a className="leftSidebar__privacyPolicy" href="#" title="privacy policy">Privacy Policy</a>
    </footer>
  </aside>
);

export default LeftSidebar;