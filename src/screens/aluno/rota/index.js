import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';
import * as Location from 'expo-location';

export default function Rota() {
  const [origin, setOrigin] = useState(null);
  const [destination, setDestination] = useState(null);

  useEffect(() => {
    getLocationAsync();

    setDestination({
      latitude: -22.906847, // Latitude do Rio de Janeiro
      longitude: -43.172896, // Longitude do Rio de Janeiro
    });
  }, []);

  const getLocationAsync = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      console.log('Permissão de localização negada');
      return;
    }

    let location = await Location.getCurrentPositionAsync({});
    setOrigin({
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
    });
  };

  return (
    <View style={styles.container}>
      {origin && destination && (
        <MapView style={styles.map} initialRegion={{
          latitude: (origin.latitude + destination.latitude) / 2,
          longitude: (origin.longitude + destination.longitude) / 2,
          latitudeDelta: Math.abs(origin.latitude - destination.latitude) + 1.5,
          longitudeDelta: Math.abs(origin.longitude - destination.longitude) + 1.5,
        }}>
          <Marker coordinate={origin} title="Origem" />
          <Marker coordinate={destination} title="Destino" />
          <Polyline coordinates={[origin, destination]} strokeWidth={3} strokeColor="#FF0000" />
        </MapView>
      )}
      {!origin && <Text>Obtendo localização...</Text>}
      {!destination && <Text>Configurando destino...</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    flex: 1,
    width: '100%',
  },
});
