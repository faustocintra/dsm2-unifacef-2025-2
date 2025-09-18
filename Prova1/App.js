import { useState } from 'react';
import HomeScreen from './screens/HomeScreen';
import WebImageScreen from './screens/WebImageScreen';
import LocalImageScreen from './screens/LocalImageScreen';
import IconsScreen from './screens/IconsScreen';

export default function App() {
  const [tela, setTela] = useState('home');

  if (tela === 'web') return <WebImageScreen voltar={() => setTela('home')} />;
  if (tela === 'local') return <LocalImageScreen voltar={() => setTela('home')} />;
  if (tela === 'icons') return <IconsScreen voltar={() => setTela('home')} />;
  return <HomeScreen navegar={setTela} />;
}
