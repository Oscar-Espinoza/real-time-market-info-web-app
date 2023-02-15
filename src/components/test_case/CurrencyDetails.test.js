import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import CurrencyDetails from '../CurrencyDetails/CurrencyDetails';

require('@testing-library/jest-dom');

const mockStore = configureMockStore();

describe('CurrencyDetails component', () => {
  it('renders currency details without any error', () => {
    const initialState = {
      currencies: {
        currencies: [
          {
            id: 'bitcoin',
            rank: '1',
            symbol: 'BTC',
            name: 'bitcoin',
            supply: '17193925.0000000000000000',
            maxSupply: '21000000.0000000000000000',
            marketCapUsd: '119179791817.6740161068269075',
            volumeUsd24Hr: '2928356777.6066665425687196',
            priceUsd: '6931.5058555666618359',
            changePercent24Hr: '-0.8101417214350335',
            vwap24Hr: '7175.0663247679233209',
          },
        ],
      },
    };
    const store = mockStore(initialState);

    const output = render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/bitcoin']}>
          <Routes>
            <Route path="/:currencyName" element={<CurrencyDetails views={1233} />} />
          </Routes>
        </MemoryRouter>
      </Provider>,
    );
    expect(output).toMatchSnapshot();
  });
});
