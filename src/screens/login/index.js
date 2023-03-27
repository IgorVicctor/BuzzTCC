import {React, useState, useEffect} from "react";
import { View, TextInput, TouchableOpacity, Text, Alert } from "react-native";
import { style } from './style';
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { AntDesign, FontAwesome5 } from "@expo/vector-icons";

 
export default function Login({ navigation }) {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return (
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

            <TouchableOpacity style={style.button}>
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
    );
}