import {FETCH_SERVICES, ADD_INPUT_DATA, RESET_INPUTS_DATA, SUBMIT_FORM, SUBMITTED_FORM_POPUP_WAS_SHOWN} from './types';
import {getCategories} from '../scripts/api';

export function fetchServices() {
  const request = getCategories();

  return {type: FETCH_SERVICES, payload: request};
}

export function addInput(data) {
  return {type: ADD_INPUT_DATA, payload: data};
}

export function resetInputsData() {
  return {type: RESET_INPUTS_DATA};
}

export function submitForm(response) {
  return {type: SUBMIT_FORM, payload: response};
}

export function submittedFormPopupWasShown() {
  return {type: SUBMITTED_FORM_POPUP_WAS_SHOWN};
}