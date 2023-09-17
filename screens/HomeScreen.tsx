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

  // Array of values
  const values = [
    { id: 1, image: 'https://arpf.org/wp-content/uploads/2023/05/icon-home1.jpg', 
    text: "Volunteers are essential to the ARPFachieving its mission",
    title: "Volunteerism",
    link: "https://arpf.org/volunteer/"
    },

    { id: 2, image: 'https://arpf.org/wp-content/uploads/2023/05/icon-home2.jpg', 
    text: "The ARPF is passionate about the environment and is committed to programs that enhance the American River Parkway's natural habitats as places for respite, recreation and rejuvenation.",
    title: "CONSERVATION",
    link: "https://arpf.org/what-we-do/programs/"
    },

    { id: 3, image: 'https://arpf.org/wp-content/uploads/2023/05/icon-home3.jpg', 
    text: "The Foundation strives to be the Parkway's advocate. We collaborate, convene and build partnerships to protect and promote the Parkway.",
    title: "Leadership",
    link: "https://arpf.org/public-affairs/"
    },

    { id: 4, image: 'https://arpf.org/wp-content/uploads/2023/05/icon-home4.jpg', 
    text: "The ARPF embraces environmental education in order to help us understand how to exist harmoniously with nature and conserve this environment for future generations.",
    title: "Education",
    link: "https://arpf.org/education/"
    },

    { id: 5, image: 'https://arpf.org/wp-content/uploads/2023/05/icon-home5.jpg', 
    text: "The ARPF is committed to breaking down barriers that prevent people in our diverse communities from enjoying the Parkway.",
    title: "Community Access",
    link: "https://arpf.org/education/river-bend-outdoor-educational-site/"
    },

    { id: 6, image: 'https://arpf.org/wp-content/uploads/2023/05/icon-home6.jpg', 
    text: "Fun is important. ARPF volunteers and staff work hard but they also play, socialize, laugh and share in nature.",
    title: "Fun",
    link: "https://arpf.org/give/"
    },

    { id: 7, image: 'https://arpf.org/wp-content/uploads/2023/05/icon-home7.jpg', 
    text: "We promote health and wellness now and in the future.",
    title: "HEALTH AND WELLNESS",
    link: "https://arpf.org/visit/"
    },

    { id: 8, image: 'https://arpf.org/wp-content/uploads/2023/05/icon-home8.jpg', 
    text: "We take the opportunity to learn from our mistakes and seek to improve.",
    title: "INTEGRITY",
    link: "https://arpf.org/volunteer/calendar/"
    },

  
  ]

  // render images in the carousel
  const renderArpImage = ({ item }: { item: { id: number; image: any } }) => {
    return (
      // Changed the highest to divide by 16 * 12
      <Image source={item.image} style={{ width: windowWidth, height: windowWidth / 16 * 9, resizeMode: 'stretch' }} />
    );
  };

  const ValuesCard = ({
    item,
  }: {
    item: { id: number; image: string; title: string; text: string; link: string };
  }) => {
    return (
      <View className="flex-row items-center justify-evenly flex-1">
        <Image
          source={{ uri: item.image }}
          style={{ height: 100, width: 100, resizeMode: 'contain' }}
        />
        <View className="flex-col gap-2 w-1/2">
          <Text className="text-center font-bold ">{item.title}</Text>
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

  return (
    <SafeAreaView className="h-full items-center justify-center bg-sky-900">
      <ScrollView className="w-full">
        {/* <Text className="font-medium text-2xl text-blue-500">HomeScreen</Text> */}

        {/* Carousel of images */}
        {/* Changed the highest to divide by 16 * 12 */}
        <View style={{height:windowWidth / 16 * 9, width:windowWidth}}>
          <Carousel
            data={arpImages}
            renderItem={renderArpImage}
            sliderWidth={windowWidth}
            itemWidth={windowWidth}
            loop={true}
          />
        </View>

        {/* First Section/First Block */}
      
        <View className="items-center justify-evenly bg-white w-full p-4">
          <Text className="text-center  text-black text-lg mb-4">
          The <Text className='font-bold'>American River Parkway Foundation (ARPF)</Text> is a Sacramento 501(c)(3) nonprofit charitable organization whose mission is to lead and 
          inspire the community to conserve and nurture the American River Parkway as a unique, accessible resource for everyone to enjoy. 
          Our headquarters is located in the William B. Pond Recreation Area on the American River Parkway. 
          </Text>
          <Text className="text-center  text-black text-lg mb-4">
          <Text className='font-bold'>The ARPF vision</Text> is for the American River 
          Parkway, which spans 23 miles and 4,800 acres, to be one of the nation's premier urban natural parks.
          </Text>
          <Text className="text-center font-bold text-black text-lg mb-4">
          We encourage you to contact the 
          American River Parkway Foundation and take an active and personal role in contributing to the success of the Parkway.
          </Text>
          <Text className="text-center font-bold text-black text-lg mb-4">
            The ARPF aims to accomplish 
            its mission by exercising the following values.
          </Text>

          {/* Values */}
          <View className="flex-row justify-center mt-10">
            <Carousel
              data={values}
              renderItem={ValuesCard}
              sliderWidth={10}
              itemWidth={windowWidth}
              autoplay={true}
              loop={true}
              autoplayInterval={3000}
              autoplayDelay={1000}
            />
          </View>
        </View>

        {/* Last section. Contact and email info. */}
        <View className='items-center justify-evenly bg-white w-full p-4'>
          <Text className='text-center  text-black text-lg mb-4'>
            Call the ARPF at (916) 486-2773. Our phones are answered Monday to Friday 8:30 AM to 4:30 PM (Pacific Time)
            by friendly, local and knowledgeable people who are dedicated to the American River Parkway.
          </Text>
          <Text className='text-center  text-black text-lg mb-4'>
            You may also <Text className='text-blue-800 font-bold' onPress={() => Linking.openURL("mailto:https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=info@arpf.org")}>send a 
            email</Text> or <Text className='text-blue-800 font-bold' onPress={() => Linking.openURL("https://arpf.org/contact-us/")}>click here</Text> to 
            complete the online information request. You may also visit us during our hours of operation at;
          </Text>
          <Text className='font-bold w-32 text-center'>
            5700 Arden Way
            Carmichael, CA 95608
          </Text>
        </View>

        
          
        
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
