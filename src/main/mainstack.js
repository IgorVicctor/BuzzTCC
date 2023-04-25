import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/login';
import Cadastro from '../screens/aluno/cadastro'
import RoutesAluno from './routesaluno';
// import RoutesMotorista from './RoutesMotorista';

const Stack = createStackNavigator();

function StackRoutes() {
  return (
    
    <Stack.Navigator
      swipeEnabled={false}
      initialRouteName='Login'
      screenOptions={{
        headerShown: false,
        headerLeft: null,
      }}
    >

      <Stack.Screen name="Login" component={Login}/>
      <Stack.Screen name="Cadastro" component={Cadastro}/>
      {/* <Stack.Screen name="Home" component={Home} options={{headerShown: true}}/> */}
      <Stack.Screen name="Home" component={RoutesAluno} swipeEnabled={false}/>
      <Stack.Screen name="Leitor" component={RoutesAluno}/>
      <Stack.Screen name="Perfil" component={RoutesAluno}/>
      <Stack.Screen name="Configuracao" component={RoutesAluno}/>
      <Stack.Screen name="Rota" component={RoutesAluno}/>
      {/* <Stack.Screen name="Assento" component={RoutesMotorista}/> */}

    </Stack.Navigator>
      
  );
}

export default StackRoutes;