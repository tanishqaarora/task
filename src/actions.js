export const selectCountry = (countryId) => ({
    type: 'SELECT_COUNTRY',
    payload: countryId,
  });
  
export const selectState = (stateName) => ({
  type: 'SELECT_STATE',
  payload: stateName,
});
  