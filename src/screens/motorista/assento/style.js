import { StyleSheet, Dimensions } from "react-native";

const windowHeight = Dimensions.get('window').height;

export const styles = StyleSheet.create({
    seatGrid: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
        padding: 10,
      },
      seat: {
        width: 50,
        height: 50,
        margin: 5,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
      },
      seatText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18,
      },
});