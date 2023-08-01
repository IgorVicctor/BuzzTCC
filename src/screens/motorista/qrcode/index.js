import React from 'react';
import {View, Text, Image} from 'react-native';
import {styles} from './style'
import BackButtonHandler from '../../BackButtonHandler';

import qrcodeexemplo from '../../../../assets/qrcodeexemplo.jpg'

export default function QRCode({navigation}){
    return(
        <BackButtonHandler navigation={navigation}>
        <View style={styles.container}>
            <View style={styles.header}></View>
            <Image source={qrcodeexemplo} style={{ width: 300, height: 300 }} />
        </View>
        </BackButtonHandler>
    );
}