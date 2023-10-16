import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, Alert } from 'react-native';
import { styles } from './style';
import BackButtonHandler from '../../BackButtonHandler';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';

export default function Perfil({ navigation }) {
  const [userData, setUserData] = useState({
    nome: '',
    cidade: '',
    faculdade: '',
    curso: '',
    periodo: '',
    matricula: '',
  });

  const [userImage, setUserImage] = useState(null);

  useEffect(() => {
    const loadUserData = async () => {
      try {
        const id = await AsyncStorage.getItem('idTeste');
        const response = await axios.get(`http://192.168.31.95:8080/api/usuarios/${id}`);
        const user = response.data;
  
        setUserData({
          nome: user.nome,
          cidade: user.cidade,
          faculdade: user.faculdade,
          curso: user.curso,
          periodo: user.periodo,
          matricula: user.matricula,
        });
  
        setUserImage(user.imagem);
      } catch (error) {
        console.error('Erro: ', error);
      }
    };
  
    loadUserData();
  }, []);
  

  const openImagePicker = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1,
      });

      if (!result.canceled) {
        const base64Image = await convertImageToBase64(result.assets[0].uri);

        setUserImage(base64Image);
      }
    } catch (error) {
      console.error('Erro ao abrir a galeria de imagens:', error);
    }
  };

  const convertImageToBase64 = async (imageUri) => {
    try {
      const fileInfo = await FileSystem.getInfoAsync(imageUri);
      if (fileInfo.exists) {
        const fileData = await FileSystem.readAsStringAsync(imageUri, {
          encoding: FileSystem.EncodingType.Base64,
        });
        return fileData;
      } else {
        console.error('Arquivo da imagem não encontrado');
      }
    } catch (error) {
      console.error('Erro na conversão da imagem:', error);
    }
  };

  const handleAtualizar = async () => {
    try {
      const id = await AsyncStorage.getItem('idTeste');
      const formData = new FormData();

      if (userImage) {
        formData.append('imagem', userImage);
      }

      formData.append('nome', userData.nome);
      formData.append('cidade', userData.cidade);
      formData.append('faculdade', userData.faculdade);
      formData.append('curso', userData.curso);
      formData.append('periodo', userData.periodo);
      formData.append('matricula', userData.matricula);

      const response = await axios.put(
        `http://192.168.31.95:8080/api/usuarios/${id}`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      Alert.alert(
        'Atualização Realizada',
        'Seus dados foram atualizados com sucesso!',
        [
          {
            text: 'OK',
            onPress: () => {
              navigation.goBack();
            },
          },
        ]
      );
    } catch (error) {
      console.error('Erro na atualização:', error);
    }
  };

  return (
    <BackButtonHandler navigation={navigation}>
      <View style={styles.container}>
        <View style={styles.header}>
          {userImage ? (
            <Image style={styles.avatar} source={{ uri: `data:image/png;base64,${userImage}` }} />
          ) : (
            <Image
              style={styles.avatar}
              source={{
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzO5Fb637v1B6CAONSt4mGfckCw1gM8tHaJw&usqp=CAU',
              }}
            />
          )}
          <TouchableOpacity onPress={openImagePicker}>
            <Text style={styles.buttonFoto}>Selecionar foto</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.containerInput}>
          <TextInput
            style={styles.input}
            placeholder="Nome"
            value={userData.nome}
            onChangeText={(text) => setUserData({ ...userData, nome: text })}
          />
          <TextInput
            style={styles.input}
            placeholder="Cidade"
            value={userData.cidade}
            onChangeText={(text) => setUserData({ ...userData, cidade: text })}
          />
          <TextInput
            style={styles.input}
            placeholder="Faculdade"
            value={userData.faculdade}
            onChangeText={(text) => setUserData({ ...userData, faculdade: text })}
          />
          <TextInput
            style={styles.input}
            placeholder="Curso"
            value={userData.curso}
            onChangeText={(text) => setUserData({ ...userData, curso: text })}
          />
          <TextInput
            style={styles.input}
            placeholder="Período"
            value={userData.periodo}
            onChangeText={(text) => setUserData({ ...userData, periodo: text })}
          />
          <TextInput
            style={styles.input}
            placeholder="Matrícula"
            value={userData.matricula}
            onChangeText={(text) => setUserData({ ...userData, matricula: text })}
          />
          <TouchableOpacity style={styles.button} onPress={handleAtualizar}>
            <Text style={styles.buttonText}>Atualizar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </BackButtonHandler>
  );
}
