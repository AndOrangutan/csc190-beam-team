import React, { useEffect } from 'react';
import * as SecureStore from 'expo-secure-store';
import { List } from 'react-native-paper';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  withSpring,
} from 'react-native-reanimated';
import { View, Text, Image, Linking } from 'react-native';

const MoreScreen = ({ navigation }: { navigation: any }) => {
  const x = useSharedValue(500);

  const reanimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: x.value }],
    };
  });

  useEffect(() => {
    x.value = withTiming(0, { duration: 500 });
    x.value = withSpring(0, { damping: 10, stiffness: 100 });
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
  );
};

export default MoreScreen;
