import { Text, View, StyleSheet, ImageBackground,Image, ScrollView} from "react-native";
import {Input} from '../components/input/input'
import {Botao} from '../components/botao/botao'
import {Card} from '../components/card/card'


export default function Index() {

  return (
    <>
        {/*Logo com img de fundo*/}
        <ImageBackground source={require('../assets/images/mapa.png')} style={styles.mapa}>

        <Image source={require('../assets/images/findcep.png')} style={styles.logo}></Image>
          
        </ImageBackground>

        {/*Campo de consulta*/}
        <ScrollView style={styles.containerScroll}>
        <View style={styles.container}>
          
          {/*Titulo*/}
          <Text style={styles.titulo}>Consulte seu CEP</Text>
        
          {/*Import Input*/}
          <Input/>
        {/*Botao*/}
          <Botao tituloBotao='Consultar' />
        {/*Card*/}
        <Card/>
        
        </View>
        </ScrollView>
        
    </>
  );
}

 //Estilos do meu componente
const styles = StyleSheet.create({

  mapa:{
    flex: 1,
    justifyContent: 'center',
    alignItems:'center',
    height: '90%',
    width: '100%'
  },
  logo:{
    width:100,
    height:120
  },
  containerScroll:{
    flex:1.5,
    paddingTop:50,
    paddingBottom:70,
    height:"100%"
  },

  container: {
   
   width:"100%",
   minHeight:"100%",
   alignItems:'center',
   gap:40

  },
  titulo: {
    fontSize:25,
    
  }
})
