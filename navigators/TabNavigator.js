import React from 'react';
import Analytics from '../screens/Tabs/Analytics';
import Home from '../screens/Tabs/Home';
import Usage from '../screens/Tabs/Usage';
import BottomTab from '../components/BottomTab';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AnalyticIcon, HomeIcon, UsageIcon } from '../components/Icons';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      back="none"
      tabBar={(props) => <BottomTab {...props} />}
      tabBarOptions={{
        activeTintColor: '#F57C00',
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <HomeIcon color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Analytics"
        component={Analytics}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AnalyticIcon color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Usage"
        component={Usage}
        options={{
          tabBarIcon: ({ color, size }) => (
            <UsageIcon color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
