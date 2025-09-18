import { View, Image, StyleSheet, Button } from 'react-native';

export default function LocalImageScreen({ voltar }) {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/facef.png')} style={styles.img} />
      <View style={{ marginTop: 24 }}>
        <Button title="Voltar para Início" onPress={voltar} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{ flex:1, alignItems:'center', justifyContent:'center' },
  img:{ width:220, height:220, resizeMode:'contain' }
});
