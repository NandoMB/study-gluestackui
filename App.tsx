import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { GluestackUIProvider } from './gluestack/components';
import { config } from './gluestack-ui.config';

export default function App() {
  return (
    <GluestackUIProvider config={config.theme}>
      <View style={styles.container}>
        
        <StatusBar style="auto" />
      </View>
    </GluestackUIProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
