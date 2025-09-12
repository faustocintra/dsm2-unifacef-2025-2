import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Ionicons } from '@expo/vector-icons';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Logo local (simulado com imagem da internet) */}
      <Image 
        source={{ uri: 'https://via.placeholder.com/200x200/2196F3/FFFFFF?text=LOGO' }} 
        style={styles.logo} 
      />
      
      {/* Ícone com texto */}
      <View style={styles.iconContainer}>
        <FontAwesome name="home" size={40} color="blue" />
        <Text style={styles.texto}>Página Inicial</Text>
      </View>

      {/* Imagem da Internet */}
      <Image
        source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
        style={styles.imagemInternet}
      />

      {/* Botões de navegação */}
      <View style={styles.buttonsContainer}>
        <TouchableOpacity 
          style={styles.button}
          onPress={() => navigation.navigate('Profile')}
        >
          <Ionicons name="person" size={20} color="white" />
          <Text style={styles.buttonText}>Ver Perfil</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.button}
          onPress={() => navigation.navigate('Gallery')}
        >
          <Ionicons name="images" size={20} color="white" />
          <Text style={styles.buttonText}>Galeria</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20
  },
  logo: { 
    width: 200, 
    height: 200, 
    resizeMode: 'contain',
    marginBottom: 20
  },
  iconContainer: {
    alignItems: 'center',
    marginBottom: 20
  },
  texto: { 
    fontSize: 20, 
    marginTop: 10,
    color: '#333'
  },
  imagemInternet: {
    width: 100,
    height: 100,
    marginBottom: 30
  },
  buttonsContainer: {
    width: '100%',
    gap: 15
  },
  button: {
    backgroundColor: '#2196F3',
    padding: 15,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold'
  }
});
