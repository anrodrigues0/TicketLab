import {createStackNavigator} from '@react-navigation/stack';

import {CommonStackNavigationType} from '../types/Common';
import {DetailTicket} from '@screens';

const {Navigator, Screen} = createStackNavigator<CommonStackNavigationType>();

export function Common() {
  return (
    <Navigator screenOptions={{headerShown: false}}>
      <Screen
        name="DetailTicket"
        component={DetailTicket}
        options={{presentation: 'modal'}}
      />
    </Navigator>
  );
}
