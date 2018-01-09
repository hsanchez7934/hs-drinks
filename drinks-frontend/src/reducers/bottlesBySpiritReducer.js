const bottlesBySpirit = (state = [], action) => {
  switch (action.type) {
  case 'GET_BOTTLES_BY_SPIRIT':
    return action.bottlesBySpiritArray;
  default:
    return state;
  }
};

export default bottlesBySpirit;
