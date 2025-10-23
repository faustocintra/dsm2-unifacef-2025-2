// Arquivo: App.js

import React, { useState, useMemo, useCallback } from 'react';
import {
  SafeAreaView,
  SectionList,
  Text,
  TextInput,
  StyleSheet,
  View,
  Dimensions,
  StatusBar,
} from 'react-native';

import { PRODUTOS_POR_CATEGORIA } from './dados';
import ProdutoItem from './ProdutoItem';

const { width } = Dimensions.get('window');

export default function App() {
  const [filtro, setFiltro] = useState('');

  const dadosFiltrados = useMemo(() => {
    if (filtro === '') {
      return PRODUTOS_POR_CATEGORIA;
    }

    const dadosNovos = PRODUTOS_POR_CATEGORIA.map((secao) => {
      const itensFiltrados = secao.data.filter((item) =>
        item.nome.toLowerCase().includes(filtro.toLowerCase())
      );

      return {
        ...secao,
        data: itensFiltrados,
      };
    });

    return dadosNovos.filter((secao) => secao.data.length > 0);
  }, [filtro]);

  const renderizaItem = useCallback(
    ({ item }) => <ProdutoItem item={item} />,
    []
  );

  const renderizaHeader = ({ section: { title } }) => (
    <Text style={styles.header}>{title}</Text>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Text style={styles.titulo}>Catálogo Interativo</Text>

      <TextInput
        style={styles.input}
        placeholder="Filtrar produto por nome..."
        placeholderTextColor="#888"
        value={filtro}
        onChangeText={setFiltro}
      />

      <SectionList
        sections={dadosFiltrados}
        keyExtractor={(item) => item.id}
        renderItem={renderizaItem}
        renderSectionHeader={renderizaHeader}
        ListEmptyComponent={
          <Text style={styles.textoVazio}>Nenhum produto encontrado.</Text>
        }
        stickySectionHeadersEnabled
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 10,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 16,
  },
  input: {
    width: width * 0.9,
    height: 44,
    backgroundColor: '#f1f1f1',
    borderRadius: 8,
    paddingHorizontal: 16,
    marginHorizontal: width * 0.05,
    marginBottom: 20,
    fontSize: 16,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: '#eee',
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  textoVazio: {
    textAlign: 'center',
    marginTop: 30,
    fontSize: 16,
    color: 'gray',
  },
});