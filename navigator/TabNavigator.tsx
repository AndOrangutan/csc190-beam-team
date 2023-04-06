import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import React, { useLayoutEffect } from 'react';
import { View, Text } from 'react-native';
import { Icon } from '@rneui/themed';
import { color } from '@rneui/base';

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
        tabBarInactiveTintColor: 'gray', // inactive color
        tabBarShowLabel: false, // disable showing name component
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === 'Home') {
            return (
              <View>
                <Icon name="home" type="entypo" color={focused ? '#e32f45' : 'gray'} />
                <Text style={{ color: focused ? 'red' : '#748c97', fontSize: 12 }}>Home</Text>
              </View>
            );
          } else if (route.name === 'Events') {
            return (
              <View>
                <Icon name="clipboard" type="entypo" color={focused ? '#e32f45' : 'gray'} />
                <Text style={{ color: focused ? 'red' : '#748c97', fontSize: 12 }}>Events</Text>
              </View>
            );
          } else if (route.name === 'Map') {
            return (
              <View>
                <Icon reverse name="map" type="entypo" color={focused ? 'red' : '#e32f45'} />
              </View>
            );
          } else if (route.name === 'Calendar') {
            return (
              <View>
                <Icon name="calendar" type="entypo" color={focused ? '#e32f45' : 'gray'} />
                <Text style={{ color: focused ? 'red' : '#748c97', fontSize: 12 }}>Calendar</Text>
              </View>
            );
          } else if (route.name === 'More') {
            return (
              <View>
                <Icon name="menu" type="entypo" color={focused ? '#e32f45' : 'gray'} />
                <Text style={{ color: focused ? 'red' : '#748c97', fontSize: 12 }}>More</Text>
              </View>
            );
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