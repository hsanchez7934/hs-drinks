import { combineReducers } from 'redux';
import spiritsData from './spiritsDataReducer.js';

const rootReducer = combineReducers({
  spiritsData
});

export default rootReducer;
