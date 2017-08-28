import {FETCH_SERVICES, FETCH_ENQUIRIES_TYPES} from './types';
import axios from 'axios';
import {TOKEN} from '../scripts/constants';

export function fetchServices() {
  const data = axios.get('http://504080.com/api/v1/services/categories', {
    headers: {
      Authorization: TOKEN
    }
  });

  return {type: FETCH_SERVICES, payload: data};
}