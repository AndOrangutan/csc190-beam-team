import { color } from '@rneui/base';
import { View, Text, SafeAreaView, Linking, ScrollView } from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';

const HomeScreen = () => {
  return (
    <SafeAreaView className="h-full items-center justify-center bg-sky-900">
      <ScrollView>
        {/* <Text className="font-medium text-2xl text-blue-500">HomeScreen</Text> */}
        <View className='h-60'></View>
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
        <View className='bg-[#44984E] p-2 items-center'>
          <Text className='font-bold text-white text-2xl mb-4 text-center'>The American River Parkway is in Crisis!</Text>
          <YoutubePlayer height={250} width={400} videoId={'Rti2dcophlE'} />
          <Text className='font-bold text-white text-1xl mb-4 text-center'>We need your help to hold our local leaders and municipal staff accountable!</Text>
          <Text className='text-center font-bold text-blue-700 text-sm underline' 
          onPress={() => {Linking.openURL("https://arpf.org/voiceoftheparkway/")}}>Learn More About the Voice of the Parkway Coalition</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
