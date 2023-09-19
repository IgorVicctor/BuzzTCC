import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, Text, Alert } from "react-native";
import { styles } from "./style";
import BackButtonHandler from "../../BackButtonHandler";
import axios from "axios"; // Import axios for making API requests

export default function Cadastro({ navigation }) {
  const [userData, setUserData] = useState({
    nome: "",
    email: "",
    senha: "",
    confirmarSenha: "",
    faculdade: "",
    curso: "",
    periodo: "",
    tipo_usuario: "aluno",
  });

  const handleCadastro = async () => {
    try {
      // Make a POST request to your Spring Boot registration endpoint
      const response = await axios.post(
        "http://192.168.31.95:8080/api/usuarios/cadastro",
        userData
      );
      // Handle success and navigation logic
      console.log("Cadastro successful:", response.data);
      // navigation.navigate("Login"); // Redirect to the login screen
    } catch (error) {
      // Handle error, show an alert, or other error handling logic
      console.error("Cadastro error:", error);
    }
  };

  return (
    <BackButtonHandler navigation={navigation}>
      <View style={styles.MainContainer}>
        <View style={styles.containerHeader}>
          <Text style={styles.title}>Criar Conta</Text>
          <Text style={styles.subtitle}>
            Crie uma conta para aproveitar{"\n"}nossos serviços
          </Text>
        </View>

        <View style={styles.containerInput}>
          <TextInput
            style={styles.input}
            placeholder="Nome"
            onChangeText={(text) =>
              setUserData({ ...userData, nome: text })
            }
          />
          <TextInput
            style={styles.input}
            placeholder="E-mail"
            onChangeText={(text) =>
              setUserData({ ...userData, email: text })
            }
          />
          <TextInput
            style={styles.input}
            placeholder="Senha"
            secureTextEntry={true}
            onChangeText={(text) =>
              setUserData({ ...userData, senha: text })
            }
          />
          <TextInput
            style={styles.input}
            placeholder="Confirmar Senha"
            secureTextEntry={true}
            onChangeText={(text) =>
              setUserData({ ...userData, confirmarSenha: text })
            }
          />
          <TextInput
            style={styles.input}
            placeholder="Faculdade"
            onChangeText={(text) =>
              setUserData({ ...userData, faculdade: text })
            }
          />
          <TextInput
            style={styles.input}
            placeholder="Curso"
            onChangeText={(text) =>
              setUserData({ ...userData, curso: text })
            }
          />
          <TextInput
            style={styles.input}
            placeholder="Período"
            onChangeText={(text) =>
              setUserData({ ...userData, periodo: text })
            }
          />
        </View>

        <TouchableOpacity style={styles.button} onPress={handleCadastro}>
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.containerLogin}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={styles.textLogin}>Já possui uma conta</Text>
        </TouchableOpacity>

        <View style={styles.containerTipoCadastro}>
          <Text style={styles.textTipoCadastro}>Ou continua com</Text>
          <View style={styles.icons}>
            {/* Ícones de autenticação */}
          </View>
        </View>
      </View>
    </BackButtonHandler>
  );
}
