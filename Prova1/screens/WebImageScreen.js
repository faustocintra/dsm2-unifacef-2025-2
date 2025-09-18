import { View, Image, StyleSheet, Button } from 'react-native';

export default function WebImageScreen({ voltar }) {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
        style={{ width: 160, height: 160 }}
      />
      <View style={{ marginTop: 24 }}>
        <Button title="Voltar para Início" onPress={voltar} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{ flex:1, backgroundColor:'#EEF6FF', alignItems:'center', justifyContent:'center' }
});
