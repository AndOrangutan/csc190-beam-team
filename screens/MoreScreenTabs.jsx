import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MissionScreen from './MissionScreen';
import ContactScreen from './ContactScreen';
import MoreScreen from './MoreScreen';
import BoardofDirectorsScreen from './BoardofDirectorsScreen';
import JoinEmailListScreen from './JoinEmailListScreen';
import DonateNowScreen from './DonateNowScreen';
import MembershipScreen from './MembershipScreen';
import TributeTablesScreen from './TributeTablesScreen';
import MileStewardsScreen from './MileStewardsScreen';
import StrategicPlan from './StrategicPlan';

const MoreScreenTabs = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen name="More" component={MoreScreen} />
        <Stack.Screen name="Mission" component={MissionScreen} />
        <Stack.Screen name="Contact" component={ContactScreen} />
        <Stack.Screen name="Board of Directors" component={BoardofDirectorsScreen} />
        <Stack.Screen name="ARPF Strategic Plan" component={StrategicPlan} />
        <Stack.Screen name="Join Email List" component={JoinEmailListScreen} />
        <Stack.Screen name="Donate Now" component={DonateNowScreen} />
        <Stack.Screen name="Membership" component={MembershipScreen} />
        <Stack.Screen name="Tribute Tables" component={TributeTablesScreen} />
        <Stack.Screen name="Mile Stewards" component={MileStewardsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MoreScreenTabs;
