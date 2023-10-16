import { StyleSheet, Dimensions } from "react-native";

const windowHeight = Dimensions.get('window').height;

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff',        
        justifyContent: 'center',
        alignItems: 'center',
        // paddingHorizontal: 20,
        // paddingTop: windowHeight * 0.05,
        // // paddingBottom: windowHeight * 0.01,
    },
    header:{
        height: "21%",
        backgroundColor: "#2c88d9",
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
        position: "absolute",
        top: 0,
        width: "100%",  
    },
    avatar: {
        width: 100,
        height: 95,
        borderRadius: 63,
        top: windowHeight * 0.14,
        alignSelf: 'center',
      },
      user:{
        alignItems: "center",
        top: windowHeight * 0.16,
      },
      name:{
        fontSize: 20,
        color: "#000",
        fontWeight: 'bold',
      },
      userInfo:{
        top: windowHeight * 0.01,
        fontSize: 15,
        color: "#7B858E",
        fontWeight: 'bold',
      },
      menu:{
        width: "85%",
        backgroundColor: '#F6F7FB',
        borderRadius: 10,
        // justifyContent: 'center',
        // alignSelf: "center",
        // alignItems: 'center',
        top:  windowHeight * 0.39,
        padding: 15.5,
        position: 'absolute',
        marginTop: 10,
      },
      textInfo: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: "space-between",
        alignItems: "center",
        padding: windowHeight * 0.014,
      },
      textOne: {
        color: "#808A94",
        fontWeight: "bold"
      },
      textTwo: {
        color: "#000000",
        fontWeight: "700"
      },
      calendar: {
        width: "85%",
        backgroundColor: '#F6F7FB',
        borderRadius: 10,
        justifyContent: 'space-around',
        alignSelf: "center",
        alignItems: 'center',
        top:  windowHeight * 0.45,
        padding: 15.5,
        flexDirection: 'row',
        paddingVertical: 15,
        paddingBottom: 38,
        position: 'absolute',
        marginTop: windowHeight * 0.305,
      },
      dia:{
        justifyContent:"center",
        alignItems: "center",
      },
      nomeDia: {
        fontSize: 18,
        color: "#B8B7B9",
      },
      numeroDia: {
        fontSize: 17,
        marginTop: 15
      },
      diasSelecionados: {
        color: '#F16363',
        fontSize: 12,
        position: "absolute",
        top: 62
      }
})