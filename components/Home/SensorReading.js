import React from 'react';
import { View, StyleSheet } from 'react-native';
import { TemperatureIcon } from '../Icons/Icons';
import Sensor from './Sensor';
import { colors, icons } from '../../utils/variables';

const iconOptions = { size: icons.sm, color: colors.darker };

const SensorReading = ({ style, sensors }) => {
  const renderAccordingly = (type, value) => {
    switch (type) {
      default:
        return <Sensor icon={TemperatureIcon(iconOptions)} value={value} />;
    }
  };

  return (
    <View style={[styles.container, style]}>
      {sensors.map(({ type, data }) =>
        renderAccordingly(type, data.join(' / ')),
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
  },
});

export default SensorReading;
