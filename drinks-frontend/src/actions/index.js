export const getCocktailsBySpirit = cocktailsBySpiritArray => ({
  type: 'GET_COCKTAILS_BY_SPIRIT',
  cocktailsBySpiritArray
});

export const getBottlesBySpirit = bottlesBySpiritArray => ({
  type: 'GET_BOTTLES_BY_SPIRIT',
  bottlesBySpiritArray
});

export const getSpirits = spiritsArray => ({
  type: 'GET_SPIRITS',
  spiritsArray
});

export const getCocktails = cocktailsArray => ({
  type: 'GET_COCKTAILS',
  cocktailsArray
});

export const getBottles = bottlesArray => ({
  type: 'GET_BOTTLES',
  bottlesArray
});

export const getBottle = bottle => ({
  type: 'GET_BOTTLE',
  bottle
});

export const getSpirit = spirit => ({
  type: 'GET_SPIRIT',
  spirit
});

export const getCocktail = cocktail => ({
  type: 'GET_COCKTAIL',
  cocktail
});

export const addFavorite = favoriteToAdd => ({
  type: 'ADD_FAVORITE',
  favoriteToAdd
});

export const getFavorites = favoritesArray => ({
  type: 'GET_FAVORITES',
  favoritesArray
});

export const destroyFavorite = favoriteToDestroy => ({
  type: 'DESTROY_FAVORITE',
  favoriteToDestroy
});

export const postFavoriteToDB = (favorite) => dispatch => {
  fetch(`api/v1/favorites`, {
    method: 'POST',
    accept: 'application/json',
    body: JSON.stringify(favorite)
  })
    .then(response => response.json())
    .then(parsedResponse => dispatch(addFavorite(parsedResponse)))
    //eslint-disable-next-line
    .catch(error => console.log(`Error has occured: ${error}`));
};

export const destroyFavoriteFromDB = (id) => dispatch => {
  fetch(`api/v1/favorites/${id}`, {
    method: 'DELETE'
  })
    .then(response => response.json())
    .then(parsedResponse => dispatch(destroyFavorite(parsedResponse)))
    //eslint-disable-next-line
    .catch(error => console.log(`Error has occured: ${error}`));
};

export const fetchFavorites = () => dispatch => {
  fetch(`api/v1/favorites`)
    .then(response => response.json())
    .then(parsedResponse => dispatch(getFavorites(parsedResponse)))
    //eslint-disable-next-line
    .catch(error => console.log(`Error has occured: ${error}`));
};


export const fetchCocktailsBySpirit = (spiritID) => dispatch => {
  fetch(`api/v1/spirits/${spiritID}/cocktails`)
    .then(response => response.json())
    .then(parsedResponse => dispatch(getCocktailsBySpirit(parsedResponse)))
    //eslint-disable-next-line
    .catch(error => console.log(`Error has occured: ${error}`));
};

export const fetchBottlesBySpirit = (spiritID) => dispatch => {
  fetch(`api/v1/spirits/${spiritID}/bottles`)
    .then(response => response.json())
    .then(parsedResponse => dispatch(getBottlesBySpirit(parsedResponse)))
    //eslint-disable-next-line
    .catch(error => console.log(`Error has occured: ${error}`));
};

export const fetchBottle = (id) => dispatch => {
  fetch(`api/v1/bottles/${id}`)
    .then(response => response.json())
    .then(parsedResponse => dispatch(getBottle(parsedResponse[0])))
    //eslint-disable-next-line
    .catch(error => console.log(`Error has occured: ${error}`));
};

export const fetchSpirit = (id) => dispatch => {
  fetch(`api/v1/spirits/${id}`)
    .then(response => response.json())
    .then(parsedResponse => dispatch(getSpirit(parsedResponse[0])))
    //eslint-disable-next-line
    .catch(error => console.log(`Error has occured: ${error}`));
};

export const fetchCocktail = (id) => dispatch => {
  fetch(`api/v1/cocktails/${id}`)
    .then(response => response.json())
    .then(parsedResponse => dispatch(getCocktail(parsedResponse[0])))
    //eslint-disable-next-line
    .catch(error => console.log(`Error has occured: ${error}`));
};

export const fetchBottles = () => dispatch => {
  fetch(`api/v1/bottles`)
    .then(response => response.json())
    .then(parsedResponse => dispatch(getBottles(parsedResponse)))
    //eslint-disable-next-line
    .catch(error => console.log(`Error has occured: ${error}`));
};

export const fetchCocktails = () => dispatch => {
  fetch(`api/v1/cocktails`)
    .then(response => response.json())
    .then(parsedResponse => dispatch(getCocktails(parsedResponse)))
    //eslint-disable-next-line
    .catch(error => console.log(`Error has occured: ${error}`));
};

export const fetchSpirits = () => dispatch => {
  fetch(`api/v1/spirits`)
    .then(response => response.json())
    .then(parsedResponse => dispatch(getSpirits(parsedResponse)))
    //eslint-disable-next-line
    .catch(error => console.log(`Error has occured: ${error}`));
};
