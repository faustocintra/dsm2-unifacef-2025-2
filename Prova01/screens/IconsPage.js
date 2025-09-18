import { View, StyleSheet } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';


export default function IconsPage() {
    return(
        <View style={styles.container}>
            <AntDesign name="apple" size={40} color="black" />
            <AntDesign name="baidu" size={40} color="blue" />
            <AntDesign name="bell" size={40} color="red" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'},
})