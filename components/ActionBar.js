import React from 'react';
import { View, StyleSheet, Image, TouchableNativeFeedback } from 'react-native';
import { connect } from 'react-redux';
import { addHomeDevice } from '../redux/actions/home.action';
import { rounded, sizes, icons, dimens, colors } from '../utils/variables';
import { AddIcon } from './Icons';

const ActionBar = ({ style, addDevice, photo }) => {
  return (
    <View style={{ ...styles.container, ...style }}>
      <Image
        style={styles.profileImage}
        borderRadius={rounded.full}
        resizeMode="cover"
        source={{ uri: photo }}
      />
      <TouchableNativeFeedback
        onPress={() => addDevice({ label: 'New Device', value: 'Off' }, 1)}
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

const mapStateToProps = (state) => {
  return {
    photo: state.session.userProfile.photo,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addDevice: (newDevice, index) => dispatch(addHomeDevice(newDevice, index)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ActionBar);
