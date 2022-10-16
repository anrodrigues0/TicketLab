import {storiesOf} from '@storybook/react-native';
import {ProgressBar} from './ProgressBar';

storiesOf('Component', module).add('ProgressBar', () => (
  <ProgressBar totalSteps={4} steps={3} color={'red'} />
));
