import React from 'react';
import TabNavigator from './TabNavigator';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Tab" component={TabNavigator} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
