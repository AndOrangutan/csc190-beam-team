import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const HomeScreen = ({ home }) => {
  return (
    <View className="flex-1 items-center justify-center bg-teal-300">
      <Text>Homescreen</Text>
      <Button title="clickhere" onpress={() => alert('Button Pressed')} />
    </View>
  );
};

export default HomeScreen;

