import React from 'react';
import { connect } from 'react-redux';
import { selectCountry, selectState } from './actions';

const CountrySelector = ({
  countries,
  selectedCountryId,
  states,
  selectedState,
  selectCountry,
}) => {

  const handleCountryChange = (e) => {
    const countryId = e.target.value;
    selectCountry(countryId);
  };

  return (
    <div>
      <label>Select a Country:</label>
      <select
        id="countrySelect"
        value={selectedCountryId}
        onChange={handleCountryChange}
      >
        <option value="">Select...</option>
        {countries.map((country) => (
          <option key={country.id} value={country.id}>
            {country.name}
          </option>
        ))}
      </select>

      <br />

      <label>Select a State:</label>
      <select
        id="stateSelect"
        value={selectedState}
        disabled={!selectedCountryId}
      >
        <option value="">Select...</option>
        {selectedCountryId &&
          states[selectedCountryId].map((state) => (
            <option key={state} value={state}>
              {state}
            </option>
          ))}
      </select>
    </div>
  );
};

const mapStateToProps = (state) => ({
  selectedCountryId: state.selectedCountryId,
  selectedState: state.selectedState,
});

const mapDispatchToProps = {
  selectCountry,
  selectState,
};

export default connect(mapStateToProps, mapDispatchToProps)(CountrySelector);
