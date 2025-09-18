//justify-content: 'space between'
import { View,  StyleSheet } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
export default function Icon() {
  return (
    <View style={styles.container}>
      <AntDesign name="camera" size={24} color="blue" />
     <AntDesign name="camera" size={24} color="red" />
      <AntDesign name="camera" size={24} color="green" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignContent: 'center', flexDirection: 'row' },
  name: { fontSize: 22, fontWeight: 'bold', marginVertical: 10 },
  caixa1: { width: 50, height: 50 },
 caixa2: { width: 50, height: 50 },
 caixa3: { width: 50, height: 50 }

});