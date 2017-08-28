import React from 'react';
import {PEOPLE} from '../../scripts/constants';
import productImg1 from '../../assets/images/product1.jpg';
import productImg2 from '../../assets/images/product2.jpg';
import advImage from '../../assets/images/adv2.png';
import Advertisement from './advertisement';

const RightSidebar = () => (
  <aside className="rightSidebar">
    <header className="rightSidebar__header rightSidebar__header--1">
      <p className="rightSidebar__headerText">People you may know</p>
      <a className="rightSidebar__seeAll" href="#">See All</a>
    </header>

    <ul className="rightSidebar__peopleList">
      {PEOPLE.map(person => (
        <li className="person" key={person.id}>          
          <a className="person__name" href="#"><h3>{person.name}</h3></a>
          <div className="person__wrapper">
            <img className="person__image" src={person.img} alt={person.name}/>
            <div className="person__data">
              <div className="person__business">
                {person.business}
              </div>
              <div className="person__city">
                {person.city}
              </div>
              <a className="person__addFriend" href="#">Add Friend</a>
            </div>
          </div>
        </li>
      ))
}
    </ul>

    <header className="rightSidebar__header rightSidebar__header--2">
      <p className="rightSidebar__headerText">Featured Products</p>
      <a className="rightSidebar__seeAll" href="#">See All</a>
    </header>

    <ul className="rightSidebar__productsList">
      <li className="product">
        <h3 className="product__name">Product Name</h3>
        <div className="product__wrapper">
          <img className="product__image" src={productImg1}/>
          <p className="product__description">
            Product Short Description.
            <br/>The quick brown fox jumps over the lazy dog.
          </p>
        </div>
      </li>
      <li className="product">
        <h3 className="product__name">Product Name</h3>
        <div className="product__wrapper">
          <img className="product__image" src={productImg2}/>
          <p className="product__description">
            Product Short Description.
            <br/>The quick brown fox jumps over the lazy dog.
          </p>
        </div>
      </li>
    </ul>
    <Advertisement className="rightSidebar__advertisement" img={advImage}/>
  </aside>
);

export default RightSidebar;