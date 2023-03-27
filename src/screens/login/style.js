import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    containerHeader:{
        position: 'relative',
        bottom: 75    
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
        // marginBottom: 20
       // position: 'absolute',
    },
    input:{
        fontSize: 15,
        width: '100%',
        height: 45,
        padding: 10,
        borderWidth: 1,
        borderRadius: 5,
        marginTop: 20,
        borderColor: 'gray',
    },
    containerLink: {
        alignSelf: 'flex-end',
        marginTop: 35,
        marginBottom: 35
    },
    textLink:{
        color: '#2c88d9',
        fontWeight: 'bold',
    },
    button:{
        backgroundColor: '#2c88d9',
        width: '100%',
        padding: 10,
        borderRadius: 5,
    },
    buttonText:{
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center'
    },
    containerCadastro:{
        position: 'relative',
        top: 35
    },
    textCadastro:{
        fontSize: 15,
        fontWeight: 'bold'
    },
    containerTipoCadastro:{
        position: 'relative',
        top: 100,
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