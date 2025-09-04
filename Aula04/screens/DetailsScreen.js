import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';
export default function DetailsScreen({ navigation }) {
 return (
 <View style={styles.container}>
 <Text style={styles.titulo}>Tela de Detalhes</Text>
 <View style={styles.btnView}>
 <TouchableOpacity style ={styles.btn }onPress={()=>navigation.navigate('Perfil')}>
 </TouchableOpacity>
 <Text>Perfil</Text>
 </View>
 <Button title="Voltar" onPress={() => navigation.goBack()} />
 </View>
 );
}
const styles = StyleSheet.create({
 container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
 titulo: { fontSize: 24, color: '#007AFF' },
 btn:{backgroundColor: 'red', height: 100, width: 100, borderRadius: '100%' },
 btnView:{display: 'flex', flexDirection: "col", justifyContent: 'center', alignItems: 'center',margin:10}
});
