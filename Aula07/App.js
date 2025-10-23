import React, { useState, useMemo, useCallback } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SectionList,
  TextInput,
  SafeAreaView,
  useWindowDimensions,
} from 'react-native';

const PRODUTOS_MOCK = [
  {
    title: 'Eletrônicos',
    data: [{ id: '1', nome: 'Notebook Gamer', preco: 5999.9 }],
  },
  {
    title: 'Roupas',
    data: [{ id: '5', nome: 'Camiseta Básica', preco: 59.9 }],
  },
  {
    title: 'Livros',
    data: [{ id: '8', nome: 'React Native Avançado', preco: 89.9 }],
  },
];

const ItemProduto = React.memo(({ item }) => {
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.itemNome}>{item.nome}</Text>
      <Text style={styles.itemPreco}>R$ {item.preco.toFixed(2)}</Text>
    </View>
  );
});

export default function App() {
  const { width } = useWindowDimensions();

  const [filtro, setFiltro] = useState('');

  const dadosFormatados = useMemo(() => {
    const termoBusca = filtro.toLowerCase();

    if (termoBusca === '') {
      return PRODUTOS_MOCK;
    }

    return PRODUTOS_MOCK.map((secao) => {
      const itensFiltrados = secao.data.filter((item) =>
        item.nome.toLowerCase().includes(termoBusca)
      );

      return {
        ...secao,
        data: itensFiltrados,
      };
    }).filter((secao) => secao.data.length > 0);
  }, [filtro]);

  const renderHeader = ({ section: { title } }) => (
    <Text style={styles.header}>{title}</Text>
  );

  const renderItem = useCallback(
    ({ item }) => <ItemProduto item={item} />,
    []
  );

  const dynamicStyles = stylesFactory(width);

  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.contentWrapper, dynamicStyles.paddingHorizontal]}>
        <TextInput
          style={styles.inputFiltro}
          placeholder="Filtrar por nome..."
          value={filtro}
          onChangeText={setFiltro}
        />
        <SectionList
          sections={dadosFormatados}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          renderSectionHeader={renderHeader}
          ListEmptyComponent={
            <Text style={styles.textoVazio}>Nenhum produto encontrado.</Text>
          }
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  contentWrapper: {
    flex: 1,
  },
  inputFiltro: {
    backgroundColor: '#FFFFFF',
    padding: 12,
    borderRadius: 8,
    marginVertical: 10,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    backgroundColor: '#eee',
    paddingVertical: 8,
    paddingHorizontal: 10,
    marginTop: 10,
  },
  itemContainer: {
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemNome: {
    fontSize: 16,
  },
  itemPreco: {
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
  },
  textoVazio: {
    textAlign: 'center',
    marginTop: 30,
    fontSize: 16,
    color: 'gray',
  },
});

const stylesFactory = (width) =>
  StyleSheet.create({
    paddingHorizontal: {
      paddingHorizontal: width > 768 ? '15%' : 15,
    },
  });