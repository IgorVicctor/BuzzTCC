import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../screens/home';

const Tab = createBottomTabNavigator();

import { AntDesign, FontAwesome5, MaterialIcons, Entypo, MaterialCommunityIcons, Feather, Ionicons } from "@expo/vector-icons";


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


            
        </Tab.Navigator>
    );
}