import { View, Text, StyleSheet, Image, Button } from 'react-native'; 

export default function Tela2({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
        style={{ width: 100, height: 100 }}
      />
      <Button
       title="Voltar para Início"
       onPress={() => navigation.goBack()}
       />
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, justifyContent: 'center', alignItems: 'center',backgroundColor:'#ADD8E6', 
  },
  imagem: { width: 200, height: 200, resizeMode: 'contain',   }
});
