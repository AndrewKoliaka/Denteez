import React from 'react';

const Footer = () => (
  <footer className="supportFooter">
    <h2 className="supportFooter__title">About Denteez</h2>
    <p className="supportFooter__leftText">Why is it always so difficult to find
      what you are looking for in dentistry? Whether it is the latest advancement in
      technology or techniques or simply a review or understanding of the vast amount
      of products? Perhaps finding someone to just fix your broken equipment or simply
      hiring new staff or looking for that new job?</p>
    <p className="supportFooter__rightText">Our mission is to give every dental
      professional the possibility to discuss and share all aspects of their
      profession, their practice and their business. We aim to make the world of
      dentistry easy and accessible, so every dental professional can find what they
      are looking for quickly and easily all in one place.</p>
    <div className="supportFooter__row">
      <div className="supportFooter__copyright">Denteez Copyright 2015</div>
      <div className="supportFooter__rightLinks">
        <a className="supportFooter__link" href="#support" title="Support">Support</a>
        <a className="supportFooter__link" href="#privacy" title="Privacy Policy">Privacy Policy</a>
        <a className="supportFooter__link" href="#termsOfUse" title="Terms of use">Terms of use</a>
      </div>
    </div>
  </footer>
);

export default Footer;