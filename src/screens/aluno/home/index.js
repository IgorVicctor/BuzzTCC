import {React, useState} from "react";
import {styles} from './style';
import { View, Text, Image, ScrollView,  } from "react-native";
import BackButtonHandler from "../../BackButtonHandler";

export default function HomeAluno({ navigation }) {

    return (
        <BackButtonHandler navigation={navigation}>
        <View style={styles.container}>
        
            <View style={styles.header}>
                <Image style={styles.avatar} source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzO5Fb637v1B6CAONSt4mGfckCw1gM8tHaJw&usqp=CAU' }}/>
                    {/* <TouchableOpacity onPress={pickImage}>
                        <Text style={{fontSize: 12,paddingHorizontal: 3, borderWidth: 1, borderRadius: 5, textAlign:"center", top: 20, marginBottom: 21}}>Selecionar foto</Text>
                    </TouchableOpacity> */}
                        <View style={styles.user}>
                            <Text style={styles.name}>João Pedro</Text>
                            <Text style={styles.userInfo}>Pedralva, MG</Text>
                        </View>
            </View>
           
            <View style={styles.menu}>
                <Text style={{alignSelf: "flex-start", fontSize: 18, paddingLeft: 10, paddingBottom: 5, fontWeight: "bold"}}>Conta</Text>
                <View style={styles.textInfo}>
                    <Text style={styles.textOne}>Faculdade </Text>
                    <Text style={styles.textTwo}>FEPI</Text>
                </View>
                <View style={styles.textInfo}>
                    <Text style={styles.textOne}>Curso </Text>
                    <Text style={styles.textTwo}>Direito</Text>
                </View>
                <View style={styles.textInfo}>
                    <Text style={styles.textOne}>Período </Text>
                    <Text style={styles.textTwo}>2º</Text>
                </View>
                <View style={styles.textInfo}>
                    <Text style={styles.textOne}>Matrícula </Text>
                    <Text style={styles.textTwo}>0191256</Text>
                </View>     
            </View>

            <View style={styles.calendar}>
                <View style={styles.day}>
                    <Text style={styles.nameDay}>SEG</Text>
                    <Text style={styles.numberDay}>15</Text>
                    <Text style={{color: '#F16363', fontSize: 45, position: "absolute", top: 25}}>.</Text>
                </View>
                <View style={styles.day}>
                    
                    <Text style={styles.nameDay}>TER</Text>
                {/* <View style={{ backgroundColor: "#DCDCDC",  width: 50, height: 50, borderRadius: 25, justifyContent: "center", alignItems: "center"}}>  */}
                    <Text style={styles.numberDay}>16</Text>
                    <Text style={{color: '#F16363', fontSize: 45, position: "absolute", top: 25}}>.</Text>
                {/* </View> */}

                </View>
                <View style={styles.day}>
                    <Text style={styles.nameDay}>QUA</Text>
                    <Text style={styles.numberDay}>17</Text>
                    <Text style={{color: '#F16363', fontSize: 45, position: "absolute", top: 25}}>.</Text>
                </View>
                <View style={styles.day}>
                    <Text style={styles.nameDay}>QUI</Text>
                    <Text style={styles.numberDay}>18</Text>
                </View>
                <View style={styles.day}>
                    <Text style={styles.nameDay}>SEX</Text>
                    <Text style={styles.numberDay}>19</Text>
                </View>
            </View>
   
        </View>
        </BackButtonHandler>
    );
}