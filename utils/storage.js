import AsyncStorage from '@react-native-community/async-storage';

const SESSION = '@session';

export default {
  async storeSession(session) {
    await AsyncStorage.setItem(SESSION, JSON.stringify(session));
  },
  async retrieveSession() {
    return JSON.parse(await AsyncStorage.getItem(SESSION));
  },
};
