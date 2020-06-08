import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { colors, dimens, icons, rounded, sizes } from '../../utils/variables';
import { BoxShadow } from 'react-native-shadow';
import { getScreenWidth } from '../../utils/dimensions';

const BottomTab = ({ state, descriptors, navigation }) => {
  return (
    <BoxShadow setting={shadowBoxSettings}>
      <View style={styles.tabBarContainer}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          return (
            <TouchableOpacity
              key={`#${route.key}-${index}`}
              onPress={onPress}
              style={styles.tabItemContainer}
              activeOpacity={0.8}
            >
              {options.tabBarIcon
                ? options.tabBarIcon({
                    color: isFocused ? colors.primary : colors.muted,
                    size: icons.md,
                  })
                : null}
              <Text
                style={
                  isFocused ? styles.textColorActive : styles.textColorIdle
                }
              >
                {label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </BoxShadow>
  );
};

const shadowBoxSettings = {
  width: getScreenWidth(),
  height: sizes.bottomTabHeight,
  color: colors.black,
  opacity: 0.06,
  border: 100,
  radius: rounded.none,
  x: 0,
  y: 40,
};

const styles = StyleSheet.create({
  tabBarContainer: {
    position: 'relative',
    flexDirection: 'row',
    backgroundColor: colors.white,
    paddingTop: dimens.d6,
    paddingBottom: dimens.d8,
  },
  tabItemContainer: {
    flex: 1,
    alignItems: 'center',
  },
  textColorActive: {
    color: colors.primary,
  },
  textColorIdle: {
    color: colors.muted,
  },
});

export default BottomTab;
