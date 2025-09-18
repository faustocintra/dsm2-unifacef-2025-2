import {View, Image,StyleSheet} from 'react-native'
const ImagemLocal = ({navigation}) =>{
return(
    <View style={styles.mainCont}>
        <Image style={styles.img} source={require('../assets/nature-pictures-ffm1xnpcdzxox0y7.webp')}/>
    </View>
)
}
const styles = StyleSheet.create({
    img:{width:200, height:200},
    mainCont:{
        display: 'flex', justifyContent: 'center', alignItems:'center', height: '100%'
    }
})
export default ImagemLocal