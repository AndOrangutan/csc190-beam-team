import { useNavigation } from '@react-navigation/native';
import React, { useLayoutEffect } from 'react';
import { View, Text, SafeAreaView } from 'react-native';

// https://reactnavigation.org/docs/tab-based-navigation
// https://oblador.github.io/react-native-vector-icons/

const MapScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false, // disable "Main" header
    });
  }, );

  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-teal-300">
      <Text>MapScreen</Text>
    </SafeAreaView>
  );
};

export default MapScreen;
