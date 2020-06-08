import React from 'react';
import { View, StyleSheet, Image, TouchableNativeFeedback } from 'react-native';
import { connect } from 'react-redux';
import { rounded, sizes, icons, dimens, colors } from '../../utils/variables';
import { AddIcon, BackIcon } from '../Icons/Icons';
import { getScreenWidth } from '../../utils/dimensions';

const ActionBar = ({ style, photo, add, onAdd, pic, back, onBack }) => {
  return (
    <View style={[style, styles.container]}>
      {!pic && !back && <View style={styles.profileImage} />}
      {back && (
        <TouchableNativeFeedback
          onPress={onBack}
          background={TouchableNativeFeedback.Ripple(colors.muted, true)}
        >
          <View style={styles.icon}>
            <BackIcon size={icons.md} />
          </View>
        </TouchableNativeFeedback>
      )}
      {pic && !back && (
        <Image
          style={styles.profileImage}
          borderRadius={rounded.full}
          resizeMode="cover"
          source={{ uri: photo }}
        />
      )}
      {add && (
        <TouchableNativeFeedback
          onPress={onAdd}
          background={TouchableNativeFeedback.Ripple(colors.muted, true)}
        >
          <View style={styles.icon}>
            <AddIcon size={icons.md} />
          </View>
        </TouchableNativeFeedback>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.white,
    position: 'absolute',
    paddingVertical: dimens.d4,
    paddingHorizontal: dimens.d12,
    width: getScreenWidth(),
  },
  profileImage: {
    width: sizes.profile,
    height: sizes.profile,
  },
  icon: {
    borderRadius: rounded.full,
    alignItems: 'center',
    justifyContent: 'center',
    height: sizes.profile,
  },
});

const mapStateToProps = (state) => {
  return {
    photo: state.session.userProfile.photo,
  };
};

export default connect(mapStateToProps)(ActionBar);
