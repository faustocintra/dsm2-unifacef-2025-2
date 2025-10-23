
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

function ProdutoItem({ item }) {
  console.log('Renderizando Item:', item.nome); // Para vermos a otimização
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.itemNome}>{item.nome}</Text>
      <Text style={styles.itemPreco}>R$ {item.preco.toFixed(2)}</Text>
    </View>
  );
}


export default React.memo(ProdutoItem);

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: '#f8f9fa', 
    padding: 16, 
    marginVertical: 8, 
    marginHorizontal: 16,
    borderRadius: 8, 
    shadowColor: '#000',
    shadowOpacity: 0.1, 
    shadowRadius: 5, 
    elevation: 3,
  },
  itemNome: {
    fontSize: 16,
    fontWeight: 'bold', 
  },
  itemPreco: {
    fontSize: 14,
    color: 'gray', 
    marginTop: 4,
  },
});