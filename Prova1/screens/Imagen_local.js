import { View, Image, StyleSheet, Button } from 'react-native';

export default function Imagen_local({ navigation }) {
  return (
    <View style={styles.container}>


      <View style={styles.container2}>
        <Image
          source={require('../assets/download.jpg')}
          style={styles.imagem}
        />

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  imagem: {
    width: 200,
    height: 200,
    borderRadius: 8
  },
  container2: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 10,
  }
});

