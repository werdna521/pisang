/**
 * @format
 */

import { AppRegistry } from 'react-native';
import messaging from '@react-native-firebase/messaging';
import App from './App';
import { name as appName } from './app.json';
import Amplify from 'aws-amplify';
import config from './aws-exports';
Amplify.configure(config);

messaging().setBackgroundMessageHandler(async (remoteMessage) => {
  console.log('Message handled in the background!', remoteMessage);
});

messaging()
  .subscribeToTopic('pisang')
  .then(() => console.log('Subscribed to topic!'));


AppRegistry.registerComponent(appName, () => App);
