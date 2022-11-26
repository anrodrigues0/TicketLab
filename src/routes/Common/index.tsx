import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';

import {CommonStackNavigationType} from '../types/Common';
import {DetailTicket} from '@screens';

const {Screen, Group} = createStackNavigator<CommonStackNavigationType>();

export function Common() {
  return (
    <Group
      screenOptions={{
        presentation: 'modal',
        cardOverlayEnabled: true,
        cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
      }}>
      <Screen name="DetailTicket" component={DetailTicket} />
    </Group>
  );
}
