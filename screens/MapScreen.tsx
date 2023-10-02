import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import Icon from 'react-native-vector-icons/FontAwesome';

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

  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={{ alignSelf: 'stretch', height: '100%' }}
        region={mapRegion}>
        {filteredLocations.map((location, index) => (
          <Marker key={index} coordinate={location.coordinate} title={location.name} />
        ))}
      </MapView>

      <FilterMenu onFilterChange={handleFilterChange} />
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


