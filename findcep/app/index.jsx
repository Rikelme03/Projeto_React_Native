import { Text, View, StyleSheet, ImageBackground, Image, ScrollView } from "react-native";
import { Input } from '../components/input/input';
import { Botao } from '../components/botao/botao';
import { Card } from '../components/card/card';
import { useState } from "react";
import axios from 'axios';
import Toast, { BaseToast, ErrorToast } from "react-native-toast-message";

export default function Index() {
  const [cep, setCep] = useState("");
  const [jsonCep, setJsonCep] = useState({});
 

  
  const toastConfig = {
    success: (props) => (
      <BaseToast
        {...props}
        style={{
          borderLeftColor: "#22c55e",
          borderLeftWidth: 8,
          borderRadius: 12,
          backgroundColor: "#f0fdf4",
        }}
        contentContainerStyle={{ paddingHorizontal: 15 }}
        text1Style={{
          fontSize: 16,
          fontWeight: "bold",
          color: "#166534",
        }}
        text2Style={{
          fontSize: 14,
          color: "#14532d",
        }}
      />
    ),
    error: (props) => (
      <ErrorToast
        {...props}
        style={{
          borderLeftColor: "#ef4444",
          borderLeftWidth: 8,
          borderRadius: 12,
          backgroundColor: "#fef2f2",
        }}
        contentContainerStyle={{ paddingHorizontal: 15 }}
        text1Style={{
          fontSize: 16,
          fontWeight: "bold",
          color: "#991b1b",
        }}
        text2Style={{
          fontSize: 14,
          color: "#7f1d1d",
        }}
      />
    ),
  };

  async function consultarCep() {
    
    try {
      if (cep !== "" && cep.length === 8) {
        const resposta = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
        setJsonCep(resposta.data);
        // setMostrarCard(true);

        Toast.show({
          type: "success",
          text1: "CEP encontrado! ✅",
          text2: `${resposta.data.logradouro}, ${resposta.data.bairro}`,
        });

      } else {
        // setMostrarCard(false)
        Toast.show({
          type: "error",
          text1: "CEP inválido ❌",
          text2: "Digite um CEP com 8 números",
        });
      }
    } catch (error) {
      // setMostrarCard(false)
      Toast.show({
        type: "error",
        text1: "Erro na busca 🚫",
        text2: "Não foi possível consultar o CEP",
      });
    }
  }

  return (
    <>
      <ScrollView style={styles.containerScroll}>
        <View style={styles.imgMovendo}>
          <ImageBackground source={require('../assets/images/mapa.png')} style={styles.mapa}>
            <Image source={require('../assets/images/findcep.png')} style={styles.logo} />
          </ImageBackground>
        </View>

        <View style={styles.container}>
          <Text style={styles.titulo}>Consulte seu CEP</Text>
          
          <Input
            valorCep={cep}
            onChangeValorCep={e => setCep(e)}
          />

          <Botao tituloBotao='Consultar' onPress={consultarCep} />

          {jsonCep.cep && (
            <Card
              cep={jsonCep.cep}
              logradouro={jsonCep.logradouro}
              bairro={jsonCep.bairro}
              uf={jsonCep.uf}
              estado={jsonCep.estado}
              regiao={jsonCep.regiao}
            />
          )}
        </View>
      </ScrollView>

      {/* Toast com nosso tema customizado */}
      <Toast config={toastConfig} />
    </>
  );
}

const styles = StyleSheet.create({
  mapa: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
  },
  logo: {
    width: 100,
    height: 120,
  },
  containerScroll: {
    flex: 1.5,
    paddingBottom: 70,
    height: "100%",
  },
  imgMovendo: {
    height: '35%',
  },
  container: {
    paddingTop: 50,
    width: "100%",
    minHeight: "100%",
    alignItems: 'center',
    gap: 40,
  },
  titulo: {
    fontSize: 25,
    fontFamily:"Poppins-Bold",
    color: "#00000"
  },
});