import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Button,
} from "react-native";

export default function App() {
  const [contador, setContador] = useState(0);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />

      {/* Cabeçalho */}
      <Text style={styles.titulo}>Aula 03</Text>
      <Text style={styles.subtitulo}>
        Interatividade, Flexbox e Estado (useState)
      </Text>

      {/* Exemplo de layout com Flexbox: 3 caixas distribuídas em row */}
      <View style={styles.flexRow}>
        <View style={[styles.caixa, { backgroundColor: "#ef4444" }]} />
        <View style={[styles.caixa, { backgroundColor: "#22c55e" }]} />
        <View style={[styles.caixa, { backgroundColor: "#3b82f6" }]} />
      </View>

      {/* Card central com contador + botões */}
      <View style={styles.card}>
        <Text style={styles.cardTitulo}>Contador</Text>
        <Text style={styles.cardNumero}>{contador}</Text>

        {/* TouchableOpacity = botão customizado (Aula 02) */}
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.botaoPrimary}
          onPress={() => setContador((c) => c + 1)}
        >
          <Text style={styles.botaoTexto}>Somar +1</Text>
        </TouchableOpacity>

        {/* Button = sem estilização, apenas funcional (Aula 02) */}
        <View style={styles.buttonWrapper}>
          <Button title="Zerar" onPress={() => setContador(0)} />
        </View>
      </View>

      <Text style={styles.rodape}>Ambiente configurado com Expo ✅</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F7F8",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    gap: 16,
  },
  titulo: {
    fontSize: 20,
    fontWeight: "700",
    color: "#111827",
  },
  subtitulo: {
    fontSize: 13,
    color: "#6B7280",
    textAlign: "center",
  },
  flexRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
    marginTop: 4,
    marginBottom: 8,
  },
  caixa: {
    width: 50,
    height: 50,
    borderRadius: 8,
  },
  card: {
    width: "100%",
    backgroundColor: "#FFFFFF",
    borderRadius: 14,
    padding: 16,
    alignItems: "center",
    gap: 10,
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },
  cardTitulo: {
    fontSize: 16,
    fontWeight: "700",
    color: "#111827",
  },
  cardNumero: {
    fontSize: 40,
    fontWeight: "800",
    color: "#111827",
    marginVertical: 6,
  },
  botaoPrimary: {
    backgroundColor: "#2563EB",
    paddingVertical: 12,
    paddingHorizontal: 18,
    borderRadius: 10,
    alignItems: "center",
    width: "100%",
  },
  botaoTexto: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "600",
    letterSpacing: 0.2,
    textAlign: "center",
  },
  buttonWrapper: {
    marginTop: 6,
    alignSelf: "stretch",
  },
  rodape: {
    fontSize: 12,
    color: "#9CA3AF",
    textAlign: "center",
  },
});
