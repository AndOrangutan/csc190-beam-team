
import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE, Polyline } from 'react-native-maps';
import Icon from 'react-native-vector-icons/FontAwesome';
import MapViewDirections from 'react-native-maps-directions';


// Define your locations array
const locations = [
  // Ensure your locations have the correct category values set
  {
    name: 'American River Parkway Foundation',
    coordinate: {
      latitude: 38.59184,
      longitude: -121.33438,
    },
    category: 'Parkway',
  },
  {
    name: 'Discovery Park Restroom',
    coordinate: {
      latitude: 38.60394376641583,
      longitude: -121.50299408320325,
    },
    category: 'Restroom',
  },
  {
    name: 'William B. Pond Public Restroom',
    coordinate: {
      latitude: 38.58425483312594,
      longitude: -121.33429994660013,
    },
    category: 'Restroom',
  },

  {
    name: 'William B. Pond Restroom',
    coordinate: {
      latitude: 38.58745300401968,
      longitude: -121.33485753447236,
    },
    category: 'Restroom',
  },
  {
    name: 'River Bend Park Restroom',
    coordinate: {
      latitude: 38.594985909962936,
      longitude: -121.32974181610682,
    },
    category: 'Restroom',
  },
  {
    name: 'Rossmoor Bar Restroom',
    coordinate: {
      latitude: 38.6245031383157,
      longitude: -121.3009309047268,
    },
    category: 'Restroom',
  },
  {
    name: 'Sunrise Recreation Area Restroom',
    coordinate: {
      latitude: 38.631171398467345,
      longitude: -121.27030176759465,
    },
    category: 'Restroom',
  },
  {
    name: 'South Bridge Restroom',
    coordinate: {
      latitude: 38.63542893938134, 
      longitude: -121.2639939754568,
    },
    category: 'Restroom',
  },
  {
    name: 'Willow Creek Restroom',
    coordinate: {
      latitude: 38.6486703279616,
      longitude: -121.19088793224344,
    },
    category: 'Restroom',
  },
  {
    name: 'Discovery Park Parking',
    coordinate: {
      latitude: 38.60540636296965,
      longitude: -121.50292273964769,
    },
    category: 'Parking',
  },
  {
    name: 'Bushy Lake Parking',
    coordinate: {
      latitude: 38.586616210289236,
      longitude: -121.42084320855987,
    },
    category: 'Parking',
  },
  {
    name: 'Watt Access Parking',
    coordinate: {
      latitude: 38.5661587143369,
      longitude: -121.38227412442873,
    },
    category: 'Parking',
  },
  {
    name: 'William B. Pond Recreational Area Parking',
    coordinate: {
      latitude: 38.585142588191495,
      longitude: -121.33484131863034,
    },
    category: 'Parking',
  },
  {
    name: 'River Bend Parking',
    coordinate: {
      latitude: 38.59592281831733,
      longitude: -121.32984458321144,
    },
    category: 'Parking',
  },
  {
    name: 'Ancil Hoffman Parking B',
    coordinate: {
      latitude: 38.61254780632622,
      longitude: -121.30798593958201,
    },
    category: 'Parking',
  },
  {
    name: 'Ancil Hoffman Parking A',
    coordinate: {
      latitude: 38.61067560203675,
      longitude: -121.30875623583161,
    },
    category: 'Parking',
  },
  {
    name: 'Rossmoor Bar Parking',
    coordinate: {
      latitude: 38.62432550882811,
      longitude: -121.3019233231389,
    },
    category: 'Parking',
  },
  {
    name: 'Jim Jones Bridge (PCA) Parking',
    coordinate: {
      latitude: 38.6317441799987,
      longitude: -121.26998596185686,
    },
    category: 'Parking',
  },
  {
    name: 'South Bridge Street Parking',
    coordinate: {
      latitude: 38.63491542560191,
      longitude: -121.26327193749412,
    },
    category: 'Parking',
  },
  {
    name: 'Sailor Bar Park Parking A',
    coordinate: {
      latitude: 38.64044969402223,
      longitude: -121.25087657317405,
    },
    category: 'Parking',
  },
  {
    name: 'Sailor Bar Park Parking B',
    coordinate: {
      latitude: 38.637856834209195,
      longitude: -121.23890510020661,
    },
    category: 'Parking',
  },
  {
    name: 'Hazel Ave South Parking',
    coordinate: {
      latitude: 38.63479417078463,
      longitude: -121.22228242198304,
    },
    category: 'Parking',
  },
  {
    name: 'Hazel Ave North Parking',
    coordinate: {
      latitude: 38.63761757207717,
      longitude: -121.22215756786571,
    },
    category: 'Parking',
  },
  {
    name: 'Mississippi Bar Parking',
    coordinate: {
      latitude: 38.655414984121144,
      longitude: -121.20436084784136,
    },
    category: 'Parking',
  },
  {
    name: 'Black Miners Bar Parking',
    coordinate: {
      latitude: 38.68209325086604,
      longitude: -121.18461885355966,
    },
    category: 'Parking',
  },
  {
    name: 'Willow Creek Recreation Area Parking',
    coordinate: {
      latitude: 38.648322469160334,
      longitude: -121.19010161350329,
    },
    category: 'Parking',
  },
  {
    name: 'Folsom Dam Parking South',
    coordinate: {
      latitude: 38.705639342784785,
      longitude: -121.15615296394265,
    },
    category: 'Parking',
  },
  {
    name: 'Folsom Dam Parking North',
    coordinate: {
      latitude: 38.70958442812909,
      longitude: -121.16690745469171,
    },
    category: 'Parking',
  },
  // Add more locations here
];

