import {React, useState} from "react";
import { styles } from './style';
import { View, TextInput, TouchableOpacity, Text, Dimensions, Keyboard, Pressable, Alert, ScrollView, KeyboardAvoidingView } from "react-native";
import { AntDesign, FontAwesome5, MaterialIcons } from "@expo/vector-icons";
import * as DocumentPicker from 'expo-document-picker';
import BackButtonHandler from "../../BackButtonHandler";
// const windowWidth = Dimensions.get('window').width;
// const windowHeight = Dimensions.get('window').height;

export default function Cadastro({navigation}) {

    const [fileUri, setFileUri] = useState('');

    const pickDocument = async () => {
        const result = await DocumentPicker.getDocumentAsync();
        if (!result.cancelled) {
        setFileUri(result.uri);
        }
    };

    return (
        <BackButtonHandler navigation={navigation}>
        
        <KeyboardAvoidingView  style={styles.MainContainer}>
            
             <View style={styles.containerHeader}>
                <Text style={styles.title}>Criar Conta</Text>
                <Text style={styles.subtitle}>Crie uma conta para aproveitar{'\n'}nossos serviços</Text>
            </View>
            
            <View style={styles.containerInput}>
                <ScrollView style={{height: '40%'}} overScrollMode="never" showsVerticalScrollIndicator={false}>
                    <TextInput style={styles.input} placeholder="Nome" />
                    <TextInput style={styles.input} placeholder="E-mail" />
                    <TextInput style={styles.input} placeholder="Senha" secureTextEntry={true} />
                    <TextInput style={styles.input} placeholder="Confirmar Senha" secureTextEntry={true} />
                    <TextInput style={styles.input} placeholder="Faculdade" />
                    <TextInput style={styles.input} placeholder="Curso" />
                    <TextInput style={styles.input} placeholder="Período" />
                    <TouchableOpacity style={styles.uploadButton} onPress={pickDocument}>
                        {fileUri ? (
                            <Text style={styles.fileName}>{fileUri}</Text>
                        ) : (
                            <View style={styles.buttonTextUpload}>
                                <Text style={{fontSize: 17, alignSelf: "center"}}>Selecionar arquivo</Text>
                                <MaterialIcons 
                                    name="file-upload"
                                    size={28}
                                    color={'#000'}
                                    marginRight={15}
                                    
                                />    
                            </View>
                        )}
                    </TouchableOpacity>
                </ScrollView>
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
        </KeyboardAvoidingView >
        </BackButtonHandler>
    );
}