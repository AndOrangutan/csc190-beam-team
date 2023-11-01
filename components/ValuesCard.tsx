import React from 'react';
import { View, Text, Image, Linking } from 'react-native';

const ValuesCard = ({
  item,
}: {
  item: { id: number; image: string; title: string; text: string; link: string };
}) => {
  return (
    <View className="flex-row items-center justify-evenly flex-1 mb-10">
      <Image
        source={{ uri: item.image }}
        style={{ height: 100, width: 100, resizeMode: 'contain' }}
      />
      <View className="flex-col gap-2 w-1/2">
        <Text className="text-center font-bold text-red-300">{item.title}</Text>
        <Text className="text-center">{item.text}</Text>
        <Text
          onPress={() => Linking.openURL(item.link)}
          className="text-center text-blue-800 shadow-sm">
          Learn More
        </Text>
      </View>
    </View>
  );
};

export default ValuesCard;
