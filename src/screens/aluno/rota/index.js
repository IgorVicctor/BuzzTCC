import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './style'

export default function Rota(){
    return(
        <View style={styles.container}>
        <View style={styles.header}></View>
        <Text>Rota</Text>
    </View>
    );
}