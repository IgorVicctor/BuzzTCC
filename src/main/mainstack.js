import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/login';
import Cadastro from '../screens/cadastro';
import Home from '../screens/home'

import Routes from '../../routes';
const Stack = createStackNavigator();


function StackRoutes() {
  return (
    
    <Stack.Navigator
      initialRouteName='Login'
      screenOptions={{
        headerShown: false
      }}
    >

      <Stack.Screen name="Login" component={Login}/>
      <Stack.Screen name="Cadastro" component={Cadastro}/>
      {/* <Stack.Screen name="Home" component={Home} options={{headerShown: true}}/> */}
      <Stack.Screen name="Home" component={Routes}/>
      <Stack.Screen name="Leitor" component={Routes}/>
      <Stack.Screen name="Perfil" component={Routes}/>
      <Stack.Screen name="Configuracao" component={Routes}/>



      
    </Stack.Navigator>
      
  );
}

export default StackRoutes;