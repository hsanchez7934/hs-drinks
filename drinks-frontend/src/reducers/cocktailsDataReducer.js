const cocktailsData = (state = [], action) => {
  switch (action.type) {
  case 'GET_COCKTAILS':
    return action.cocktailsArray;
  default:
    return state;
  }
};

export default cocktailsData;
