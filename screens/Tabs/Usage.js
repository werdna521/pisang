import React from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import { VictoryLabel, VictoryPie } from 'victory-native';
import { colors, dimens, texts } from '../../utils/variables';
import ActionBar from '../../components/Bars/ActionBar';
import { getScreenWidth } from '../../utils/dimensions';

const data = [{ y: 88 }, { y: 12 }];
const invertData = [...data].reverse();

const graphicColor = [colors.primary, colors.secondary];
const graphicInvertedColor = [colors.dark, colors.secondary];

const Usage = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Text style={styles.title}>Usage</Text>
        <View style={styles.center}>
          <Text style={styles.labelAc}>AC usage</Text>
          <Text style={styles.acText}>88%</Text>
          <VictoryPie
            animate={{ duration: 1000 }}
            width={getScreenWidth() - dimens.d24}
            height={300}
            data={data}
            innerRadius={75}
            cornerRadius={25}
            colorScale={graphicColor}
            labels={() => null}
          />
        </View>
        <View style={styles.center}>
          <Text style={styles.labelAc}>Ostium Usage</Text>
          <Text style={styles.acText}>12%</Text>
          <VictoryPie
            animate={{ duration: 1000 }}
            width={getScreenWidth() - dimens.d24}
            height={300}
            data={invertData}
            innerRadius={75}
            cornerRadius={25}
            colorScale={graphicInvertedColor}
            labels={() => null}
          />
        </View>
        <ActionBar pic />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: dimens.d12,
    paddingTop: dimens.d36,
  },
  title: {
    fontFamily: 'Inter-Medium',
    fontSize: texts.lg,
    color: colors.darker,
  },
  acText: {
    position: 'absolute',
    top: '42%',
    left: (getScreenWidth() - dimens.d24) / 2 - 36,
    fontFamily: 'Inter-Medium',
    fontSize: texts.xl3,
    color: colors.darker,
  },
  center: {
    alignItems: 'center',
  },
  labelAc: {
    position: 'absolute',
    top: dimens.d8,
    fontFamily: 'Inter-Medium',
    fontSize: texts.md,
  },
});

export default Usage;
