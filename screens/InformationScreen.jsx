import { View, Text } from 'react-native'
import React from 'react'

const InformationScreen = ({route, navigation}) => {
    const {title, body }    = route.params
  return (
    <View>
      <Text>{title}</Text>
    </View>
  )
}

export default InformationScreen