import { useNavigation } from '@react-navigation/native';
import * as SecureStore from 'expo-secure-store';
import React, { useEffect } from 'react';
import { List } from 'react-native-paper';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  withSpring,
} from 'react-native-reanimated';
import { View, Text, Image, Linking } from 'react-native';

const MoreScreen = ({ logout }: any) => {
  const [user, setUser] = React.useState<any>(null);
  const navigation = useNavigation();

  const getUser = async () => {
    const user = await SecureStore.getItemAsync('user');
    if (user) {
      setUser(JSON.parse(user));
    }
  };

  const x = useSharedValue(500);

  const reanimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: x.value }],
    };
  });

  useEffect(() => {
    x.value = withTiming(0, { duration: 500 });
    x.value = withSpring(0, { damping: 10, stiffness: 100 });
    getUser();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <List.Item
        className="p-6 shadow-md bg-zinc-50"
        title="Donate Now"
        left={(props) => <List.Icon {...props} icon="cash" />}
        onPress={() => Linking.openURL("https://arpf.org/donation/")}
      />
      <List.Item
        className="p-6 shadow-md bg-zinc-50"
        title="Park Passes"
        left={(props) => <List.Icon {...props} icon="parking" />}
        onPress={() => Linking.openURL("https://shop.arpf.org/?product_cat=parks-passes")}
      />
      <List.Item
        className="p-6 shadow-md bg-zinc-50"
        title="Contact Us"
        left={(props) => <List.Icon {...props} icon="phone" />}
        onPress={() => Linking.openURL("https://arpf.org/contact-us/")}
        
      />
      {/* Image component */}
      <Image
        source={require('../assets/Sunset.jpg')}
        style={{ width: '100%', height: 300, resizeMode: 'cover' }}
      />

<View style={{position: 'absolute',
    top: 270,
    left: 0,
    right: 0,
    bottom: 0,
    opacity:.6 ,
    height:250,
    backgroundColor:'white'}}/>


      <Text style={{ position: 'absolute',
    top: 280,
    left: 140,
    fontSize: 24,
    fontWeight: 'bold',}}>
        MISSION
      </Text>
      <Text style={{ textAlign: 'center', paddingBottom: 220, fontSize: 20, position:'absolute', bottom: 0 }}>
        The American River Parkway Foundation (APRF) leads and inspires the community to conserve and nurture the American River Parkway as a unique, accessible resource for everyone to enjoy.
      </Text>
    </View>

      {/* Viste the Parkway dropdown list */}
      <List.Accordion style={{ padding: 30 }} title="Visit the parkway">
        <List.Item
          className="p-6 shadow-md bg-zinc-50"
          title="Parks"
          left={(props) => <List.Icon {...props} icon="flower" />}
          onPress={() => {
            navigation.navigate('parks');
          }}
        />
        <List.Item
          className="p-6 shadow-md bg-zinc-50"
          title="Park Passes"
          left={(props) => <List.Icon {...props} icon="parking" />}
          onPress={() => {
            navigation.navigate('ParkPass');
          }}
        />
        <List.Item
          className="p-6 shadow-md bg-zinc-50"
          title="Interactive Map"
          left={(props) => <List.Icon {...props} icon="map-marker" />}
          onPress={() => {
            navigation.navigate('Interactive Map');
          }}
        />
        <List.Item
          className="p-6 shadow-md bg-zinc-50"
          title="We Love the Parkway"
          left={(props) => <List.Icon {...props} icon="heart" />}
          onPress={() => {
            navigation.navigate('We Love The ParkWay');
          }}
        />
        <List.Item
          className="p-6 shadow-md bg-zinc-50"
          title="Face of the  Parkway"
          left={(props) => <List.Icon {...props} icon="tag-faces" />}
          onPress={() => {
            navigation.navigate('Face Of The ParkWay');
          }}
        />
      </List.Accordion>

      {/* Logout button if user is signed in and Login button if not*/}
      {user ? (
        <List.Item
          className="p-6 shadow-md bg-zinc-50"
          title="Logout"
          left={(props) => <List.Icon {...props} icon="logout" />}
          onPress={() => logout()}
        />
      ) : (
        <List.Item
          className="p-6 shadow-md bg-zinc-50"
          title="Login"
          left={(props) => <List.Icon {...props} icon="login" />}
          onPress={() => logout()}
        />
      )}
    </Animated.ScrollView>

  );
};

export default MoreScreen;
