import { View, Text, StyleSheet, Button } from 'react-native';


export default function HomePage({navigation}) {
    return(
        <View style={styles.container}>
            <Text>Pedro Henrique Mendes Cândido</Text>
            <Button title='Tela 1' onPress={() => navigation.navigate('Internet')}/>
            <Button title='Tela 2' onPress={() => navigation.navigate('Image')}/>
            <Button title='Tela 3' onPress={() => navigation.navigate('Icons')}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {flex: 1, justifyContent: 'center', alignItems: 'center'}
});