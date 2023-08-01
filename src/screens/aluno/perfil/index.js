import React from 'react';
import {View, Text, Image, TouchableOpacity, ScrollView, TextInput} from 'react-native';
import {styles} from './style'
import BackButtonHandler from "../../BackButtonHandler";


export default function Perfil({navigation}){
    return(
        <BackButtonHandler navigation={navigation}>
        <View style={styles.container}>
            <View style={styles.header}>
                <Image style={styles.avatar} source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzO5Fb637v1B6CAONSt4mGfckCw1gM8tHaJw&usqp=CAU' }}/>
                    <TouchableOpacity>
                        <Text style={styles.buttonFoto}>Selecionar foto</Text>
                    </TouchableOpacity>
            </View>
            
            <View style={styles.containerInput}>
                {/* <ScrollView style={{height: '40%'}} overScrollMode="never" showsVerticalScrollIndicator={false}> */}
                    <TextInput style={styles.input} placeholder="Nome" />
                    <TextInput style={styles.input} placeholder="Senha" secureTextEntry={true} />
                    <TextInput style={styles.input} placeholder="Confirmar Senha" secureTextEntry={true} />
                    <TextInput style={styles.input} placeholder="Faculdade" />
                    <TextInput style={styles.input} placeholder="Curso" />
                    <TextInput style={styles.input} placeholder="Período" />
                {/* </ScrollView> */}
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Atualizar</Text>
                </TouchableOpacity>
            </View>                
        </View>
        </BackButtonHandler>
    );
}