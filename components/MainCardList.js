import React from 'react';
import { View, StyleSheet } from 'react-native';
import { dimens } from '../utils/variables';
import { MainCard } from './Cards';

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
  if (innerArr.length > 0) {
    arr.push(innerArr);
  }
  return arr;
};

const MainCardList = ({ data }) => {
  const parsedData = parseData(data);

  return (
    <View>
      {parsedData.map((dt, i) => (
        <View key={`#outer-container-${i}`} style={styles.rowContainer}>
          {dt.map((d, idx) => (
            <MainCard
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
  rowContainer: {
    flexDirection: 'row',
  },
  card: {
    flexGrow: 1,
    marginHorizontal: dimens.d1,
    marginVertical: dimens.d4,
  },
});

export default MainCardList;
