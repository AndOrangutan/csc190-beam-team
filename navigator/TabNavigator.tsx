import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import React, { useLayoutEffect } from 'react';
import { View, Text } from 'react-native';
import { Icon } from '@rneui/themed';

import CalendarScreen from '../screens/CalendarScreen';
import EventsScreen from '../screens/EventsScreen';
import HomeScreen from '../screens/HomeScreen';
import MapScreen from '../screens/MapScreen';
import MoreScreen from '../screens/MoreScreen';

// https://reactnavigation.org/docs/tab-based-navigation
// https://oblador.github.io/react-native-vector-icons/

export type TabStackParamList = {
  Home: undefined;
  Events: undefined;
  Map: undefined;
  Calendar: undefined;
  More: undefined;
};

const Tab = createBottomTabNavigator<TabStackParamList>();

const TabNavigator = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false, // disable "Main" header
    });
  }, []);

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: '#59C1CC',
        tabBarInactiveTintColor: 'gray',
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === 'Home') {
            return <Icon name="home" type="entypo" color={focused ? '#59C1CC' : 'gray'} />;
          } else if (route.name === 'Events') {
            return <Icon name="clipboard" type="entypo" color={focused ? '#59C1CC' : 'gray'} />;
          } else if (route.name === 'Map') {
            return <Icon reverse name="map" type="entypo" color={focused ? '#e32f45' : '#e32f45'} />;
          } else if (route.name === 'Calendar') {
            return <Icon name="calendar" type="entypo" color={focused ? '#59C1CC' : 'gray'} />;
          } else if (route.name === 'More') {
            return <Icon name="menu" type="entypo" color={focused ? '#59C1CC' : 'gray'} />;
          }
        },
      })}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Events" component={EventsScreen} />
      <Tab.Screen name="Map" component={MapScreen} />
      <Tab.Screen name="Calendar" component={CalendarScreen} />
      <Tab.Screen name="More" component={MoreScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
