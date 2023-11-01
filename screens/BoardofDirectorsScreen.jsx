import React from 'react';
import { View, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

const BoardofDirectorsScreen = () => {
  return (
    <SafeAreaView className="h-full items-center justify-center">
      <ScrollView className="w-10/12">
        {/* EC Title */}
        <View>
          <Text className="font-bold text-center text-black text-2xl p-2">Executive Committee</Text>
        </View>

        {/* EC Tiles */}
        <View className="items-center justify-evenly bg-cyan-300 w-600 p-4">
          <Text className="font-bold text-white text-2xl mb-4">Dustin Luton - President</Text>
          <Text className="text-center text-black text-lg mb-4">Golden 1 Credit Union</Text>
        </View>

        <View className="items-center justify-evenly p-4"></View>

        <View className="items-center justify-evenly bg-cyan-300 w-600 p-4">
          <Text className="font-bold text-white text-2xl mb-4">John Costa - Vice President</Text>
          <Text className="text-center text-black text-lg mb-4">PG&E</Text>
        </View>

        <View className="items-center justify-evenly p-4"></View>

        <View className="items-center justify-evenly bg-cyan-300 w-600 p-4">
          <Text className="font-bold text-white text-2xl mb-4">Mike Rizzo - Past President</Text>
          <Text className="text-center text-black text-lg mb-4">Five Star Bank</Text>
        </View>

        <View className="items-center justify-evenly p-4"></View>

        <View className="items-center justify-evenly bg-cyan-300 w-600 p-4">
          <Text className="font-bold text-white text-2xl mb-4">Jonathan Deeringer - Treasurer</Text>
          <Text className="text-center text-black text-lg mb-4">Deeringer Wealth Management</Text>
        </View>

        <View className="items-center justify-evenly p-4"></View>

        <View className="items-center justify-evenly bg-cyan-300 w-600 p-4">
          <Text className="font-bold text-white text-2xl mb-4">Ryan Drury - Secretary</Text>
          <Text className="text-center text-black text-lg mb-4">Pacific Neon</Text>
        </View>

        <View className="items-center justify-evenly p-4"></View>

        {/* BOD Title */}
        <View>
          <Text className="font-bold text-center text-black text-2xl p-2">Board of Directors</Text>
        </View>

        {/* BOD Tiles */}
        <View className="items-center justify-evenly bg-cyan-300 w-600 p-4">
          <Text className="font-bold text-white text-2xl mb-4">Christian Brown</Text>
          <Text className="text-center text-black text-lg mb-4">Teichert Materials</Text>
        </View>

        <View className="items-center justify-evenly p-4"></View>

        <View className="items-center justify-evenly bg-cyan-300 w-600 p-4">
          <Text className="font-bold text-white text-2xl mb-4">Keith Coolidge</Text>
          <Text className="text-center text-black text-lg mb-4">Consultant</Text>
        </View>

        <View className="items-center justify-evenly p-4"></View>

        <View className="items-center justify-evenly bg-cyan-300 w-600 p-4">
          <Text className="font-bold text-white text-2xl mb-4">Karen Doron</Text>
          <Text className="text-center text-black text-lg mb-4">CalSTRS</Text>
        </View>

        <View className="items-center justify-evenly p-4"></View>

        <View className="items-center justify-evenly bg-cyan-300 w-600 p-4">
          <Text className="font-bold text-white text-2xl mb-4">Steve Kustin</Text>
          <Text className="text-center text-black text-lg mb-4">SMUD</Text>
        </View>

        <View className="items-center justify-evenly p-4"></View>

        <View className="items-center justify-evenly bg-cyan-300 w-600 p-4">
          <Text className="font-bold text-white text-2xl mb-4">Dean O'Brien</Text>
          <Text className="text-center text-black text-lg mb-4">
            Office of Statewide Health Planning & Development
          </Text>
        </View>

        <View className="items-center justify-evenly p-4"></View>

        <View className="items-center justify-evenly bg-cyan-300 w-600 p-4">
          <Text className="font-bold text-white text-2xl mb-4">Matt Ocko</Text>
          <Text className="text-center text-black text-lg mb-4">City of Roseville</Text>
        </View>

        <View className="items-center justify-evenly p-4"></View>

        <View className="items-center justify-evenly bg-cyan-300 w-600 p-4">
          <Text className="font-bold text-white text-2xl mb-4">David Pai</Text>
          <Text className="text-center text-black text-lg mb-4">
            Capital Nephrology Medical Group
          </Text>
        </View>

        <View className="items-center justify-evenly p-4"></View>

        <View className="items-center justify-evenly bg-cyan-300 w-600 p-4">
          <Text className="font-bold text-white text-2xl mb-4">Laurel Laird</Text>
          <Text className="text-center text-black text-lg mb-4">Summit Strategy Group</Text>
        </View>

        <View className="items-center justify-evenly p-4"></View>

        <View className="items-center justify-evenly bg-cyan-300 w-600 p-4">
          <Text className="font-bold text-white text-2xl mb-4">Jim Jargent</Text>
          <Text className="font-bold text-white text-2xl mb-4">Don Wreden, MD</Text>
          <Text className="font-bold text-white text-2xl mb-4">Dianna Poggetto</Text>
        </View>

        <View className="items-center justify-evenly p-4"></View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default BoardofDirectorsScreen;
