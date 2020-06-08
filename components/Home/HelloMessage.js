import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { colors, fonts, texts } from '../../utils/variables';

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
    fontSize: texts.xl,
  },
  name: {
    color: colors.primary,
    fontSize: texts.xl3,
  },
});

const mapStateToProps = (state) => {
  return {
    name: state.session.userProfile.name,
  };
};

export default connect(mapStateToProps)(HelloMessage);
