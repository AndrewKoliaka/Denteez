import React from 'react';

const ServiceItem = ({icon, title}) => (
  <a className="serviceCategory" href="#" alt={title}>
    <div className="serviceCategory__iconWrapper">
      <img className="serviceCategory__icon" src={icon}/>
    </div>
    <div className="serviceCategory__title">{title}</div>  
  </a>
  
);

export default ServiceItem;