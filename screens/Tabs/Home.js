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
          <HelloMessage style={styles.marginOnTop} name="Xiao Ming Huang" />
          <DeviceList
            style={styles.marginOnTop}
            data={[
              [
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
              ],
              [
                {
                  label: 'Ceiling Light',
                  value: 'On',
                },
                {
                  label: 'Washing Machine',
                  value: 'Off',
                },
              ],
            ]}
          />
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
