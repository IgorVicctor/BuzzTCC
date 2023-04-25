import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './style'

export default function QRCode(){
    return(
        <View style={styles.container}>
        <View style={styles.header}></View>
        <Text>QRCode</Text>
    </View>
    );
}