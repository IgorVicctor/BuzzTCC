import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import {styles} from './style'

export default function Configuracao({navigation}){
    return(
        
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={{ flexDirection: "row", marginTop: 15 }}>
                    <Image style={styles.avatar} source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzO5Fb637v1B6CAONSt4mGfckCw1gM8tHaJw&usqp=CAU' }}/>
                    <View style={{justifyContent:"center", marginLeft: 20, marginTop: 5}}>
                        <Text style={{fontSize: 15, fontWeight: '500', color: '#CCCCCC'}}>Olá,{'\n'}</Text>
                        <Text style={{fontSize: 15, fontWeight: '500', color: '#fff', bottom: 18}}>João Pedro</Text>
                    </View>
                </View>
            </View>
            <View style={{width: '100%', height: '78%', bottom: 0, position: "absolute"}}>
                <TouchableOpacity style={styles.option}>
                    <Text style={styles.optionText}>Motorista</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.option}>
                    <Text style={styles.optionText}>Veículo</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.option}>
                    <Text style={styles.optionText}>Sobre</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.logoutButton} onPress={() => navigation.navigate("Login")}>
                    <Text style={styles.logoutButtonText}>Sair</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

