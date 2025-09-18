import { View, Image, StyleSheet,Button } from 'react-native';

export default function Imagens({navigation}) {
  return (
    <View style={styles.container}>
      <Button title="Voltar" onPress={() => navigation.goBack()} />
      
      <View style={styles.container2}>
        <Image
          source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMIvPTzkgyZce_E0HcUKbXonoVQZfHcvuZSw&s' }}
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
    alignItems: 'center',
    backgroundColor: '#000'
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

