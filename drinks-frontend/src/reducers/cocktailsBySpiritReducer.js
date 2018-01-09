const cocktailsBySpirit = (state = [], action) => {
  switch (action.type) {
  case 'GET_COCKTAILS_BY_SPIRIT':
    return action.cocktailsBySpiritArray;
  default:
    return state;
  }
};

export default cocktailsBySpirit;
