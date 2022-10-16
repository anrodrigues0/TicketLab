import {theme} from '@/themes/themes';
import {storiesOf} from '@storybook/react-native';
import {withKnobs, color, boolean, select} from '@storybook/addon-knobs';

import {NormalText} from './NormalText';

storiesOf('Component', module)
  .addDecorator(withKnobs)
  .add('NormalText', () => {
    return (
      <NormalText
        color={color('color', theme.colors.black, 'CHANGE-COLORS')}
        center={boolean('center', false, 'CENTER-TEXT')}
        strong={boolean('bold', false, 'BOLD-TEXT')}
        size={select(
          'size',
          {large: 'large', small: 'small'},
          'large',
          'SIZE-SELECT',
        )}>
        NormalText
      </NormalText>
    );
  });
