import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const TOTAL_SEATS = 30;

const Seat = ({ number, onPress, isOccupied }) => {
  const seatColor = isOccupied ? 'red' : 'green';
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.seat, { backgroundColor: seatColor }]}>
        <Text style={styles.seatNumber}>{number}</Text>
      </View>
    </TouchableOpacity>
  );
};

const BusRow = ({ rowNumber, onPress, occupiedSeats }) => {
  const seats = [];
  for (let i = 0; i < 4; i++) {
    const seatNumber = rowNumber * 4 + i + 1;
    const isOccupied = occupiedSeats.includes(seatNumber);
    seats.push(
      <Seat
        key={seatNumber}
        number={seatNumber}
        onPress={() => onPress(seatNumber)}
        isOccupied={isOccupied}
      />,
    );
  }
  return <View style={styles.busRow}>{seats}</View>;
};

export default function App() {
  const [occupiedSeats, setOccupiedSeats] = useState([]);

  const handleSeatPress = (seatNumber) => {
    if (occupiedSeats.includes(seatNumber)) {
      setOccupiedSeats(occupiedSeats.filter((num) => num !== seatNumber));
    } else {
      setOccupiedSeats([...occupiedSeats, seatNumber]);
    }
  };

  const renderBusRows = () => {
    const rows = [];
    for (let i = 0; i < TOTAL_SEATS / 4; i++) {
      rows.push(
        <BusRow
          key={i}
          rowNumber={i}
          onPress={handleSeatPress}
          occupiedSeats={occupiedSeats}
        />,
      );
    }
    return rows;
  };

  return (
    <View style={styles.container}>
      <View style={styles.bus}>{renderBusRows()}</View>
      <Text style={styles.legend}>Green seats are available. Red seats are occupied.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  bus: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  busRow: {
    flexDirection: 'row',
  },
  seat: {
    width: 50,
    height: 50,
    margin: 5,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  seatNumber: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  legend: {
    fontSize: 16,
    marginTop: 20,
  },
});
