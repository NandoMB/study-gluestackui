import { useState } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { COLORMODES } from '@dank-style/react/lib/typescript/types';
import { GluestackUIProvider } from './gluestack/components';
import { config } from './gluestack-ui.config';
import IconShowcase from './src/screens/IconShowcase';
import ActionSheetShowcase from './src/screens/ActionSheetShowcase';
import SelectShowcase from './src/screens/SelectShowcase';
import { styled } from '@dank-style/react';

const StyledSafeAreaView = styled(SafeAreaView, {
  flex: 1,
  bgColor: '#d5d5d5',
  _dark: {
    bgColor: '#111'
  }
});

export default function App() {
  const [colorMode, setColorMode] = useState<COLORMODES>('dark');
  const getInvertedTheme = () => colorMode === 'dark' ? 'light' : 'dark';
  const toggleColorMode = () => setColorMode(getInvertedTheme());
  return (
    <GluestackUIProvider config={config.theme} colorMode={colorMode}>
      <StyledSafeAreaView>
        {/* <IconShowcase toggleColorMode={toggleColorMode} nextColorModeName={getInvertedTheme()} /> */}
        {/* <ActionSheetShowcase toggleColorMode={toggleColorMode} nextColorModeName={getInvertedTheme()} /> */}
        <SelectShowcase toggleColorMode={toggleColorMode} nextColorModeName={getInvertedTheme()} />
        <StatusBar style={getInvertedTheme()} />
      </StyledSafeAreaView>
    </GluestackUIProvider>
  );
}

