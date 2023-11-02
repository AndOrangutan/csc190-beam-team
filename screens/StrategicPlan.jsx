import { Link } from '@react-navigation/native';
import React from 'react';
import { Image, Linking, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const StrategicPlan = () => {
  return (
    <View className="justify-start items-start pb-3">
      <ScrollView className="w-full">
        <View className="w-full h-52 flex-row">
          <Image
            source={{ uri: 'https://arpf.org/wp-content/uploads/IMG_20220423_104207-300x400.jpg' }}
            className="w-1/2 h-full"
          />
          <Image
            source={{ uri: 'https://arpf.org/wp-content/uploads/IMG_20211002_090602-300x400.jpg' }}
            className="w-1/2 h-full"
          />
        </View>
        <View className="w-full h-52 flex-row">
          <Image
            source={{ uri: 'https://arpf.org/wp-content/uploads/IMG_20220211_113729-300x400.jpg' }}
            className="w-1/2 h-full "
          />
          <Image
            source={{ uri: 'https://arpf.org/wp-content/uploads/IMG_4653-300x400.jpg' }}
            className="w-1/2 h-full "
          />
        </View>
        <View className="items-center p-1">
          <Text className="text-[#44984E] font-bold text-xl underline uppercase m-4">Overview</Text>
          <Text className="text-center">
            The American River Parkway Foundation (ARPF) developed a set of goals that will help
            transform the American River Parkway (Parkway) from a regional treasure into one of the
            nation's premier urban parks.
          </Text>
        </View>
        <View className="items-center p-1">
          <Text className="text-[#44984E] font-bold text-xl underline uppercase m-4 text-center">
            GOAL 1: ENHANCE THE USER EXPERIENCE
          </Text>
          <Text className="text-center font-bold text-xs">
            Create an accessible, educational and rejuvenating experience for all visitors.
          </Text>
          <Text className="text-center">
            ARPF intends to improve the community awareness of and access to the Parkway and enhance
            the overall user experience. This will include: working on and raising awareness of key
            infrastructure projects, developing and implementing an Interpretive Plan, working with
            the County of Sacramento to reimagine current events, working with other organizers on
            additional events that can be held on the Parkway, encouraging more educational activity
            on the Parkway and convening stakeholders to discuss and implement community-driven
            solutions for addressing illegal camping.
          </Text>
        </View>

        <View className="items-center p-1">
          <Text className="text-[#44984E] font-bold text-xl underline uppercase m-4 text-center">
            GOAL 2: CONSERVATION AND RESTORATION OF THE PARKWAY
          </Text>
          <Text className="text-center font-bold text-xs">
            Increase conservation and restoration efforts across the American River Parkway.
          </Text>
          <Text className="text-center">
            ARPF continues to explore new ways to increase conservation efforts on the Parkway. The
            next phase will be to establish new and diversified volunteer positions, prioritize
            potential projects like invasive plant removal, create opportunities for growth of
            native plants, restore burned areas, develop fire mitigation plans through our American
            River Parkway Fire Safe Council and push for the finalization of the Natural Resources
            Management Plan.
          </Text>
          <Text className="text-center mt-3">
            Through these efforts, ARPF will continue to meet and exceed invasive plant management
            goals, increase the number of volunteers and volunteer hours dedicated to conservation
            and trash removal activities and reduce the number of fires on the Parkway.
          </Text>
        </View>

        <View className="items-center p-1">
          <Text className="text-[#44984E] font-bold text-xl underline uppercase m-4 text-center">
            GOAL 3: DEVELOP A LOWER PARKWAY REVIVAL PLAN
          </Text>
          <Text className="text-center font-bold text-xs">
            Develop and gain support for a Revival Plan for the lower portion of the Parkway, from
            Discovery Park to Cal Expo.
          </Text>
          <Text className="text-center">
            The Lower Parkway continues on a path toward reaching its full potential. To get there,
            ARPF wants to work with a diverse group of stakeholders to identify needed improvements
            and enhancements as well as explore grant opportunities to support these efforts. This
            would be completed in conjunction with the County of Sacramento and City of Sacramento.
          </Text>
        </View>
        <View className="items-center p-1">
          <Text className="text-[#44984E] font-bold text-xl underline uppercase m-4 text-center">
            GOAL 4: STRENGTHEN THE FOUNDATION
          </Text>
          <Text className="text-center font-bold text-xs">
            Continue to increase the visibility, diversity and organizational capacity of the
            American River Parkway Foundation and secure the resources to achieve our Mission.
          </Text>
          <Text className="text-center">
            ARPF is exploring new ways to benefit the Parkway by strengthening itself. Opportunities
            lie within improving and expanding the Membership Program, expanding the partnership
            with Sacramento County Regional Parks, building brand awareness among the community,
            constructing a strong development plan and focusing on overall diversity internally and
            externally.
          </Text>
          <Text className="font-bold mt-4">
            See the full{' '}
            <Text
              className="text-blue-700"
              onPress={() => {
                Linking.openURL(
                  'https://arpf.org/wp-content/uploads/ARPF-Strategic-Plan-Final.pdf'
                );
              }}>
              Parkway Foundation Strategic Plan
            </Text>
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default StrategicPlan;
