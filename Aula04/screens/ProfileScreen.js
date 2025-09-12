import { View, Text, Button, StyleSheet } from 'react-native';

export default function ProfileScreen({ navigation }){
    return(
        <View style={styles.container}>
        <Text style={styles.titulo}>Tela do Perfil</Text>
        <Button title="Voltar" onPress={() => navigation.goBack()} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    titulo: { fontSize: 26, color: '#ff007bff', fontWeight: 'bold' }
    });