import { StyleSheet, Dimensions } from "react-native";

const windowHeight = Dimensions.get('window').height;

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff',        
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'
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
        justifyContent: 'center',
        
    },
    avatar: {
        width: 60,
        height: 60,
        borderRadius: 63,
        marginLeft: 30,
    },
    option: {
        height: 60,
        paddingLeft: 20,
        borderBottomWidth: 0.5,
        justifyContent: 'center',
        paddingBottom: 5
    },
    optionText: {
        fontSize: 16,
        fontWeight: '500',
    },
    logoutButton: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: 60,
        borderTopWidth: 0.5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logoutButtonText: {
        color: '#D23030',
        fontSize: 17,
        fontWeight: '500',
    },
    content: {
        padding: 10,
      },
      optionDescription: {
        padding: 20
      }
})