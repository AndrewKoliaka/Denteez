import {combineReducers} from 'redux';
import services from './serviceReducer';
import form from './formReducer';

const rootReducer = combineReducers({services, form});

export default rootReducer;