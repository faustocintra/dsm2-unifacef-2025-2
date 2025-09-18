import { View, Text, Button, StyleSheet } from 'react-native';

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Igor Lima Ponce</Text>
      <Button
        title="Imagem da Internet"
        onPress={() => navigation.navigate('InternetImage')}
      />
      <Button
        title="Imagem Local"
        onPress={() => navigation.navigate('LocalImage')}
      />
      <Button
        title="Icones"
        onPress={() => navigation.navigate('Icons')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10 // Decidi usar o gap para colocar um pouco de espaco ali
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default Home;
