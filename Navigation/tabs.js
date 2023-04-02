import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, View, Image, TouchableOpacity, Text } from 'react-native';

import EventScreen from '../Screens/EventsScreen';
import HomeScreen from '../Screens/HomeScreen';
import ProgramScreen from '../Screens/ProgramScreen';
import MoreScreen from '../Screens/MoreScreen';
import MapScreen from '../Screens/MapScreen';

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#7f5df0',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});

const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({ children, onPress }) => (
  <TouchableOpacity
    style={{
      top: -20,
      justifyContent: 'center',
      alignItems: 'center',
      ...styles.shadow,
    }}
    onPress={onPress}>
    <View
      style={{
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: '#e32f45',
      }}>
      {children}
    </View>
  </TouchableOpacity>
);

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          showLabel: false,
          position: 'absolute',
          bottom: 25,
          left: 20,
          right: 20,
          elevation: 0,
          backgroundColor: '#ffffff',
          borderRadius: 15,
          height: 90,
          ...StyleSheet.create({
            shadow: {
              shadowColor: '#7f5df0',
              shadowOffset: {
                width: 0,
                height: 10,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.5,
              elevation: 5,
            },
          }).shadow,
        },
      }}>
      <Tab.Screen
        name="HOME"
        component={HomeScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center', top: 15 }}>
              <Image
                source={require('../assets/Home.png')}
                resizeMode="contain"
                style={{
                  width: 50,
                  height: 35,
                  tintColor: focused ? '#e32f45' : '#748c97',
                }}
              />
              <Text style={{ color: focused ? '#e32f45' : '#748c97', fontSize: 12 }}>HOME</Text>
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Events"
        component={EventScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center', top: 15 }}>
              <Image
                source={require('../assets/Events.png')}
                resizeMode="contain"
                style={{
                  width: 50,
                  height: 35,
                  tintColor: focused ? '#e32f45' : '#748c97',
                }}
              />
              <Text
                style={{
                  color: focused ? '#e32f45' : '#748c97',
                  fontSize: 12,
                }}>
                EVENTS
              </Text>
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Map"
        component={MapScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={require('../assets/Map.png')}
              resizeMode="contain"
              style={{
                width: 30,
                height: 30,
                top: 0,
                tintColor: '#fff',
              }}
            />
          ),
          tabBarButton: (props) => <CustomTabBarButton {...props} />,
        }}
      />

      <Tab.Screen
        name="Program"
        component={ProgramScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center', top: 15 }}>
              <Image
                source={require('../assets/Program.png')}
                resizeMode="contain"
                style={{
                  width: 50,
                  height: 35,
                  tintColor: focused ? '#e32f45' : '#748c97',
                }}
              />
              <Text
                style={{
                  color: focused ? '#e32f45' : '#748c97',
                  fontSize: 12,
                }}>
                CALENDER
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="More"
        component={MoreScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center', top: 15 }}>
              <Image
                source={require('../assets/More.png')}
                resizeMode="contain"
                style={{
                  width: 50,
                  height: 35,
                  tintColor: focused ? '#e32f45' : '#748c97',
                }}
              />
              <Text
                style={{
                  color: focused ? '#e32f45' : '#748c97',
                  fontSize: 12,
                }}>
                MORE
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;

