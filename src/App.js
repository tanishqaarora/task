import React from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { rootReducer } from './reducers';
import { countries } from './countries';
import { states } from './states';
import CountrySelector from './CountrySelector';

const store = createStore(combineReducers({ rootReducer }));

const App = () => (
  <Provider store={store}>
    <div className="App">
      <CountrySelector countries={countries} states={states} />
    </div>
  </Provider>
);

export default App;
