//Na materia desevolvimento Web nos usamos a estrutura const ao inves de function então a usarei aqui pois estou mais familharizado com ela
import {View,Text,Button,StyleSheet} from 'react-native'
const HomeScreen = ({navigation}) =>{
return(
    <View style={styles.mainCont}>
      <Text style={styles.text}>Italo Verissímo Barbosa</Text>
      <View style={styles.cont}>
        <Button title ="Imagem da internet" onPress={()=>navigation.navigate('Imagem da Internet')}/>
        <Button title ="Imagem local" onPress={()=>navigation.navigate('Imagem local')}/>
         <Button title ="Icones" onPress={()=>navigation.navigate('Icones')}/>
      </View>
    </View>
)
}
const styles = StyleSheet.create({
    mainCont:{
        display:'flex',flexDirection: 'col', justifyContent: "center", alignItems: "center",height: '100%'
    },
    text:{
        color: 'black', fontWeight: "bold", fontSize: 20
    },
    cont:{
        flexDirection: 'row', justifyContent: "space-around", margin: 30
    }
})
export default HomeScreen