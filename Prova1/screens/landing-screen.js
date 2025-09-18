import { View, Image, StyleSheet, Button,Text } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function LandingScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Bem Vindo a tela inicial </Text>
      <Text style={{ fontWeight: 'bold'}}> ALUNO:  GABRIEL DAVI LOPES JACOBINI!</Text> 
      <View style={styles.containerColumn}>
        <Button title='TELA 1 -> Imagem da Web' onPress={_ => navigation.navigate("WebImage")}/>
        <Button title='TELA 2 -> Imagem Local' onPress={_ => navigation.navigate("LocalImage")}/>
        <Button title='TELA 3 -> Icones' onPress={_ => navigation.navigate("Icons")}/>
      </View>
    </View>

  );
}
const styles = StyleSheet.create({
  container: {  flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' },
  containerColumn: { maxWidth:350, flexDirection: 'column', justifyContent: 'space-around', width: '100%', marginTop: 36, gap: 8 },
  imagem: { width: 200, height: 200, resizeMode: 'contain' }
});