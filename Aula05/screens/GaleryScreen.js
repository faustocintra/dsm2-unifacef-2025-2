import { FontAwesome } from '@expo/vector-icons'
import {View,Image,StyleSheet} from 'react-native'
export default function GaleryScreen({navigation}){
    const urlList = ['https://ciclovivo.com.br/wp-content/uploads/2018/10/iStock-536613027.jpg','https://wallpapers.com/images/featured-full/imagens-incriveis-k287z98ruunquo28.jpg','https://wallpapers.com/images/featured-full/imagens-claras-gkaxtdvra1koe62i.jpg']
    return(
<View style={styles.view}>
    <FontAwesome name='camera' size={30} color='blue'/>
<View style={styles.gridContainer}>
    {
        urlList.map((img,index)=>(
            <Image style={styles.imagem} key={index} source={{uri:img}}/>
        ))
    }
</View>
</View>
    )
}
const styles = StyleSheet.create({
      gridContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems:'center',
        justifyContent: 'space-around', // Distribute items evenly
        padding: 10,
        width:'100%'
      },
       imagem: { width: 200, height: 200 },
       view:{
        display:'flex',
        justifyContent:"center",
        alignItems: 'center',
        padding: 10,
        width: '100%'
       }
    })