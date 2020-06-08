import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  TouchableNativeFeedback,
} from 'react-native';
import {
  MotionColored,
  SecurityColored,
  TemperatureColored,
  TimeColored,
} from '../Icons/Icons';
import { colors, dimens, icons, texts } from '../../utils/variables';
import { getScreenWidth } from '../../utils/dimensions';

const iconOptions = { size: icons.lg };
const commonFontFamilies = { fontFamily: 'Inter-Medium' };

const ListItem = ({ data }) => {
  const renderIcon = () => {
    switch (data.type) {
      case 0:
        return SecurityColored(iconOptions);
      case 1:
        return TimeColored(iconOptions);
      case 2:
        return MotionColored(iconOptions);
      case 3:
        return TemperatureColored(iconOptions);
      default:
        return TemperatureColored(iconOptions);
    }
  };

  return (
    <TouchableNativeFeedback
      onPress={() => alert('adu dipencet')}
      background={TouchableNativeFeedback.Ripple(
        'rgba(200, 200, 200, 0.26)',
        false,
      )}
    >
      <View style={styles.listItemContainer}>
        {renderIcon()}
        <View style={styles.listItemTextContainer}>
          <Text style={styles.listItemTitle}>{data.title}</Text>
          <Text style={styles.listItemDesc}>{data.desc}</Text>
        </View>
      </View>
    </TouchableNativeFeedback>
  );
};

const BrowsableList = ({ style, data }) => {
  return (
    <View style={[style, styles.container]}>
      <FlatList
        data={data}
        renderItem={({ item }) => {
          return (
            <View>
              <ListItem data={item} />
              <View style={styles.line} />
            </View>
          );
        }}
        keyExtractor={(item, index) =>
          `#browsable-analytics-${index}-${item.type}`
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'stretch',
  },
  listItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: dimens.d8,
  },
  listItemTextContainer: {
    marginLeft: dimens.d12,
  },
  listItemTitle: {
    ...commonFontFamilies,
    fontSize: texts.sm,
    color: colors.darker,
  },
  listItemDesc: {
    ...commonFontFamilies,
    fontSize: texts.xs,
    color: colors.caption,
    width: getScreenWidth() - 3 * dimens.d12 - icons.lg - dimens.d4,
  },
  line: {
    height: 1,
    width: '100%',
    backgroundColor: colors.muted,
  },
});

export default BrowsableList;
