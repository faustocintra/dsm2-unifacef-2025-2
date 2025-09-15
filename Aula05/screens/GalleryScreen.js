import { View, Text, Image, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Importa a biblioteca de ícones

export default function GalleryScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="camera" size={30} color="red" /> // Adiciona o ícone da câmera
        <Text style={styles.titulo}>Minha Galeria</Text>
      </View>
      <View style={styles.gallery}>
        <Image
          style={styles.imagem}
          source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} // Imagem da internet
        />
        <Image
          style={styles.imagem}
          source={{ uri: 'https://cdn.icon-library.com/images/react-icon/react-icon-29.jpg' }}
        />
        <Image
          style={styles.imagem}
          source={{ uri: 'https://blog.geekhunter.com.br/wp-content/uploads/2021/08/react-native.png' }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  gallery: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  imagem: {
    width: 120,
    height: 120,
    margin: 5,
    resizeMode: 'contain',
  },
});