import {describe, test} from '@jest/globals';
import {render} from '@testing-library/react-native';
import {NormalText} from './NormalText';

describe('Component NormalText', () => {
  test('Should show text on screen', () => {
    const {getByText} = render(<NormalText>Test</NormalText>);
    expect(getByText('Test')).toBeTruthy();
  });

  describe('NormalText Props', () => {
    test('Should change color text ', () => {
      const {container} = render(<NormalText color="white">Test</NormalText>);
      expect(container.props.color).toBeTruthy();
    });

    test('Should center text', () => {
      const {container} = render(<NormalText center>Test</NormalText>);
      expect(container.props.center).toBeTruthy();
    });

    test('Should change size text', () => {
      const {container} = render(<NormalText size="large">Test</NormalText>);
      expect(container.props.size).toBeTruthy();
    });

    test('Should make strong text', () => {
      const {container} = render(<NormalText strong>Test</NormalText>);
      expect(container.props.strong).toBeTruthy();
    });

    test('Should reive all props', () => {
      const {container} = render(
        <NormalText strong center color="white" size="large">
          Test
        </NormalText>,
      );

      expect(Object.keys(container.props).length).toBe(5);
    });
  });
});
