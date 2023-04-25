import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import StackRoutes from './src/main/mainstack';
// import Routes from './routes';

export default function App() {
  return (
    <NavigationContainer style={styles.container}>
     <StackRoutes />
     {/* <Routes /> */}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
