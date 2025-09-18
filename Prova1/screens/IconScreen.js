import { Button, StyleSheet, View } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';


export default function IconScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <AntDesign name="camera" size={30} color="red" />
            <Entypo name="documents" size={30} color="cyan" />
            <FontAwesome5 name="users-cog" size={30} color="green" />
            <Button
                title="Voltar"
                onPress={() => navigation.goBack()}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        gap: 20
    },
});