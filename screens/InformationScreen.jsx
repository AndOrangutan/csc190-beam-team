import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

// Mapping trail names to their respective information
const trailInfoMap = {
  'Main Trail': `
Hours and Fees:
The park is open year-round from sunrise to sunset.
Self-payment is required if no fee collector is present.

Park Fees:

$6 Vehicle
$12 Vehicles with Trailer (ex. Boat or Horse) or RV
$24​ Bus
Special Event fees vary by event.

Picnics Allowed: Yes

Additional Information:
Rules of Trail Courtesy: 

Those on foot should stay on the left “soft” shoulder
Bike riders and in-line skaters should stay on the paved path, right of the yellow line.
A 15 mph speed limit is enforced.
Passing on the paved path should only be done on the left, with a verbal warning, like “on your left”.
Horses are not allowed on the paved trail surface except at trail crossings and bridges. Please yield to horses whenever they are encountered
`,
'Two Rivers Trail': `
States: California
Counties: Sacramento
Length: 1.7 miles
Trail end points: Tiscornia Park at Jibboom St. and American River at N. 12th St./SR 160
Trail surfaces: Asphalt
Trail category: Greenway/Non-RT
ID: 7239126
Activities:
Bike
Inline Skating
Fishing
Wheelchair Accessible
Walking
`,
  // You can add more trails and their info here in a similar format.
};

const InformationScreen = ({ route, navigation }) => {
  const { title } = route.params;

  // Fetch the trail information from the mapping, default to an empty string if not found
  const trailInfo = trailInfoMap[title] || '';

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.info}>{trailInfo}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: 'white',
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  info: {
    fontSize: 16,
    lineHeight: 24,
  },
});

export default InformationScreen;
