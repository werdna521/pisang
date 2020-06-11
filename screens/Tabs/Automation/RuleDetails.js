import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors, dimens, texts, icons } from '../../../utils/variables';
import { useNavigation, useRoute } from '@react-navigation/native';
import ActionBar from '../../../components/Bars/ActionBar';
import { TimeColored } from '../../../components/Icons/Icons';

const RuleDetails = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { rule } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{rule.name}</Text>
      <Text style={styles.miniTitle}>When</Text>
      <View style={styles.line} />
      <Text style={styles.innerText}>{rule.time}</Text>
      <View style={styles.line} />
      <Text style={styles.miniTitle}>Do something</Text>
      <View style={styles.line} />
      <View style={styles.todoList}>
        <TimeColored size={icons.lg} />
        <Text style={styles.todoText}>{rule.todo}</Text>
      </View>
      <View style={styles.line} />
      <ActionBar back onBack={() => navigation.goBack()} />
    </View>
  );
};

const fontFamilies = {
  fontFamily: 'Inter-Medium',
  color: colors.darker,
};

const captionFamily = {
  fontFamily: 'Inter-Medium',
  color: colors.muted,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: dimens.d12,
    paddingTop: dimens.d36,
  },
  title: {
    ...fontFamilies,
    fontSize: texts.lg,
  },
  miniTitle: {
    ...fontFamilies,
    fontSize: texts.md,
    marginTop: dimens.d12,
  },
  innerText: {
    ...captionFamily,
    fontSize: texts.md,
    paddingVertical: dimens.d8,
    textAlign: 'center',
  },
  line: {
    height: 1,
    width: '100%',
    backgroundColor: colors.muted,
  },
  todoList: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: dimens.d4,
  },
  todoText: {
    ...captionFamily,
    fontSize: texts.sm,
    marginLeft: dimens.d8,
  },
});

export default RuleDetails;
