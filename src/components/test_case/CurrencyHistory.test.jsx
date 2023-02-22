import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../redux/store';
import CurrencyHistory from '../CurrencyHistory/CurrencyHistory';

require('@testing-library/jest-dom');

describe('Test for CurrencyHistory component', () => {
  it('renders CurrencyHistory component without any error', () => {
    const output = render(<Provider store={store}><CurrencyHistory /></Provider>);
    expect(output).toMatchSnapshot();
  });
});
