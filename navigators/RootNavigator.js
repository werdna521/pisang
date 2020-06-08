import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import TabNavigator from './TabNavigator';
import SignIn from '../screens/SignIn';
import { connect } from 'react-redux';
import { createStackNavigator } from '@react-navigation/stack';
import { storeSession } from '../redux/actions/session.action';
import storage from '../utils/storage';

const Stack = createStackNavigator();

const RootNavigator = ({ authenticated, saveSession }) => {
  const [_loading, _setLoading] = useState(true);

  useEffect(() => {
    const bootstrapAsync = async () => {
      const session = await storage.retrieveSession();
      session && saveSession({ ...session.userProfile });
      _setLoading(false);
    };
    bootstrapAsync().then();
  }, []);

  if (_loading) {
    return <View />;
  }

  return (
    <Stack.Navigator headerMode="none">
      {!authenticated ? (
        <Stack.Screen name="SignUp" component={SignIn} />
      ) : (
        <Stack.Screen name="Tab" component={TabNavigator} />
      )}
    </Stack.Navigator>
  );
};

const mapStateToProps = (state) => {
  return {
    authenticated: state.session.authenticated,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    saveSession: (userProfile) => dispatch(storeSession(userProfile)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RootNavigator);
