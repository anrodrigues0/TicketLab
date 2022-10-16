import {theme} from '@/themes/themes';
import {action} from '@storybook/addon-actions';
import {color, withKnobs, boolean} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react-native';
import {Title} from './Titles';

const actions = {
  onPress: action('onPress'),
};

storiesOf('Component', module)
  .addDecorator(withKnobs)
  .add('Title', () => {
    return (
      <Title
        color={color('color', theme.colors.black, 'COLORS')}
        seeAllButton={boolean('seeAllButton', false, 'SEE ALL BUTTON')}
        {...actions}>
        Storybook Title
      </Title>
    );
  });
