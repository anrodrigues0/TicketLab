import {describe, test} from '@jest/globals';
import {render} from '@testing-library/react-native';

import {Information} from './Information';

describe('Component Information', () => {
  test('Should truth content and label props', () => {
    const {getByText} = render(<Information content="Content" label="Label" />);
    expect(getByText('Label:')).toBeTruthy();
    expect(getByText('Content')).toBeTruthy();
  });

  test('Should change large text toBe true', () => {
    const {container} = render(
      <Information content="Content" label="Label" large />,
    );
    expect(container.props.large).toBeTruthy();
  });
});
