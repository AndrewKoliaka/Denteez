import {combineReducers} from 'redux';
import services from './serviceReducer';

const rootReducer = combineReducers({services});

export default rootReducer;