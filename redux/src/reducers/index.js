import data from './data';
import modal from './modal';
import isLoading from './isLoading';
//import { combineReducers } from 'redux';
import { combineReducers } from 'redux-immutable';

const rootReducer = combineReducers({
  data,
  modal,
  isLoading
});

export default rootReducer;
