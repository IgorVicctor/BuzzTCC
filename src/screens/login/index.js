import {React, useState, useEffect} from "react";
import { View, TextInput, TouchableOpacity, Text, Alert } from "react-native";
import { style } from './style';
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { AntDesign, FontAwesome5 } from "@expo/vector-icons";
import BackButtonHandler from "../BackButtonHandler";
import axios from "axios"; // Importe a biblioteca axios

export default function Login({ navigation }) {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleLogin = () => {
        // Dados do usuário a serem enviados no corpo da requisição
        const data = {
            email: email,
            password: password
        };

        fetch('https://localhost:8080/auth/login', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(data)
})
.then(response => {
  if (response.ok) {
    // A resposta foi bem-sucedida (código de status HTTP 2xx)
    return response.json();
  } else {
    // A resposta não foi bem-sucedida (código de status HTTP não 2xx)
    throw new Error('Erro na resposta da solicitação.');
  }
})
.then(data => {
  // Aqui você pode lidar com a resposta do backend após o login bem-sucedido
  console.log('Resposta do backend após o login:', data);
  // Navegue para a tela "HomeAluno" ou "HomeMotorista" conforme necessário
  // navigation.navigate("HomeAluno") ou navigation.navigate("HomeMotorista")
})
.catch(error => {
  console.error("Erro durante o login:", error.message);
  Alert.alert("Erro", "Ocorreu um erro durante o login. Verifique sua conexão de rede e tente novamente.");
});
    }
    return (
    <BackButtonHandler navigation={navigation}>
        <View style={style.container}>
            {/* <KeyboardAwareScrollView> */}

            <View style={style.containerHeader}>
                <Text style={style.title}>Login</Text>
                <Text style={style.subtitle}>Bem vindo de volta! Sentimos{'\n'}sua falta</Text>
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
                    // autoCapitalize="none"
                    secureTextEntry={true}
                />
            </View>

            <TouchableOpacity style={style.containerLink}>
                <Text style={style.textLink}>Esquece sua senha?</Text>
            </TouchableOpacity>

            <TouchableOpacity style={style.button} onPress={handleLogin}>
                <Text style={style.buttonText}>Entrar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={style.containerCadastro} onPress={() => navigation.navigate("Cadastro")}>
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
            {/* </KeyboardAwareScrollView> */}
        </View>
    </BackButtonHandler>
    );
}