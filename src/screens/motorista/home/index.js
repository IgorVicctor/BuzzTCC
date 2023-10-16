import React, { useState, useEffect } from "react";
import {styles} from './style';
import { View, Text, Image, ScrollView,  } from "react-native";
import BackButtonHandler from "../../BackButtonHandler";
import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from "axios";
import base64 from 'base64-js';
import moment from 'moment';

function WeekDay({ dia, data, diaSelecionado }) {
  return (
    <View style={styles.dia}>
      <Text style={styles.nomeDia}>{dia}</Text>
      <Text style={styles.numeroDia}>{data}</Text>
      {diaSelecionado && (
        <Text style={{ color: '#F16363', fontSize: 12, position: "absolute", top: 62 }}>●</Text>
      )}
    </View>
  );
}

export default function HomeMotorista({navigation}) {
    const [usuario, setUsuario] = useState();
    const [diaMarcados, setDiaMarcados] = useState([]);
    const [diaDaSemaana, setDiaDaSemaana] = useState([]);

    const fetchUserData = async () => {
      try {
        const token = await AsyncStorage.getItem("authToken");
        if (!token) return;
  
        const headers = {
          Authorization: `Bearer ${token}`,
        };
  
        const usuarioId = await AsyncStorage.getItem("idTeste");
        if (!usuarioId) return;
  
        const response = await axios.get(`http://192.168.31.95:8080/api/usuarios/${usuarioId}`, {
          headers,
        });
  
        if (response.status === 200) {
          const imageBuffer = response.data.imagem ? base64.toByteArray(response.data.imagem) : null;
          const imageUri = imageBuffer ? `data:image/jpeg;base64,${base64.fromByteArray(imageBuffer)}` : null;
  
          setUsuario({
            ...response.data,
            imagem: imageUri,
          });
  
          const diasSelecionados = response.data.selecionaDias.split(',').map(item => item.trim());
          const diaMarcados = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta"].map(dia => diasSelecionados.includes(dia));
          setDiaMarcados(diaMarcados);
        } else {
          console.error("Erro durante a requisição:", response.data);
        }
      } catch (error) {
        console.error("Erro durante a requisição:", error);
      }
    };

    useEffect(() => {
      const unsubscribe = navigation.addListener("focus", () => {
        fetchUserData();
      });
  
      return unsubscribe;
    }, [navigation]);
  
    useEffect(() => {
      const diaAtual = moment();
      const segunda = diaAtual.clone().startOf('Semana');
      const sexta = diaAtual.clone().startOf('Semana').add(4, 'days');
      const dataSemana = [segunda, segunda.clone().add(1, 'days'), segunda.clone().add(2, 'days'), segunda.clone().add(3, 'days'), sexta];
      setDiaDaSemaana(dataSemana.map(date => date.format("DD")));
    }, []);
  

    return (
        <BackButtonHandler navigation={navigation}>
          <View style={styles.container}>
            <View style={styles.header}>
              {usuario && usuario.imagem ? (
                <Image source={{ uri: usuario.imagem }} style={styles.avatar} />
              ) : (
                <Image
                  source={{
                    uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzO5Fb637v1B6CAONSt4mGfckCw1gM8tHaJw&usqp=CAU",
                  }}
                  style={styles.avatar}
                />
              )}
              <View style={styles.user}>
                <Text style={styles.name}>{usuario ? usuario.nome : "Carregando..."}</Text>
                <Text style={styles.userInfo}>
                  {usuario ? usuario.cidade : "Carregando..."}
                </Text>
              </View>
            </View>

            <View style={styles.menu}>
                <Text style={{alignSelf: "flex-start", fontSize: 18, paddingLeft: 10, paddingBottom: 5, fontWeight: "bold"}}>Conta</Text>
                 <View style={styles.textInfo}>
                    <Text style={styles.textOne}>Veículo </Text>
                    <Text style={styles.textTwo}>{usuario ? usuario.veiculo  : "Carregando..."}</Text>
                </View>
                <View style={styles.textInfo}>
                    <Text style={styles.textOne}>CNH </Text>
                    <Text style={styles.textTwo}>{usuario ? usuario.cnh : "Carregando..."}</Text>
                </View>
                <View style={styles.textInfo}>
                    <Text style={styles.textOne}>Validade </Text>
                    <Text style={styles.textTwo}>{usuario ? usuario.validade : "Carregando..."}</Text>
                </View>
                {/* <View style={styles.textInfo}>
                    <Text style={styles.textOne}>... </Text>
                    <Text style={styles.textTwo}>...</Text>
                </View>      */}  
            </View>

            <View style={styles.calendar}>
              <WeekDay dia="SEG" data={diaDaSemaana[0]} diaSelecionado={diaMarcados[0]} />
              <WeekDay dia="TER" data={diaDaSemaana[1]} diaSelecionado={diaMarcados[1]} />
              <WeekDay dia="QUA" data={diaDaSemaana[2]} diaSelecionado={diaMarcados[2]} />
              <WeekDay dia="QUI" data={diaDaSemaana[3]} diaSelecionado={diaMarcados[3]} />
              <WeekDay dia="SEX" data={diaDaSemaana[4]} diaSelecionado={diaMarcados[4]} />
            </View>
   
        </View>
        </BackButtonHandler>
    );
}
 