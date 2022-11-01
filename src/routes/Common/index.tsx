import {createStackNavigator} from '@react-navigation/stack';

import {CommonStackNavigationType} from '../types/Common';

const {Group} = createStackNavigator<CommonStackNavigationType>();

export function Common() {
  return <Group children={undefined} />;
}
