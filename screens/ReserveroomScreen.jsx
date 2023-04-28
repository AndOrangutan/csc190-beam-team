import React from 'react'
import { View, Text } from 'react-native'
import WebView from 'react-native-webview'

const ReserveroomScreen = () => {
  return (
    <WebView
      source={{
        uri: 'https://arpf.org/conferenceroom/',
      }}
      style={{ marginTop: 20}}
      />
  );
};

export default ReserveroomScreen