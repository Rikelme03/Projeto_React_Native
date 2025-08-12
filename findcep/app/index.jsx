import { Text, View, StyleSheet, ImageBackground,Image} from "react-native";
import {Input} from '../components/input/input'

export default function Index() {



  return (
    <>
        {/*Logo com img de fundo*/}
        <ImageBackground source={require('../assets/images/mapa.png')} style={styles.mapa}>

        <Image source={require('../assets/images/findcep.png')} style={styles.logo}></Image>
          
        </ImageBackground>

        {/*Campo de consulta*/}

        <View style={styles.container}>
          {/*Titulo*/}
          <Text style={styles.titulo}>Consulte seu CEP</Text>
        
          {/*Import Input*/}
          <Input/>
        {/*Botao*/}
        {/*Card*/}
        </View>
    </>
  );
}

 //Estilos do meu componente
const styles = StyleSheet.create({

  mapa:{
    flex: 1,
    justifyContent: 'center',
    alignItems:'center',
    height: '100%',
    width: '100%'
  },
  logo:{
    width:100,
    height:120
  },
  container: {
    flex:1.5,
    alignItems:'center',
    paddingTop:50,
    paddingBottom:50,
    gap:40
  },
  titulo: {
    fontSize:25,
    fontFamily: 'Roboto-Black',
  }
})
