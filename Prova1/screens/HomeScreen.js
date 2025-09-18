import { Button, StyleSheet, Text, View } from 'react-native';

// Aqui chamei as telas a partir de "Segunda" porque
// a primeira tela já estou considerando como sendo a Home

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Samuel Schisari Demacq Lago</Text>

      <View style={styles.buttons}>
        <Button
          title="Segunda Tela"
          onPress={() => navigation.navigate('Segunda')}
        />
        <Button
          title="Terceira Tela"
          onPress={() => navigation.navigate('Terceira')}
        />
        <Button
          title="Quarta Tela"
          onPress={() => navigation.navigate('Quarta')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    textAlign: 'center',
  },
  buttons: { gap: 12 },
});
