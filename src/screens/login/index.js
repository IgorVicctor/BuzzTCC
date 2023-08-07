import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, Text, Alert } from "react-native";
import { style } from "./style";
import BackButtonHandler from "../BackButtonHandler";
import AsyncStorage from "@react-native-async-storage/async-storage"; // Importe o AsyncStorage

export default function Login({ navigation }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    const handleLogin = () => {
      const data = {
        email: email,
        senha: password,
      };
  
      fetch("http://192.168.31.95:8080/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => {
          if (response.ok) {
            return response.text();
          } else {
            throw new Error("Erro na resposta da solicitação.");
          }
        })
        .then((data) => {
          console.log("Resposta do backend após o login:", data);
  
          // Salvar informações relevantes usando o AsyncStorage
          AsyncStorage.setItem("authToken", data); // Exemplo de como salvar um token de autenticação
  
          // Navegar para a tela HomeAluno após o login bem-sucedido
          navigation.navigate("HomeAluno");
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
