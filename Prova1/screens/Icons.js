import { View, StyleSheet } from 'react-native';
import { Ionicons,AntDesign } from '@expo/vector-icons';
const Icons = () => {
  return (
    <View style={styles.container}>
      <AntDesign name="alert" size={32} color="green" />
      <AntDesign name="aliwangwang" size={24} color="black" />
      <Ionicons name="md-alert-circle" size={32} color="orange" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});

export default Icons;
