import Constants from 'expo-constants';
import { Dimensions } from 'react-native';

const dimensions = Dimensions.get('window');

export const getStatusBarHeight = () => Constants.statusBarHeight;

export const getScreenWidth = () => dimensions.width;

export const getScreenHeight = () => dimensions.height;
