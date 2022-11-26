import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home, Profile, Cart} from '@screens';
import {TabButton} from '@/components';

import {CoreTabNavigationType} from '../types/Core';

const {Navigator, Screen} = createBottomTabNavigator<CoreTabNavigationType>();

export function Core() {
  return (
    <Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
      <Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarButton: (props) => (
            <TabButton nameIcon="shopping-cart" {...props} />
          ),
        }}
      />
      <Screen
        name="Home"
        component={Home}
        options={{
          tabBarButton: (props) => <TabButton nameIcon="home" {...props} />,
        }}
      />
      <Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarButton: (props) => <TabButton nameIcon="user" {...props} />,
        }}
      />
    </Navigator>
  );
}
