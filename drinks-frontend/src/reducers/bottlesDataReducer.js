const bottlesData = (state = [], action) => {
  switch (action.type) {
  case 'GET_BOTTLES':
    return action.bottlesArray;
  default:
    return state;
  }
};

export default bottlesData;
