import React, { useEffect } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { connect } from 'react-redux';
import { storeSession } from '../redux/actions/session.action';
import { colors, dimens } from '../utils/variables';
import {
  GoogleSignin,
  GoogleSigninButton,
} from '@react-native-community/google-signin';
import config from '../utils/config';
import storage from '../utils/storage';
import { getScreenWidth } from '../utils/dimensions';

const SignIn = ({ saveSession }) => {
  useEffect(() => {
    GoogleSignin.configure({
      webClientId: config.webClientId,
      offlineAccess: true,
      forceCodeForRefreshToken: true,
    });
  }, []);

  const signInWithGoogle = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();

      const {
        user: { email, photo, name },
      } = userInfo;

      const sessionPayload = { email, photo, name };
      saveSession(sessionPayload);
      await storage.storeSession({
        authenticated: true,
        userProfile: sessionPayload,
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        resizeMode={'center'}
        source={require('../assets/img/homethru.png')}
      />
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
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logo: {
    width: 0.75 * getScreenWidth(),
  },
  googleButton: {
    alignItems: 'center',
    marginBottom: dimens.d8,
  },
});

const mapDispatchToProps = (dispatch) => {
  return {
    saveSession: (userProfile) => dispatch(storeSession(userProfile)),
  };
};

export default connect(null, mapDispatchToProps)(SignIn);
