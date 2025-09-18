import React from 'react';
import { Text, View, Button, StyleSheet } from 'react-native'

export default function HomeScreen({ navigation }){
        return (
                <View style={styles.container}>
                        <Text style={styles.name}>Gabriel Alves Damasceno</Text>

                        <View style={styles.button}>
                            <Button title="Ir para Quadro" onPress={() => navigation.navigate('Quadro')} />
                        </View>

                        <View style={styles.button}>
                            <Button title="Ir para Icons" onPress={() => navigation.navigate('Icons')} />
                        </View>

                        <View style={styles.button}>
                            <Button title="Ir para Galeria" onPress={() => navigation.navigate('Galeria')} />
                        </View>
                </View>
        )
}

const styles = StyleSheet.create({
    container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 16 },
    name: { fontSize: 20, fontWeight: 'bold', marginBottom: 24 },
    button: { width: '80%', marginBottom: 12 }
});