import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const HomeScreen = ({ home }) => {
  return (
    <View style={styles.container}>
      <Text>Homescreen</Text>
      <Button title="clickhere" onpress={() => alert('Button Pressed')} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#8fcbbc',
  },
});

