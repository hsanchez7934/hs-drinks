const spiritsData = (state = [], action) => {
  switch (action.type) {
  case 'GET_SPIRITS':
    return action.spiritsArray;
  default:
    return state;
  }
};

export default spiritsData;
