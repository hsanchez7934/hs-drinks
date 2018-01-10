import * as actions from '../actions';
import spiritsArray from '../../../drinksData/spirits.js';
import bottlesArray from '../../../drinksData/bottles.js';
import cocktailsArray from '../../../drinksData/cocktails.js';

describe('Actions unit testing', () => {
  let spiritObject;
  let bottleObject;
  let cocktailObject;
  beforeEach(() => {
    spiritObject = spiritsArray[0];
    bottleObject = bottlesArray[0];
    cocktailObject = cocktailsArray[0];
  });

  test(`getCocktailsBySpirit action creator should return
        correct paylod and action.type`, () => {
      const expectation = actions.getCocktailsBySpirit(cocktailsArray);

      expect(expectation.type).toEqual('GET_COCKTAILS_BY_SPIRIT');
      expect(expectation.cocktailsBySpiritArray.length).toEqual(127);
      //eslint-disable-next-line
      expect(expectation.cocktailsBySpiritArray[0].name).toEqual('ABSINTHE FRAPPE');
    });

  test(`getBottlesBySpirit action creator should return
        correct paylod and action.type`, () => {
      const expectation = actions.getBottlesBySpirit(bottlesArray);

      expect(expectation.type).toEqual('GET_BOTTLES_BY_SPIRIT');
      expect(expectation.bottlesBySpiritArray.length).toEqual(92);
      //eslint-disable-next-line
      expect(expectation.bottlesBySpiritArray[0].name).toEqual('LEOPOLD BROS. ABSINTHE VERTE');
    });

  test(`getSpirits action creator should return
        correct paylod and action.type`, () => {

      const expectation = actions.getSpirits(spiritsArray);

      expect(expectation.type).toEqual('GET_SPIRITS');
      expect(expectation.spiritsArray.length).toEqual(16);
      expect(expectation.spiritsArray[0].spirit).toEqual('ABSINTHE');
    });

  test(`getCocktails action creator should return
        correct paylod and action.type`, () => {
      const expectation = actions.getCocktails(cocktailsArray);

      expect(expectation.type).toEqual('GET_COCKTAILS');
      expect(expectation.cocktailsArray.length).toEqual(127);
      expect(expectation.cocktailsArray[0].name).toEqual('ABSINTHE FRAPPE');
    });

  test(`getBottles action creator should return
        correct paylod and action.type`, () => {
      const expectation = actions.getBottles(bottlesArray);

      expect(expectation.type).toEqual('GET_BOTTLES');
      expect(expectation.bottlesArray.length).toEqual(92);
      //eslint-disable-next-line
      expect(expectation.bottlesArray[0].name).toEqual('LEOPOLD BROS. ABSINTHE VERTE');
    });

  test(`getBottle action creator should return
        correct paylod and action.type`, () => {

      const expectation = actions.getBottle(bottleObject);

      expect(expectation.type).toEqual('GET_BOTTLE');
      expect(expectation.bottle.name).toEqual('LEOPOLD BROS. ABSINTHE VERTE');
      expect(expectation.bottle.spiritType).toEqual('ABSINTHE');
    });

  test(`getSpirit action creator should return
        correct paylod and action.type`, () => {

      const expectation = actions.getSpirit(spiritObject);

      expect(expectation.type).toEqual('GET_SPIRIT');
      expect(expectation.spirit.spirit).toEqual('ABSINTHE');
      //eslint-disable-next-line
      expect(expectation.spirit.imageURL).toEqual('/static/media/absinthe.21748362.png');
    });

  test(`getCocktail action creator should return
        correct paylod and action.type`, () => {

      const expectation = actions.getCocktail(cocktailObject);

      expect(expectation.type).toEqual('GET_COCKTAIL');
      expect(expectation.cocktail.name).toEqual('ABSINTHE FRAPPE');
      expect(expectation.cocktail.spiritType).toEqual('ABSINTHE');
    });

  test(`addFavorite action creator should return
        correct paylod and action.type`, () => {

      const expectation = actions.addFavorite(cocktailObject);

      expect(expectation.type).toEqual('ADD_FAVORITE');
      expect(expectation.favoriteToAdd.name).toEqual('ABSINTHE FRAPPE');
      expect(expectation.favoriteToAdd.spiritType).toEqual('ABSINTHE');
    });

  test(`getFavorites action creator should return
        correct paylod and action.type`, () => {
      const favoritesArray = [
        cocktailsArray[50],
        cocktailsArray[90],
        cocktailsArray[26]];

      const expectation = actions.getFavorites(favoritesArray);

      expect(expectation.type).toEqual('GET_FAVORITES');
      expect(expectation.favoritesArray[0].name).toEqual('BAMBOO #2');
      expect(expectation.favoritesArray[0].spiritType).toEqual('COGNAC');
    });

  test(`destroyFavorite action creator should return
        correct paylod and action.type`, () => {

      const expectation = actions.destroyFavorite(cocktailObject);

      expect(expectation.type).toEqual('DESTROY_FAVORITE');
      expect(expectation.favoriteToDestroy.name).toEqual('ABSINTHE FRAPPE');
      expect(expectation.favoriteToDestroy.spiritType).toEqual('ABSINTHE');
    });
});
