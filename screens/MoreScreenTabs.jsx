import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as SecureStore from 'expo-secure-store';
import React, { useEffect, useState } from 'react';

import BoardofDirectorsScreen from './BoardofDirectorsScreen';
import ContactScreen from './ContactScreen';
import DonateNowScreen from './DonateNowScreen';
import JoinEmailListScreen from './JoinEmailListScreen';
import MembershipScreen from './MembershipScreen';
import MileStewardsScreen from './MileStewardsScreen';
import MissionScreen from './MissionScreen';
import MoreScreen from './MoreScreen';
import NewsScreen from './NewsScreen';
import StrategicPlan from './StrategicPlan';
import TributeTablesScreen from './TributeTablesScreen';
import FaceOfTheParkWay from './VisitTheParkway/FaceOfTheParkWay';
import InteractiveMap from './VisitTheParkway/InteractiveMap';
import ParkPass from './VisitTheParkway/ParkPass';
import WeLoveTheParkWay from './VisitTheParkway/WeLoveTheParkWay';
import parkScreen from './VisitTheParkway/park';

const MoreScreenTabs = ({user, handleAuth}) => {
  const navigation = useNavigation();


  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen name="More" options={{ title: user ? 'Hello ' + JSON.parse(user).name : 'More' }}>
          {() => <MoreScreen handleAuth={handleAuth} user={user} />}
        </Stack.Screen>
        <Stack.Screen name="Mission" component={MissionScreen} />
        <Stack.Screen name="Contact" component={ContactScreen} />
        <Stack.Screen name="News" component={NewsScreen} />
        <Stack.Screen name="Board of Directors" component={BoardofDirectorsScreen} />
        <Stack.Screen name="ARPF Strategic Plan" component={StrategicPlan} />
        <Stack.Screen name="Join Email List" component={JoinEmailListScreen} />
        <Stack.Screen name="Donate Now" component={DonateNowScreen} />
        <Stack.Screen name="Membership" component={MembershipScreen} />
        <Stack.Screen name="Tribute Tables" component={TributeTablesScreen} />
        <Stack.Screen name="Mile Stewards" component={MileStewardsScreen} />
        <Stack.Screen name="parks" component={parkScreen} />
        <Stack.Screen name="ParkPass" component={ParkPass} />
        <Stack.Screen name="Interactive Map" component={InteractiveMap} />
        <Stack.Screen name="We Love The ParkWay" component={WeLoveTheParkWay} />
        <Stack.Screen name="Face Of The ParkWay" component={FaceOfTheParkWay} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MoreScreenTabs;
