import { Ionicons } from "@expo/vector-icons"
import { View } from 'react-native'

export default function ImagePage3() {

    return (
        <View style={{ gap: 20, alignItems: 'center', flex: 1, justifyContent: 'center', flexDirection: 'row' }}>
            <Ionicons name="home-outline" size={40} color="blue" />
            <Ionicons name="settings-outline" size={40} color="green" />
            <Ionicons name="person-outline" size={40} color="purple" />
        </View>
    )
    
}