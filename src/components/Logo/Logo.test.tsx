import {render} from '@testing-library/react-native';
import {Logo} from './Logo';

describe('Component Logo', () => {
  test('Test', () => {
    const {debug} = render(<Logo />);
    debug();
  });
});
