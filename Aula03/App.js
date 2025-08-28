import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Button from './components/Button.js'

export default function App() {
  return (
    <>
      <View style={styles.container}>
       <Text style={styles.text}>YOUR CLASSY APP</Text>
        <StatusBar style="auto" />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e2e492ff',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 4,
    borderColor: '#d9da8cff',
    borderStyle: 'solid',
    height: 60
  },

  text: {
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'italic',
    color: '#2e7d3fff',
  },
});
