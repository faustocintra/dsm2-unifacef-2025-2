import { StyleSheet, Button, View, Image } from 'react-native';

export default function IntImage() {
  return (
    <View style={styles.container}>
       <Image
             source={{ uri: 'https://tse2.mm.bing.net/th/id/OIP.J_s0Rz5KzvXXuURG5QzCRgHaHa?rs=1&pid=ImgDetMain&o=7&rm=3' }}
             style={{ width: 100, height: 100 }}
           />

     <Button
        title="Voltar"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
