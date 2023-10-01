import React, { Component } from 'react';
import { View, Text } from 'react-native';
import WebView from 'react-native-webview';

const NewsScreen = () => {
  return (
    <WebView
      source={{
        uri: 'https://arpf.org/coverage/',
      }}
      //style={{ marginTop: -700 }}
    />
  );
};

export default NewsScreen;
