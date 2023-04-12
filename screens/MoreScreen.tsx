import React, { useEffect } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { List } from 'react-native-paper';
import Animated, {useAnimatedStyle, useSharedValue, withTiming, withSpring} from 'react-native-reanimated';

const MoreScreen = () => {

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
    <Animated.View className="h-screen w-screen" style={reanimatedStyle} >
      <List.Accordion style={{padding: 30,}} title="About us">
        <List.Item className='p-6 shadow-md bg-zinc-50' title="Mission, Vision, Values and Staff" onPress={() => {}} />
        <List.Item className='p-6 shadow-md bg-zinc-50' title="Board of Directors" onPress={() => {}} />
        <List.Item className='p-6 shadow-md bg-zinc-50' title="Join Email List" onPress={() => {}} />
        <List.Item className='p-6 shadow-md bg-zinc-50' title="Contact Us" onPress={() => {}} />
      </List.Accordion>
      <List.Accordion style={{padding: 30}} title="Give to ARPF">
        <List.Item className='p-6 shadow-md bg-zinc-50' title="Donate Now" onPress={() => {}} />
        <List.Item className='p-6 shadow-md bg-zinc-50' title="Membership" onPress={() => {}} />
        <List.Item className='p-6 shadow-md bg-zinc-50' title="Tribute Tables" onPress={() => {}} />
        <List.Item className='p-6 shadow-md bg-zinc-50' title="Mile Stewards" onPress={() => {}} />
      </List.Accordion>
    </Animated.View>
  );
};

export default MoreScreen;
