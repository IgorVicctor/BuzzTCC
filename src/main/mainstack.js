import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/login';
import Cadastro from '../screens/cadastro';

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
      
    </Stack.Navigator>
      
  );
}

export default StackRoutes;