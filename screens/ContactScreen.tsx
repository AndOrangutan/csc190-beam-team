//import React, { Component } from 'react';
import { View, Text } from 'react-native';
import WebView from 'react-native-webview';

const ContactScreen = () => {
  return (
    <WebView
      source={{
        uri: 'https://arpf.org/contact-us/',
      }}
      //style={{ marginTop: -650}}
    />
  );
};

export default ContactScreen;
