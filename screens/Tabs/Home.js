import React from 'react';
import { View, StyleSheet } from 'react-native';
import { colors, dimens } from '../../utils/variables';
import ActionBar from '../../components/ActionBar';
import HelloMessage from '../../components/HelloMessage';
import MainCardList from '../../components/MainCardList';

const Home = () => {
  return (
    <View style={styles.container}>
      <ActionBar />
      <HelloMessage style={styles.helloMessage} name="Xiao Ming Huang" />
      <MainCardList
        data={[
          {
            label: 'Temp. / Humidity',
            value: '28°C / 77%',
          },
          {
            label: 'XN Air Conditioner',
            value: '28°C',
          },
          {
            label: 'Standing Fan',
            value: 'Off',
          },
          {
            label: 'Desk Light',
            value: 'Off',
          },
          {
            label: 'Ceiling Light',
            value: 'On',
          },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondary,
    paddingHorizontal: dimens.d12,
    paddingTop: dimens.d8,
  },
  helloMessage: {
    marginTop: dimens.d8,
  },
});

export default Home;
