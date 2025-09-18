import { View, Button, Text} from "react-native-web";

export default function HomePage({ navigation }) {
  return (
    <View>
        <View style={{ flex: 1, marginTop: 26, gap: 10, alignContent: 'center', alignItems: 'center'}}>
            <Text style={{fontSize: 24}}>
              Joao Pedro Rosa de Paula
            </Text>
        </View>
        <View style={{ flex: 1, gap: 24, alignContent: 'center', alignItems: 'center' }}>
            <Button title="Go to Image Page 1" onPress={() => navigation.navigate('ImagePage1')} />
            <Button title="Go to Image Page 2" onPress={() => navigation.navigate('ImagePage2')} />
            <Button title="Go to Image Page 3" onPress={() => navigation.navigate('ImagePage3')} />
        </View>
    </View>
  );
}