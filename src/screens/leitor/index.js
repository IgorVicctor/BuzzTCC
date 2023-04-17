import React, { useState, useEffect } from 'react';
import {styles} from './style';
import { View, Text, Button, TouchableOpacity } from "react-native";
import { BarCodeScanner } from 'expo-barcode-scanner';

export default function Leitor(){
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    const [text, setText] = useState();

    const askForCameraPermission = () => {
        (async () => {
          const { status } = await BarCodeScanner.requestPermissionsAsync();
          setHasPermission(status === 'granted');
        })()
      }
    
      useEffect(() => {
        askForCameraPermission();
      }, []);
    
      if (hasPermission === null) {
        return (
          <View style={styles.container}>
            <Text>Pedindo a permissão para usar a câmera</Text>
          </View>)
      }
      if (hasPermission === false) {
        return (
          <View style={styles.container}>
            <Text style={{ margin: 10 }}>Sem acesso à câmera</Text>
            <Button title={'Permitir câmera'} onPress={() => askForCameraPermission()} />
          </View>)
      }

      const handleBarCodeScanned = ({ data }) => {
    
          console.log(data);
          setText("");
          setScanned(true);
        };
    
    return(
        <View style={styles.container}>
            <View style={styles.header}></View>

            <View style={styles.barcodebox}>
                <BarCodeScanner
                    onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                    style={{ height: 500, width: 530 }} />
            </View>

            {scanned && <Button title={'Scannear de novo?'} onPress={() => setScanned(false)} color='#2c88d9' style={styles.teste} />}

            <Text style={styles.maintext}>{text}</Text>

            <TouchableOpacity style={{backgroundColor: '#2c88d9', top: 40, width: "35%"}}>
                <Text style={[styles.maintext, {color:"#fff", fontWeight: 'bold', textAlign: "center"}]}>Iniciar Leitura</Text>
            </TouchableOpacity>

        </View>
    );
}