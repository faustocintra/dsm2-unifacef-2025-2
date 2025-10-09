// screens/CadastroScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';

export default function CadastroScreen({ navigation }) {
  // Estados para os dados do formulário
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [telefone, setTelefone] = useState('');

  // Estados para os erros de cada campo
  const [erros, setErros] = useState({});

  const handleCadastro = () => {
    let newErros = {};

    if (!nome) newErros.nome = 'O nome completo é obrigatório';
    if (!email.includes('@')) newErros.email = 'Digite um e-mail válido';
    if (senha.length < 6) newErros.senha = 'A senha deve ter no mínimo 6 caracteres';
    // A senha e a confirmação devem ser iguais [cite: 112]
    if (senha !== confirmarSenha) newErros.confirmarSenha = 'As senhas não coincidem';
    if (!telefone) newErros.telefone = 'O telefone é obrigatório';

    setErros(newErros);

    // Se o objeto de erros estiver vazio, o formulário é válido
    if (Object.keys(newErros).length === 0) {
      // Ao finalizar, exibir os dados formatados em uma nova tela [cite: 114]
      // passando dados de uma tela a outra usando navigation.navigate() [cite: 115]
      navigation.navigate('Welcome', {
        nome: nome,
        email: email,
        telefone: telefone,
      });
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>Formulário de Cadastro</Text>

      {/* Campo Nome completo [cite: 105] */}
      <TextInput style={styles.input} placeholder="Nome Completo" value={nome} onChangeText={setNome} />
      {erros.nome && <Text style={styles.erro}>{erros.nome}</Text>}

      {/* Campo E-mail [cite: 106] */}
      <TextInput style={styles.input} placeholder="E-mail" value={email} onChangeText={setEmail} keyboardType="email-address" autoCapitalize="none" />
      {erros.email && <Text style={styles.erro}>{erros.email}</Text>}

      {/* Campo Senha [cite: 107] */}
      <TextInput style={styles.input} placeholder="Senha" value={senha} onChangeText={setSenha} secureTextEntry />
      {erros.senha && <Text style={styles.erro}>{erros.senha}</Text>}

      {/* Campo Confirmar senha [cite: 108] */}
      <TextInput style={styles.input} placeholder="Confirmar Senha" value={confirmarSenha} onChangeText={setConfirmarSenha} secureTextEntry />
      {erros.confirmarSenha && <Text style={styles.erro}>{erros.confirmarSenha}</Text>}

      {/* Campo Telefone [cite: 109] */}
      <TextInput
        style={styles.input}
        placeholder="Telefone"
        value={telefone}
        onChangeText={setTelefone}
        keyboardType="numeric" // O telefone deve aceitar apenas números [cite: 111]
      />
      {/* Mostrar erros específicos abaixo de cada campo inválido [cite: 113] */}
      {erros.telefone && <Text style={styles.erro}>{erros.telefone}</Text>}

      <Button title="Cadastrar" onPress={handleCadastro} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
    container: { flexGrow: 1, justifyContent: 'center', padding: 20 },
    titulo: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
    input: { borderWidth: 1, borderColor: '#ccc', padding: 10, borderRadius: 8, marginBottom: 5 },
    erro: { color: 'red', alignSelf: 'flex-start', marginLeft: 5, marginBottom: 10 },
});