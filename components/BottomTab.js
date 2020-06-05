import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const BottomTab = ({ state, descriptors, navigation }) => {
  return (
    <View style={{ flexDirection: 'row' }}>
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
            onPress={onPress}
            style={styles.tabItemContainer}
            activeOpacity={0.8}
          >
            {options.tabBarIcon
              ? options.tabBarIcon({
                  color: isFocused ? '#F57C00' : '#838383',
                  size: 24,
                })
              : null}
            <Text
              style={isFocused ? styles.textColorActive : styles.textColorIdle}
            >
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  tabItemContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FAFAFA',
    paddingTop: 12,
    paddingBottom: 16,
  },
  textColorActive: {
    color: '#F57C00',
  },
  textColorIdle: {
    color: '#838383',
  },
});

export default BottomTab;
