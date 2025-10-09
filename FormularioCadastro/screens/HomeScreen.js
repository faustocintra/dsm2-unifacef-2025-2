import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, SafeAreaView } from 'react-native';

export default function HomeScreen({ navigation }) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [telefone, setTelefone] = useState('');
  const [erros, setErros] = useState({});

  const validar = () => {
    let novosErros = {};

    if (!nome) {
        novosErros.nome = 'O nome completo é obrigatório.';
    }

    if (!email.includes('@')) {
        novosErros.email = 'Digite um e-mail válido.';
    }

    if (senha.length < 6) {
        novosErros.senha = 'A senha deve ter no mínimo 6 caracteres.';
    }

    if (senha !== confirmarSenha) {
        novosErros.confirmarSenha = 'As senhas não coincidem.';
    }

    if (!/^\d+$/.test(telefone)) {
        novosErros.telefone = 'O telefone deve conter apenas números.';
    }

    setErros(novosErros);

    return Object.keys(novosErros).length === 0;
  };

  const handleCadastro = () => {
    if (validar()) {
      const dadosFormatados = {
          nome,
          email,
          telefone
      };
      navigation.navigate('Sucesso', { dados: dadosFormatados });
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.titulo}>Formulário de Cadastro</Text>

        <TextInput
          style={styles.input}
          placeholder="Nome completo"
          value={nome}
          onChangeText={setNome}
        />
        {erros.nome && <Text style={styles.erro}>{erros.nome}</Text>}

        <TextInput
          style={styles.input}
          placeholder="E-mail"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />
        {erros.email && <Text style={styles.erro}>{erros.email}</Text>}

        <TextInput
          style={styles.input}
          placeholder="Senha"
          secureTextEntry
          value={senha}
          onChangeText={setSenha}
        />
        {erros.senha && <Text style={styles.erro}>{erros.senha}</Text>}

        <TextInput
          style={styles.input}
          placeholder="Confirmar senha"
          secureTextEntry
          value={confirmarSenha}
          onChangeText={setConfirmarSenha}
        />
        {erros.confirmarSenha && <Text style={styles.erro}>{erros.confirmarSenha}</Text>}

        <TextInput
          style={styles.input}
          placeholder="Telefone"
          keyboardType="numeric"
          value={telefone}
          onChangeText={setTelefone}
        />
        {erros.telefone && <Text style={styles.erro}>{erros.telefone}</Text>}

        <Button title="Cadastrar" onPress={handleCadastro} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  content: {
    padding: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 5,
    padding: 10,
    borderRadius: 8,
  },
  erro: {
    color: 'red',
    marginBottom: 10,
    marginLeft: 5,
  },
});