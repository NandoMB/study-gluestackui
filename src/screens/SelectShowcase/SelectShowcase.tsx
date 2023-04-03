import { StyleSheet, View, Text, Pressable } from 'react-native';
import SelectDefault from './SelectDefault';
import SelectCustom from './SelectCustom';
import { Button as GSButton } from '../../../gluestack/components';
import { Button } from '../../components/Button';

export default function SelectShowcase({ nextColorModeName, toggleColorMode }: { nextColorModeName: string, toggleColorMode: () => void }) {
  const data = Array(100).fill(0).map((_, index) => ({
    key: index + 1,
    label: `Option ${index + 1}`,
    value: index + 1
  }));
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Select Showcase</Text>
        <Pressable onPress={toggleColorMode}>
          <Text style={styles.title}>{nextColorModeName === 'dark' ? '🌛' : '🌞'}</Text>
        </Pressable>
      </View>
      <SelectDefault data={data} />
      <SelectCustom data={data} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    gap: 16
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  title: {
    paddingTop: 50,
    paddingBottom: 30,
    fontSize: 26,
    color: 'whitesmoke'
  }
});
