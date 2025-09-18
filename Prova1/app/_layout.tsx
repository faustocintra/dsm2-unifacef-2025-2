// Em app/_layout.tsx
import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      
      <Stack.Screen name="webimage" options={{ title: 'Imagem da Web' }} />
      <Stack.Screen name="localimage" options={{ title: 'Imagem Local' }} />
      <Stack.Screen name="icons" options={{ title: 'Ícones' }} />
    </Stack>
  );
}