import React from 'react';
import { View, StyleSheet, Image, TouchableNativeFeedback } from 'react-native';
import { rounded, sizes, icons, dimens, colors } from '../utils/variables';
import { AddIcon } from './Icons';

const ActionBar = ({ style }) => {
  return (
    <View style={{ ...styles.container, ...style }}>
      <Image
        style={styles.profileImage}
        borderRadius={rounded.full}
        resizeMode="cover"
        source={require('../assets/img/banana.jpg')}
      />
      <TouchableNativeFeedback
        onPress={() => console.log('hebat')}
        background={TouchableNativeFeedback.Ripple(colors.muted, true)}
        useForeground
      >
        <View style={styles.addIcon}>
          <AddIcon size={icons.md} />
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  profileImage: {
    width: sizes.profile,
    height: sizes.profile,
  },
  addIcon: {
    padding: dimens.d2,
    borderRadius: rounded.full,
  },
});

export default ActionBar;
