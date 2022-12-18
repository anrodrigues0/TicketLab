import {describe, test} from '@jest/globals';
import {ComponentWrapperProviderMock} from '@/__mocks__/ComponentWrapperProviderMock';

import {CircularButton} from './CircularButton';

describe('Circular Button Component', () => {
  test('Should change colors with pass props', () => {
    const {props} = ComponentWrapperProviderMock(
      <CircularButton colors="black" onPress={() => 'test'}>
        Test
      </CircularButton>,
    );

    const {colors, children} = props;
    expect(colors).toEqual('black');
    expect(children).toBeTruthy();
  });
  test('OnPress should be a function', () => {
    const {props} = ComponentWrapperProviderMock(
      <CircularButton colors="black" onPress={() => 'test'}>
        Test
      </CircularButton>,
    );

    const {onPress} = props;
    expect(typeof onPress === 'function').toBeTruthy();
  });
});
