import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../screens/motorista/home';

const Tab = createBottomTabNavigator();

import { AntDesign, FontAwesome5, MaterialIcons, Entypo, MaterialCommunityIcons, Feather, Ionicons } from "@expo/vector-icons";
import Configuracao from '../screens/motorista/configuracao';
import QRCode from '../screens/motorista/qrcode';
import ListaUsuarios from '../screens/motorista/listaUsuarios';
import Assento from '../screens/motorista/assento';


export default function RoutesMotorista(){
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
            name="QRCode "
            component={QRCode}
            options={{
            tabBarLabel: '',
            tabBarIcon: ({color, size}) => (
                // <Feather name="user" color={color} size={size} />
                <AntDesign name="qrcode" color={color} size={size} />
            ),
            }}
        />

        <Tab.Screen
            name="Assento "
            component={Assento}
            options={{
            tabBarLabel: '',
            tabBarIcon: ({color, size}) => (
                // <Feather name="user" color={color} size={size} />
                <MaterialIcons name="event-seat" color={color} size={size} />
            ),
            }}
        />

        <Tab.Screen
            name="ListaUsuarios "
            component={ListaUsuarios}
            options={{
            tabBarLabel: '',
            tabBarIcon: ({color, size}) => (
                // <Feather name="user" color={color} size={size} />
                <FontAwesome5 name="users" color={color} size={size} />
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