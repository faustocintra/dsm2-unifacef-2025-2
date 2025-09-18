import { View, Text, Button, StyleSheet } from 'react-native';

export default function HomeScreen({ navegar }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Prova — Felipe Pucci Veloso</Text>

      <View style={styles.botoes}>
        <Button title="Ir para Imagem da Web" onPress={() => navegar('web')} />
      </View>
      <View style={styles.botoes}>
        <Button title="Ir para Imagem Local" onPress={() => navegar('local')} />
      </View>
      <View style={styles.botoes}>
        <Button title="Ir para Ícones" onPress={() => navegar('icons')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{ flex:1, alignItems:'center', justifyContent:'center', padding:16 },
  titulo:{ fontSize:22, fontWeight:'bold', marginBottom:24 },
  botoes:{ width:220, marginVertical:6 }
});
