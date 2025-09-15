import { useLayoutEffect } from 'react';
import { View, Image, StyleSheet, Text, ScrollView, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function GalleryScreen({ navigation }) {
  // Configura o ícone no header
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Ionicons
          name="camera"
          size={28}             // tamanho
          color="#7C3AED"       // cor roxa
          style={{ marginRight: 12 }}
          onPress={() => Alert.alert("Câmera", "Você clicou no ícone de câmera!")}
        />
      ),
    });
  }, [navigation]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Galeria</Text>

      <Image
        source={{ uri: 'https://images.unsplash.com/photo-1519681393784-d120267933ba' }}
        style={styles.img}
        resizeMode="contain"
      />
      <Image
        source={{ uri: 'https://images.unsplash.com/photo-1495567720989-cebdbdd97913' }}
        style={styles.img}
        resizeMode="contain"
      />
      <Image
        source={{ uri: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee' }}
        style={styles.img}
        resizeMode="contain"
      />

      <Text style={styles.caption}>
        Ícone de câmera no topo (Ionicons) – cor roxa, tamanho 28 e com ação ao clicar.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16, alignItems: 'center', gap: 14 },
  title: { fontSize: 18, fontWeight: '600', marginVertical: 6 },
  img: {
    width: '100%',
    aspectRatio: 16 / 9,
    marginVertical: 8,
    borderRadius: 8,
    backgroundColor: '#eee'
  },
  caption: { color: '#555', fontSize: 13, marginTop: 6, textAlign: 'center' }
});
