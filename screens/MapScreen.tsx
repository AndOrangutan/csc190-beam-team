import React, { useState } from 'react';
//import { GOOGLE_API_KEY } from 'react-native-dotenv'
import { View, StyleSheet } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';

// https://reactnavigation.org/docs/tab-based-navigation
// https://oblador.github.io/react-native-vector-icons/

const MapScreen = () => {
  const [mapRegion, setmapRegion]=useState({
    latitude: 38.59184,
    longitude: -121.33438,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={{ alignSelf: 'stretch', height: '100%' }}
        region={mapRegion}>
        <Marker coordinate={mapRegion} title='American River Parkway Foundation' />
      </MapView>
    </View>
  );
};

const styles=StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default MapScreen;
