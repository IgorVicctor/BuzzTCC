import React, { useState } from 'react';
import { StyleSheet, Text, View, Alert, Image, FlatList, TouchableOpacity, TextInput } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import BackButtonHandler from '../../BackButtonHandler';

const data = [
  { id: 1, image: 'https://bootdey.com/img/Content/avatar/avatar1.png' },
  { id: 2, image: 'https://bootdey.com/img/Content/avatar/avatar6.png' },
  { id: 3, image: 'https://bootdey.com/img/Content/avatar/avatar2.png' },
  { id: 4, image: 'https://bootdey.com/img/Content/avatar/avatar3.png' },
  { id: 5, image: 'https://bootdey.com/img/Content/avatar/avatar4.png' },
  { id: 6, image: 'https://bootdey.com/img/Content/avatar/avatar5.png' },
  { id: 7, image: 'https://bootdey.com/img/Content/avatar/avatar7.png' },
  { id: 8, image: 'https://bootdey.com/img/Content/avatar/avatar8.png' },

];

export default function ListaUsuarios({navigation}) {
  const [users, setUsers] = useState(data);

  const showAlert = () => {
    Alert.alert('Alert', 'Usuário Teste');
  };

  return (
    <BackButtonHandler navigation={navigation}>
    <View style={styles.container}>
      <View style={styles.header} />

      <View>
        <View style={styles.searchBar}>
          <View style={styles.searchInputWrapper}>
            <MaterialCommunityIcons style={styles.searchIcon} name="magnify" size={20} color="gray" />
            <TextInput style={styles.searchInput} placeholder="Pesquisar" />
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
            return (
              <TouchableOpacity onPress={showAlert}>
                <View style={styles.box}>
                  <Image style={styles.image} source={{ uri: item.image }} />
                  <View style={styles.boxContent}>
                    <Text style={styles.title}>Usuário Teste</Text>
                    <Text style={styles.description}>RA: 123456</Text>
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
