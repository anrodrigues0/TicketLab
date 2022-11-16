import {StackNavigationProp} from '@react-navigation/stack';

import {CoreTabNavigationType} from './Core';
import {CommonStackNavigationType} from './Common';
import {AuthStackNavigationType} from './Auth';

export type RootNavigationType = CommonStackNavigationType &
  AuthStackNavigationType & {
    Core: CoreTabNavigationType;
  };

export type RootNavigationWithNavigationRNProps = StackNavigationProp<
  CommonStackNavigationType & AuthStackNavigationType & CoreTabNavigationType
>;
