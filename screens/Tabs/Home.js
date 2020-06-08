import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { colors, dimens } from '../../utils/variables';
import ActionBar from '../../components/Bars/ActionBar';
import HelloMessage from '../../components/Home/HelloMessage';
import { getScreenHeight } from '../../utils/dimensions';
import HomeEnvironment from '../../components/Home/HomeEnvironment';
import SensorReading from '../../components/Home/SensorReading';

const Home = () => {
  return (
    <View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <HelloMessage />
          <SensorReading
            style={styles.marginOnTop}
            sensors={[{ type: 'Ngeri', data: ['12 C', '77%'] }]}
          />
          <HomeEnvironment style={styles.marginWideOnTop} />
        </View>
      </ScrollView>
      <ActionBar onAdd={() => alert('ok')} add pic />
    </View>
  );
};

const styles = StyleSheet.create({
  scroll: {
    backgroundColor: colors.white,
  },
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: dimens.d12,
    paddingTop: dimens.d36,
    minHeight: getScreenHeight() + 72,
  },
  marginOnTop: {
    marginTop: dimens.d8,
  },
  marginWideOnTop: {
    marginTop: dimens.d28,
  },
});

export default Home;
