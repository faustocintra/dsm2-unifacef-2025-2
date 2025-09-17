
import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function GaleriaScreen({ navigation }) {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitleAlign: 'center',
      headerTitle: () => (
        <TouchableOpacity onPress={() => alert('Ícone da câmera pressionado')}>
          <Ionicons name="camera" size={50} color="black" />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image
        style={styles.imagem}
        source={{ uri: 'https://picsum.photos/id/237/400/500' }}
      />
      <Image
        style={styles.imagem}
        source={{ uri: 'https://picsum.photos/id/238/400/500' }}
      />
      <Image
        style={styles.imagem}
        source={{ uri: 'https://picsum.photos/id/239/400/500' }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  imagem: {
    width: 300,
    height: 200,
    borderRadius: 10,
    marginVertical: 10,
  },
});