/* eslint-disable prettier/prettier */
import { color } from '@rneui/base';
import { View, Text, SafeAreaView, Linking, ScrollView, Image, Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import YoutubePlayer from 'react-native-youtube-iframe';

const HomeScreen = () => {

  // get dimensions of the display
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  // array of arp images (placeholders for cards)
  const arpImages = [
    { id: 1, image: require('../assets/arp1-new.png') },
    { id: 2, image: require('../assets/arp2-new.png') },
    { id: 3, image: require('../assets/arp3-new.png') },
  ];

  // render images in the carousel
  const renderArpImage = ({ item }: { item: { id: number; image: any } }) => {
    return (
      <Image source={item.image} style={{ width: windowWidth, height: windowWidth / 16 * 9, resizeMode: 'contain' }} />
    );
  };

  return (
    <SafeAreaView className="h-full items-center justify-center bg-sky-900">
      <ScrollView className='w-full'>
        {/* <Text className="font-medium text-2xl text-blue-500">HomeScreen</Text> */}

        {/* Carousel of images */}
        <View style={{height:windowWidth / 16 * 9, width:windowWidth}}>
          <Carousel
            data={arpImages}
            renderItem={renderArpImage}
            sliderWidth={windowWidth}
            itemWidth={windowWidth}
          />
        </View>

        {/* First Section/First Block */}
        <View className="items-center justify-evenly bg-yellow-500 w-full p-4">
          <Text className="font-bold text-white text-2xl mb-4">The American River Parkway</Text>
          <Text className="text-center  text-white text-lg mb-4">
            Sacramento's urban gem! Spanning 23 miles and covering 4,800 acres, the parkway has become
            a mecca for outdoor enthusiasts and those looking to refresh or re-create themselves
          </Text>
          <Text className='text-center text-blue-700 font-bold text-sm underline' 
          onPress={() => {Linking.openURL("https://arpf.org/visit/")}}>
            Learn More About the Parkway
          </Text>
        </View>

        {/* Section with Youtube Video */}
        <View className='bg-[#44984E] p-2 items-center'>
          <Text className='font-bold text-white text-2xl mb-4 text-center'>The American River Parkway is in Crisis!</Text>
          <YoutubePlayer height={250} width={400} videoId={'Rti2dcophlE'} />
          <Text className='font-bold text-white text-1xl mb-4 text-center'>We need your help to hold our local leaders and municipal staff accountable!</Text>
          <Text className='text-center font-bold text-blue-700 text-sm underline' 
          onPress={() => {Linking.openURL("https://arpf.org/voiceoftheparkway/")}}>Learn More About the Voice of the Parkway Coalition</Text>
        </View>

        {/* Gray background section with images and text */}
        <View className='bg-[#CACBCE]'>
            {/* Public affairs */}
            <View className='flex-row items-center p-2 gap-3'>
              <Image source={{uri: "https://arpf.org/wp-content/uploads/DJI_0009-scaled.jpg"}} style={{height: 200, width: 200, resizeMode: 'contain'}} />
              <View className='flex-1 items-center'>
                <Text className='text-[#303031] font-bold text-lg'>Public Affairs</Text>
                <Text className='text-center'>Over the past few years, American River Parkway Foundation 
                  supporters increasingly requested that we take a more proactive 
                  role in voicing Parkway concerns. <Text className='font-bold'>We listened!</Text>
                </Text>
                <Text className='font-bold text-xs text-blue-700' onPress={() => {Linking.openURL("https://arpf.org/public-affairs/")}}>See How We're Finding Solutions</Text>
              </View>
            </View>
            {/* Parkway in Peril */}
            <View className='flex-row items-center p-2 gap-3'>
              <Image source={{uri: "https://arpf.org/wp-content/uploads/Volunteer-Page-Graphics-6.png"}} style={{height: 200, width: 200, resizeMode: 'contain' }} />
              <View className='flex-1 items-center'>
                <Text className='text-[#303031] font-bold text-lg'>Parkway in Peril</Text>
                <Text className='text-center'>In 2021, more than 200 fires burned over 15% of 
                the Parkway. The American River Parkway Foundation developed Parkway in Peril to highlight the issue.
                </Text>
                <Text className='font-bold text-xs text-blue-700' onPress={() => {Linking.openURL("https://arpf.org/parkway-in-peril/")}}>View Parkway in Peril</Text>
              </View>
            </View>
        </View>
        {/* End of Gray section */}

        {/* Purple section */}
        <View className='bg-[#730040]'>
            {/* Volunteer */}
            <View className='flex-row items-center p-2 gap-3'>
              <Image source={{uri: "https://arpf.org/wp-content/uploads/Group-Clean-Ups.png"}} style={{height: 200, width: 200, resizeMode: 'contain'}} />
              <View className='flex-1 items-center'>
                <Text className='text-white font-bold text-lg'>Volunteer</Text>
                <Text className='text-center text-white'>Volunteers play an essential role in 
                conservation of the Parkway.
                </Text>
                <Text className='font-bold text-xs text-white' onPress={() => {Linking.openURL("https://arpf.org/volunteer/")}}>See How You Can Volunteer</Text>
              </View>
            </View>
            {/* American River Parkway Foundation Programs */}
            <View className='flex-row items-center p-2 gap-3'>
              <Image source={{uri: "https://arpf.org/wp-content/uploads/Infranstructure.png"}} style={{height: 200, width: 200, resizeMode: 'contain' }} />
              <View className='flex-1 items-center'>
                <Text className='text-white font-bold text-lg text-center'>American River Parkway Foundation Programs</Text>
                <Text className='text-center text-white'>The American River Parkway Foundation operates programs 
                that contribute to the conservation of the Parkway.
                </Text>
                <Text className='font-bold text-xs text-white' onPress={() => {Linking.openURL("https://arpf.org/what-we-do/programs/")}}>See our Programs</Text>
              </View>
            </View>
        </View>


      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
