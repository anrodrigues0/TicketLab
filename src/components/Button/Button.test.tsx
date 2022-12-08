import Icon from 'react-native-vector-icons/Ionicons';
import {describe, test} from '@jest/globals';
import {render} from '@testing-library/react-native';

import {Button} from './Button';
import {Providers} from '../../provider';

describe('Button Component', () => {
  test('Should color and size button', () => {
    const {container} = render(
      <Providers>
        <Button size="large" colors="error">
          Test
        </Button>
      </Providers>,
    );

    const {size, colors, children} = container.props.children.props;

    expect(size).toBeTruthy();
    expect(colors).toBeTruthy();
    expect(children).toBeTruthy();
  });

  test('Should change color text and disabled bold text', () => {
    const {container} = render(
      <Providers>
        <Button size="large" colors="error" textColor="black" disabledBoldText>
          Test
        </Button>
      </Providers>,
    );

    const {textColor, disabledBoldText} = container.props.children.props;

    expect(textColor).toBeTruthy();
    expect(disabledBoldText).toBeTruthy();
  });

  test('Should passed onPress and iconRight', () => {
    const {container} = render(
      <Providers>
        <Button
          size="large"
          colors="error"
          onPress={() => false}
          iconRight={<Icon name="home" size={20} />}>
          Test
        </Button>
      </Providers>,
    );

    const {onPress, iconRight} = container.props.children.props;
    expect(typeof onPress === 'function').toBeTruthy();
    expect(iconRight).toBeTruthy();
  });
});
