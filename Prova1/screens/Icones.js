import { View, Image, StyleSheet } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function Icone({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <AntDesign name="camera" size={50} color="black" />
        <AntDesign name="bank" size={50} color="red" />
        <FontAwesome name="money" size={50} color="blue" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  
  container2: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 70,
  }
});

