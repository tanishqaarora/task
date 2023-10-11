const initialState = {
    selectedCountryId: null,
    selectedState: '',
  };
  
  export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SELECT_COUNTRY':
        return {
          ...state,
          selectedCountryId: action.payload,
          selectedState: '',
        };
  
      case 'SELECT_STATE':
        return {
          ...state,
          selectedState: action.payload,
        };
  
      default:
        return state;
    }
  };
  