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
import { getScreenHeight, getScreenWidth } from '../../utils/dimensions';

const iconOptions = { size: icons.lg };
const commonFontFamilies = { fontFamily: 'Inter-Medium' };

const ListItem = ({ data, onClick }) => {
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
      onPress={() => onClick && onClick()}
      background={TouchableNativeFeedback.Ripple(
        'rgba(200, 200, 200, 0.26)',
        false,
      )}
    >
      <View style={styles.listItemContainer}>
        {renderIcon()}
        <View style={styles.listItemTextContainer}>
          {data.content ? (
            <Text style={styles.listItemContent}>{data.content}</Text>
          ) : (
            <>
              <Text style={styles.listItemTitle}>{data.title}</Text>
              <Text style={styles.listItemDesc}>{data.desc}</Text>
            </>
          )}
        </View>
      </View>
    </TouchableNativeFeedback>
  );
};

const BrowsableList = ({ style, data, onPress }) => {
  return (
    <View style={[style, styles.container]}>
      <FlatList
        data={data}
        renderItem={({ item }) => {
          return (
            <View>
              <ListItem data={item} onClick={() => onPress(item)} />
              <View style={styles.line} />
            </View>
          );
        }}
        keyExtractor={(item, index) =>
          `#browsable-analytics-${index}-${item.type}`
        }
        ListEmptyComponent={(
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>No Data</Text>
          </View>
        )}
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
  listItemContent: {
    ...commonFontFamilies,
    fontSize: texts.md,
    color: colors.darker,
    width: getScreenWidth() - 3 * dimens.d12 - icons.lg - dimens.d4,
  },
  line: {
    height: 1,
    width: '100%',
    backgroundColor: colors.muted,
  },
  emptyContainer: {
    height: getScreenHeight() / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyText: {
    fontFamily: 'Inter-Regular',
    fontSize: texts.sm,
    color: colors.caption,
  },
});

export default BrowsableList;
