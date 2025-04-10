import { View, Text, StyleSheet, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState,useEffect } from 'react';
import { useIsFocused } from '@react-navigation/native';
import useStorage from '../../../src/hooks/useStorage';

export function Password() {
  const [listPassword, setListPassword] = useState([]);
  const focused = useIsFocused(); // Hook para verificar se a tela está em foco
  const { getItem } = useStorage(); // Hook para acessar o armazenamento local

  useEffect(() => {
    async function loadPassword() {
      const passwords = await getItem("@pass"); // Chave do armazenamento local
     console.log(passwords);
    }


    loadPassword();
  },[focused])

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.header}>
        <Text style={styles.title}> Minhas senhas</Text>
        <View style={styles.content}>


        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#008000',
    paddingTop: 58,
    paddingBottom: 14,
    paddingLeft: 14,
    paddingRight: 14,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  content: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5', // Exemplo de cor de fundo
  },
});