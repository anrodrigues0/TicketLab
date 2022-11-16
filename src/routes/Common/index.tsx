import {createStackNavigator} from '@react-navigation/stack';

import {CommonStackNavigationType} from '../types/Common';
import {DetailTicket} from '@screens';

const {Group, Screen} = createStackNavigator<CommonStackNavigationType>();

export function Common() {
  return (
    <Group>
      <Screen name="DetailTicket" component={DetailTicket} />
    </Group>
  );
}
