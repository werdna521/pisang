import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import Devices from './Devices';
import { GreatWallOfNavigation } from './GreatWallOfNavigation';

const DeviceList = ({ style, devices, sensors, locations }) => {
  const [_active, _setActive] = useState(0);

  return (
    <View style={style}>
      <GreatWallOfNavigation
        active={_active}
        locations={locations}
        onChange={(i) => _setActive(i)}
      />
      <Devices
        data={[
          ...(sensors ? sensors[_active] : []),
          ...(devices ? devices[_active] : []),
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

const mapStateToProps = (state) => {
  return {
    locations: state.home.map(({ location }) => location),
    devices: state.home.map(({ devices }) => devices.map((d) => d)),
    sensors: state.home.map(({ sensors }) => sensors.map((s) => s)),
  };
};

export default connect(mapStateToProps)(DeviceList);
