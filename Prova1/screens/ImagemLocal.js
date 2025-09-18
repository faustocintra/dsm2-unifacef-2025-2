import { View, Text, Button, StyleSheet } from 'react-native';

export default function ImagemLocal(){
    return(
        <View style={styles.container}>
          <Image source={require('../assets/android.png')} style={styles.avatar}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center' }
})
