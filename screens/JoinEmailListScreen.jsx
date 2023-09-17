import React, { Component } from 'react';
import { View, Text } from 'react-native';
import WebView from 'react-native-webview';

const JoinEmailListScreen = () => {
  return (
    <WebView
      source={{
        uri: 'https://us12.list-manage.com/subscribe?u=54174e738c9e6e830753f2c72&id=fcb6ee0911',
      }}
      style={{ marginTop: 20 }}
    />
  );
};

export default JoinEmailListScreen;
