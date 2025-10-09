import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');

  const handleLogin = () => {
    setErro('');

    if (!email.includes('@')) {
      setErro('Digite um e-mail válido');
      return;
    }
    if (senha.length < 6) {
      setErro('A senha deve ter no mínimo 6 caracteres');
      return;
    }
    navigation.navigate('Home', { email: email });

  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Login</Text>
      
      {/* Campos de e-mail e senha [cite: 96] */}
      <TextInput
        style={styles.input}
        placeholder="E-mail"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry // Usar secureTextEntry para senhas [cite: 92]
        value={senha}
        onChangeText={setSenha}
      />
      
      {/* Mostra erros diretamente abaixo dos campos [cite: 98] */}
      {erro ? <Text style={styles.erro}>{erro}</Text> : null}

      <Button title="Entrar" onPress={handleLogin} />

      <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
        <Text style={styles.link}>Não tem uma conta? Cadastre-se</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  titulo: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  input: { borderWidth: 1, borderColor: '#ccc', marginBottom: 15, padding: 10, borderRadius: 8 },
  erro: { color: 'red', marginBottom: 10, textAlign: 'center' },
  link: { color: 'blue', marginTop: 20, textAlign: 'center' },
});