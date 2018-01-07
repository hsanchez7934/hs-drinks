export const getSpirits = spiritsArray => ({
  type: 'GET_SPIRITS',
  spiritsArray
});

export const getCocktails = cocktailsArray => ({
  type: 'GET_COCKTAILS',
  cocktailsArray
});


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
