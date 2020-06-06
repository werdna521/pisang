import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { colors, dimens } from '../utils/variables';
import { useNavigation } from '@react-navigation/native';
import {
  GoogleSignin,
  statusCodes,
  GoogleSigninButton,
} from '@react-native-community/google-signin';

const SignIn = () => {
  const navigation = useNavigation();

  useEffect(() => {
    GoogleSignin.configure();
  }, []);

  const signInWithGoogle = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log('hi');
      console.log(JSON.stringify(userInfo));
    } catch (error) {
      console.log(JSON.stringify(error));
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log('canceled');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log('fail on progress');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log('play service not available');
      } else {
        console.log('ngeri');
      }
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
