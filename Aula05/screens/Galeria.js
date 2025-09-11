import { View, Image, StyleSheet } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';

export default function Galeria() {
  return (
    <View style={styles.container}>
      <AntDesign name="camera" size={80} color="black"  />
      
      <View style={styles.galeria}>
        <Image
          source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMIvPTzkgyZce_E0HcUKbXonoVQZfHcvuZSw&s' }}
          style={styles.imagem}
        />
        <Image
          source={{ uri: 'https://www.sabornamesa.com.br/media/k2/items/cache/bf1e20a4462b71e3cc4cece2a8c96ac8_XL.jpg' }}
          style={styles.imagem}
        />
        <Image
          source={{ uri: 'https://swiftbr.vteximg.com.br/arquivos/ids/208740-450-450/618283-pizza-artesanal-calabresa_inn.jpg?v=638870725352100000' }}
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
  galeria: {
    flexDirection: 'row', 
    gap: 10, 
    marginTop: 20,
  },
  imagem: { 
    width: 100, 
    height: 100, 
    borderRadius: 8 
  },
  galeria: {
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'center',
  gap: 10,
}
});

