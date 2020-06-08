import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import Devices from './Devices';
import { GreatWallOfNavigation } from './GreatWallOfNavigation';

const DeviceList = ({ style, devices, locations }) => {
  const [_active, _setActive] = useState(0);

  return (
    <View style={style}>
      <GreatWallOfNavigation
        active={_active}
        locations={locations}
        onChange={(i) => _setActive(i)}
      />
      <Devices data={devices ? devices[_active] : []} />
    </View>
  );
};

const styles = StyleSheet.create({});

const mapStateToProps = (state) => {
  return {
    locations: state.home.data.map(({ location }) => location),
    devices: state.home.data.map(({ devices }) => devices),
  };
};

export default connect(mapStateToProps)(DeviceList);
