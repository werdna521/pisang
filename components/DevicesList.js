import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import MainCardList from './MainCardList';
import { GreatWallOfNavigation } from './GreatWallOfNavigation';

const DeviceList = ({ data, style }) => {
  const [_active, _setActive] = useState(0);

  return (
    <View style={style}>
      <GreatWallOfNavigation
        active={_active}
        locations={['Bedroom', 'Toilet']}
        onChange={(i) => _setActive(i)}
      />
      <MainCardList data={data[_active]} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default DeviceList;
