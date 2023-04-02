import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const ProgramScreen = ({ more }) => {
  return (
    <View style={styles.container}>
      <Text>program Screen</Text>
      <Button title="clickhere" onpress={() => alert('Button Pressed')} />
    </View>
  );
};

export default ProgramScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#8fcbbc',
  },
});

