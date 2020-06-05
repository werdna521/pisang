import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { colors, dimens, fonts, texts } from '../utils/variables';

export const NavigationText = ({ text, active, onPress }) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <Text
        style={{
          ...styles.navigationText,
          ...(active ? styles.activeText : styles.idleText),
        }}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export const GreatWallOfNavigation = ({ locations, active = 0, onChange }) => {
  return (
    <View style={styles.greatWall}>
      {locations.map((l, i) => (
        <NavigationText
          key={`#great-wall-${l}-${i}`}
          active={i === active}
          text={l}
          onPress={() => onChange(i)}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  navigationText: {
    marginRight: dimens.d8,
    fontSize: texts.md,
  },
  activeText: {
    fontFamily: 'Inter-Medium',
    color: colors.darker,
  },
  idleText: {
    fontFamily: fonts.regular,
    color: colors.dark,
  },
  greatWall: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
