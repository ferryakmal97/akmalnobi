import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {ButtonTabNavigator} from '~components';
import {DashboardScreen, ListScreen, LoginScreen, SplashScreen} from '~screen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const hideHeader = {headerShown: false};

function TabStack() {
  return (
    <Tab.Navigator
      initialRouteName="Dashboard"
      tabBar={props => <ButtonTabNavigator {...props} />}>
      <Tab.Screen name="List" component={ListScreen} options={hideHeader} />
      <Tab.Screen
        name="Dashboard"
        component={DashboardScreen}
        options={hideHeader}
      />
    </Tab.Navigator>
  );
}

function Routes() {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Splash"
        component={SplashScreen}
        options={hideHeader}
      />
      <Stack.Screen name="Login" component={LoginScreen} options={hideHeader} />
      <Stack.Screen name="TabStack" component={TabStack} options={hideHeader} />
    </Stack.Navigator>
  );
}

export default Routes;