// Define your filters array
const filters = ['All','Parkway','Parking','Restroom','Picnic Areas', 'Bike Trail Access', 'Boat Ramp', 'Equestrian Staging Area'];

// Create a type for the props expected by FilterMenu
interface FilterMenuProps {
  onFilterChange: (filter: string) => void;
}

// Implement the FilterMenu component using the type for props
const FilterMenu: React.FC<FilterMenuProps> = ({ onFilterChange }) => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState('All');

  const handleFilterChange = (filter: string) => {
    setSelectedFilter(filter);
    onFilterChange(filter);
  };

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <View style={styles.filterMenu}>
      <TouchableOpacity onPress={toggleMenu}>
        <Icon
          name={menuVisible ? 'times' : 'bars'}
          size={30}
          color="black"
        />
      </TouchableOpacity>


      {menuVisible && (
        <View style={styles.menuContent}>
          {filters.map((filter) => (
            <TouchableOpacity key={filter} onPress={() => handleFilterChange(filter)}>
              <Text style={selectedFilter === filter ? styles.selectedFilterText : styles.menuText}>{filter}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

const MapScreen: React.FC = () => {
  const [mapRegion, setMapRegion] = useState({
    latitude: 38.59184,
    longitude: -121.33438,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  const [filteredLocations, setFilteredLocations] = useState(locations);

  const handleFilterChange = (filter: string) => {
    if (filter === 'All') {
      setFilteredLocations(locations);
    } else {
      setFilteredLocations(locations.filter(location => location.category === filter));
    }
  };

  useEffect(() => {
    setFilteredLocations(locations);
  }, []);
          
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

        provider={PROVIDER_GOOGLE}
        style={{ alignSelf: 'stretch', height: '100%' }}
        region={mapRegion}>
        {filteredLocations.map((location, index) => (
          <Marker key={index} coordinate={location.coordinate} title={location.name} />
        ))}
       
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

      <FilterMenu onFilterChange={handleFilterChange} />
    </View>
   );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map:{
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
    marginTop: 10,
  },
  menuText: {
    fontSize: 18,
    marginBottom: 5,
  },
  selectedFilterText: {
    fontSize: 18,
    marginBottom: 5,
    fontWeight: 'bold',
  }
});

export default MapScreen;


