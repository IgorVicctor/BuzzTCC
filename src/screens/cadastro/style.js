import { StyleSheet, Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const styles = StyleSheet.create({
    MainContainer: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        // paddingTop: windowHeight * 0.17,
        paddingBottom: windowHeight * 0.025,
    },
    containerHeader:{
        position: 'relative',
        bottom: 50,
        height: windowHeight * 0.1,
    },
    title:{
        fontSize: windowWidth * 0.06,
        textAlign: 'center',
        color: '#2c88d9',
        fontWeight: 'bold',  
    },
    subtitle:{
        fontSize: windowWidth * 0.04,
        marginTop: 18,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    containerInput:{
        width: '100%',
    },
    input: {
        height: windowHeight * 0.05,
        width: '100%',
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    button:{
        marginTop: windowHeight * 0.035,
        backgroundColor: '#2c88d9',
        width: '100%',
        padding: windowHeight * 0.015,
        borderRadius: 5,
        marginBottom: 30,
        // marginTop: windowHeight * 0.1,

    },
    buttonText:{
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center',
    },
    containerLogin:{
        position: 'relative',
        bottom: windowHeight * 0.015,
    },
    textLogin:{
        fontSize: 15,
        fontWeight: 'bold'
    },
    containerTipoCadastro:{
        position: 'relative',
        top: windowHeight * 0.015,
    },
    textTipoCadastro:{
        color: '#2c88d9',
        textAlign: 'center',
    },
    icons:{
        position: 'absolute',
        flexDirection: 'row',
        top: 45,
        right: -20,
    }
})