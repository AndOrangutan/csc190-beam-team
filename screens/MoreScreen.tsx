import React, { useEffect } from 'react';
import { List } from 'react-native-paper';
import Animated, {useAnimatedStyle, useSharedValue, withTiming, withSpring} from 'react-native-reanimated';



const MoreScreen = ({navigation}: {navigation: any}) => {

  const x = useSharedValue(500);

  const reanimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateX: x.value}],
    };
  });

  useEffect(() => {
    x.value = withTiming(0, {duration: 500});
    x.value = withSpring(0, {damping: 10, stiffness: 100});
  }, []);




  return (
    <Animated.ScrollView className="h-screen w-screen" style={reanimatedStyle} >
      
      {/* Abous Us dropdown list */}
      <List.Accordion style={{padding: 30,}} title="About us">

          <List.Item 
            className='p-6 shadow-md bg-zinc-50' 
            title="Mission, Vision, Values and Staff" 
            left={props => <List.Icon {...props} icon="barley" />}
            onPress={() => {navigation.navigate("Mission")}} />
          <List.Item 
            className='p-6 shadow-md bg-zinc-50' 
            title="Board of Directors" 
            left={props => <List.Icon {...props} icon="clipboard-account-outline" />}
            onPress={() => {navigation.navigate("Board of Directors")}} />
          <List.Item 
            className='p-6 shadow-md bg-zinc-50' 
            title="ARPF Strategic Plan 2021-2024" 
            left={props => <List.Icon {...props} icon="notebook-outline" />}
            onPress={() => {navigation.navigate("ARPF Strategic Plan")}} />
          <List.Item 
            className='p-6 shadow-md bg-zinc-50' 
            title="Join Email List" 
            left={props => <List.Icon {...props} icon="email" />}
            onPress={() => {navigation.navigate("Join Email List")}} 
            />
          <List.Item 
            className='p-6 shadow-md bg-zinc-50' 
            title="Contact Us" 
            left={props => <List.Icon {...props} icon="phone" />}
            onPress={() => { navigation.navigate("Contact")}} 
            />
      </List.Accordion>

      {/* Get Involved dropdown list */}
      <List.Accordion style={{padding: 30}} title="Give to ARPF">
        <List.Item 
          className='p-6 shadow-md bg-zinc-50' 
          title="Donate Now" 
          left={props => <List.Icon {...props} icon="cash" />}
          onPress={() => {navigation.navigate("Donate Now")}} 
        />
        <List.Item 
          className='p-6 shadow-md bg-zinc-50' 
          title="Membership" 
          left={props => <List.Icon {...props} icon="account" />}
          onPress={() => {navigation.navigate("Membership")}} 
        />
        <List.Item 
          className='p-6 shadow-md bg-zinc-50' 
          title="Tribute Tables" 
          left={props => <List.Icon {...props} icon="table" />}
          onPress={() => {navigation.navigate("Tribute Tables")}} 
        />
        <List.Item 
          className='p-6 shadow-md bg-zinc-50' 
          title="Mile Stewards" 
          left={props => <List.Icon {...props} icon="handshake-outline" />}
          onPress={() => {navigation.navigate("Mile Stewards")}} 
        />
      </List.Accordion>


    </Animated.ScrollView>
  );
};

export default MoreScreen;
