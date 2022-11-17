import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import {Core} from './Core';
import {Common} from './Common';
import {Auth} from './Auth';
import {RootNavigationType} from './types';

const {Navigator, Screen} = createStackNavigator<RootNavigationType>();

export function Routes() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{headerShown: false}} initialRouteName="Core">
        <Screen name="Core" component={Core} />
        <Screen name="Common" component={Common} />
        {(() => Auth())()}
      </Navigator>
    </NavigationContainer>
  );
}
