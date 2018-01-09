import { combineReducers } from 'redux';
import spiritsData from './spiritsDataReducer.js';
import cocktailsData from './cocktailsDataReducer.js';
import bottlesData from './bottlesDataReducer.js';
import bottle from './bottleReducer.js';
import spirit from './spiritReducer.js';
import cocktail from './cocktailReducer.js';
import cocktailsBySpirit from './cocktailsBySpiritReducer.js';
import bottlesBySpirit from './bottlesBySpiritReducer.js';

const rootReducer = combineReducers({
  spiritsData,
  cocktailsData,
  bottlesData,
  spirit,
  cocktail,
  bottle,
  cocktailsBySpirit,
  bottlesBySpirit
});

export default rootReducer;
