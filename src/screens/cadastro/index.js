import {React, useState} from "react";
import { styles } from './style';
import { View, TextInput, TouchableOpacity, Text, Keyboard, Pressable, Alert, ScrollView, KeyboardAvoidingView } from "react-native";
import { AntDesign, FontAwesome5 } from "@expo/vector-icons";


export default function Cadastro({navigation}) {

    return (
        <View style={styles.MainContainer}>
            
             <View style={styles.containerHeader}>
                <Text style={styles.title}>Criar Conta</Text>
                <Text style={styles.subtitle}>Crie uma conta para aproveitar{'\n'}nossos serviços</Text>
            </View>

            <View style={styles.containerInput}>
                <TextInput style={styles.input} placeholder="Nome" />
                <TextInput style={styles.input} placeholder="E-mail" />
                <TextInput style={styles.input} placeholder="Senha" secureTextEntry={true} />
                <TextInput style={styles.input} placeholder="Confirmar Senha" secureTextEntry={true} />
                <TextInput style={styles.input} placeholder="Faculdade" />
                <TextInput style={styles.input} placeholder="Curso" />
                <TextInput style={styles.input} placeholder="Período" />
            </View>

            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Cadastrar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.containerLogin} onPress={() => navigation.navigate("Login")}>
                <Text style={styles.textLogin}>Ja possui uma conta</Text>
            </TouchableOpacity>

            <View style={styles.containerTipoCadastro}>
                <Text style={styles.textTipoCadastro}>Ou continua com</Text>
                <View style={styles.icons}>
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
    );
}