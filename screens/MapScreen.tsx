import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { useState, useEffect } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE, Polyline } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import Icon from 'react-native-vector-icons/FontAwesome';

// Array containing routes
const routes = [
  {
    name: 'Main Trail',
    origin: { latitude: 38.600965462971374, longitude: -121.50765757838927 },
    destination: { latitude: 38.72037950565309, longitude: -121.17076352917755 },
    category: 'Main Trail',
    color: 'blue',
  },
  {
    name: 'Main Trail Detour Entry',
    origin: { latitude: 38.600965462971374, longitude: -121.50765757838927 },
    destination: { latitude: 38.72037950565309, longitude: -121.17076352917755 },
    category: 'Detours',
    color: 'blue',
  },
  {
    name: 'Sutters Landing Detour',
    origin: { latitude: 38.590483969028746, longitude: -121.4637211538975 },
    destination: { latitude: 38.59172491827984, longitude: -121.45267615696736 },
    category: 'Detours',
    waypoints: [{ latitude: 38.59603202184708, longitude: -121.45581294794904 }],
    color: 'green',
  },
  {
    name: 'Discovery Park Detour',
    origin: { latitude: 38.60527869606378, longitude: -121.50165425166544 },
    destination: { latitude: 38.60777594241219, longitude: -121.49113416450984 },
    waypoints: [{ latitude: 38.60737924598301, longitude: -121.49689998237149 }],
    color: 'green',
    category: 'Detours',
  },
  /*
  {
    name: 'Discovery Park Detour 2',
    origin: { latitude: 38.60629134363177, longitude: -121.48118419875337 },
    destination: { latitude: 38.60418516745356, longitude: -121.47606920201163 },
    color: 'red',
    category: 'Detours',
  },
  */

  {
    name: 'Detour 2',
    origin: { latitude: 38.60326773609043, longitude: -121.47832294022723 },
    destination: { latitude: 38.60167855120967, longitude: -121.47592079533992 },
    waypoints: [
      { latitude: 38.602829338394514, longitude: -121.47789359452386 },
      { latitude: 38.60204503099383, longitude: -121.47685476155792 },
      { latitude: 38.60159163150144, longitude: -121.47612927887276 },
      { latitude: 38.60167855120967, longitude: -121.47592079533992 },
    ],
    color: 'green',
    category: 'Detours',
  },
  {
    name: 'Bushy Lake Detour',
    origin: { latitude: 38.589408143466976, longitude: -121.4457866070772 },
    destination: { latitude: 38.58545785533885, longitude: -121.43943993055643 },
    waypoints: [{ latitude: 38.589293523644734, longitude: -121.44013438095945 }],
    color: 'green',
    category: 'Detours',
  },
  {
    name: 'Bushy Lake Detour 2',
    origin: { latitude: 38.590924442199544, longitude: -121.44509027717766 },
    destination: { latitude: 38.58488481134608, longitude: -121.4234295059619 },
    waypoints: [
      { latitude: 38.58830112177107, longitude: -121.44220850678059 },
      { latitude: 38.58562980970669, longitude: -121.43236454357879 },
    ],
    color: 'green',
    category: 'Detours',
  },

  {
    name: 'Bushy Lake Detour 3',
    origin: { latitude: 38.599287334071875, longitude: -121.470906504243942 },
    destination: { latitude: 38.589030146404085, longitude: -121.44559989045959 },
    waypoints: [
      { latitude: 38.59167584013484, longitude: -121.46896993703102 },
      //{ latitude: 38.58668746951959, longitude: -121.42625320047216 },
      //{ latitude: 38.58563569578197, longitude: -121.42733410423197 },
    ],
    color: 'green',
    category: 'Detours',
  },
  /*
  {
    name: 'Bushy Lake Detour 4',
    origin: { latitude: 38.59444106153106, longitude: -121.47220885281507},
    destination: { latitude: 38.58960829022105, longitude: -121.46402094198307 },
    waypoints: [
      { latitude: 38.59024242906584, longitude: -121.46794880647575 },
      //{ latitude: 38.59167584013484, longitude: -121.46896993703102},
      //{ latitude: 38.58668746951959, longitude: -121.42625320047216 },
      //{ latitude: 38.58563569578197, longitude: -121.42733410423197 },

    ],
    color: 'green',
    category: 'Detours',
  },
  */
  {
    name: 'Chicken Ranch Slough Detour 1',
    origin: { latitude: 38.58407322630793, longitude: -121.42086357957902 },
    destination: { latitude: 38.57639465311465, longitude: -121.41929523659552 },
    waypoints: [{ latitude: 38.581405102758964, longitude: -121.41930314365375 }],
    color: 'green',
    category: 'Detours',
  },
  {
    name: 'Northgate Detour',
    origin: { latitude: 38.606329522865664, longitude: -121.4811508842855 },
    destination: { latitude: 38.60419382858358, longitude: -121.47608006320786 },
    waypoints: [{ latitude: 38.6032634647662, longitude: -121.47830769995326 }],
    color: 'green',
    category: 'Detours',
  },

  {
    name: 'Sacramento Northern Bikeway',
    sacNorthernBikewayDetourOrigin: {
      latitude: 38.59928178887417,
      longitude: -121.47091915570296,
    },
    sacNorthernBikewayDetourDestination: {
      latitude: 38.58901254038459,
      longitude: -121.44556221025182,
    },
    sacNorthernBikewayDetourWaypoints: [
      { latitude: 38.59443768704671, longitude: -121.47220147187774 },
      { latitude: 38.59121732542066, longitude: -121.4700945479088 },
      { latitude: 38.591918183607234, longitude: -121.46932224892282 },
      { latitude: 38.590992628946594, longitude: -121.46600917898135 },
      { latitude: 38.59121732542066, longitude: -121.4700945479088 },
    ],
    color: 'green',
    category: 'Detours',
  },

  {
    name: 'Hand Country Detour',
    origin: { latitude: 38.57057382788769, longitude: -121.36636232497902 },
    destination: { latitude: 38.575579418257284, longitude: -121.35569097681481 },
    waypoints: [{ latitude: 38.572631409592155, longitude: -121.36158112515947 }],
    color: 'green',
    category: 'Detours',
  },
  {
    name: 'Lake Natoma Detour',
    origin: { latitude: 38.67616280844026, longitude: -121.19177016386676 },
    destination: { latitude: 38.677657560476135, longitude: -121.18991815643204 },
    waypoints: [{ latitude: 38.6765852668612, longitude: -121.19074055046124 }],
    color: 'green',
    category: 'Detours',
  },
  {
    name: 'Mississippi Bar Detour',
    origin: { latitude: 38.64353486061595, longitude: -121.20299445613719 },
    destination: { latitude: 38.64690993427883, longitude: -121.1991590459741 },
    waypoints: [{ latitude: 38.64539947465579, longitude: -121.19999797663044 }],
    color: 'green',
    category: 'Detours',
  },
  {
    name: 'The Maze (Mississippi Bar routes)',
    origin: { latitude: 38.64163857314163, longitude: -121.21598191002577 },
    destination: { latitude: 38.64320842998242, longitude: -121.2092024792368 },
    waypoints: [
      { latitude: 38.642508798224455, longitude: -121.21572712625046 },
      { latitude: 38.65221945437654, longitude: -121.20975225595659 },
      { latitude: 38.644159352518734, longitude: -121.20698667339236 },
    ],
    color: 'green',
    category: 'Detours',
  },
  {
    name: 'The Maze Part 2',
    origin: { latitude: 38.64961883632559, longitude: -121.21143401825768 },
    destination: { latitude: 38.64777769387297, longitude: -121.19841531448154 },
    waypoints: [
      { latitude: 38.64528625593303, longitude: -121.20661104156353 },
      { latitude: 38.64670491355134, longitude: -121.20138085908374 },
    ],
    color: 'green',
    category: 'Detours',
  },
  {
    name: 'The Maze Part 3',
    origin: { latitude: 38.643126579884715, longitude: -121.21170945936659 },
    destination: { latitude: 38.643513314718646, longitude: -121.2044952514092 },
    waypoints: [
      { latitude: 38.64326622752144, longitude: -121.21120363474535 },
      { latitude: 38.64239234530375, longitude: -121.21041698787985 },
      { latitude: 38.64286622764662, longitude: -121.20652247899513 },
      { latitude: 38.64332558677425, longitude: -121.2050417369228 },
      { latitude: 38.645219764776805, longitude: -121.20618620078086 },
      { latitude: 38.644708384726485, longitude: -121.20502590559079 },
      { latitude: 38.64389270725571, longitude: -121.20529570679591 },
      { latitude: 38.643513314718646, longitude: -121.2044952514092 },
    ],
    color: 'green',
    category: 'Detours',
  },
  {
    name: 'Maze part 4',
    origin: { latitude: 38.64333529705541, longitude: -121.20503141808254 },
    destination: { latitude: 38.643538671466935, longitude: -121.2030030516149 },
    waypoints: [{ latitude: 38.643501976838024, longitude: -121.20426348984766 }],
    color: 'green',
    category: 'Detours',
  },
  {
    name: 'Maze part 5',
    origin: { latitude: 38.6499462165382, longitude: -121.207699122778 },
    destination: { latitude: 38.65466946156907, longitude: -121.19753897877204 },
    color: 'green',
    category: 'Detours',
  },
  {
    name: 'Maze part 6',
    origin: { latitude: 38.65102913080559, longitude: -121.20660455371194 },
    destination: { latitude: 38.65198083247032, longitude: -121.20404230658983 },
    waypoints: [{ latitude: 38.651762719945836, longitude: -121.20550291470819 }],
    color: 'green',
    category: 'Detours',
  },
  {
    name: 'natoDetour',
    origin: { latitude: 38.660057592510405, longitude: -121.19389765810588 },
    destination: { latitude: 38.66390167483912, longitude: -121.19143909497473 },
    waypoints: [{ latitude: 38.66182556627685, longitude: -121.19168782435848 }],
    color: 'green',
    category: 'Detours',
  },
  {
    name: 'Rollingwood Bluffs Detour',
    origin: { latitude: 38.663661349654596, longitude: -121.19164294284198 },
    destination: { latitude: 38.678266009048805, longitude: -121.19200665883201 },
    waypoints: [
      { latitude: 38.66450343436691, longitude: -121.19151452483335 },
      { latitude: 38.665211380269746, longitude: -121.19071515871924 },
      { latitude: 38.66899525145031, longitude: -121.19145324832704 },
    ],
    color: 'green',
    category: 'Detours',
  },
  {
    name: 'Winding Oak Detour',
    origin: { latitude: 38.65385992304501, longitude: -121.19850312780667 },
    destination: { latitude: 38.65805506487841, longitude: -121.19579292670646 },
    waypoints: [{ latitude: 38.65750890223851, longitude: -121.19832969294588 }],
    color: 'green',
    category: 'Detours',
  },
  {
    name: 'Horse Shoe mountain',
    origin: { latitude: 38.64795930465733, longitude: -121.19828001851998 },
    destination: { latitude: 38.65794255613158, longitude: -121.19598303038617 },
    waypoints: [{ latitude: 38.654961088184756, longitude: -121.19466239802186 }],
    color: 'green',
    category: 'Detours',
  },
  {
    name: 'Riverside Detour',
    origin: { latitude: 38.6140577819654, longitude: -121.30277821471043 },
    destination: { latitude: 38.61504508590347, longitude: -121.30230501176928 },
    waypoints: [{ latitude: 38.61467664960665, longitude: -121.30265290363009 }],
    color: 'green',
    category: 'Detours',
  },
  {
    name: 'Amer River Bike Trail - South Segment',
    origin: { latitude: 38.63335511952656, longitude: -121.22379402184592 },
    destination: { latitude: 38.67834173042786, longitude: -121.17983718590781 },
    color: 'cyan',
    category: 'Detours',
  },
  {
    name: 'Two Rivers Bike Trail 1',
    origin: { latitude: 38.59963966203273, longitude: -121.50401303624145 },
    destination: { latitude: 38.59587250958346, longitude: -121.47745939416757 },
    color: 'orange',
    category: 'Two Rivers Trail',
  },
  {
    name: 'Two Rivers Bike Trail 2',
    origin: { latitude: 38.587381294929926, longitude: -121.46165916463383 },
    destination: { latitude: 38.58690928767762, longitude: -121.44792142724404 },
    color: 'orange',
    category: 'Two Rivers Trail',
  },
  /*
  {
    name: 'placeholder',
    origin: { latitude: 38.60326773609043, longitude: -121.47832294022723 },
    destination: { latitude: 38.60167855120967, longitude: -121.47592079533992 },
    waypoints: [{ latitude: 38.602829338394514, longitude: -121.47789359452386 }],
    color: 'green',
    category: 'Detours',
  },
  */
];

