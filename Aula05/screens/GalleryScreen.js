import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function GalleryScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Ícone de câmera no topo */}
      <View style={styles.headerContainer}>
        <Ionicons name="camera" size={40} color="#FF5722" />
        <Text style={styles.title}>Galeria de Imagens</Text>
      </View>

      {/* Três imagens diferentes da internet */}
      <View style={styles.imagesContainer}>
        <View style={styles.imageWrapper}>
          <Image
            source={{ uri: 'https://picsum.photos/300/200?random=1' }}
            style={styles.image}
          />
          <Text style={styles.imageLabel}>Paisagem 1</Text>
        </View>

        <View style={styles.imageWrapper}>
          <Image
            source={{ uri: 'https://picsum.photos/300/200?random=2' }}
            style={styles.image}
          />
          <Text style={styles.imageLabel}>Paisagem 2</Text>
        </View>

        <View style={styles.imageWrapper}>
          <Image
            source={{ uri: 'https://picsum.photos/300/200?random=3' }}
            style={styles.image}
          />
          <Text style={styles.imageLabel}>Paisagem 3</Text>
        </View>
      </View>

      {/* Informações adicionais */}
      <View style={styles.infoContainer}>
        <Ionicons name="information-circle" size={24} color="#2196F3" />
        <Text style={styles.infoText}>
          Imagens carregadas dinamicamente da internet
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  headerContainer: {
    alignItems: 'center',
    marginBottom: 30,
    paddingVertical: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#333',
  },
  imagesContainer: {
    gap: 20,
  },
  imageWrapper: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    width: 280,
    height: 180,
    borderRadius: 8,
    resizeMode: 'cover',
  },
  imageLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#555',
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    padding: 15,
    backgroundColor: '#E3F2FD',
    borderRadius: 8,
    gap: 10,
  },
  infoText: {
    fontSize: 14,
    color: '#1976D2',
    textAlign: 'center',
    flex: 1,
  },
});
