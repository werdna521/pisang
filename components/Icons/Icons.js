import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { StyleSheet, View } from 'react-native';
import { colors, dimens, rounded } from '../../utils/variables';

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

export const BackIcon = ({ size, color, style }) => {
  return (
    <Feather name="chevron-left" size={size} color={color} style={style} />
  );
};

export const TemperatureIcon = ({ size, color, style }) => {
  return <Feather name="thermometer" size={size} color={color} style={style} />;
};

export const TimeIcon = ({ size, color, style }) => {
  return (
    <MaterialCommunityIcons
      name="clock-outline"
      size={size}
      color={color}
      style={style}
    />
  );
};

export const MotionIcon = ({ size, color, style }) => {
  return (
    <MaterialCommunityIcons
      name="motion-sensor"
      size={size}
      color={color}
      style={style}
    />
  );
};

export const SecurityIcon = ({ size, color, style }) => {
  return (
    <MaterialCommunityIcons
      name="security"
      size={size}
      color={color}
      style={style}
    />
  );
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
      icon={TemperatureIcon(coloredIcons(size))}
    />
  );
};

export const SecurityColored = ({ size, style }) => {
  return (
    <ColoredIcon
      size={size}
      style={style}
      icon={SecurityIcon(coloredIcons(size))}
    />
  );
};

export const TimeColored = ({ size, style }) => {
  return (
    <ColoredIcon
      size={size}
      style={style}
      icon={TimeIcon(coloredIcons(size))}
    />
  );
};

export const MotionColored = ({ size, style }) => {
  return (
    <ColoredIcon
      size={size}
      style={style}
      icon={MotionIcon(coloredIcons(size))}
    />
  );
};

const coloredIcons = (size) => ({
  color: colors.white,
  size,
});

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