// Array containing points of interest on the map
const locations = [
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

// Filters array
const filters = [
  'All',
  'Parkway',
  'Parking',
  'Restroom',
  'Picnic Areas',
  'Bike Trail Access',
  'Boat Ramp',
  'Equestrian Staging Area',
  'Main Trail',
  'Detours',
  'Two Rivers Trail',
];

// Create a type for the props expected by FilterMenu
interface FilterMenuProps {
  onFilterChange: (filter: string) => void;
}

// Implement the FilterMenu component using the type for props
const FilterMenu: React.FC<FilterMenuProps> = ({ onFilterChange }) => {
  const navigation = useNavigation();
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
          {filters.map((filter) => (
            <TouchableOpacity key={filter} onPress={() => handleFilterChange(filter)}>
              <Text style={selectedFilter === filter ? styles.selectedFilterText : styles.menuText}>
                {filter}
              </Text>
              {filter.includes('Trail') ? (
                <View>
                  <TouchableOpacity onPress={() => navigation.navigate('Information', {
                    title: filter,
                    body: 'This is a trail',
                  })}>
                    <Text>Information</Text>
                  </TouchableOpacity>
                </View>
              ) : null}
            </TouchableOpacity>
          ))}
        </View>
      )}
    </SafeAreaView>
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
  const [filteredRoutes, setFilteredRoutes] = useState(routes);

  const handleFilterChange = (filter: string) => {
    if (filter === 'All') {
      setFilteredLocations(locations);
      setFilteredRoutes(routes);
    } else {
      const filteredLocations = locations.filter((location) => location.category === filter);
      const filteredRoutes = routes.filter((route) => route.category === filter);

      setFilteredLocations(filteredLocations);
      setFilteredRoutes(filteredRoutes);
    }
  };

  useEffect(() => {
    setFilteredLocations(locations);
  }, []);

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

  const GOOGLE_MAPS_APIKEY = 'candy'; // API KEY GOES HERE

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
        {/* Render Locations} Render locations*/}
        {filteredLocations.map((location, index) => (
          <Marker key={index} coordinate={location.coordinate} title={location.name} />
        ))}

        {/* Render routes */}
        {filteredRoutes.map((route, index) => (
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
