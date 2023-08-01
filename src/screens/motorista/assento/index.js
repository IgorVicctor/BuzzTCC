import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import BackButtonHandler from '../../BackButtonHandler';

export default function Assento({ navigation }) {
  const [seats, setSeats] = useState(
    Array(44)
      .fill()
      .map((_, i) => ({ id: i, selected: false }))
  );

  const handleSeatPress = (id) => {
    const updatedSeats = [...seats];
    const index = updatedSeats.findIndex((seat) => seat.id === id);
    updatedSeats[index].selected = !updatedSeats[index].selected;
    setSeats(updatedSeats);
  };

  const handleClearSeats = () => {
    setSeats((prevSeats) =>
      prevSeats.map((seat) => ({
        ...seat,
        selected: false,
      }))
    );
  };

  const handleSaveSeats = () => {
    const selectedSeats = seats.filter((seat) => seat.selected);
    // Salvar os assentos selecionados

    // Exibir mensagem na tela
    alert('Assentos selecionados: ' + selectedSeats.map((seat) => seat.id).join(', '));

    // Limpar os assentos selecionados
    handleClearSeats();
  };

  return (
    <BackButtonHandler navigation={navigation}>
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Escolha seu assento</Text>
          <Text style={styles.subtitle}>
            Assentos disponíveis: {seats.filter((seat) => !seat.selected).length}
          </Text>
        </View>

        <View style={styles.seatContainer}>
          <View style={styles.row}>
            <View style={styles.seatColumn}>
              {seats.slice(0, 11).map((seat) => (
                <TouchableOpacity
                  key={seat.id}
                  style={[
                    styles.seat,
                    seat.selected && styles.selectedSeat,
                  ]}
                  onPress={() => handleSeatPress(seat.id)}
                  disabled={seat.selected}
                >
                  <Image
                    source={require('./bus-seat.png')}
                    style={[
                      styles.seatImage,
                      seat.selected && styles.selectedSeatImage,
                    ]}
                  />
                </TouchableOpacity>
              ))}
            </View>

            <View style={styles.corridor} />

            <View style={styles.seatColumn}>
              {seats.slice(11, 22).map((seat) => (
                <TouchableOpacity
                  key={seat.id}
                  style={[
                    styles.seat,
                    seat.selected && styles.selectedSeat,
                  ]}
                  onPress={() => handleSeatPress(seat.id)}
                  disabled={seat.selected}
                >
                  <Image
                    source={require('./bus-seat.png')}
                    style={[
                      styles.seatImage,
                      seat.selected && styles.selectedSeatImage,
                    ]}
                  />
                </TouchableOpacity>
              ))}
            </View>

            <View style={styles.corridor} />

            <View style={styles.seatColumn}>
              {seats.slice(22, 33).map((seat) => (
                <TouchableOpacity
                  key={seat.id}
                  style={[
                    styles.seat,
                    seat.selected && styles.selectedSeat,
                  ]}
                  onPress={() => handleSeatPress(seat.id)}
                  disabled={seat.selected}
                >
                  <Image
                    source={require('./bus-seat.png')}
                    style={[
                      styles.seatImage,
                      seat.selected && styles.selectedSeatImage,
                    ]}
                  />
                </TouchableOpacity>
              ))}
            </View>

            <View style={styles.corridor} />

            <View style={styles.seatColumn}>
              {seats.slice(33).map((seat) => (
                <TouchableOpacity
                  key={seat.id}
                  style={[
                    styles.seat,
                    seat.selected && styles.selectedSeat,
                  ]}
                  onPress={() => handleSeatPress(seat.id)}
                  disabled={seat.selected}
                >
                  <Image
                    source={require('./bus-seat.png')}
                    style={[
                      styles.seatImage,
                      seat.selected && styles.selectedSeatImage,
                    ]}
                  />
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </View>

        <TouchableOpacity style={styles.button} onPress={handleSaveSeats}>
          <Text style={styles.buttonText}>Finalizar</Text>
        </TouchableOpacity>
      </View>
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
  selectedSeat: {
    backgroundColor: 'transparent',
  },
  seatImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  selectedSeatImage: {
    // tintColor: 'blue',
  },
  button: {
    marginTop: 20,
    backgroundColor: 'dodgerblue',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
