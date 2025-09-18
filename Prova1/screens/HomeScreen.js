import { View, Text, Button, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pedro Henrique Bassi Borges</Text>
      <View style={{ width: '80%', marginVertical: 8 }}> 
        <Button
          title="Ver Imagem da Internet"
          onPress={() => navigation.navigate('ImagemInternet')}
        />
      </View>
      
      <View style={{ width: '80%', marginVertical: 8 }}>
        <Button
          title="Ver Imagem Local"
          onPress={() => navigation.navigate('ImagemLocal')}
        />
      </View>

      <View style={{ width: '80%', marginVertical: 8 }}>
        <Button
          title="Ver Três Ícones"
          onPress={() => navigation.navigate('TresIcones')}
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
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  buttonContainer: {
    marginVertical: 8,
    width: '80%',
  },
});