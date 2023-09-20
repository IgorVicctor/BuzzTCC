import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, Text, Alert } from "react-native";
import { style } from "./style";
import BackButtonHandler from "../BackButtonHandler";
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';


export default function Login({ navigation }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    const handleLogin = () => {
      const data = {
        email: email,
        senha: password,
      };
    
      axios.post("http://192.168.31.95:8080/auth/login", data, {
        headers: {
          "Content-Type": "application/json",
        }
      })
      .then((response) => {
        if (response.status === 200) {
          const authToken = response.data.token;
          const authId = response.data.userId;

    
          if (authToken) {
            // console.log("Resposta do backend após o login:", response.data);
    
            // Salvar o token no AsyncStorage
            AsyncStorage.setItem("authToken", authToken);
            AsyncStorage.setItem("idTeste", authId.toString());


            // console.log("AAA: ",   response.data);

    
            // Navegar para a tela HomeAluno após o login bem-sucedido
            navigation.navigate("HomeAluno");
          } else {
            console.error("Token de autenticação não foi retornado na resposta.");
          }
        } else {
          throw new Error("Erro na resposta da solicitação.");
        }
      })
      .catch((error) => {
        console.error("Erro durante o login:", error.message);
        Alert.alert(
          "Erro",
          "Ocorreu um erro durante o login. Verifique sua conexão de rede e tente novamente."
        );
      });
    };
    
  


  return (
    <BackButtonHandler navigation={navigation}>
      <View style={style.container}>
        <View style={style.containerHeader}>
          <Text style={style.title}>Login</Text>
          <Text style={style.subtitle}>
            Bem vindo de volta! Sentimos{"\n"}sua falta
          </Text>
        </View>

        <View style={style.containerInput}>
          <TextInput
            style={style.input}
            placeholder="Email"
            onChangeText={setEmail}
            value={email}
            autoCapitalize="none"
            keyboardType="email-address"
          />
          <TextInput
            style={style.input}
            placeholder="Senha"
            onChangeText={setPassword}
            value={password}
            secureTextEntry={true}
          />
        </View>

        <TouchableOpacity style={style.containerLink}>
          <Text style={style.textLink}>Esquece sua senha?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={style.button} onPress={handleLogin}>
          <Text style={style.buttonText}>Entrar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.button} onPress={navigation.navigate("HomeMotorista")}>
          <Text style={style.buttonText}>Entrar Motorista</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={style.containerCadastro}
          onPress={() => navigation.navigate("Cadastro")}
        >
          <Text style={style.textCadastro}>Criar nova conta</Text>
        </TouchableOpacity>

        <View style={style.containerTipoCadastro}>
          <Text style={style.textTipoCadastro}>Ou continua com</Text>
          <View style={style.icons}>
            {/* Ícones de autenticação */}
          </View>
        </View>
      </View>
    </BackButtonHandler>
  );
}
