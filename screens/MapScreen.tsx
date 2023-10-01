//import React, { useState } from 'react';
//import { GOOGLE_API_KEY } from 'react-native-dotenv'
import { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import Icon from 'react-native-vector-icons/FontAwesome';

const locations = [
  {
    name: 'American River Parkway Foundation',
    coordinate: {
      latitude: 38.59184,
      longitude: -121.33438,
    },
  },
  {
    name: 'Discovery Park Restroom',
    coordinate: {
      latitude: 38.60394376641583,
      longitude: -121.50299408320325,
    },
  },
  {
    name: 'William B. Pond Public Restroom',
    coordinate: {
      latitude: 38.58425483312594,
      longitude: -121.33429994660013,
    },
  },

  {
    name: 'William B. Pond Restroom',
    coordinate: {
      latitude: 38.58745300401968,
      longitude: -121.33485753447236,
    },
  },
  {
    name: 'River Bend Park Restroom',
    coordinate: {
      latitude: 38.594985909962936,
      longitude: -121.32974181610682,
    },
  },
  {
    name: 'Discovery Park Parking',
    coordinate: {
      latitude: 38.60540636296965,
      longitude: -121.50292273964769,
    },
  },
  {
    name: 'Bushy Lake Parking',
    coordinate: {
      latitude: 38.586616210289236,
      longitude: -121.42084320855987,
    },
  },
  {
    name: 'Watt Access Parking',
    coordinate: {
      latitude: 38.5661587143369,
      longitude: -121.38227412442873,
    },
  },
  {
    name: 'William B. Pond Recreational Area Parking',
    coordinate: {
      latitude: 38.585142588191495,
      longitude: -121.33484131863034,
    },
  },
  {
    name: 'River Bend Parking',
    coordinate: {
      latitude: 38.59592281831733,
      longitude: -121.32984458321144,
    },
  },
  {
    name: 'Ancil Hoffman Parking B',
    coordinate: {
      latitude: 38.61254780632622,
      longitude: -121.30798593958201,
    },
  },
  {
    name: 'Ancil Hoffman Parking A',
    coordinate: {
      latitude: 38.61067560203675,
      longitude: -121.30875623583161,
    },
  },
  {
    name: 'Rossmoor Bar Parking',
    coordinate: {
      latitude: 38.62432550882811,
      longitude: -121.3019233231389,
    },
  },
  {
    name: 'Jim Jones Bridge (PCA) Parking',
    coordinate: {
      latitude: 38.6317441799987,
      longitude: -121.26998596185686,
    },
  },
  {
    name: 'South Bridge Street Parking',
    coordinate: {
      latitude: 38.63491542560191,
      longitude: -121.26327193749412,
    },
  },
  {
    name: 'Sailor Bar Park Parking A',
    coordinate: {
      latitude: 38.64044969402223,
      longitude: -121.25087657317405,
    },
  },
  {
    name: 'Sailor Bar Park Parking B',
    coordinate: {
      latitude: 38.637856834209195,
      longitude: -121.23890510020661,
    },
  },
  {
    name: 'Hazel Ave South Parking',
    coordinate: {
      latitude: 38.63479417078463,
      longitude: -121.22228242198304,
    },
  },
  {
    name: 'Hazel Ave North Parking',
    coordinate: {
      latitude: 38.63761757207717,
      longitude: -121.22215756786571,
    },
  },
  {
    name: 'Mississippi Bar Parking',
    coordinate: {
      latitude: 38.655414984121144,
      longitude: -121.20436084784136,
    },
  },
  {
    name: 'Black Miners Bar Parking',
    coordinate: {
      latitude: 38.68209325086604,
      longitude: -121.18461885355966,
    },
  },
  {
    name: 'Willow Creek Recreation Area Parking',
    coordinate: {
      latitude: 38.648322469160334,
      longitude: -121.19010161350329,
    },
  },
  {
    name: 'Folsom Dam Parking South',
    coordinate: {
      latitude: 38.705639342784785,
      longitude: -121.15615296394265,
    },
  },
  {
    name: 'Folsom Dam Parking North',
    coordinate: {
      latitude: 38.70958442812909,
      longitude: -121.16690745469171,
    },
  },
  // Add more locations here
];

const FilterMenu = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <View style={styles.filterMenu}>
      {/* Hamburger icon */}
      <TouchableOpacity onPress={toggleMenu}>
        <Icon
          name={menuVisible ? 'times' : 'bars'}
          size={30}
          color="black"
        />
      </TouchableOpacity>

      {/* Menu content */}
      {menuVisible && (
        <View style={styles.menuContent}>
          <Text>Picnic Areas</Text>
          <Text>Bike Trail Access</Text>
          <Text>Boat Ramp</Text>
          <Text>Equestrian Staging Area</Text>
          <Text>Restroom</Text>
        </View>
      )}
    </View>
  );
};

const MapScreen = () => {
  const [mapRegion, setMapRegion] = useState({
    latitude: 38.59184,
    longitude: -121.33438,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  return (
    <View style={styles.container}>
      <GooglePlacesAutocomplete
        placeholder="Search"
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          console.log(data, details);
        }}
        query={{
          key: 'GOOGLE_API_KEY', // Replace with your Google API key
          language: 'en',
        }}
      />

      <MapView
        provider={PROVIDER_GOOGLE}
        style={{ alignSelf: 'stretch', height: '100%' }}
        region={mapRegion}>
        {locations.map((location, index) => (
          <Marker key={index} coordinate={location.coordinate} title={location.name} />
        ))}
      </MapView>

      <FilterMenu />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  filterMenu: {
    position: 'absolute',
    top: 20, 
    left: 20,
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 10,
    zIndex: 1,
  },
  menuContent: {
    // Style for the menu content
    // Add menu content styling here
  },
});

export default MapScreen;
