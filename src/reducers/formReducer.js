import {
  ADD_INPUT_DATA,
  RESET_INPUTS_DATA,
  SUBMIT_FORM,
  SUBMITTED_FORM_POPUP_WAS_SHOWN,
  ADD_PHOTO,
  REMOVE_PHOTO
} from '../actions/types';

const initialState = {
  inputsData: {
    // department equals 1 by default because data property in response from
    // /directories request doesn't have id property
    department: 1,

    enquiry_type: null,
    user_name: null,
    email: null,
    subject: null,
    description: null,
    file: []
  },
  isSubmitted: false,
  success: false,
  error: false
};

export default function formReducer(state = initialState, action) {
  let updatedInputsData;

  switch (action.type) {
    case ADD_INPUT_DATA:
      if (state.inputsData.hasOwnProperty(action.payload.name)) {
        updatedInputsData = Object.assign({}, state.inputsData);
        updatedInputsData[action.payload.name] = action.payload.value;
        return Object.assign({}, state, {inputsData: updatedInputsData});
      } else {
        return state;
      }
    case ADD_PHOTO:
      if (action.payload instanceof File) {
        let photos = [
          ...state.inputsData.file,
          action.payload
        ];

        updatedInputsData = Object.assign({}, state.inputsData, {file: photos});
        return Object.assign({}, state, {inputsData: updatedInputsData});
      } else {
        return state;
      }

    case REMOVE_PHOTO:
      let index = state
        .inputsData
        .file
        .indexOf(action.payload);

      if (index > -1) {
        let photos = [
          ...state.inputsData.file.slice(0, index),
          ...state.inputsData.file.slice(index + 1)
        ];

        updatedInputsData = Object.assign({}, state.inputsData, {file: photos});

        return Object.assign({}, state, {inputsData: updatedInputsData});
      } else {
        return state;
      }
    case RESET_INPUTS_DATA:
      return initialState;
    case SUBMIT_FORM:

      if (action.payload.success) {
        return Object.assign({}, state, {
          isSubmitted: true,
          success: action.payload.data
        });
      } else {
        return Object.assign({}, state, {
          isSubmitted: true,
          error: action.payload.error
        });
      }
    case SUBMITTED_FORM_POPUP_WAS_SHOWN:
      return Object.assign({}, state, {
        isSubmitted: false,
        success: false,
        error: false
      });
    default:
      return state;
  }
}