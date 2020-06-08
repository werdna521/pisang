import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { colors, dimens, texts } from '../../../utils/variables';
import { useNavigation } from '@react-navigation/native';
import ActionBar from '../../../components/Bars/ActionBar';
import BrowsableList from '../../../components/Automation/BrowsableList';

const automationBrowsableData = [
  {
    type: 0,
    title: 'Security',
    desc: 'Control the security of your house',
  },
  {
    type: 1,
    title: 'Time',
    desc: 'Create automation rules by time',
  },
  {
    type: 2,
    title: 'Motion',
    desc: 'Create automation rules by motion',
  },
  {
    type: 3,
    title: 'Temperature',
    desc: 'Create automation rules by automation',
  },
];

const Automation = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Automation</Text>
      <ActionBar add pic onAdd={() => alert('add')} />
      <BrowsableList
        data={automationBrowsableData}
        onPress={(automationCategory) =>
          navigation.navigate('Automation/Rules', { automationCategory })
        }
      />
    </View>
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
});

export default Automation;
