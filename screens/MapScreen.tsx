import { IP, PORT } from '@env';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import * as Location from 'expo-location';
import * as React from 'react';
import { useState, useEffect } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Alert,
  Switch,
  Button,
  ScrollView,
} from 'react-native';
import MapView, {
  Callout,
  CalloutSubview,
  Marker,
  PROVIDER_GOOGLE,
  Polyline,
} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import { TextInput } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';

type RootStackParamList = {
  Information: { title: string };
};

interface FilterMenuProps {
  onFilterChange: (filter: string) => void;
  filters: string[];
  trailFilters: string[];
}

const FilterMenu: React.FC<FilterMenuProps> = ({ onFilterChange, filters, trailFilters }) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList, 'Information'>>();
  const [menuVisible, setMenuVisible] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [showTrailsSubMenu, setShowTrailsSubMenu] = useState(false);
  const [showInfoSubMenu, setShowInfoSubMenu] = useState<string | null>(null);
  const [showInfoButtonForTrail, setShowInfoButtonForTrail] = useState<string | null>(null);
  // const [trailFilters, setTrailsFilters] = useState<string[]>([]);

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

  const toggleTrailMenu = () => {
    setShowTrailsSubMenu(!showTrailsSubMenu);
  };

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
            filter !== 'Trails' ? (
              <TouchableOpacity key={filter} onPress={() => handleFilterChange(filter)}>
                <Text
                  style={selectedFilter === filter ? styles.selectedFilterText : styles.menuText}>
                  {filter}
                </Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity key={filter} onPress={toggleTrailMenu}>
                <Text
                  style={selectedFilter === filter ? styles.selectedFilterText : styles.menuText}>
                  {filter}
                </Text>
              </TouchableOpacity>
            )
          )}
          <ScrollView>
            {showTrailsSubMenu &&
              trailFilters.map((trail) => (
                <View key={trail} style={{ marginLeft: 20 }}>
                  <TouchableOpacity
                    onPress={() => {
                      handleFilterChange(trail);
                      setShowInfoButtonForTrail(trail);
                    }}>
                    <Text
                      style={
                        selectedFilter === trail ? styles.selectedFilterText : styles.menuText
                      }>
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
          </ScrollView>
        </View>
      )}
    </SafeAreaView>
  );
};

const SaveLocationForm = ({ user, toggleMenu, updateLocs }) => {
  const [locName, setLocName] = useState('');
  const [isShared, setIsShared] = useState(false);

  const toggleSwitch = () => setIsShared(!isShared);

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
    const res = await fetch(`http://${IP}:${PORT}/locations`, {
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
        category: 'User Created',
        shared: isShared,
        id: JSON.parse(user).id,
      }),
    });

    if (res.ok) {
      Alert.alert('Location Successfully Created!');
      setLocName('');
      updateLocs({
        name: locName,
        data: {
          name: locName,
          coordinate: {
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
          },
          category: 'User Created',
        },

        category: 'User Created',
      });
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
      <View className="flex-row items-center">
        <TouchableOpacity className="bg-blue-500 p-3 mt-3 rounded-lg" onPress={handlePress}>
          <Text className="font-bold text-white">Save</Text>
        </TouchableOpacity>
        <View className="mt-3 ml-3 items-center">
          <Switch
            trackColor={{ false: '#767577', true: '#81b0ff' }}
            thumbColor={isShared ? '#f5dd4b' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isShared}
          />
          <Text className="font-thin text-xs">Share to others?</Text>
        </View>
      </View>
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
  const [locations, setLocations] = useState<LocationData[]>([]);
  const [filters, setFilters] = useState(['All']);
  const [filteredLocations, setFilteredLocations] = useState(locations);
  const [routes, setRoutes] = useState([]);
  const [filteredRoutes, setFilteredRoutes] = useState([]);
  const [trailFilters, setTrailsFilters] = useState<string[]>([]);

  const handleFilterChange = (filter: string) => {
    if (filter === 'All') {
      setFilteredLocations(locations);
    } else {
      const filteredLocations = locations.filter((location) => location.category === filter);

      setFilteredLocations(filteredLocations);
    }
  };

  const url = `http://${IP}:${PORT}/locations`;

  const getLocations = async () => {
    try {
      let url = `http://${IP}:${PORT}/locations`;
      if (user) {
        const userId = JSON.parse(user).id;
        url = `${url}?id=${userId}`;
      }
      const res = await fetch(url);
      const data = await res.json();

      const locs = data.filter((loc) => loc.category !== 'Trail' && loc.category !== 'Detours');
      const routes = data.filter(
        (route) => route.category == 'Trail' || route.category == 'Detours'
      );
      setLocations(locs);
      setRoutes(routes);
      setLocations(data);
    } catch (err) {
      Alert.alert('Failed retreiving locations from ' + url + ':\n' + err);
    }
  };

  interface LocationData {
    name: string;
    coordinate: {
      latitude: number;
      longitude: number;
    };
    data: object;
    category: string;
    shared: boolean;
    user_id: number;
  }

  const updateLocations = (data: LocationData) => {
    setLocations([...locations, data]);
  };

  const getFilters = async () => {
    let categories = locations.map((location) => location.category);
    categories = ['All', ...new Set(categories), 'Detours', 'Trails'];
    setFilters(categories);
  };

  const getTrailsFilters = async () => {
    const trailNames = routes.map((route) => route.name.replace(/_/g, ' '));
    setTrailsFilters(trailNames);
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
    getFilters();
  }, [user]);

  useEffect(() => {
    setFilteredLocations(locations);
    setFilteredRoutes(routes);
    getTrailsFilters();
  }, [locations]);

  const GOOGLE_MAPS_APIKEY = 'AIzaSyCISRwlj-aGFTavGORK9keVX_NDSQnddgg'; // API KEY GOES HERE

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
        {filteredLocations.map((location, index) => {
          if (user && JSON.parse(user).id === location.user_id) {
            return (
              <Marker
                pinColor="blue"
                key={index}
                coordinate={location.data.coordinate}
                title={location.name}
                description="Your Saved location"
              />
            );
          } else if (location.category === 'User Created' && location.shared === true) {
            return (
              <Marker
                pinColor="violet"
                key={index}
                coordinate={location.data.coordinate}
                title={location.name}
                description="User Shared Location"
              />
            );
          } else {
            return (
              <Marker key={index} coordinate={location.data.coordinate} title={location.name} />
            );
          }
        })}

        {/* Render routes */}
        {filteredRoutes.map((route, index) => (
          <MapViewDirections
            key={index}
            origin={route.data.origin}
            destination={route.data.destination}
            waypoints={route.data.waypoints}
            apikey={GOOGLE_MAPS_APIKEY}
            strokeWidth={4}
            strokeColor={route.data.color}
            mode="BICYCLING"
          />
        ))}
      </MapView>

      {/* <SaveLocationButton /> */}
      {isFormShowing ? (
        <SaveLocationForm user={user} toggleMenu={showForm} updateLocs={updateLocations} />
      ) : null}

      {user ? (
        <TouchableOpacity
          className="absolute bottom-2.5 right-20 bg-white h-14 w-14 shadow-sm shadow-black rounded-full items-center justify-center"
          onPress={showForm}>
          <Icon name="plus" size={25} color="gray" />
        </TouchableOpacity>
      ) : null}
      <FilterMenu
        onFilterChange={handleFilterChange}
        filters={filters}
        trailFilters={trailFilters}
      />
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
