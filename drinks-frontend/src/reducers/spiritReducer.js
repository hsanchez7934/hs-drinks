const spirit = (state = {}, action) => {
  switch (action.type) {
  case 'GET_SPIRIT':
    return action.spirit;
  default:
    return state;
  }
};

export default spirit;
