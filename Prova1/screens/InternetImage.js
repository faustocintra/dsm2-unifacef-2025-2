import { View, Image, Button, StyleSheet } from 'react-native';

const InternetImage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://cataas.com/cat' }}
        style={styles.image}
      />
      <Button
        title="Voltar para Home"
        onPress={() => navigation.navigate('Home')}
        style={styles.Button}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#6ea2b4ff',
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  Button: {
    marginTop: 20
  },
});

export default InternetImage;
