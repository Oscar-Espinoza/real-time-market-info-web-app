import { configureStore } from '@reduxjs/toolkit';
import currenciesReducer from './Currencies/currencies';

const store = configureStore({
  reducer: {
    currencies: currenciesReducer,
  },
});

export default store;
