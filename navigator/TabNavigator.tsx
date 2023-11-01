import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import { Icon } from '@rneui/themed';
import React, { useLayoutEffect } from 'react';
import { View, Text } from 'react-native';

import CalendarScreen from '../screens/CalendarScreen';
import HomeScreen from '../screens/HomeScreen';
import MapScreen from '../screens/MapScreen';
import MoreScreenTabs from '../screens/MoreScreenTabs';

// https://reactnavigation.org/docs/tab-based-navigation
// https://oblador.github.io/react-native-vector-icons/

export type TabStackParamList = {
  Home: undefined;
  Events: undefined;
  Map: undefined;
  Calendar: undefined;
  More: undefined;
  Contact: undefined;
  Mission: undefined;
};

const Tab = createBottomTabNavigator<TabStackParamList>();

const TabNavigator = ({ route }) => {
  const navigation = useNavigation();
  const { user } = route.params ? route.params : {};

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
          } else if (route.name === 'Map') {
            return (
              <View>
                <Icon name="map" type="entypo" color={focused ? '#e32f45' : 'gray'} />
                <Text style={{ color: focused ? 'red' : '#748c97', fontSize: 12 }}>Map</Text>
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
      <Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <Tab.Screen
        name="Map"
        options={{ headerShown: false }}
      >
        {() => <MapScreen user={user} />}
      </Tab.Screen>
      <Tab.Screen name="Calendar" component={CalendarScreen} options={{ headerShown: false }} />
      <Tab.Screen name="More" component={MoreScreenTabs} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
