import React, { useState, useEffect } from "react";
import { View, TextInput, TouchableOpacity, Text, Alert } from "react-native";
import { useFocusEffect } from "@react-navigation/native"; // Importe useFocusEffect
import BackButtonHandler from "../BackButtonHandler";
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { AntDesign, FontAwesome5 } from "@expo/vector-icons";
import { style } from "./style";

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Use o useFocusEffect para redefinir os campos de entrada quando a tela é focada
  useFocusEffect(
    React.useCallback(() => {
      setEmail(""); // Redefine o estado do email
      setPassword(""); // Redefine o estado da senha
    }, [])
  );

  const handleLogin = () => {
    // Restante do seu código
    const data = {
      email: email,
      senha: password,
    };

    axios.post("https://tiresome-wool-production.up.railway.app/auth/login", data, {
      headers: {
        "Content-Type": "application/json",
      }
    })
    .then((response) => {
      if (response.status === 200) {
        const authToken = response.data.token;
        const authId = response.data.userId;
        const tipoUsuario = response.data.tipoUsuario;

        if (authToken) {
          console.log("Resposta do backend após o login:", response.data);

          AsyncStorage.setItem("authToken", authToken);
          AsyncStorage.setItem("idTeste", authId.toString());
          AsyncStorage.setItem("tipoUsuario", tipoUsuario);

          if (tipoUsuario === "ALUNO") {
            navigation.navigate("HomeAluno");
          } else if (tipoUsuario === "MOTORISTA") {
            navigation.navigate("HomeMotorista");
          }

        } else {
          Alert.alert("Erro", "Este email não está cadastrado. Verifique o email.");
        }
      } else if (response.status === 401) {
        Alert.alert("Erro", "Email ou senha incorretos. Verifique as credenciais.");
      } else {
        throw new Error("Erro na resposta da solicitação.");
      }
    })
    .catch((error) => {
      Alert.alert(
        "Erro",
        "Email ou senha incorretos. Verifique as credenciais."
      );
    });
  }

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
              <AntDesign 
                  name="google"
                  size={42}
                  color={'#ccc'}
                  marginRight={15}
              />
              <FontAwesome5 
                  name="facebook"
                  size={40}
                  color={'#ccc'}
                  marginRight={15}
              />
              <AntDesign 
                  name="apple1"
                  size={40}
                  color={'#ccc'}
              />
          </View>
        </View>
      </View>
    </BackButtonHandler>
  );
}
