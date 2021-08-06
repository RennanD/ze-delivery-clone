import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Home } from '../screens/Home';

const { Screen, Navigator } = createStackNavigator();

export function Routes(): JSX.Element {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Screen name="Home" component={Home} />
      </Navigator>
    </NavigationContainer>
  );
}

export default Routes;
