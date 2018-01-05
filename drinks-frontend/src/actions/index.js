export const getSpirits = spiritsArray => ({
  type: 'GET_SPIRITS',
  spiritsArray
});

export const fetchSpirits = () => dispatch => {
  fetch(`api/v1/spirits`)
    .then(response => response.json())
    .then(parsedResponse => dispatch(getSpirits(parsedResponse)))
    .catch(error => console.log(`Error has occured: ${error}`));
};
