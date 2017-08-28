import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import ServiceItem from './serviceItem';
import ErrorPopup from './errorPopup';

class ServiceList extends Component {
  static PropTypes = {
    services: PropTypes.array,
    success: PropTypes.bool.isRequired,
    error: PropTypes.object
  }

  render() {
    return this.props.error 
          ? <ErrorPopup error={this.props.error}/> 
          : <div className="serviceDirectory__list">
            {
              this.props.services.map(item => (
                <ServiceItem key={item.id} icon={item.icon} title={item.title}/>
              ))
            }
            </div>
  }
}

const mapStateToProps = state => ({
  services: state.services.servicesArray,
  success: state.services.success,
  error: state.services.error
});

export default connect(mapStateToProps)(ServiceList);