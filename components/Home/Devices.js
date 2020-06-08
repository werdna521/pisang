import React from 'react';
import { View, StyleSheet } from 'react-native';
import { dimens } from '../../utils/variables';
import { DeviceCard } from '../Cards/Cards';
import { getScreenWidth } from '../../utils/dimensions';

const parseData = (data) => {
  const arr = [];
  let innerArr = [];
  data.forEach((d, i) => {
    if (i % 2 === 0) {
      innerArr = [];
    }
    innerArr.push(d);
    if (i % 2 === 1) {
      arr.push(innerArr);
    }
  });
  if (innerArr.length === 1) {
    arr.push(innerArr);
  }
  return arr;
};

const Devices = ({ data, style }) => {
  const parsedData = parseData(data);

  return (
    <View style={{ ...styles.mainContainer, ...style }}>
      {parsedData.map((dt, i) => (
        <View key={`#outer-container-${i}`} style={styles.rowContainer}>
          {dt.map((d, idx) => (
            <DeviceCard
              key={`#inner-container-${idx}-${d.label}`}
              style={styles.card}
              data={d}
            />
          ))}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    marginBottom: dimens.d4,
  },
  rowContainer: {
    flexDirection: 'row',
  },
  card: {
    width: getScreenWidth() / 2 - 2 * dimens.d8,
    marginHorizontal: dimens.d2,
    marginVertical: dimens.d4,
  },
});

export default Devices;
