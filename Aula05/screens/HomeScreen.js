import { View, Text, Image, StyleSheet, Button, ScrollView } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Home</Text>

      {/* Imagem local */}
      <Image source={require('../assets/logo.png')} style={styles.localImage} />
      <Text style={styles.caption}>Imagem local</Text>

      {/* Imagem remota */}
      <Image
        source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
        style={styles.remoteImage}
      />
      <Text style={styles.caption}>Imagem remota</Text>

      {/* Botão para Perfil */}
      <View style={styles.btn}>
        <Button title="Ir para Perfil" onPress={() => navigation.navigate('Profile')} />
      </View>

      {/* Botão para Galeria */}
      <View style={styles.btn}>
        <Button title="Ir para Galeria" onPress={() => navigation.navigate('Gallery')} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, alignItems: 'center', gap: 14 },
  title: { fontSize: 22, fontWeight: 'bold', marginTop: 8 },
  localImage: { width: 200, height: 200, resizeMode: 'contain' },
  remoteImage: { width: 100, height: 100, resizeMode: 'contain' },
  caption: { fontSize: 14, color: '#555' },
  btn: { marginVertical: 6, width: '100%' }
});
