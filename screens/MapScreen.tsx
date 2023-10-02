// import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Button } from 'react-native';
import MapView, { Marker, Polyline,} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

// https://reactnavigation.org/docs/tab-based-navigation
// https://oblador.github.io/react-native-vector-icons/

const MapScreen = () => {  
  const origin1 = {latitude: 38.60254, longitude: -121.506629};
  const initialDestination1 = {latitude: 38.63325, longitude: -121.22397};
  const waypoints1 = [
    { latitude: 38.60573, longitude: -121.50210 },
    { latitude: 38.60348, longitude: -121.49614 },
    { latitude: 38.60423, longitude: -121.47576 },
    { latitude: 38.60419, longitude: -121.47321 },
    { latitude: 38.59717, longitude: -121.46862 },
    { latitude: 38.59244, longitude: -121.44770 },
    { latitude: 38.57778, longitude: -121.41876 },
    { latitude: 38.56131, longitude: -121.41796 },
    { latitude: 38.56153, longitude: -121.40549 },
    { latitude: 38.56808, longitude: -121.38084 },
    { latitude: 38.57168, longitude: -121.36452 },
    { latitude: 38.57464, longitude: -121.35753 },
    { latitude: 38.57813, longitude: -121.34783 },
    { latitude: 38.58148, longitude: -121.33852 },
    { latitude: 38.59367, longitude: -121.32252 },
    { latitude: 38.60964, longitude: -121.30519 },
    { latitude: 38.62387, longitude: -121.27806 },
    { latitude: 38.63157, longitude: -121.26852 },
    { latitude: 38.63711, longitude: -121.25464 },
    { latitude: 38.63282, longitude: -121.22377 },
  ];

  const origin2 = { latitude: 38.63294, longitude: -121.22371 };
  const initialDestination2 = { latitude: 38.70502, longitude: -121.16678 };
  const waypoints2 = [
    { latitude: 38.63509, longitude: -121.22480 },
    { latitude: 38.63493, longitude: -121.22235 },
    { latitude: 38.63674, longitude: -121.22487 },
    { latitude: 38.63755, longitude: -121.22075 },
    { latitude: 38.64319, longitude: -121.21009 },
    { latitude: 38.66127, longitude: -121.19308 },
    { latitude: 38.67966, longitude: -121.18929 },
  ]

  const origin3 = { latitude: 38.70502, longitude: -121.16680 };
  const destination3 = { latitude: 38.70537, longitude: -121.16935 };

  const origin4 = { latitude: 38.70576, longitude: -121.16967 };
  const initialDestination4 = { latitude: 38.72040, longitude: -121.17075 };
  const waypoints3 = [
    { latitude: 38.70620, longitude: -121.16960 },
  ]

  const origin5 = { latitude: 38.70537, longitude: -121.16935 };
  const destination5 = { latitude: 38.70576, longitude: -121.16967 };

  const [isModifyingRoute1, setIsModifyingRoute1] = useState(false);
  const [isModifyingRoute2, setIsModifyingRoute2] = useState(false);
  const [isModifyingRoute3, setIsModifyingRoute3] = useState(false);

  const GOOGLE_MAPS_APIKEY = 'AIzaSyBtMCPjfFVKiJ6ykyeMin-SLpIP8fnMd0E'; //google map api

  // Function to finalize route modification
  const finalizeRouteModification1 = () => {
    setIsModifyingRoute1(false);
  };
  const finalizeRouteModification2 = () => {
    setIsModifyingRoute2(false);
  };
  const finalizeRouteModification3 = () => {
    setIsModifyingRoute3(false);
  };

  

 return (
  <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 38.59184,
          longitude: -121.33438,
          latitudeDelta: 0.5,
          longitudeDelta: 0.09,
        }}>
        <MapViewDirections
          origin={origin1}
          destination={initialDestination1}
          waypoints={waypoints1}
          apikey={GOOGLE_MAPS_APIKEY}
          strokeWidth={4}
          strokeColor='blue'
          mode='WALKING'
        />
        {isModifyingRoute1 ? (
          <MapViewDirections
            origin={waypoints1[waypoints1.length - 1]}
            destination={initialDestination1}
            waypoints={waypoints1.slice(0, -1)}
            apikey={GOOGLE_MAPS_APIKEY}
            strokeWidth={4}
            strokeColor='blue'
            mode='WALKING'
          />
        ) : null}

        <MapViewDirections
          origin={origin2}
          destination={initialDestination2}
          waypoints={waypoints2}
          apikey={GOOGLE_MAPS_APIKEY}
          strokeWidth={4}
          strokeColor='blue'
          mode='WALKING'
        />
        {isModifyingRoute2 ? (
          <MapViewDirections
            origin={waypoints2[waypoints2.length - 1]}
            destination={initialDestination2}
            waypoints={waypoints2.slice(0, -1)}
            apikey={GOOGLE_MAPS_APIKEY}
            strokeWidth={4}
            strokeColor='blue'
            mode='WALKING'
          />
        ) : null}

        <MapViewDirections
          origin={origin4}
          destination={initialDestination4}
          waypoints={waypoints3}
          apikey={GOOGLE_MAPS_APIKEY}
          strokeWidth={4}
          strokeColor='blue' 
        />
        {isModifyingRoute3 ? (
          <MapViewDirections
            origin={waypoints3[waypoints3.length - 1]}
            destination={initialDestination4}
            waypoints={waypoints3.slice(0, -1)}
            apikey={GOOGLE_MAPS_APIKEY}
            strokeWidth={4}
            strokeColor='blue'
            mode='WALKING'
          />
        ) : null}

        <Polyline
          coordinates={[origin3, destination3]}
          strokeWidth={4}
          strokeColor='blue'
          />
        <Polyline
          coordinates={[origin5, destination5]}
          strokeWidth={4}
          strokeColor='blue'
          />

        <Marker
          coordinate={origin1}
          title='Discovery Park'
        />
        <Marker
          coordinate={initialDestination1}
          title='Nimbus Fish Hatchery'
        />
        <Marker
          coordinate={origin2}
          title='1701 Nimbus Rd, Gold River, CA 95670, USA'
        />
        <Marker
          coordinate={initialDestination4}
          title='Beals Point, Granite Bay, CA 95746, USA'
        />
      </MapView>
    </View>
   );
};

const styles=StyleSheet.create({
  container: {
    flex: 1,
  },
  map:{
    flex: 1,
  },
});
export default MapScreen;