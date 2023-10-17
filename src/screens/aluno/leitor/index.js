import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import axios from 'axios';
import BackButtonHandler from '../../BackButtonHandler';
import { styles } from './style';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Leitor({ navigation }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanearCodigo, SetScanearCodigo] = useState(false);
  const [text, setText] = useState('');

  const [usuarioId, setUsuarioId] = useState();

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

  const userId = `${usuarioId}`;

  const askForCameraPermission = async () => {
    const { status } = await BarCodeScanner.requestPermissionsAsync();
    setHasPermission(status === 'granted');
  };

  useEffect(() => {
    // Solicitar permissão da câmera quando o componente estiver montado e visível na tela.
    const unsubscribe = navigation.addListener('focus', () => {
      askForCameraPermission();
    });

    // Certifique-se de cancelar a inscrição quando o componente for desmontado.
    return unsubscribe;
  }, [navigation]);

  const handleBarCodeScanned = async ({ data }) => {
    if (scanearCodigo) return; // Stop scanning if the code has been scanned
    console.log(data);
    setText(data);
    SetScanearCodigo(true); // Mark the code as scanned

    try {
      const response = await axios.post(
        `https://tiresome-wool-production.up.railway.app/onibus/adicionar-aluno/${data}/${userId}`
      );
      console.log(response.data);

      if (response.status === 200) {
        Alert.alert('Sucesso', response.data);
      } else {
        Alert.alert('Erro', response.data);
      }
    } catch (error) {
      Alert.alert('Erro', response.data);
    }
  };

  const restartScanning = () => {
    SetScanearCodigo(false); // Allow scanning again
    setText(''); // Clear the text
  };

  return (
    <BackButtonHandler navigation={navigation}>
      <View style={styles.container}>
        <View style={styles.header}></View>

        {hasPermission && (
          <View style={styles.barcodebox}>
            <BarCodeScanner
              onBarCodeScanned={scanearCodigo ? undefined : handleBarCodeScanned} // Only handle scans if the code has not been scanned
              style={{ height: 500, width: 530 }}
            />
          </View>
        )}

        {/* <Text style={styles.maintext}>{text}</Text> */}

        <TouchableOpacity
          style={{
            backgroundColor: '#2c88d9',
            top: 40,
            width: '35%',
          }}
          onPress={restartScanning} // Restart scanning
        >
          <Text
            style={[
              styles.maintext,
              { color: '#fff', fontWeight: 'bold', textAlign: 'center' },
            ]}
          >
            Iniciar Leitura
          </Text>
        </TouchableOpacity>
      </View>
    </BackButtonHandler>
  );
}
