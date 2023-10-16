import { StyleSheet, Dimensions } from "react-native";

const windowHeight = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
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
  buttonFoto: {
    width: "30%",
    fontSize: 14,
    borderWidth: 1,
    borderRadius: 5,
    textAlign: "center",
    alignSelf: "center",
    top: windowHeight * 0.16,
    padding: 3,
  },
  containerInput: {
    width: '90%',
    position: 'absolute',
    top: windowHeight * 0.35,
  },
  input: {
    height: windowHeight * 0.055,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  button: {
    marginTop: windowHeight * 0.06,
    bottom: windowHeight * 0.02,
    backgroundColor: '#2c88d9',
    width: '100%',
    alignSelf: "center",
    padding: windowHeight * 0.015,
    borderRadius: 5,
    marginBottom: 30,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
  },
});
