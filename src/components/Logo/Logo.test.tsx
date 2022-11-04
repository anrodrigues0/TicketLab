import {describe, test} from '@jest/globals';
import {render} from '@testing-library/react-native';

import {Logo} from './Logo';
import {CommonsStrings} from '../../common/strings';

describe('Component Logo', () => {
  test('Should show Logo on screen', () => {
    const {getByText} = render(<Logo />);

    expect(getByText(CommonsStrings.components.Logo.ticket)).toBeTruthy();
    expect(getByText(CommonsStrings.components.Logo.lab)).toBeTruthy();
  });
});
