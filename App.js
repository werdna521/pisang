import 'react-native-gesture-handler';
import React from 'react';
import RootNavigator from './navigators/RootNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import { colors } from './utils/variables';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={colors.secondary} barStyle="dark-content" />
      <RootNavigator />
    </NavigationContainer>
  );
};

export default App;
