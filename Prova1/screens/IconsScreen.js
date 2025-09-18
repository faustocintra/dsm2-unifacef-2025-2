import { View, StyleSheet, Button } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function IconsScreen({ voltar }) {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Ionicons name="camera" size={48} color="#007AFF" />
        <Ionicons name="heart" size={48} color="#E74C3C" />
        <Ionicons name="star" size={48} color="#F1C40F" />
      </View>
      <View style={{ marginTop: 24 }}>
        <Button title="Voltar para Início" onPress={voltar} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{ flex:1, alignItems:'center', justifyContent:'center' },
  row:{ width:'80%', flexDirection:'row', justifyContent:'space-between' }
});
