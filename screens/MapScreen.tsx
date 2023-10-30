import { useNavigation, NavigationProp } from '@react-navigation/native';
import * as Location from 'expo-location';
import * as React from 'react';
import { useState, useEffect } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, SafeAreaView, Alert } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE, Polyline } from 'react-native-maps';
import { TextInput } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';



interface FilterMenuProps {
  onFilterChange: (filter: string) => void;
}

const FilterMenu: React.FC<FilterMenuProps> = ({ onFilterChange }) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList, 'Information'>>();
  const [menuVisible, setMenuVisible] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [showTrailsSubMenu, setShowTrailsSubMenu] = useState(false);
  const [showInfoSubMenu, setShowInfoSubMenu] = useState<string | null>(null);
  const [showInfoButtonForTrail, setShowInfoButtonForTrail] = useState<string | null>(null);
  

  const handleFilterChange = (filter: string) => {
    setSelectedFilter(filter);
    onFilterChange(filter);
    if (trailFilters.includes(filter)) {
      setShowInfoSubMenu(filter);
    } else {
      setShowInfoSubMenu(null);
    }
  };

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  // ... rest of the imports and code ...

  return (
    <SafeAreaView style={styles.filterMenu}>
      <TouchableOpacity onPress={toggleMenu}>
        <Icon
          name={menuVisible ? 'times' : 'bars'}
          size={30}
          color="black"
          style={{ padding: 10 }}
        />
      </TouchableOpacity>

      {menuVisible && (
        <View style={styles.menuContent}>
          {filters.map((filter) =>
            filter === 'Trails' ? (
              <TouchableOpacity
                key={filter}
                onPress={() => setShowTrailsSubMenu(!showTrailsSubMenu)}>
                <Text
                  style={selectedFilter === filter ? styles.selectedFilterText : styles.menuText}>
                  {filter}
                </Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity key={filter} onPress={() => handleFilterChange(filter)}>
                <Text
                  style={selectedFilter === filter ? styles.selectedFilterText : styles.menuText}>
                  {filter}
                </Text>
              </TouchableOpacity>
            )
          )}

          {showTrailsSubMenu &&
            trailFilters.map((trail) => (
              <View key={trail} style={{ marginLeft: 20 }}>
                <TouchableOpacity
                  onPress={() => {
                    handleFilterChange(trail);
                    setShowInfoButtonForTrail(trail);
                  }}>
                  <Text
                    style={selectedFilter === trail ? styles.selectedFilterText : styles.menuText}>
                    {trail}
                  </Text>
                  {showInfoButtonForTrail === trail && (
                    <TouchableOpacity
                      onPress={() => navigation.navigate('Information', { title: trail })}>
                      <Text style={{ ...styles.menuText, fontWeight: 'bold', fontSize: 12 }}>
                        Information
                      </Text>
                    </TouchableOpacity>
                  )}
                </TouchableOpacity>
              </View>
            ))}
        </View>
      )}
    </SafeAreaView>
  );
};

// const SaveLocationButton = () => {
//   // const [myLocation, setMyLocation] = useState({});

//   // const handlePress = async () => {
//   //   const { status } = await Location.requestForegroundPermissionsAsync();
//   //   if (status !== 'granted') {
//   //     Alert.alert('Permission to access location was denied');
//   //     return;
//   //   }

//   //   const location = await Location.getCurrentPositionAsync({});
//   //   setMyLocation({ latitude: location.coords.latitude, longitude: location.coords.longitude });
//   //   console.log(myLocation);
//   // };

//   return (
//     <TouchableOpacity
//       className="absolute bottom-2.5 right-20 bg-white h-14 w-14 shadow-sm shadow-black rounded-full items-center justify-center"
//       onPress={handlePress}>
//       <Icon name="plus" size={25} color="gray" />
//     </TouchableOpacity>
//   );
// };

const SaveLocationForm = ({ user, toggleMenu }) => {
  const [locName, setLocName] = useState('');

  const handlePress = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permission to access location was denied');
      return;
    }
    if (locName.length == 0) {
      Alert.alert('Please Enter a title for your location');
      return;
    }

    const location = await Location.getCurrentPositionAsync({});
    const res = await fetch('http://localhost:8000/locations', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: locName,
        data: {
          name: locName,
          coordinate: {
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
          },
          category: 'User Created',
        },
        id: JSON.parse(user).id,
      }),
    });

    if (res.ok) {
      Alert.alert('Location Successfully Created!');
      setLocName('');
      toggleMenu();
    } else {
      Alert.alert('There was a problem saving your location');
    }
  };

  return (
    <View className="absolute left-0 bottom-20 bg-slate-100 shadow-lg rounded-lg h-40 w-full items-center justify-center">
      <Text className="font-bold mb-3">Save your current Location</Text>
      {/* <Text className='font-bold'>Name your Current Location</Text> */}
      <TextInput
        className="w-1/2 h-10 bg-white"
        outlineColor="black"
        style={{ textAlign: 'center' }}
        onChangeText={setLocName}
      />
      <TouchableOpacity className="bg-blue-500 p-3 mt-3 rounded-lg" onPress={handlePress}>
        <Text className="font-bold text-white">Save</Text>
      </TouchableOpacity>
    </View>
  );
};

