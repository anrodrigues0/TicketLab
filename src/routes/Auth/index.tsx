import {createStackNavigator} from '@react-navigation/stack';

import {AuthStackNavigationType} from '../types/Auth';

const {Group} = createStackNavigator<AuthStackNavigationType>();

export function Auth() {
  return <Group children={undefined} />;
}
