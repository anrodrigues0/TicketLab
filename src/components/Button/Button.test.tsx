import Icon from 'react-native-vector-icons/Ionicons';

import {describe, test} from '@jest/globals';
import {ComponentWrapperProviderMock} from '@/__mocks__/ComponentWrapperProviderMock';

import {Button} from './Button';

describe('Button Component', () => {
  test('Should color and size button', () => {
    const {props} = ComponentWrapperProviderMock(
      <Button size="large" colors="error">
        Test
      </Button>,
    );

    const {size, colors, children} = props;

    expect(size).toBeTruthy();
    expect(colors).toBeTruthy();
    expect(children).toBeTruthy();
  });

  test('Should change color text and disabled bold text', () => {
    const {props} = ComponentWrapperProviderMock(
      <Button size="large" colors="error" textColor="black" disabledBoldText>
        Test
      </Button>,
    );

    const {textColor, disabledBoldText} = props;

    expect(textColor).toBeTruthy();
    expect(disabledBoldText).toBeTruthy();
  });

  test('Should passed onPress and iconRight', () => {
    const {props} = ComponentWrapperProviderMock(
      <Button
        size="large"
        colors="error"
        onPress={() => false}
        iconRight={<Icon name="home" size={20} />}>
        Test
      </Button>,
    );

    const {onPress, iconRight} = props;
    expect(typeof onPress === 'function').toBeTruthy();
    expect(iconRight).toBeTruthy();
  });
});
