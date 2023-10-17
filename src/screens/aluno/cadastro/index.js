import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, Text, Alert, StyleSheet, ScrollView } from "react-native";
import BackButtonHandler from "../../BackButtonHandler";
import axios from "axios";
import { styles } from "./style";
// import { AntDesign, FontAwesome5 } from "@expo/vector-icons";

export default function Cadastro({ navigation }) {
  const [userData, setUserData] = useState({
    nome: "",
    email: "",
    senha: "",
    cidade: "",
    confirmarSenha: "",
    faculdade: "",
    periodo: "",
    curso: "",
    tipo_usuario: "ALUNO",
    selecionaDias: "",
    matricula: "",
  });

  const [emptyFields, setEmptyFields] = useState({
    nome: false,
    email: false,
    senha: false,
    cidade: false,
    confirmarSenha: false,
    faculdade: false,
    periodo: false,
    curso: false,
    matricula: false,
  });

  const isEmailValid = (email) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  };

  const handleCadastro = async () => {
    const requiredFields = ["nome", "email", "senha", "cidade", "confirmarSenha", "faculdade", "periodo", "curso", "matricula"];
    const hasEmptyFields = requiredFields.some(field => !userData[field]);

    if (hasEmptyFields) {
      Alert.alert("Erro", "Preencha todos os campos obrigatórios.");
      const newEmptyFields = {};
      requiredFields.forEach(field => {
        if (!userData[field]) {
          newEmptyFields[field] = true;
        }
      });
      setEmptyFields(newEmptyFields);
      return;
    }

    if (userData.senha !== userData.confirmarSenha) {
      Alert.alert("Erro", "A senha e a confirmação de senha não correspondem");
      return;
    }

    if (userData.selecionaDias.length === 0) {
      Alert.alert("Erro", "Selecione pelo menos um dia da semana.");
      return;
    }

    if (!isEmailValid(userData.email)) {
      Alert.alert("Erro", "O endereço de e-mail não é válido.");
      return;
    }

    // try {
    //   const response = await axios.get(
    //     `https://tiresome-wool-production.up.railway.app/api/usuarios/checkEmail?email=${userData.email}`
    //   );
    //   if (response.data === true) {
    //     Alert.alert("Erro", "Este email já está sendo usado por outro usuário.");
    //     return;
    //   }
    // } catch (error) {
    //   console.error("Erro ao verificar email:", error);
    // }

    try {
      // Adicione o campo "selecionaDias" aos dados do usuário
      const userDataWithDiasTransporte = { ...userData, selecionaDias: userData.selecionaDias.split(',').join(',') };

      const response = await axios.post(
        "https://tiresome-wool-production.up.railway.app/api/usuarios/cadastro",
        userDataWithDiasTransporte
      );
      console.log("Cadastro bem-sucedido:", response.data);

      Alert.alert(
        "Cadastro Realizado",
        "Seu cadastro foi realizado com sucesso!",
        [
          {
            text: "OK",
            onPress: () => {
              navigation.navigate("Login");
            },
          },
        ]
      );
    } catch (error) {
      console.error("Erro no cadastro:", error);
    }
  };

  const toggleDiaTransporte = (dia) => {
    if (userData.selecionaDias.includes(dia)) {
      const updatedDias = userData.selecionaDias.split(',').filter((d) => d !== dia).join(',');
      setUserData({ ...userData, selecionaDias: updatedDias });
      console.log(`Dia removido: ${dia}`);
    } else {
      setUserData({ ...userData, selecionaDias: userData.selecionaDias ? userData.selecionaDias + "," + dia : dia });
      console.log(`Dia adicionado: ${dia}`);
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
          <ScrollView style={{ height: "60%" }} overScrollMode="never" showsVerticalScrollIndicator={false}>
            <TextInput
              style={[styles.input, emptyFields.nome && styles.inputEmpty]}
              placeholder="Nome"
              onChangeText={(text) => {
                setUserData({ ...userData, nome: text });
                setEmptyFields({ ...emptyFields, nome: !text });
              }}
            />
            <TextInput
              style={[styles.input, emptyFields.email && styles.inputEmpty]}
              placeholder="E-mail"
              onChangeText={(text) => {
                setUserData({ ...userData, email: text });
                setEmptyFields({ ...emptyFields, email: !text });
              }}
            />
            <TextInput
              style={[styles.input, emptyFields.cidade && styles.inputEmpty]}
              placeholder="Cidade"
              onChangeText={(text) => {
                setUserData({ ...userData, cidade: text });
                setEmptyFields({ ...emptyFields, cidade: !text });
              }}
            />
            <TextInput
              style={[styles.input, emptyFields.senha && styles.inputEmpty]}
              placeholder="Senha"
              secureTextEntry={true}
              onChangeText={(text) => {
                setUserData({ ...userData, senha: text });
                setEmptyFields({ ...emptyFields, senha: !text });
              }}
            />
            <TextInput
              style={[styles.input, emptyFields.confirmarSenha && styles.inputEmpty]}
              placeholder="Confirmar Senha"
              secureTextEntry={true}
              onChangeText={(text) => {
                setUserData({ ...userData, confirmarSenha: text });
                setEmptyFields({ ...emptyFields, confirmarSenha: !text });
              }}
            />
            <TextInput
              style={[styles.input, emptyFields.faculdade && styles.inputEmpty]}
              placeholder="Faculdade"
              onChangeText={(text) => {
                setUserData({ ...userData, faculdade: text });
                setEmptyFields({ ...emptyFields, faculdade: !text });
              }}
            />
            <TextInput
              style={[styles.input, emptyFields.curso && styles.inputEmpty]}
              placeholder="Curso"
              onChangeText={(text) => {
                setUserData({ ...userData, curso: text });
                setEmptyFields({ ...emptyFields, curso: !text });
              }}
            />
            <TextInput
              style={[styles.input, emptyFields.periodo && styles.inputEmpty]}
              placeholder="Período"
              onChangeText={(text) => {
                setUserData({ ...userData, periodo: text });
                setEmptyFields({ ...emptyFields, periodo: !text });
              }}
            />
            <TextInput
              style={[styles.input, emptyFields.matricula && styles.inputEmpty]}
              placeholder="Matrícula"
              onChangeText={(text) => {
                setUserData({ ...userData, matricula: text });
                setEmptyFields({ ...emptyFields, matricula: !text });
              }}
            />

            <Text style={styles.label}>Dias da Semana</Text>
            <View style={styles.checkboxContainer}>
              {["Segunda", "Terça", "Quarta", "Quinta", "Sexta"].map((dia) => (
                <TouchableOpacity
                  key={dia}
                  style={[
                    styles.checkbox,
                    userData.selecionaDias.split(',').includes(dia) && styles.checkboxSelected,
                  ]}
                  onPress={() => toggleDiaTransporte(dia)}
                >
                  <Text style={styles.checkboxLabel}>{dia}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>
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

        {/* <View style={styles.containerTipoCadastro}>
          <Text style={styles.textTipoCadastro}>Ou continua com</Text>
          <View style={styles.icons}>
            <AntDesign
              name="google"
              size={42}
              color={'#ccc'}
              marginRight={15}
            />
            <FontAwesome5
              name="facebook"
              size={40}
              color={'#ccc'}
              marginRight={15}
            />
          </View>
        </View> */}
      </View>
    </BackButtonHandler>
  );
}
