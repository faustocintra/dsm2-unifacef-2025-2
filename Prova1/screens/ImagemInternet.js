import { View, StyleSheet, Button } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function ImagemInternet({ navigation }) {
  return (
    <View style={styles.container}>
      <AntDesign name="warning" size={100} color="black" style={{ marginBottom: 40 }} />
      <Button
        title="Voltar para a primeira tela"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffd900ff',
  },
});

