/* eslint-disable */
import * as actions from '../actions';
import spiritsArray from '../../../drinksData/spirits.js';
import bottlesArray from '../../../drinksData/bottles.js';
import cocktailsArray from '../../../drinksData/cocktails.js';
import bottle from '../reducers/bottleReducer.js';
import bottlesBySpirit from '../reducers/bottlesBySpiritReducer.js';
import bottlesData from '../reducers/bottlesDataReducer.js';
import cocktail from '../reducers/cocktailReducer.js';
import cocktailsBySpirit from '../reducers/cocktailsBySpiritReducer.js';
import cocktailsData from '../reducers/cocktailsDataReducer.js';
import spirit from '../reducers/spiritReducer.js';
import spiritsData from '../reducers/spiritsDataReducer.js';

describe(`Reducers unit testing`, () => {
  let cocktailObject;
  let bottleObject;
  let spiritObject;
  let stateArray;
  let stateObject;

  beforeEach(() => {
    cocktailObject = cocktailsArray[0];
    bottleObject = bottlesArray[0];
    spiritObject = spiritsArray[0];
    stateArray = [];
    stateObject = {};
  });

  test(`bottle reducer should return action.bottle when type is GET_BOTTLE`, () => {
    expect(bottle(undefined, [])).toEqual(stateObject);

    const action = actions.getBottle(bottleObject);
    const expectation = action.bottle;

    expect(bottle(undefined, action)).toEqual(expectation);
  });

  test(`bottlesBySpirit reducer should return action.bottlesBySpiritArray when type is GET_BOTTLES_BY_SPIRIT`, () => {
    expect(bottlesBySpirit(undefined, [])).toEqual(stateArray);

    const action = actions.getBottlesBySpirit(bottlesArray);
    const expectation = action.bottlesBySpiritArray;

    expect(bottlesBySpirit(undefined, action)).toEqual(expectation);
  });

  test(`bottlesData reducer should return action.bottlesArray when type is GET_BOTTLES`, () => {
    expect(bottlesData(undefined, [])).toEqual(stateArray);

    const action = actions.getBottles(bottlesArray);
    const expectation = action.bottlesArray;

    expect(bottlesData(undefined, action)).toEqual(expectation);
  });

  test(`cocktail reducer should return action.cocktail when type is GET_COCKTAIL`, () => {
    expect(cocktail(undefined, {})).toEqual(stateObject);

    const action = actions.getCocktail(cocktailObject);
    const expectation = action.cocktail;

    expect(cocktail(undefined, action)).toEqual(expectation);
  });

  test(`cocktailsBySpirit reducer should return action.cocktailsBySpiritArray when type is GET_COCKTAILS_BY_SPIRIT`, () => {
    expect(cocktailsBySpirit(undefined, [])).toEqual(stateArray);

    const action = actions.getCocktailsBySpirit(cocktailsArray);
    const expectation = action.cocktailsBySpiritArray;

    expect(cocktailsBySpirit(undefined, action)).toEqual(expectation);
  });

  test(`cocktailsData reducer should return action.cocktailsArray when type is GET_COCKTAILS`, () => {
    expect(cocktailsData(undefined, [])).toEqual(stateArray);

    const action = actions.getCocktails(cocktailsArray);
    const expectation = action.cocktailsArray;

    expect(cocktailsData(undefined, action)).toEqual(expectation);
  });

  test(`spirit reducer should return action.spirit when type is GET_SPIRIT`, () => {
    expect(spirit(undefined, {})).toEqual(stateObject);

    const action = actions.getSpirit(spiritObject);
    const expectation = action.spirit;

    expect(spirit(undefined, action)).toEqual(expectation);
  });

  test(`spiritsData reducer should return action.spiritsArray when type is GET_SPIRITS`, () => {
    expect(spiritsData(undefined, [])).toEqual(stateArray);

    const action = actions.getSpirits(spiritsArray);
    const expectation = action.spiritsArray;

    expect(spiritsData(undefined, action)).toEqual(expectation);
  });

});
