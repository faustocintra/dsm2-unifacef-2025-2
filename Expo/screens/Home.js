import { View, Text, StyleSheet, Button } from 'react-native';



export default function Home({ navigation }) {
  return (
    
    <View style={styles.container}>
         <Text style = {styles.texto} >Matheus de Castro Evangelista</Text>
      <Button
        title="Imagem Internet"
        onPress={() => navigation.navigate('IntImage')}
      />
      <Button
        title="Imagem"
        onPress={() => navigation.navigate('Imagems')}
      />
      <Button
        title="Icon"
        onPress={() => navigation.navigate('Icon')}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  imagem: { width: 200, height: 200, resizeMode: 'contain' },
  texto : {fontSize: 20, color : 'black', fontWeight : 'bold'
  }
});