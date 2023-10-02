import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, TextInput, Button, Linking, TouchableOpacity, ScrollView, Image, StyleSheet, Modal} from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';

const Parks = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container}>
          <View style={styles.header}>
          <Image
        source={require('../../assets/DonateNow.jpg')}
        style={{ width: '100%', height: 200 }}
      />
              <Text style={styles.headerTitle1}>                         VISIT</Text>
          </View>

          <View>
          <Text style={{ fontSize: 12, marginBottom: 10, fontWeight: 'bold'}}>Parks & Features of the Parkway
      </Text>

      <Text>The American River Parkway has over a dozen access points. These access points feature areas to fish, swim, kayak, or run, as well as paint, relax, or watch a sunset. The paved Jedediah Smith Memorial Trail runs the length of the Parkway and beyond while a separate multi-use dirt trail meanders near the bike
         trail from Discovery Park to Nimbus Fish Hatchery and into the Folsom Lake SRA. Various parks on the Parkway and different amenities are listed below.
      <Text>                                                                          </Text>
        To find accommodations near the American River Parkway, visit <Text style={{color: 'blue', textDecorationLine: 'underline'}} onPress={() => Linking.openURL('https://www.hotelscombined.com/Place/American_River_Parkway.htm')}>HotelsCombined</Text></Text>
          </View>
          <Text></Text>
        <View>
            <Text style={{ fontSize: 12, marginBottom: 10, fontWeight: 'bold'}}>Park Passes</Text>
            <Text>Access all parks in the Sacramento County Regional Parks system with an annual pass! Includes Parkway access points and seven additional Regional Parks. Passes are valid for a 12-month period from month purchased.<Text style={{color: 'blue', textDecorationLine: 'underline'}} onPress={() => Linking.openURL('https://arpf.org/?product_cat=parks-passes')}>More information</Text></Text>
        </View>
        <Text></Text>

        <View>
    <Text style={{ fontSize: 12, marginBottom: 10, fontWeight: 'bold'}}>Parks Status</Text>
    <Text>
        <Text style={{color: 'blue', textDecorationLine: 'underline'}} onPress={() => Linking.openURL('https://www.hotelscombined.com/Place/American_River_Parkway.htm')}>Check the status</Text>
        <Text> of a park or trail on the American River Parkway for closures or construction. To contact a </Text>
        <Text style={{color: 'blue', textDecorationLine: 'underline'}} onPress={() => Linking.openURL('https://regionalparks.saccounty.gov/Rangers/Pages/RangerStewardship.aspx')}>Sacramento County Parks Ranger</Text>
        <Text> please call 916.875.PARK (7275).</Text>
    </Text>
        </View>
        
        <Text></Text>

        <View style={{ flexDirection: 'row', flex: 1 }}>
        <View style={{ flex: 1 }}>
            <Image
            source={require('../../assets/parks/dicovery.jpg')}
            style={{ width: '100%', height: 200 }}
            />

        </View>

        <View style={{ flex: 1, paddingHorizontal: 10 }}>
        <Text style={styles.headerTitle }> Discovery Park</Text>
            <Text style={styles.bulletPoint}>• Archery range</Text>
            <Text style={styles.bulletPoint}>• Bike trail access</Text>
            <Text style={styles.bulletPoint}>• Boat ramp</Text>
            <Text style={styles.bulletPoint}>• Equestrian staging area</Text>
            <Text style={styles.bulletPoint}>• Horseshow pits</Text>
            <Text style={styles.bulletPoint}>• Picnic areas</Text>
            <Text style={styles.bulletPoint}>• Picnic areas for  reservations w/ BBQs & hot coal pits</Text>
        </View>
        </View>

        <Text></Text>
        <View style={{ flexDirection: 'row', flex: 1 }}>
        <View style={{ flex: 1 }}>
            <Image
            source={require('../../assets/parks/william_b_pond.jpg')}
            style={{ width: '100%', height: 200 }}
            />

        </View>

        <View style={{ flex: 1, paddingHorizontal: 10 }}>
        <Text style={styles.headerTitle }> William B. Pond</Text>
            <Text style={styles.bulletPoint}>• American River Parkway Foundation office</Text>
            <Text style={styles.bulletPoint}>• Equestrian staging area</Text>
            <Text style={styles.bulletPoint}>• Bike trail access</Text>
            <Text style={styles.bulletPoint}>• Fishing pond</Text>
            <Text style={styles.bulletPoint}>• Picnic areas</Text>
            <Text style={styles.bulletPoint}>• Picnic areas</Text>
        </View>
        </View>


        <Text></Text>
        <View style={{ flexDirection: 'row', flex: 1 }}>
        <View style={{ flex: 1 }}>
            <Image
            source={require('../../assets/parks/ancil_hoffman.jpg')}
            style={{ width: '100%', height: 200 }}
            />

        </View>

        <View style={{ flex: 1, paddingHorizontal: 10 }}>
        <Text style={styles.headerTitle }>Ancil Hoffman Park</Text>
            <Text style={styles.bulletPoint}>• Effie Yeaw Nature Center</Text>
            <Text style={styles.bulletPoint}>• Equestrian staging area Golf course</Text>
            <Text style={styles.bulletPoint}>• Picnic areas</Text>
        </View>
        </View>


        <Text></Text>
        <View style={{ flexDirection: 'row', flex: 1 }}>
            <View style={{ flex: 1 }}>
                <Image
                source={require('../../assets/parks/sacramento-bar.jpg')}
                style={{ width: '100%', height: 200 }}
                />
            </View>
            <View style={{ flex: 1, paddingHorizontal: 10 }}>
                <Text style={styles.headerTitle }> Sacramento Bar</Text>
                <Text style={styles.bulletPoint}>• Bike trail access</Text>
                <Text style={styles.bulletPoint}>• Water trail – popular put-in spot for rafters and kayakers</Text>
            </View>
        </View>


        <Text></Text>
        <View style={{ flexDirection: 'row', flex: 1 }}>
            <View style={{ flex: 1 }}>
                <Image
                source={require('../../assets/parks/sailorbar310x216.jpg')}
                style={{ width: '100%', height: 200 }}
                />
            </View>
            <View style={{ flex: 1, paddingHorizontal: 10 }}>
                <Text style={styles.headerTitle }> Sailor Bar (off Illinois Ave.)</Text>
                <Text style={styles.bulletPoint}>• Boat ramp (small watercraft)</Text>
                <Text style={styles.bulletPoint}>• Equestrian staging area</Text>
                <Text style={styles.bulletPoint}>• Picnic areas</Text>
            </View>
        </View>

        <Text></Text>
        <View style={{ flexDirection: 'row', flex: 1 }}>
            <View style={{ flex: 1 }}>
                <Image
                source={require('../../assets/parks/bike-route-1-300x209.jpg')}
                style={{ width: '100%', height: 200 }}
                />
            </View>
            <View style={{ flex: 1, paddingHorizontal: 10 }}>
                <Text style={styles.headerTitle }> Ethan Way</Text>
                <Text style={styles.bulletPoint}>• Bushy Lake</Text>
                <Text style={styles.bulletPoint}>• Pilot mountain bike loop</Text>
                <Text style={{color: 'blue', textDecorationLine: 'underline'}} onPress={() => Linking.openURL('https://regionalparks.saccounty.gov/Parks/PublishingImages/Pilot%20Map%20with%20Title.PNG')}>Trial Map</Text>
            </View>
        </View>

        <Text></Text>
        <View style={{ flexDirection: 'row', flex: 1 }}>
            <View style={{ flex: 1 }}>
                <Image
                source={require('../../assets/parks/discovery-park.jpg')}
                style={{ width: '100%', height: 200 }}
                />
            </View>
            <View style={{ flex: 1, paddingHorizontal: 10 }}>
                <Text style={styles.headerTitle }> Paradise Beach</Text>
                <Text style={styles.bulletPoint}>• Picnic areas</Text>
                <Text style={styles.bulletPoint}>• Sandy beach</Text>
                <Text style={styles.bulletPoint}>• Walk-in access, no parking fees</Text>
            </View>
        </View>

        <Text></Text>
        <View style={{ flexDirection: 'row', flex: 1 }}>
            <View style={{ flex: 1 }}>
                <Image
                source={require('../../assets/parks/howe-access.jpg')}
                style={{ width: '100%', height: 200 }}
                />
            </View>
            <View style={{ flex: 1, paddingHorizontal: 10 }}>
                <Text style={styles.headerTitle }> Howe Ave. River Access (off of La Riviera Dr.)</Text>
                <Text style={styles.bulletPoint}>• Boat ramp (small watercraft)</Text>
                <Text style={styles.bulletPoint}>• Bike trail access</Text>
                <Text style={styles.bulletPoint}>• Picnic areas</Text>
            </View>
        </View>

        <Text></Text>
        <View style={{ flexDirection: 'row', flex: 1 }}>
            <View style={{ flex: 1 }}>
                <Image
                source={require('../../assets/parks/watt_ave.jpg')}
                style={{ width: '100%', height: 200 }}
                />
            </View>
            <View style={{ flex: 1, paddingHorizontal: 10 }}>
                <Text style={styles.headerTitle }> Watt Ave. River Access (off of La Riviera Dr.)</Text>
                <Text style={styles.bulletPoint}>• Boat ramp (small watercraft)</Text>
                <Text style={styles.bulletPoint}>• Bike trail access</Text>
                <Text style={styles.bulletPoint}>• Picnic areas</Text>
            </View>
        </View>

        <Text></Text>
        <View style={{ flexDirection: 'row', flex: 1 }}>
            <View style={{ flex: 1 }}>
                <Image
                source={require('../../assets/parks/river_bend.jpg')}
                style={{ width: '100%', height: 200 }}
                />
            </View>
            <View style={{ flex: 1, paddingHorizontal: 10 }}>
                <Text style={styles.headerTitle }> River Bend Park</Text>
                <Text style={styles.bulletPoint}>• Bike trail access</Text>
                <Text style={styles.bulletPoint}>• River Bend Outdoor Educational Site</Text>
                <Text style={styles.bulletPoint}>• Equestrian staging area</Text>
                <Text style={styles.bulletPoint}>• Horseshoe pit</Text>
                <Text style={styles.bulletPoint}>• Picnic areas</Text>
                <Text style={styles.bulletPoint}>• Water trail – popular take-out spot for rafters and kayakers</Text>
            </View>
        </View>

        <Text></Text>
        <View style={{ flexDirection: 'row', flex: 1 }}>
            <View style={{ flex: 1 }}>
                <Image
                source={require('../../assets/parks/ro_bar.jpg')}
                style={{ width: '100%', height: 200 }}
                />
            </View>
            <View style={{ flex: 1, paddingHorizontal: 10 }}>
                <Text style={styles.headerTitle }> Rossmoor Bar</Text>
                <Text style={styles.bulletPoint}>• Bike trail access</Text>
                <Text style={styles.bulletPoint}>• Picnic areas</Text>
                <Text style={styles.bulletPoint}>• San Juan rapids</Text>
            </View>
        </View>

        <Text></Text>
        <View style={{ flexDirection: 'row', flex: 1 }}>
            <View style={{ flex: 1 }}>
                <Image
                source={require('../../assets/parks/unrie_blvd_river.jpg')}
                style={{ width: '100%', height: 300 }}
                />
            </View>
            <View style={{ flex: 1, paddingHorizontal: 10 }}>
            <Text style={{ fontSize: 13, fontWeight: 'bold'}}> Sunrise Blvd. River Access</Text>
                <Text style={styles.headerTitle }> Lower Sunrise (west side area)</Text>
                <Text style={styles.bulletPoint}>• Bike trail access</Text>
                <Text style={styles.bulletPoint}>• Equestrian staging area</Text>
                <Text style={styles.bulletPoint}>• Horseshoe pit</Text>
                <Text style={styles.bulletPoint}>• Picnic areas</Text>
                <Text style={styles.bulletPoint}>• Water trail – popular put-in spot for rafters and kayakers</Text>
                <Text style={styles.headerTitle }> Upper Sunrise (east side area)</Text>
                <Text style={styles.bulletPoint}>• Bike trail access</Text>
                <Text style={styles.bulletPoint}>• Boat ramp (small watercraft)</Text>
                <Text style={styles.bulletPoint}>• Picnic areas</Text>
            </View>
        </View>

        <Text></Text>
        <Text></Text>
        <Text style={styles.headerTitle }> Discovery Park</Text>
        <View >
            <YoutubePlayer
                height={200}
                play={true}
                videoId="GbYhv0wx41M"
            />
        </View>

        <Text></Text>
        <Text></Text>
        <Text style={styles.headerTitle }> William B. Pond</Text>
        <View >
            <YoutubePlayer
                height={200}
                play={true}
                videoId="6zmm0ZeJiGU"
            />
        </View>

        <Text></Text>
        <Text></Text>
        <Text style={styles.headerTitle }>River Bend Park</Text>
        <View >
            <YoutubePlayer
                height={200}
                play={true}
                videoId="b782bpNVXS4"
            />
        </View>

        <Text></Text>
        <Text></Text>
        <Text style={styles.headerTitle }> Sunrise Recreation Area</Text>
        <View >
            <YoutubePlayer
                height={200}
                play={true}
                videoId="5R6sj9_OFHc"
            />
        </View>

                

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    paddingHorizontal: 16,
    backgroundColor: '#f7f7f7',
  },
  header: {
    position: 'relative',
    width: '100%',
    height: 200,
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  headerTitle1: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [
        { translateX: -171 },  // adjust based on the visual
        { translateY: -12 }    
    ],
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  headerTitle: {
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 1,
  },
  bulletPoint: {
    fontSize: 13,
   
},
});

export default Parks;




