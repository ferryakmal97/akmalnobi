import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {DashboardScreen, DepositScreen, ListScreen, LoginScreen} from '~screen';

const Stack = createNativeStackNavigator();

const hideHeader = {headerShown: false};

function Routes() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Dashboard"
        component={DashboardScreen}
        options={hideHeader}
      />
      <Stack.Screen
        name="Deposit"
        component={DepositScreen}
        options={hideHeader}
      />
      <Stack.Screen name="List" component={ListScreen} options={hideHeader} />
      <Stack.Screen name="Login" component={LoginScreen} options={hideHeader} />
    </Stack.Navigator>
  );
}

export default Routes;
