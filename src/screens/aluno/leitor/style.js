import { StyleSheet, Dimensions } from "react-native";

const windowHeight = Dimensions.get('window').height;

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center"
    },
    header:{
        height: "21%",
        backgroundColor: "#2c88d9",
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
    },
    // maintext: {
    //     fontSize: 16,
    //     margin: 20,
    //   },
    //   barcodebox: {
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //     height: 300,
    //     width: 300,
    //     overflow: 'hidden',
    //     borderRadius: 30,
    //     backgroundColor: 'tomato'
    //   }
    maintext: {
        fontSize: 15,
        margin: 10,
    },
    barcodebox: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 300,
        width: 325,
        overflow: 'hidden',
        borderRadius: 30,
        backgroundColor: '#2c88d9',
    },
})