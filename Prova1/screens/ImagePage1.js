import { View, Image, Button } from "react-native";

export default function ImagePage1({ navigation }) {

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#bd9898ff', gap: 20 }}>
            <View>
                <Image 
                    source={{ uri: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }} 
                    style={{ width: 300, height: 300, borderRadius: 20 }} 
                />
            </View>
            <View>
                <Button 
                    title="Go Back" 
                    onPress={() => navigation.goBack()} 
                />
            </View>
        </View>
    )
    
}