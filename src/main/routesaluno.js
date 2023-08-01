import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Tab = createBottomTabNavigator();

import { AntDesign, FontAwesome5, MaterialIcons, Entypo, MaterialCommunityIcons, Feather, Ionicons } from "@expo/vector-icons";
import Leitor from '../screens/aluno/leitor';
import Perfil from '../screens/aluno/perfil';
import Configuracao from '../screens/configuracao';
import Rota from '../screens/aluno/rota';
import Home from '../screens/aluno/home';



export default function RoutesAluno(){
    return(
        <Tab.Navigator
            initialRouteName='Home '
            screenOptions={{
                headerShown: false,
                tabBarStyle:{
                    height: 70,
                    // paddingBottom: 5,
                    paddingTop: 15
                },
                tabBarActiveTintColor: '#000',
            }}
        >

        <Tab.Screen
            name="Home "
            component={Home}
            options={{
                tabBarLabel: '',
                tabBarIcon: ({color, size}) => (
                    // <Feather name="user" color={color} size={size} />
                    <Ionicons name="home-outline" color={color} size={size} />
                ),
            }}
        />

        <Tab.Screen
            name="Leitor "
            component={Leitor}
            options={{
            tabBarLabel: '',
            tabBarIcon: ({color, size}) => (
                <MaterialCommunityIcons name="qrcode-scan" color={color} size={size} />
            ),
            }}
        />

        <Tab.Screen
            name="Rota "
            component={Rota}
            options={{
            tabBarLabel: '',
            tabBarIcon: ({color, size}) => (
                <Feather name="map" color={color} size={size} />
            ),
            }}
        />  

        <Tab.Screen
            name="Perfil "
            component={Perfil}
            options={{
            tabBarLabel: '',
            tabBarIcon: ({color, size}) => (
                <Feather name="user" color={color} size={size} />
            ),
            }}
        /> 

        <Tab.Screen
            name="Configuracao "
            component={Configuracao}
            options={{
            tabBarLabel: '',
            tabBarIcon: ({color, size}) => (
                <Ionicons name="settings-outline" color={color} size={size} />
            ),
            }}
        />   

        
            
        </Tab.Navigator>
    );
}