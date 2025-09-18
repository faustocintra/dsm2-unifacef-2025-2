import { View , StyleSheet} from "react-native"
import { Ionicons } from '@expo/vector-icons';
import {FontAwesome} from '@expo/vector-icons'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
const Icones = ({navigation}) =>{
  return(
    <View style={styles.mainCont}>
    <FontAwesome name='home' size={40} color='blue'/>
<FontAwesome name='rebel' size={40} color='red'/>
<FontAwesome5 name="fan" size={40} color="black" />
</View>

  )
}
const styles = StyleSheet.create({
mainCont:{
    display: "flex", flexDirection:"row", justifyContent: "space-around", height: "100%",alignItems:"center"
}
})
export default Icones