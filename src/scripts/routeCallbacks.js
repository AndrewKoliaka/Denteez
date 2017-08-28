import store from '../store.js';
import {fetchServices} from '../actions';

export function onServicesEnter() {
  store.dispatch(fetchServices());
}