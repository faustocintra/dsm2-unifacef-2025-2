import { View,  Image, StyleSheet } from 'react-native';

export default function Imagems() {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/avatar.png')} style={styles.avatar}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  avatar: { width: 100,height:100, justifyContent: 'center', alignItems: 'center' },
});