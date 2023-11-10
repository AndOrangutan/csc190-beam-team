import { useNavigation } from '@react-navigation/native';
import * as SecureStore from 'expo-secure-store';
import React, { useEffect, useLayoutEffect } from 'react';
import { View, Text, Image, Linking, ImageBackground } from 'react-native';
import { List } from 'react-native-paper';

const MoreScreen = ({ user, handleAuth }: any) => {
  const navigation = useNavigation();
  // const [user, setUser] = React.useState<any>(null);
  // const navigation = useNavigation();

  // const getUser = async () => {
  //   const user = await SecureStore.getItemAsync('user');
  //   if (user) {
  //     setUser(JSON.parse(user));
  //   }
  // };

  // useEffect(() => {
  //   getUser();
  // }, []);

  return (
    <View style={{ flex: 1 }}>
      <List.Item
        className="p-6 shadow-md bg-zinc-50"
        title="Donate Now"
        left={(props) => <List.Icon {...props} icon="cash" />}
        onPress={() => Linking.openURL('https://arpf.org/donation/')}
      />
      <List.Item
        className="p-6 shadow-md bg-zinc-50"
        title="Park Passes"
        left={(props) => <List.Icon {...props} icon="parking" />}
        onPress={() => Linking.openURL('https://shop.arpf.org/?product_cat=parks-passes')}
      />
      <List.Item
        className="p-6 shadow-md bg-zinc-50"
        title="Contact Us"
        left={(props) => <List.Icon {...props} icon="phone" />}
        onPress={() => Linking.openURL('https://arpf.org/contact-us/')}
      />
      {user ? (
        <List.Item
          className="p-6 shadow-md bg-zinc-50"
          title="Logout"
          left={(props) => <List.Icon {...props} icon="logout" />}
          onPress={() => handleAuth()}
        />
      ) : (
        <List.Item
          className="p-6 shadow-md bg-zinc-50"
          title="Login"
          left={(props) => <List.Icon {...props} icon="login" />}
          onPress={() => handleAuth()}
        />
      )}

      {/* Mission Statement */}
      <View className="flex-1">
        <ImageBackground
          source={require('../assets/Sunset.jpg')}
          resizeMode="cover"
          className="flex-1 justify-center items-center ">
          <View
            className="absolute top-0 left-0 bottom-0 right-0"
            style={{ backgroundColor: 'rgba(0,0,0,0.3)' }}
          />
          <Text className="font-bold text-white uppercase text-2xl">Mission</Text>
          <Text className="text-white shadow-lg shadow-black text-lg text-center p-4">
            The American River Parkway Foundation (APRF) leads and inspires the community to
            conserve and nurture the American River Parkway as a unique, accessible resource for
            everyone to enjoy.
          </Text>
        </ImageBackground>
      </View>

      {/* Image component
      <Image
        source={require('../assets/Sunset.jpg')}
        style={{ width: '100%', height: 300, resizeMode: 'cover' }}
      />

      <View
        style={{
          position: 'absolute',
          top: 360,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.6,
          height: 250,
          backgroundColor: 'white',
        }}
      >

      <Text style={{ position: 'absolute', top: 370, left: 140, fontSize: 24, fontWeight: 'bold' }}>
        MISSION
      </Text>
      <Text
        style={{
          textAlign: 'center',
          paddingBottom: 220,
          fontSize: 20,
          position: 'absolute',
          bottom: 0,
        }}>
        The American River Parkway Foundation (APRF) leads and inspires the community to conserve
        and nurture the American River Parkway as a unique, accessible resource for everyone to
        enjoy.
      </Text>
      </View> */}
    </View>

    /* Logout button if user is signed in and Login button if not*/
  );
};

export default MoreScreen;
