import { StyleSheet, SafeAreaView, View, Text } from 'react-native';
import { Icon, Select } from '../../../gluestack/components';
import { InfoIcon } from 'lucide-react-native';

export default function ActionSheetShowcase() {
  const data = Array(100).fill(0).map((_, index) => ({
    key: index,
    label: `Option ${index}`,
    value: index
  }));
  return (
    <View style={styles.container}>
      <Text style={styles.title}>ActionSheet Showcase</Text>
      <Select>
        <Select.ItemList placeholder="Select">
          {data.map(item => (
            <Select.Item key={item.key} value={item.value} label={item.label} />
          ))}
        </Select.ItemList>
        <Select.Icon>
          <Icon as={InfoIcon} />
        </Select.Icon>
      </Select>
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