import {storiesOf} from '@storybook/react-native';
import {action} from '@storybook/addon-actions';
import {Text} from 'react-native';
import {CleanButton} from './CleanButton';

const actions = {
  onPress: action('onPress'),
};

storiesOf('Component', module).add('CleanButton', () => (
  <CleanButton {...actions}>
    <Text>CleanButton</Text>
  </CleanButton>
));
