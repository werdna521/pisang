import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { colors, dimens } from '../utils/variables';
import { useNavigation } from '@react-navigation/native';
import {
  GoogleSignin,
  statusCodes,
  GoogleSigninButton,
} from '@react-native-community/google-signin';
import { API } from 'aws-amplify';

const SignIn = () => {
  const navigation = useNavigation();

  useEffect(() => {
    GoogleSignin.configure();

    // TODO refactor and extract code to repositories
    // this is the code to fetch temperature and humidity sensor via api
    // API.get('api4d260a1f', '/api/temp-hum/get-latest')
    //   .then(result => console.log(result))
    //   .catch(err => console.log(err));
  }, []);

  const signInWithGoogle = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
    } catch (error) {
      console.log(error);
    }
    navigation.navigate('Tab');
  };

  return (
    <View style={styles.container}>
      <View style={styles.googleButton}>
        <GoogleSigninButton onPress={signInWithGoogle} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  googleButton: {
    position: 'absolute',
    alignItems: 'center',
    bottom: dimens.d8,
  },
});

export default SignIn;
