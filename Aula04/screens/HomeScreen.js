import { Button, StyleSheet, Text, View } from "react-native";

export default function HomeScreen({navigation}) {
    return (
      <View style={styles.container}>
        <Text style={styles.titulo}>Home</Text>
        <Button 
            title="Ir para detalhes" 
            onPress={() => navigation.navigate('Detalhes')} 
        />
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    titulo: {
      fontSize: 24,
      fontWeight: 'bold',
    },
});