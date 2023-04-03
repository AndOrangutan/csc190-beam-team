import { color } from '@rneui/base';
import { View, Text, SafeAreaView } from 'react-native';

const HomeScreen = () => {
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-sky-900">
      {/* <Text className="font-medium text-2xl text-blue-500">HomeScreen</Text> */}
      <View>

      </View>
      <View className='items-center justify-evenly bg-yellow-500 w-full h-60'>
        <Text className='font-bold text-white text-2xl mb-4'>The American River Parkway</Text>
        <Text className='text-center text-white text-lg'>Sacramento's urban gem! Spanning 23 miles and covering 4,800 acres, the parkway has become a mecca for outdoor
          enthusiasts and those looking to refresh or re-create themselves
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
