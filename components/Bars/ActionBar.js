import React from 'react';
import { View, StyleSheet, Image, TouchableNativeFeedback } from 'react-native';
import { connect } from 'react-redux';
import { rounded, sizes, icons, dimens, colors } from '../../utils/variables';
import { AddIcon } from '../Icons/Icons';

const ActionBar = ({ style, photo, add, onAdd, pic, back }) => {
  return (
    <View style={{ ...styles.container, ...style }}>
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
          useForeground
        >
          <View style={styles.addIcon}>
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

const mapStateToProps = (state) => {
  return {
    photo: state.session.userProfile.photo,
  };
};

export default connect(mapStateToProps)(ActionBar);
