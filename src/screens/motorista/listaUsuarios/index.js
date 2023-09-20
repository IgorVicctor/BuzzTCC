import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Alert, Image, FlatList, TouchableOpacity, TextInput } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import BackButtonHandler from '../../BackButtonHandler';
import axios from 'axios';

export default function ListaUsuarios({ navigation }) {
  const [users, setUsers] = useState([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    // Função para carregar a lista de usuários da API
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://192.168.31.95:8080/api/usuarios/');
        if (response.status === 200) {
          // Se a solicitação for bem-sucedida, atualize o estado com os usuários recebidos
          setUsers(response.data);
        }
      } catch (error) {
        console.error('Erro ao buscar usuários:', error);
      }
    };

    // Chame a função para buscar os usuários ao montar o componente
    fetchUsers();
  }, []);

  const showAlert = (user) => {
    Alert.alert('Detalhes do Usuário', `Nome: ${user.nome}\nFaculdade: ${user.faculdade}\nCurso: ${user.curso}`);
  };
  
  return (
    <BackButtonHandler navigation={navigation}>
      <View style={styles.container}>
        <View style={styles.header} />

        <View>
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
            keyExtractor={(item) => item.id.toString()}
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
                      <Text style={styles.description}>RA: {item.ra}</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              );
            }}
          />
        </View>
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
    // paddingHorizontal: 16,
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
  flatList: {
    // marginTop: '21%',
  },
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
});
