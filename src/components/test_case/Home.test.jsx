import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../redux/store';
import Home from '../Home/Home';

require('@testing-library/jest-dom');

describe('Test for Home component', () => {
  it('renders Home component without any error', () => {
    const output = render(<Provider store={store}><Home /></Provider>);
    expect(output).toMatchSnapshot();
  });
});
