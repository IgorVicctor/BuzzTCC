import React from 'react';
import { View, Text } from 'react-native';
import {styles} from './style'

export default function Configuracao(){
    return(
        <View style={styles.container}>
        <View style={styles.header}></View>
        <Text>Configuração</Text>
    </View>
    );
}