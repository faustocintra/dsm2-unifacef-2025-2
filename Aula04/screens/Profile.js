import { View, Text, Button, StyleSheet} from 'react-native';

export default function Profile({navigation}) {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Tela de Perfil</Text>
            <Button title="Voltar para Detalhes" onPress={() => navigation.goBack()}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
    titulo: {fontSize: 24}
})