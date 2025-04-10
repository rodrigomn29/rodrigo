import Slider from '@react-native-community/slider';
import { useState } from 'react';
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Modal } from 'react-native';
import { ModalHeroi } from '../../components/modal';


let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";  // Conjunto de caracteres

export function Home() {
  const [slize, setSize] = useState(10);  // Tamanho da senha
  const [nomeHeroiValue, setNomeHeroiValue] = useState("");  // Estado para armazenar o nome do herói gerado
  const[modalVisible, setModalVisible] = useState(false);


  function generateHeroi() {
    let heroi = "";  // Nome do herói gerado

    for (let i = 0; i < slize; i++) {  // Gera nome de herói de tamanho 'slize'
      heroi += charset.charAt(Math.floor(Math.random() * charset.length));  // Gera um caractere aleatório
    }

    setNomeHeroiValue(heroi);  // Atualiza o estado com o nome do herói gerado
    setModalVisible(true);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.boldGreenText}>Bem-vindo ao app do Heróis</Text>
      <Image source={require('../../assets/logo.png')} style={styles.logo} />

      <Text style={styles.title}>{slize} caracteres</Text> 

      <View style={styles.area}></View>

      <Slider
        style={styles.slider}
        minimumValue={1}
        maximumValue={20}
        minimumTrackTintColor="#008000"
        maximumTrackTintColor="#ff0000"
        thumbTintColor="#392de9"
        value={slize}
        onValueChange={value => setSize(Math.floor(value))} // Atualiza o valor do slider
        step={1} // Faz o slider mudar de 1 em 1
      />

      <TouchableOpacity style={styles.button} onPress={generateHeroi}>
        <Text style={styles.buttonText}>
          Gerar Senha Herói
        </Text>
      </TouchableOpacity>

      <Modal visible={modalVisible} animationType="fade" transparent={true} >
      <ModalHeroi password={nomeHeroiValue} handLeClose={ () => setModalVisible(false) } />
    
      </Modal>

      {nomeHeroiValue ? (
        <View style={styles.resultContainer}>
          <Text style={styles.resultText}>Senha do Herói Gerado:</Text>
          <Text style={styles.resultName}>{nomeHeroiValue}</Text>
        </View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F3FF',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    marginBottom: 40,
    width: 100,
    height: 100,
  },
  boldGreenText: {
    color: '#008000',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 20,
  },
  area: {
    marginTop: 20,
    width: 200,
    height: 100,
  },
  slider: {
    width: 250,   // Ajusta o tamanho do slider
    height: 40,
    marginBottom: 20,  // Ajusta o espaçamento entre o slider e o próximo componente
  },
  button: {
    backgroundColor: "#008000",
    width: "30%",  // Ajusta a largura do botão para 70% da tela
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
  resultContainer: {
    marginTop: 30,
    alignItems: 'center',
  },
  resultText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#008000',
  },
  resultName: {
    fontSize: 20,
    color: 'black',
    marginTop: 10,
  },
});
