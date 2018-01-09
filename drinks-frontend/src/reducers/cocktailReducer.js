const cocktail = (state = {}, action) => {
  switch (action.type) {
  case 'GET_COCKTAIL':
    return action.cocktail;
  default:
    return state;
  }
};

export default cocktail;
