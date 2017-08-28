import React from 'react';
import {Component} from 'react';

const Advertisement = ({img}) => (
  <section className="advertisement">
    <h4 className="advertisement__title">Advertisement</h4>
    <a className="advertisement__link" href="#" title="advertisement">
      <img className="advertisement__image" src={img}/>
    </a>
    <footer className="advertisement__footer">Ads By Denteez.com</footer>
  </section>
);

export default Advertisement;