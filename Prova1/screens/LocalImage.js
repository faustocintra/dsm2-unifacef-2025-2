import { View, StyleSheet, Image } from 'react-native';
import ReactImage from '../assets/favicon.png'

export default function InternetImage({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={ReactImage} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

