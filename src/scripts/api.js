import {TOKEN} from './constants';
import axios from 'axios';

export function getCategories() {
  return axios.get('http://504080.com/api/v1/services/categories', {
    headers: {
      Authorization: TOKEN
    }
  });
}

export function getEnquiryTypes() {
  return axios.get('http://504080.com/api/v1/directories/enquiry-types', {
    headers: {
      Authorization: TOKEN
    }
  });
}

export function postSupport(data) {
  return axios.post('http://504080.com/api/v1/support', data);
}
