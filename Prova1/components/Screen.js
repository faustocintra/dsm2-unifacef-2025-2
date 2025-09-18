// components/Screen.js
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';

export default function Screen({ children, center = false }) {
  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView
        contentContainerStyle={[styles.content, center && styles.center]}
        showsVerticalScrollIndicator={false}
      >
        {children}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#fff' },
  content: { flexGrow: 1, padding: 16 },
  center: { alignItems: 'center', justifyContent: 'center', gap: 12 },
});
