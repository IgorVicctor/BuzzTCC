import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    MainContainer: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    containerHeader:{
        position: 'relative',
        bottom: 50,
    },
    title:{
        fontSize: 25,
        textAlign: 'center',
        color: '#2c88d9',
        fontWeight: 'bold',  
    },
    subtitle:{
        fontSize: 17,
        marginTop: 18,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    containerInput:{
        width: '100%',
  
    },
    input: {
        height: 42,
        width: '100%',
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    button:{
        marginTop: 25,
        backgroundColor: '#2c88d9',
        width: '100%',
        padding: 10,
        borderRadius: 5,
        marginBottom: 30
    },
    buttonText:{
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center',
        
    },
    containerLogin:{
        position: 'relative',
        bottom: 10
    },
    textLogin:{
        fontSize: 15,
        fontWeight: 'bold'
    },
    containerTipoCadastro:{
        position: 'relative',
        top: 30,
        marginBottom: 40
    },
    textTipoCadastro:{
        color: '#2c88d9',
        textAlign: 'center',
    },
    icons:{
        position: 'absolute',
        flexDirection: 'row',
        top: 45,
        right: -20
    }
})