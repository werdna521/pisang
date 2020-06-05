import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import { StyleSheet, View } from 'react-native';
import { colors, dimens, rounded } from '../utils/variables';

export const HomeIcon = ({ size, color, style }) => {
  return <Feather name="home" size={size} color={color} style={style} />;
};

export const AnalyticIcon = ({ size, color, style }) => {
  return <Feather name="repeat" size={size} color={color} style={style} />;
};

export const UsageIcon = ({ size, color, style }) => {
  return <Feather name="bar-chart-2" size={size} color={color} style={style} />;
};

export const AddIcon = ({ size, color, style }) => {
  return <Feather name="plus" size={size} color={color} style={style} />;
};

export const TemperatureIcon = ({ size, color, style }) => {
  return <Feather name="thermometer" size={size} color={color} style={style} />;
};

const ColoredIcon = ({ size, style, icon }) => {
  return (
    <View
      style={{
        ...style,
        ...iconSizingMixin(size * 1.5),
        ...styles.circularContainer,
      }}
    >
      {icon}
    </View>
  );
};

export const TemperatureColored = ({ size, style }) => {
  return (
    <ColoredIcon
      size={size}
      style={style}
      icon={<TemperatureIcon size={size} color={colors.white} />}
    />
  );
};

const iconSizingMixin = (size) => ({
  width: size,
  height: size,
});

const styles = StyleSheet.create({
  circularContainer: {
    borderRadius: rounded.full,
    padding: dimens.d2,
    backgroundColor: colors.primaryLight,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
