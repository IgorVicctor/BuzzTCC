import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, ActivityIndicator } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import MapViewDirections from 'react-native-maps-directions';

export default function Rota() {
  const [origem, setOrigin] = useState(null);
  const [loading, setLoading] = useState(true);
  const [atualizaLocalizacao, SetAtualizaLocalizacao] = useState(true);
  const [destino, SetDestino] = useState({
    latitude: -22.428974483605884,
    longitude: -45.448270827152356,
  });

  const apiKey = 'AIzaSyB4p4ImDh7LXjkDfWAFXGNmlmPqiJIaw-Y';

  useEffect(() => {
    async function getLocationAsync() {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.log('Permissão de localização negada');
        setLoading(false);
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setOrigin({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });
      setLoading(false);
    }

    getLocationAsync();

    const locationUpdateInterval = setInterval(() => {
      if (atualizaLocalizacao) {
        getLocationAsync();
      }
    }, 8000); 

    return () => clearInterval(locationUpdateInterval);
  }, [atualizaLocalizacao]);

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <MapView style={styles.map} initialRegion={{
          latitude: origem.latitude,
          longitude: origem.longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}>
          <Marker coordinate={origem} title="Sua localização" />
          <Marker coordinate={destino} title="Fepi (Destino)" />
          <MapViewDirections
            origem={origem}
            destino={destino}
            apikey={apiKey}
            strokeWidth={3}
            strokeColor="#FF0000"
          />
        </MapView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});
