import {action} from '@storybook/addon-actions';
import {storiesOf} from '@storybook/react-native';
import {TextButton} from './TextButton';

const actions = {
  onPress: action('onPress'),
};

storiesOf('Component', module).add('TextButton', () => (
  <TextButton {...actions}>StoryBook</TextButton>
));
