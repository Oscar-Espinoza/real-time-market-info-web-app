import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  currencies: [],
};

export const fetchCurrencies = createAsyncThunk('currencies/fetchCurrencies', async () => {
  const response = await fetch('https://api.coincap.io/v2/assets');
  const data = await response.json();
  return data.data;
});

const currenciesReducer = createSlice({
  name: 'currencies',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCurrencies.pending, (state) => ({ ...state, loading: true }))
      .addCase(fetchCurrencies.fulfilled, (state, action) => (
        { ...state, loading: false, currencies: action.payload }
      ))
      .addCase(fetchCurrencies.rejected, (state) => ({ ...state, loading: false }));
  },
});

export default currenciesReducer.reducer;
