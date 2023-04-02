import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const MoreScreen = ({ program }) => {
  return (
    <View className="flex-1 items-center justify-center bg-teal-300">
      <Text>More</Text>
      <Button title="clickhere" onpress={() => alert('Button Pressed')} />
    </View>
  );
};

export default MoreScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#8fcbbc',
  },
});

