import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import {styles} from './style';
import BackButtonHandler from '../BackButtonHandler';

export default function Configuracao({ navigation }) {
  const [showDriverText, setShowDriverText] = useState(false);
  const [showVehicleText, setShowVehicleText] = useState(false);
  const [showAboutText, setShowAboutText] = useState(false);

  const toggleDriverText = () => {
    setShowDriverText(!showDriverText);
  };

  const toggleVehicleText = () => {
    setShowVehicleText(!showVehicleText);
  };

  const toggleAboutText = () => {
    setShowAboutText(!showAboutText);
  };

  return (
    <BackButtonHandler navigation={navigation}>
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={{ flexDirection: 'row', marginTop: 15 }}>
          <Image
            style={styles.avatar}
            source={{
              uri:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzO5Fb637v1B6CAONSt4mGfckCw1gM8tHaJw&usqp=CAU',
            }}
          />
          <View style={{ justifyContent: 'center', marginLeft: 20, marginTop: 5 }}>
            <Text style={{ fontSize: 15, fontWeight: '500', color: '#CCCCCC' }}>Olá,{'\n'}</Text>
            <Text style={{ fontSize: 15, fontWeight: '500', color: '#fff', bottom: 18 }}>teste</Text>
          </View>
        </View>
      </View>
      <View style={{ width: '100%', height: '78%', bottom: 0, position: 'absolute' }}>
        <TouchableOpacity style={styles.option} onPress={toggleDriverText}>
          <Text style={styles.optionText}>Motorista</Text>
        </TouchableOpacity>
        {showDriverText && (
          <Text style={styles.optionDescription}>Texto específico sobre Motorista</Text>
        )}

        <TouchableOpacity style={styles.option} onPress={toggleVehicleText}>
          <Text style={styles.optionText}>Veículo</Text>
        </TouchableOpacity>
        {showVehicleText && (
          <Text style={styles.optionDescription}>Texto específico sobre Veículo</Text>
        )}

        <TouchableOpacity style={styles.option} onPress={toggleAboutText}>
          <Text style={styles.optionText}>Sobre</Text>
        </TouchableOpacity>
        {showAboutText && (
          <Text style={styles.optionDescription}>Texto específico sobre Sobre</Text>
        )}

        <TouchableOpacity style={styles.logoutButton} onPress={() => navigation.navigate('Login')}>
          <Text style={styles.logoutButtonText}>Sair</Text>
        </TouchableOpacity>
      </View>
    </View>
    </BackButtonHandler>
  );
}
