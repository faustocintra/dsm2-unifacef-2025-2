import { View, Image, StyleSheet, Button } from 'react-native';



export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Button
        title="Perfil"
        onPress={() => navigation.navigate('Perfil')}
      />
      <Button
        title="Galeria"
        onPress={() => navigation.navigate('Galeria')}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  imagem: { width: 200, height: 200, resizeMode: 'contain' }
});