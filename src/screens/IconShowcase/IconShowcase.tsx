import { StyleSheet, SafeAreaView, View, Text } from 'react-native';
import { Icon } from '../../../gluestack/components';
import { InfoIcon } from 'lucide-react-native';

export default function IconShowcase() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Icon Showcase</Text>
      <Icon as={InfoIcon} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16
  },
  title: {
    paddingTop: 50,
    paddingBottom: 30,
    fontSize: 26,
    color: 'whitesmoke'
  }
});