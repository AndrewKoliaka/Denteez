import {FETCH_SERVICES} from '../actions/types';

const initialState = {
  servicesArray: [],
  success: false,
  error: null
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_SERVICES:
      return Object.assign({}, state, {
        servicesArray: action.payload.data.success
          ? action.payload.data.data
          : [],
        success: action.payload.data.success,
        error: action.payload.data.error
          ? action.payload.data.error
          : null
      });
    default:
      return state;
  }
}