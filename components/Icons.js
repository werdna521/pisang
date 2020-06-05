import React from 'react';
import Feather from 'react-native-vector-icons/Feather';

export const HomeIcon = ({ size, color, style }) => {
  return <Feather name="home" size={size} color={color} style={style} />;
};

export const AnalyticIcon = ({ size, color, style }) => {
  return <Feather name="repeat" size={size} color={color} style={style} />;
};

export const UsageIcon = ({ size, color, style }) => {
  return <Feather name="bar-chart-2" size={size} color={color} style={style} />;
};
