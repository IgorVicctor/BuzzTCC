import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, ActivityIndicator, Alert, Button } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import MapViewDirections from 'react-native-maps-directions';

export default function Rota() {
  const [origin, setOrigin] = useState(null);
  const [loading, setLoading] = useState(true);
  const [atualizaLocalizacao, SetAtualizaLocalizacao] = useState(true);
  const [destination, setDestination] = useState({
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

      try {
        let location = await Location.getCurrentPositionAsync({});
        setOrigin({
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
        });
        setLoading(false);
      } catch (error) {
        console.log('Erro ao obter localização', error);
        setLoading(false);
      }
    }

    if (atualizaLocalizacao) {
      getLocationAsync();
    }

    const locationUpdateInterval = setInterval(() => {
      if (atualizaLocalizacao) {
        getLocationAsync();
      }
    }, 8000);

    return () => clearInterval(locationUpdateInterval);
  }, [atualizaLocalizacao]);

  const handleRequestLocationPermission = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status === 'granted') {
      SetAtualizaLocalizacao(true);
    } else {
      Alert.alert('Permissão de Localização', 'Por favor, conceda permissão de localização nas configurações do aplicativo.');
    }
  };

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <MapView style={styles.map} initialRegion={{
          latitude: origin?.latitude || 0,
          longitude: origin?.longitude || 0,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}>
          <Marker coordinate={origin} title="Sua localização" />
          <Marker coordinate={destination} title="Fepi (Destino)" />
          <MapViewDirections
            origin={origin}
            destination={destination}
            apikey={apiKey}
            strokeWidth={3}
            strokeColor="#FF0000"
          />
        </MapView>
      )}
      {!origin && (
        <View style={styles.permissionRequest}>
          <Text style={styles.permissionText}>O aplicativo precisa de permissão de localização.</Text>
          <Button title="Conceder Permissão" onPress={handleRequestLocationPermission} />
        </View>
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
  permissionRequest: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  permissionText: {
    marginBottom: 10,
  },
});
