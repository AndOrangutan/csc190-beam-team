import React from 'react';
import {SafeAreaView, View, Image, StyleSheet } from 'react-native';

export default function HomeScreen() {
    return (
      <View style = {styles.container}>
        <View style = {styles.header}>
          <Image
          source={require('../assets/logo-1.png')}
          style={styles.header}
          />
        </View>
      </View>
    )
  }

  const styles = StyleSheet.create({
    container: {
      paddingTop: 0,
    },
    header: {
      //position: 'absolute',
      width : 46,
      height: 50,
      backgroundColor: 'WHITE',
    },
    });