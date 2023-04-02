import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const EventScreen = ({ event }) => {
  return (
    <View className="flex-1 items-center justify-center bg-teal-300">
      <Text>EventScreen</Text>
      <Button title="clickhere" onpress={() => alert('Button Pressed')} />
    </View>
  );
};

export default EventScreen;
