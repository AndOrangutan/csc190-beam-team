import React from 'react';
import { Text, View, StyleSheet, ScrollView, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const MissionScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container}>
          <View style={styles.header}>
              <Image source={{ uri: 'https://arpf.org/wp-content/uploads/2023/05/oaks1346x408.jpg' }} style={styles.image} />
              <Text style={styles.headerTitle}>MISSION, VISION, AND VALUES </Text>
          </View>

                  
        <Text style={styles.sectionTitle}>Vision:</Text>
        <Text style={styles.sectionContent}>The American River Parkway to be one of the nation’s premier urban natural parks.</Text>

        <Text style={styles.sectionTitle}>Mission:</Text>
        <Text style={styles.sectionContent}>The American River Parkway Foundation (APRF) leads and inspires the community to conserve and nurture the American River Parkway as a unique, accessible resource for everyone to enjoy.</Text>

        <Text style={styles.sectionTitle}>Values:</Text>
        <View style={styles.valueItem}>
            <Text style={styles.valueBold}>Volunteerism</Text>
            <Text> – We recognize our responsibility and commitment to nurturing and maintaining the Parkway. Our volunteers are essential to our success.</Text>
        </View>
        <View style={styles.valueItem}>
            <Text style={styles.valueBold}>Conservation</Text>
            <Text> – We respect nature. We are passionate about the environment and are committed stewards of the natural habitats that are a place of respite, recreation, and rejuvenation to our community.</Text>
        </View>
        <View style={styles.valueItem}>
            <Text style={styles.valueBold}>Leadership</Text>
            <Text> – We strive to be the Parkway’s advocate. We collaborate, convene, and build partnerships that protect and promote the Parkway. We recognize and appreciate that diverse people, ideas, thinking, and beliefs expand our perspectives.</Text>
        </View>
        <View style={styles.valueItem}>
            <Text style={styles.valueBold}>Education</Text>
            <Text> – We stand for learning. Environmental education helps us understand how to exist harmoniously with nature and conserve this environment for future generations.</Text>
        </View>
        <View style={styles.valueItem}>
            <Text style={styles.valueBold}>Community Access</Text>
            <Text> – The Parkway is for all. We are committed to breaking down barriers that prevent people in our diverse communities from enjoying the Parkway.</Text>
        </View>
        <View style={styles.valueItem}>
            <Text style={styles.valueBold}>Integrity</Text>
            <Text> – We take the opportunity to learn from our mistakes and seek to improve. We are self-aware, accountable, and responsible for our actions.</Text>
        </View>
        <View style={styles.valueItem}>
            <Text style={styles.valueBold}>Health and Wellness</Text>
            <Text> – We promote health and wellness now and in the future.</Text>
        </View>
        <View style={styles.valueItem}>
            <Text style={styles.valueBold}>Fun</Text>
            <Text> – Fun is important. We work hard but we also play, socialize, laugh, and share in nature.</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    paddingHorizontal: 16,
    backgroundColor: '#f7f7f7',
  },
  header: {
    position: 'relative',
    width: '100%',
    height: 200,
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  headerTitle: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [
        { translateX: -171 },  // adjust based on the visual
        { translateY: -12 }    
    ],
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  sectionContent: {
    fontSize: 16,
    marginBottom: 20,
  },
  valueItem: {
    flexDirection: 'row',
    marginBottom: 10,
    flexWrap: 'wrap',   // Add wrapping to ensure text doesn't get cut off
  },
  valueBold: {
    fontWeight: 'bold',
  },
});

export default MissionScreen;




