import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors, fonts, texts } from '../utils/variables';

const HelloMessage = ({ name, style = {} }) => {
  return (
    <View style={style}>
      <Text style={{ ...styles.commonFamily, ...styles.welcomeMessage }}>
        Welcome home,
      </Text>
      <Text style={{ ...styles.commonFamily, ...styles.name }}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  commonFamily: {
    fontFamily: fonts.regular,
  },
  welcomeMessage: {
    color: colors.darker,
    fontSize: texts.lg,
  },
  name: {
    color: colors.primary,
    fontSize: texts.xl,
  },
});

export default HelloMessage;
