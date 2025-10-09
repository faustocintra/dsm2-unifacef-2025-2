import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function SucessoScreen({ route }) {
    const { dados } = route.params;

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.titulo}>Cadastro Realizado com Sucesso!</Text>
                <Text style={styles.dados}>Nome: {dados.nome}</Text>
                <Text style={styles.dados}>E-mail: {dados.email}</Text>
                <Text style={styles.dados}>Telefone: {dados.telefone}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    content: {
        padding: 20,
    },
    titulo: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    dados: {
        fontSize: 16,
        marginBottom: 10,
    }
});