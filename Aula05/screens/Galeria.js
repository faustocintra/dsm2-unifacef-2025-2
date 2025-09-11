import { View,  Image, StyleSheet } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
export default function Galeria() {
  return (
    <View style={styles.container}>
        <AntDesign name="camera" size={24} color="blue" />
      <Image
             source={{ uri: 'https://tse1.mm.bing.net/th/id/OIP.g6Tg2BiSWOVK_h5Y2zdksAHaI5?rs=1&pid=ImgDetMain&o=7&rm=3' }}
             style={{ width: 100, height: 100 }}
           />
         <Image
                source={{ uri: 'https://tse2.mm.bing.net/th/id/OIP.MC7GTGGcr32TY6lJ3YTVSAHaHE?rs=1&pid=ImgDetMain&o=7&rm=3' }}
                style={{ width: 100, height: 100 }}
              />
         <Image
                source={{ uri: 'https://th.bing.com/th/id/R.aca3bcf22c0e573707acaf0ba0fb4d9a?rik=NOznQuc6Isr%2b%2fg&pid=ImgRaw&r=0' }}
                style={{ width: 100, height: 100 }}
              />
      
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },

  name: { fontSize: 22, fontWeight: 'bold', marginVertical: 10 }
});