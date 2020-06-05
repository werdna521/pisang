import 'react-native-gesture-handler';
import React from 'react';
import RootNavigator from './navigators/RootNavigator';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar hidden />
      <RootNavigator />
    </NavigationContainer>
  );
};

export default App;
