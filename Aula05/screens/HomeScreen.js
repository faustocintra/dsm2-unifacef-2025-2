import { View, Image, StyleSheet, Button } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo.png')} style={styles.imagem} />
      <Image
        source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
        style={{ width: 100, height: 100 }}
      />
      <FontAwesome name="home" size={80} color="blue" />
      <MaterialCommunityIcons name="horse-variant-fast" size={80} color="green" />
      <Button
        title="Perfil"
        onPress={() => navigation.navigate('Perfil')}
        style={{ marginBottom: 20 }}
      />
      <Button
        title="Galeria"
        color="#4F8EF7"
        onPress={() => navigation.navigate('Galeria')}
        style={{ marginTop: 20 }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', gap: 20 },
  imagem: { width: 200, height: 200, resizeMode: 'contain' }
});