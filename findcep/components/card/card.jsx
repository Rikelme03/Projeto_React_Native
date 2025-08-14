import { View,StyleSheet, Text, ScrollView } from "react-native"

export const Card = () => {
    return(
        <View style={styles.card}>
            <View>
                <Text style={styles.tituloValor}>CEP:</Text>
                <Text style={styles.valor}>Dado 01</Text>
            </View>
            <View>
                <Text style={styles.tituloValor}>Logradouro:</Text>
                <Text style={styles.valor}>Dado 02</Text>
            </View>
            <View>
                <Text style={styles.tituloValor}>Bairro:</Text>
                <Text style={styles.valor}>Dado 03</Text>
            </View>
            <View>
                <Text style={styles.tituloValor}>UF:</Text>
                <Text style={styles.valor}>Dado 04</Text>
            </View>
            <View>
                <Text style={styles.tituloValor}>Estado:</Text>
                <Text style={styles.valor}>Dado 05</Text>
            </View>
            <View>
                <Text style={styles.tituloValor}>Regiao:</Text>
                <Text style={styles.valor}>Dado 06</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card:{
        width:'70%',
        minHeight:'40%',
        padding:20,
        // shadowColor:'#b2b2b2ff',
        // shadowOffset: {width:0, height: 2},
        // shadowOpacity: 0.5,
        // shadowRadius: 2,
        // elevation:2,
        boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
        borderRadius:7,
        marginBottom: 120,
        gap: 20
    },
    tituloValor:{
        fontWeight: 600
    }


})