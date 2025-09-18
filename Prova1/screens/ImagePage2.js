import { View, Image } from "react-native";

export default function ImagePage2() {

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Image 
                source={require('../assets/space.avif')} 
                style={{ width: 300, height: 300, marginTop: 50, borderRadius: 20 }} 
            />
        </View>
    )
    
}