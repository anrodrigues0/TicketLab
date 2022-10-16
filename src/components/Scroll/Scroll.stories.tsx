/* eslint-disable react-native/no-inline-styles */
import {storiesOf} from '@storybook/react-native';
import {Text, View} from 'react-native';
import {Scroll} from './Scroll';

const StorybookMock = () => {
  return (
    <View style={{alignItems: 'center', height: 1500}}>
      <Text style={{fontSize: 32}}>Storybook Scroll Mock</Text>
    </View>
  );
};
storiesOf('Component', module).add('Scroll', () => (
  <Scroll>
    <StorybookMock />
  </Scroll>
));
