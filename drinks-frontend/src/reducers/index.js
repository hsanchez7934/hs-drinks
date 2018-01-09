import { combineReducers } from 'redux';
import spiritsData from './spiritsDataReducer.js';
import cocktailsData from './cocktailsDataReducer.js';
import bottlesData from './bottlesDataReducer.js';

const rootReducer = combineReducers({
  spiritsData,
  cocktailsData,
  bottlesData
});

export default rootReducer;
