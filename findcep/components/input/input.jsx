import { View, Text, TextInput, StyleSheet } from "react-native"

export const Input =() => {

    return(
        <View style={styles.campoInput}>
            <Text style={styles.label}>CEP</Text> 
            <TextInput placeholder="00000-000" style={styles.input} maxLength={8}></TextInput>
        </View>
    )

}

const styles = StyleSheet.create({
    campoInput:{
        width: '70%'

    },
    
    input:{
        borderBottomWidth: 1,
        borderBottomColor: '#949494',
        color:'#949494',
        padding:'5px',
        outlineStyle: 'none'
    }
})
