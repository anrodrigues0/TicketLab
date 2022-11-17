import {StackNavigationProp} from '@react-navigation/stack';

import {CoreTabNavigationType} from './Core';
import {CommonStackNavigationType} from './Common';
import {AuthStackNavigationType} from './Auth';

export type RootNavigationType = AuthStackNavigationType & {
  Core: CoreTabNavigationType;
  Common: CommonStackNavigationType;
};

export type RootNavigationWithNavigationRNProps = StackNavigationProp<
  CommonStackNavigationType & AuthStackNavigationType & CoreTabNavigationType
>;
