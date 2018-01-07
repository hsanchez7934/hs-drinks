import { combineReducers } from 'redux';
import spiritsData from './spiritsDataReducer.js';
import cocktailsData from './cocktailsDataReducer.js';

const rootReducer = combineReducers({
  spiritsData,
  cocktailsData
});

export default rootReducer;
