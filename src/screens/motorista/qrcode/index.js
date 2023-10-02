import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import QRCodeSVG from 'react-native-qrcode-svg';
import { styles } from './style';
import BackButtonHandler from '../../BackButtonHandler';
import AsyncStorage from '@react-native-async-storage/async-storage'; 

export default function QRCode({ navigation }) {
  const [usuarioId, setUsuarioId] = useState(null); 
  useEffect(() => {
    const getUsuarioId = async () => {
      try {
        const id = await AsyncStorage.getItem('idTeste');
        if (id !== null) {
          setUsuarioId(id);
        }
      } catch (error) {
        console.error('Erro ao obter o ID do usuário:', error);
      }
    };
    getUsuarioId(); 
  }, []); 

  const valorQRCode = usuarioId.toString();

  return (
    <BackButtonHandler navigation={navigation}>
      <View style={styles.container}>
        <View style={styles.header}></View>
        <QRCodeSVG
          value={valorQRCode}
          size={250}
          color="black"
          backgroundColor="white"
        />
      </View>
    </BackButtonHandler>
  );
}