const MapScreen: React.FC = ({ user }) => {
  const [mapRegion, setMapRegion] = useState({
    latitude: 38.59184,
    longitude: -121.33438,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  const [locations, setLocations] = useState([]);
  const [filters, setFilter] = useState([]);
  const [filteredLocations, setFilteredLocations] = useState(locations);
  // const [filteredRoutes, setFilteredRoutes] = useState(routes);

  const handleFilterChange = (filter: string) => {
    if (filter === 'All') {
      setFilteredLocations(locations);
      // setFilteredRoutes(routes);
    } else {
      const filteredLocations = locations.filter((location) => location.data.category === filter);
      // const filteredRoutes = routes.filter((route) => route.category === filter);

      setFilteredLocations(filteredLocations);
      // setFilteredRoutes(filteredRoutes);
    }
  };
  
  const getLocations = async () => {
    try {
      let url = 'http://localhost:8000/locations';
      if (user) {
        const userId = JSON.parse(user).id;
        url = `${url}?id=${userId}`;
      }
      const res = await fetch(url);
      const data = await res.json();
      setLocations(data);
    } catch (err) {
      console.log("Error fetching locations", err);
    }
  };

  /* Function to filter locations by category
  const filterByCategory = (locations, category) => {
    return locations.filter(location => location.category === category);
  }

  (async () => {
    await getLocations();  // This populates the `locations` state
    const filters = filterByCategory(locations, 'Restroom');

  })();
  */

  useEffect(() => {
    getLocations();
  }, [user]);

  useEffect(() => {
    setFilteredLocations(locations);
  }, [locations]);

  const origin1 = { latitude: 38.60254, longitude: -121.506629 };
  const initialDestination1 = { latitude: 38.63325, longitude: -121.22397 };
  const waypoints1 = [
    { latitude: 38.60573, longitude: -121.5021 },
    { latitude: 38.60348, longitude: -121.49614 },
    { latitude: 38.60423, longitude: -121.47576 },
    { latitude: 38.60419, longitude: -121.47321 },
    { latitude: 38.59717, longitude: -121.46862 },
    { latitude: 38.59244, longitude: -121.4477 },
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
    { latitude: 38.63509, longitude: -121.2248 },
    { latitude: 38.63493, longitude: -121.22235 },
    { latitude: 38.63674, longitude: -121.22487 },
    { latitude: 38.63755, longitude: -121.22075 },
    { latitude: 38.64319, longitude: -121.21009 },
    { latitude: 38.66127, longitude: -121.19308 },
    { latitude: 38.67966, longitude: -121.18929 },
  ];

  const origin3 = { latitude: 38.70502, longitude: -121.1668 };
  const destination3 = { latitude: 38.70537, longitude: -121.16935 };

  const origin4 = { latitude: 38.70576, longitude: -121.16967 };
  const initialDestination4 = { latitude: 38.7204, longitude: -121.17075 };
  const waypoints3 = [{ latitude: 38.7062, longitude: -121.1696 }];

  const origin5 = { latitude: 38.70537, longitude: -121.16935 };
  const destination5 = { latitude: 38.70576, longitude: -121.16967 };

  const [isModifyingRoute1, setIsModifyingRoute1] = useState(false);
  const [isModifyingRoute2, setIsModifyingRoute2] = useState(false);
  const [isModifyingRoute3, setIsModifyingRoute3] = useState(false);

  const GOOGLE_MAPS_APIKEY = 'SHHH'; // API KEY GOES HERE

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

  const [isFormShowing, setIsFormShowing] = useState(false);

  const showForm = () => {
    setIsFormShowing(!isFormShowing);
  };

  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        showsUserLocation={true}
        showsMyLocationButton={true}
        followsUserLocation={true}
        style={{ alignSelf: 'stretch', height: '100%' }}
        region={mapRegion}>
        {/* Render Locations */}
        {filteredLocations.map((location, index) =>
          location.data.category == 'User Created' ? (
            <Marker
              pinColor="blue"
              key={index}
              coordinate={location.data.coordinate}
              title={location.name}
            />
          ) : (
            <Marker key={index} coordinate={location.data.coordinate} title={location.name} />
          )
        )}

        {/* Render routes */}
        {/* {filteredRoutes.map((route, index) => (
          <MapViewDirections
            key={index}
            origin={route.origin}
            destination={route.destination}
            waypoints={route.waypoints}
            apikey={GOOGLE_MAPS_APIKEY}
            strokeWidth={4}
            strokeColor={route.color}
            mode="BICYCLING"
          />
        ))} */}
      </MapView>

      {/* <SaveLocationButton /> */}
      {isFormShowing ? <SaveLocationForm user={user} toggleMenu={showForm} /> : null}

      {user ? (
      <TouchableOpacity
        className="absolute bottom-2.5 right-20 bg-white h-14 w-14 shadow-sm shadow-black rounded-full items-center justify-center"
        onPress={showForm}>
        <Icon name="plus" size={25} color="gray" />
      </TouchableOpacity>
      ) : null}
      <FilterMenu onFilterChange={handleFilterChange} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  filterMenu: {
    position: 'absolute',
    top: 60,
    left: 20,
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 10,
    zIndex: 1,
  },
  menuContent: {
    marginTop: 10,
    padding: 10,
  },
  menuText: {
    fontSize: 18,
    marginBottom: 5,
  },
  selectedFilterText: {
    fontSize: 18,
    marginBottom: 5,
    fontWeight: 'bold',
  },
});

export default MapScreen;
