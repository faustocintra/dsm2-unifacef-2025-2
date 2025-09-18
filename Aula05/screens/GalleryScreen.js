import { SafeAreaView, ScrollView, View, Image, StyleSheet, Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function GalleryScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.container}>
          {/* Ícone no topo */}
          <MaterialCommunityIcons name="camera" size={80} color="purple" style={styles.icon} />

          <Text style={styles.title}>Minha Galeria</Text>

          {/* 3 imagens da internet */}
          <Image
            source={{ uri: 'https://picsum.photos/200/300?random=1' }}
            style={styles.imagem}
          />
          <Image
            source={{ uri: 'https://picsum.photos/200/300?random=2' }}
            style={styles.imagem}
          />
          <Image
            source={{ uri: 'https://picsum.photos/200/300?random=3' }}
            style={styles.imagem}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    gap: 20,
  },
  icon: {
    marginBottom: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  imagem: {
    width: 200,
    height: 200,
    borderRadius: 10,
    resizeMode: 'cover',
  },
});
