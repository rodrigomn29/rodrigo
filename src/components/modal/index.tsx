import { View, Text, StyleSheet, TouchableOpacity, Pressable } from 'react-native';
import React from 'react';
import * as Clipboard from 'expo-clipboard'; // Importando o módulo Clipboard do Expo para copiar texto para a área de transferência
import useStorage from '@/src/hooks/useStorage';

// Definição dos tipos das propriedades
interface ModalHeroiProps {
  password: string;
  handLeClose: () => void;
}

export function ModalHeroi({ password, handLeClose }: ModalHeroiProps) {
  const {saveItem} = useStorage();

  async function handleCopyPassword() {
    await Clipboard.setStringAsync(password); // Copia a senha para a área de transferência
    alert("Senha copiada para área de transferência!"); // Exibe um alerta informando que a senha foi copiada

    
    await saveItem("@pass", password); // Salva a senha no armazenamento local
    handLeClose(); // Fecha o modal

  }

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Senha do Herói Gerado</Text>

        <Pressable style={styles.innerHeroi} onLongPress={handleCopyPassword}>
          <Text style={styles.text}>{password}</Text>
        </Pressable>

        <View style={styles.buttonArea}>
          <TouchableOpacity style={styles.button} onPress={handLeClose}>
            <Text>Voltar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.button, styles.buttonsave]} onPress={handleCopyPassword}>
            <Text style={styles.buttonsaveText}>Salvar senha</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(24, 24, 24, 0.6)",
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  content: {
    backgroundColor: "#FFF",
    width: "85%",
    paddingTop: 24,
    paddingBottom: 24,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000"
  },
  innerHeroi: {
    backgroundColor: "#000000",
    width: "20%",
    paddingTop: 24,
    paddingBottom: 24,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  text: {
    color: "#FFF",
    textAlign: "center"
  },
  buttonArea: {
    flexDirection: "row",
    width: "20%",
    margin: 8,
    alignItems: 'center',
    justifyContent: "space-between"
  },
  button: {
    flex: 1,
    alignItems: 'center',
    marginTop: 14,
    marginBottom: 14,
    padding: 8,
  },
  buttonsave: {
    backgroundColor: "#392de9",
    borderRadius: 8,
  },
  buttonsaveText: {
    color: "#FFF",
    fontWeight: 'bold'
  }
});