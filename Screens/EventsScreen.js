import React from "react";
import { View,Text, Button, StyleSheet } from "react-native";

const EventScreen = ({event}) =>{
    return(
        <View style={styles.container}>
            <Text>EventScreen</Text>
            <Button title="clickhere"
            onpress={() => alert ('Button Pressed')}
            />

        </View>
    );
}

export default EventScreen;

const styles= StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent:'center',
        backgroundColor: '#8fcbbc'
    },

});