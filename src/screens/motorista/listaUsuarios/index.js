import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Alert, Image, FlatList, TouchableOpacity, TextInput, ScrollView, Modal } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import BackButtonHandler from '../../BackButtonHandler';
import axios from 'axios';

export default function ListaUsuarios({ navigation }) {
  const [users, setUsers] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    // Função para carregar a lista de usuários da API
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://192.168.31.95:8080/api/usuarios/');
        if (response.status === 200) {
          // Se a solicitação for bem-sucedida, atualize o estado com os usuários recebidos
          const alunos = response.data.filter(usuario => usuario.tipo_usuario === 'ALUNO');
          setUsers(alunos);
        }
      } catch (error) {
        console.error('Erro ao buscar usuários:', error);
      }
    };

    // Chame a função para buscar os usuários ao montar o componente
    fetchUsers();
  }, []);

  const showAlert = (user) => {
    setSelectedUser(user);
  };

  const closeModal = () => {
    setSelectedUser(null);
  };

  return (
    <BackButtonHandler navigation={navigation}>
      <View style={styles.container}>
        <View style={styles.header} />

        <View style={styles.searchBar}>
          <View style={styles.searchInputWrapper}>
            <MaterialCommunityIcons style={styles.searchIcon} name="magnify" size={20} color="gray" />
            <TextInput
              style={styles.searchInput}
              placeholder="Pesquisar"
              value={searchText}
              onChangeText={(text) => setSearchText(text)}
            />
          </View>
        </View>
        
        <FlatList
          style={styles.flatList}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          enableEmptySections={true}
          data={users}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => (item.id ? item.id.toString() : index.toString())}
          renderItem={({ item }) => {
            // Filtra os usuários com base no texto de pesquisa
            if (searchText && !item.nome.includes(searchText)) {
              return null;
            }

            return (
              <TouchableOpacity onPress={() => showAlert(item)}>
                <View style={styles.box}>
                  <Image style={styles.image} source={{ uri: item.image }} />
                  <View style={styles.boxContent}>
                    <Text style={styles.title}>{item.nome}</Text>
                    <Text style={styles.description}>RA: {item.matricula}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            );
          }}
        />

        <Modal visible={selectedUser !== null} animationType="slide" transparent={true}>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
                <Text style={styles.closeButtonText}>X</Text>
              </TouchableOpacity>
              <Text style={styles.modalTitle}>Dados do Aluno</Text>
              <Text style={styles.modalText}><Text style={styles.boldText}>Nome:</Text> {selectedUser?.nome}</Text>
              <Text style={styles.modalText}><Text style={styles.boldText}>Faculdade:</Text> {selectedUser?.faculdade}</Text>
              <Text style={styles.modalText}><Text style={styles.boldText}>Curso:</Text> {selectedUser?.curso}</Text>
              <Text style={styles.modalText}><Text style={styles.boldText}>Período:</Text> {selectedUser?.periodo}</Text>
            </View>
          </View>
        </Modal>
      </View>
    </BackButtonHandler>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  searchBar: {
    marginTop: '40%',
    paddingHorizontal: 5,
    paddingTop: 16,
    paddingBottom: 8,
  },
  searchInputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 25,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 15,
    fontWeight: 'bold',
  },
  header: {
    height: '21%',
    backgroundColor: '#2c88d9',
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  flatList: {},
  separator: {
    height: 1,
    backgroundColor: 'lightgray',
  },
  box: {
    padding: 20,
    marginTop: 5,
    marginBottom: 5,
    backgroundColor: 'white',
    flexDirection: 'row',
  },
  boxContent: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginLeft: 10,
  },
  description: {
    fontSize: 15,
    color: '#646464',
  },
  title: {
    fontSize: 18,
    color: '#151515',
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    width: '80%',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#151515',
    textAlign: 'center'
  },
  modalText: {
    fontSize: 16,
    marginBottom: 5,
  },
  boldText: {
    fontWeight: 'bold',
  },
  closeButton: {
    position: 'absolute',
    top: 5,
    right: 10,
  },
  closeButtonText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'blue',
  },
});
