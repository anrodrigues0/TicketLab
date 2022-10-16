import {storiesOf, addDecorator} from '@storybook/react-native';
import {withBackgrounds} from '@storybook/addon-ondevice-backgrounds';

import {Logo} from './Logo';

addDecorator(withBackgrounds);

storiesOf('Component', module)
  .addParameters({
    backgrounds: [
      {name: 'dark', value: '#2a2a2a'},
      {name: 'gray', value: '#aeaeae'},
      {name: 'dark', value: 'rgba(72,43,123,1)'},
    ],
  })
  .add('Logo', () => <Logo />);
