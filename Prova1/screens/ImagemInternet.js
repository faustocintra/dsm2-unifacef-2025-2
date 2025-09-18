import {View,Button,Text,Image,StyleSheet} from 'react-native'
const ImagemInternet = ({navigation}) =>{
return(
  <View style={styles.mainCont}>
   
    <Image style={styles.img}source={{uri: 'https://blog.emania.com.br/wp-content/uploads/2016/02/direitos-autorais-e-de-imagem.jpg'}}/>
    <Button title='Voltar' onPress={()=>navigation.goBack()}/>
  </View>
)
}
const styles = StyleSheet.create({
    img:{ width: 300, height: 300},
    mainCont:{
        display: 'flex', justifyContent: "center", alignItems:'center',backgroundColor: 'purple', height:'100%'
    }
})
export default ImagemInternet