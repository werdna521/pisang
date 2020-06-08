import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { colors, dimens, texts } from '../../../utils/variables';
import { connect } from 'react-redux';
import { useNavigation, useRoute } from '@react-navigation/native';
import ActionBar from '../../../components/Bars/ActionBar';
import BrowsableList from '../../../components/Automation/BrowsableList';

const AutomationRules = ({ automationData }) => {
  const navigation = useNavigation();
  const route = useRoute();
  const { automationCategory } = route.params;

  const filterAutomationRules = () => {
    return automationData[automationCategory.title.toLowerCase()].map(
      ({ name }) => ({
        content: name,
        type: automationCategory.type,
      }),
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{automationCategory.title}</Text>
      <BrowsableList data={filterAutomationRules()} />
      <ActionBar
        add
        back
        onAdd={() => alert('add')}
        onBack={() => navigation.goBack()}
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

const mapStateToProps = (state) => {
  return {
    automationData: state.automation,
  };
};

export default connect(mapStateToProps)(AutomationRules);
