import 'react-native-gesture-handler';
import React from 'react';
import RootNavigator from './navigators/RootNavigator';
import store from './redux/store';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import { colors } from './utils/variables';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar backgroundColor={colors.white} barStyle="dark-content" />
        <RootNavigator />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
