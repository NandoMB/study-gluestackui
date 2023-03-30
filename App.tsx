import { StyleSheet, SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { GluestackUIProvider } from './gluestack/components';
import { config } from './gluestack-ui.config';
import IconShowcase from './src/screens/IconShowcase';
import ActionSheetShowcase from './src/screens/ActionSheetShowcase';
import SelectShowcase from './src/screens/SelectShowcase';

export default function App() {
  return (
    <GluestackUIProvider config={config.theme}>
      <SafeAreaView style={styles.container}>
        {/* <IconShowcase /> */}
        {/* <ActionSheetShowcase /> */}
        <SelectShowcase />
        <StatusBar style="light" />
      </SafeAreaView>
    </GluestackUIProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
  }
});
