import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { colors, dimens } from '../../utils/variables';
import ActionBar from '../../components/ActionBar';
import HelloMessage from '../../components/HelloMessage';
import { getScreenHeight, getScreenWidth } from '../../utils/dimensions';
import DeviceList from '../../components/DevicesList';

const Home = () => {
  return (
    <View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <HelloMessage style={styles.marginOnTop} />
          <DeviceList style={styles.marginOnTop} />
        </View>
      </ScrollView>
      <ActionBar style={styles.actionBar} />
    </View>
  );
};

const styles = StyleSheet.create({
  actionBar: {
    position: 'absolute',
    paddingVertical: dimens.d4,
    paddingHorizontal: dimens.d12,
    width: getScreenWidth(),
  },
  scroll: {
    backgroundColor: colors.white,
  },
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: dimens.d12,
    paddingTop: dimens.d28,
    minHeight: getScreenHeight(),
  },
  marginOnTop: {
    marginTop: dimens.d8,
  },
  fullHeight: {
    height: getScreenHeight(),
  },
});

export default Home;
