const bottle = (state = {}, action) => {
  switch (action.type) {
  case 'GET_BOTTLE':
    return action.bottle;
  default:
    return state;
  }
};

export default bottle;
