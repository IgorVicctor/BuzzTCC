import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import BackButtonHandler from '../../BackButtonHandler';
import axios from 'axios';

export default function Assento({ navigation }) {
  const [assentos, setAssentos] = useState([]);
  const [assentosOcupados, setAssentosOcupados] = useState([]);
  const [motoristaId, setMotoristaId] = useState(null);
  const [assentoSelecionado, setAssentosSelecionado] = useState(null); 
  const [usuariosNoOnibus, setUsuariosNoOnibus] = useState([]);
  const [selecionaIndexAssento, setSelecionaIndexAssento] = useState(null);
  const totalAssentos = 44;

  useFocusEffect(
    React.useCallback(() => {
      const fetchMotoristaId = async () => {
        try {
          const idTeste = await AsyncStorage.getItem('idTeste');
          if (idTeste) {
            setMotoristaId(parseInt(idTeste, 10));
          }
        } catch (error) {
          console.error('Erro', error);
        }
      };

      fetchMotoristaId();
    }, [])
  );

  useFocusEffect(
    React.useCallback(() => {
      const fetchAssentos = async () => {
        try {
          const authToken = await AsyncStorage.getItem('authToken');
          if (authToken && motoristaId !== null) {
            const response = await axios.get(`https://tiresome-wool-production.up.railway.app/onibus/contagem/${motoristaId}`, {
              headers: {
                Authorization: `Bearer ${authToken}`,
              },
            });
            if (response.status === 200) {
              const contagem = response.data;
              setAssentosOcupados(contagem);
            }
          }
        } catch (error) {
          console.error('Erro', error);
        }
      };

      fetchAssentos();
    }, [motoristaId])
  );

  useFocusEffect(
    React.useCallback(() => {
      const initialSeats = Array(totalAssentos)
        .fill()
        .map((_, i) => ({ id: i, occupied: false }));

      const updatedSeats = initialSeats.map((seat, index) => ({
        ...seat,
        occupied: index < assentosOcupados,
      }));

      setAssentos(updatedSeats);
    }, [assentosOcupados])
  );

  useFocusEffect(
    React.useCallback(() => {
      const fetchUsuariosNoOnibus = async () => {
        try {
          if (motoristaId !== null) {
            const authToken = await AsyncStorage.getItem('authToken');
            if (authToken) {
              const response = await axios.get(`https://tiresome-wool-production.up.railway.app/api/usuarios/${motoristaId}`, {
                headers: {
                  Authorization: `Bearer ${authToken}`,
                },
              });
              if (response.status === 200) {
                setUsuariosNoOnibus(response.data.alunos);
              }
            }
          }
        } catch (error) {
          console.error('Erro', error);
        }
      };

      fetchUsuariosNoOnibus();
    }, [motoristaId])
  );

  const apertaAssento = (seatIndex) => {
    if (usuariosNoOnibus.length > 0 && assentos[seatIndex].occupied) {
      setAssentosSelecionado(assentos[seatIndex]);
      setSelecionaIndexAssento(seatIndex);
    }
  };

  const selectedAluno = usuariosNoOnibus[selecionaIndexAssento];

  return (
    <BackButtonHandler navigation={navigation}>
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Ônibus</Text>
          <Text style={styles.subtitle}>
            Assentos disponíveis: {assentos.filter((seat) => !seat.occupied).length}
          </Text>
        </View>

        <View style={styles.seatContainer}>
          <View style={styles.row}>
            <View style={styles.seatColumn}>
              {assentos.slice(0, 11).map((seat, index) => (
                <TouchableOpacity
                  key={seat.id}
                  onPress={() => apertaAssento(index)}
                  disabled={!seat.occupied || usuariosNoOnibus.length === 0}
                >
                  <View style={[styles.seat, seat.occupied && styles.oucpaAssento]}>
                    <Image
                      source={seat.occupied ? require('./bus-seat-pintado.png') : require('./bus-seat.png')}
                      style={styles.seatImage}
                    />
                  </View>
                </TouchableOpacity>
              ))}
            </View>

            <View style={styles.corridor} />

            <View style={styles.seatColumn}>
              {assentos.slice(11, 22).map((seat, index) => (
                <TouchableOpacity
                  key={seat.id}
                  onPress={() => apertaAssento(index + 11)}
                  disabled={!seat.occupied || usuariosNoOnibus.length === 0}
                >
                  <View style={[styles.seat, seat.occupied && styles.oucpaAssento]}>
                    <Image
                      source={seat.occupied ? require('./bus-seat-pintado.png') : require('./bus-seat.png')}
                      style={styles.seatImage}
                    />
                  </View>
                </TouchableOpacity>
              ))}
            </View>

            <View style={styles.corridor} />

            <View style={styles.seatColumn}>
              {assentos.slice(22, 33).map((seat, index) => (
                <TouchableOpacity
                  key={seat.id}
                  onPress={() => apertaAssento(index + 22)}
                  disabled={!seat.occupied || usuariosNoOnibus.length === 0}
                >
                  <View style={[styles.seat, seat.occupied && styles.oucpaAssento]}>
                    <Image
                      source={seat.occupied ? require('./bus-seat-pintado.png') : require('./bus-seat.png')}
                      style={styles.seatImage}
                    />
                  </View>
                </TouchableOpacity>
              ))}
            </View>

            <View style={styles.corridor} />

            <View style={styles.seatColumn}>
              {assentos.slice(33).map((seat, index) => (
                <TouchableOpacity
                  key={seat.id}
                  onPress={() => apertaAssento(index + 33)}
                  disabled={!seat.occupied || usuariosNoOnibus.length === 0}
                >
                  <View style={[styles.seat, seat.occupied && styles.oucpaAssento]}>
                    <Image
                      source={seat.occupied ? require('./bus-seat-pintado.png') : require('./bus-seat.png')}
                      style={styles.seatImage}
                    />
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </View>
      </View>

      {assentoSelecionado && (
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TouchableOpacity style={styles.closeButton} onPress={() => setAssentosSelecionado(null)}>
              <Text style={styles.closeButtonText}>X</Text>
            </TouchableOpacity>
            <Text style={styles.modalTitle}>Informações do Aluno</Text>
            <Text style={styles.modalText}>
              <Text style={styles.boldText}>Nome:</Text> {selectedAluno?.nome}
            </Text>
            <Text style={styles.modalText}>
              <Text style={styles.boldText}>Faculdade:</Text> {selectedAluno?.faculdade}
            </Text>
            <Text style={styles.modalText}>
              <Text style={styles.boldText}>Curso:</Text> {selectedAluno?.curso}
            </Text>
            <Text style={styles.modalText}>
              <Text style={styles.boldText}>Matricula:</Text> {selectedAluno?.matricula}
            </Text>
          </View>
        </View>
      )}
    </BackButtonHandler>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  titleContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: 'gray',
  },
  seatContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  seatColumn: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  corridor: {
    width: 25,
  },
  seat: {
    width: 40,
    height: 40,
    marginVertical: 5,
  },
  seatImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  modalContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    width: '80%',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#151515',
    textAlign: 'center',
  },
  modalText: {
    fontSize: 16,
    marginBottom: 5,
  },
  boldText: {
    fontWeight: 'bold',
  },
  closeButton: {
    position: 'absolute',
    top: 5,
    right: 10,
  },
  closeButtonText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'blue',
  },
});