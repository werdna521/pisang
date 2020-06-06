import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import MainCardList from './MainCardList';
import { GreatWallOfNavigation } from './GreatWallOfNavigation';

const DeviceList = ({ style, home }) => {
  const [_active, _setActive] = useState(0);

  return (
    <View style={style}>
      <GreatWallOfNavigation
        active={_active}
        locations={['Bedroom', 'Toilet']}
        onChange={(i) => _setActive(i)}
      />
      <MainCardList data={home ? home[_active] : []} />
    </View>
  );
};

const styles = StyleSheet.create({});

const mapStateToProps = (state) => {
  return {
    home: state.home,
  };
};

export default connect(mapStateToProps)(DeviceList);
