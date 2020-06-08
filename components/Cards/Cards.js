import React, { useState } from 'react';
import { View, StyleSheet, Text, Switch } from 'react-native';
import {
  colors,
  dimens,
  rounded,
  texts,
  icons,
  fonts,
} from '../../utils/variables';
import { BoxShadow } from 'react-native-shadow';
import { getScreenWidth } from '../../utils/dimensions';
import { TemperatureColored } from '../Icons/Icons';

export const DeviceCard = ({ style = {}, data }) => {
  const [_switchState, _setSwitchState] = useState(false);
  const [_height, _setHeight] = useState(0);

  return (
    <BoxShadow setting={{ ...cardShadowSettings(_height), style }}>
      <View
        onLayout={(event) => {
          const { height } = event.nativeEvent.layout;
          _setHeight(height);
        }}
        style={{ ...styles.cardContainer, ...style }}
      >
        <TemperatureColored size={icons.sm} />
        <Text style={styles.cardLabel}>{data.label}</Text>
        <View style={styles.bottomContainer}>
          <Text style={styles.cardValue}>{data.value}</Text>
          <Switch
            style={styles.switch}
            value={_switchState}
            thumbColor={colors.white}
            trackColor={{
              true: colors.primary,
              false: colors.disabled,
            }}
            onValueChange={(value) => {
              _setSwitchState((prevState) => !prevState);
            }}
          />
        </View>
      </View>
    </BoxShadow>
  );
};

const cardShadowSettings = (height) => ({
  width: getScreenWidth() / 2 - 2 * dimens.d6,
  height,
  color: colors.black,
  opacity: 0.04,
  border: 32,
  radius: rounded.none,
  x: 0,
  y: 24,
});

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: colors.white,
    borderRadius: rounded.md,
    padding: dimens.d6,
    flexDirection: 'column',
  },
  cardLabel: {
    fontFamily: fonts.regular,
    color: colors.dark,
    fontSize: texts.xs,
  },
  bottomContainer: {
    marginTop: dimens.d8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardValue: {
    fontFamily: fonts.bold,
    color: colors.dark,
    fontSize: texts.xs,
  },
  switch: {
    transform: [
      {
        scaleX: 1.1,
      },
      {
        scaleY: 1.1,
      },
    ],
  },
});
