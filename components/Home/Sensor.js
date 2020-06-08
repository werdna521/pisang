import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { colors, dimens, texts } from '../../utils/variables';

const Sensor = ({ icon, value, style }) => {
  return (
    <View style={[style, styles.container]}>
      {icon}
      <Text style={styles.textStyle}>{value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textStyle: {
    fontFamily: 'Inter-Medium',
    fontSize: texts.xs,
    color: colors.darker,
    marginLeft: dimens.d8,
  },
});

export default Sensor;
