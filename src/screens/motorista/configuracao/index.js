import React, { useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity } from 'react-native';
import {styles} from './style'
import BackButtonHandler from '../../BackButtonHandler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from "axios";

export default function Configuracao({navigation}){
    const [showDriverText, setShowDriverText] = useState(false);
    const [showVehicleText, setShowVehicleText] = useState(false);
    const [showAboutText, setShowAboutText] = useState(false);
    const [usuario, setUsuario] = useState(null);


    useEffect(() => {
        AsyncStorage.getItem("authToken")
        .then(token => {
            if (token) {
            const headers = {
                Authorization: `Bearer ${token}`
            };

            AsyncStorage.getItem("idTeste")
                .then(usuarioId => {
                axios.get(`https://tiresome-wool-production.up.railway.app/api/usuarios/${usuarioId}`, { headers })
                    .then(response => {
                    if (response.status === 200) {
                        setUsuario(response.data);
                    } else {
                        console.error("Erro durante a requisição:", response.data);
                    }
                    })
                    .catch(error => {
                    console.error("Erro durante a requisição:", error);
                    });
                })
                .catch(error => {
                console.error("Erro ao obter o valor de idTeste:", error);
                });
            }
        })
        .catch(error => {
            console.error("Erro ao obter o token:", error);
        });
    }, []);

      const toggleVehicleText = () => {
        setShowVehicleText(!showVehicleText);
      };
    
      const toggleAboutText = () => {
        setShowAboutText(!showAboutText);
      };

    return(
        <BackButtonHandler navigation={navigation}>
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={{ flexDirection: "row", marginTop: 15 }}>
                {usuario && usuario.imagem ? (
                    <Image
                        style={styles.avatar}
                        source={{ uri: `data:image/png;base64,${usuario.imagem}` }}
                    />
                    ) : (
                    <Image
                        style={styles.avatar}
                        source={{
                        uri:
                            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzO5Fb637v1B6CAONSt4mGfckCw1gM8tHaJw&usqp=CAU',
                        }}
                    />
                )}
                    <View style={{justifyContent:"center", marginLeft: 20, marginTop: 5}}>
                        <Text style={{fontSize: 15, fontWeight: '500', color: '#CCCCCC'}}>Olá,{'\n'}</Text>
                        <Text style={{fontSize: 15, fontWeight: '500', color: '#fff', bottom: 18}}>{usuario ? usuario.nome : "Carregando..."}</Text>
                    </View>
                </View>
            </View>
            <View style={{width: '100%', height: '78%', bottom: 0, position: "absolute"}}>

                <TouchableOpacity style={styles.option} onPress={toggleVehicleText}>
                <Text style={styles.optionText}>Veículo</Text>
                </TouchableOpacity>
                {showVehicleText && (
                <Text style={styles.optionDescription}>{usuario ? usuario.veiculo : "Carregando..."}</Text>
                )}

                <TouchableOpacity style={styles.option} onPress={toggleAboutText}>
                <Text style={styles.optionText}>Sobre</Text>
                </TouchableOpacity>
                {showAboutText && (
                <Text style={styles.optionDescription}>Aplicativo desenvolvido de TCC por alunos da FEPI.</Text>
                )}  

                <TouchableOpacity style={styles.logoutButton} onPress={() => navigation.navigate("Login")}>
                    <Text style={styles.logoutButtonText}>Sair</Text>
                </TouchableOpacity>
            </View>
        </View>
        </BackButtonHandler>
    );
}

