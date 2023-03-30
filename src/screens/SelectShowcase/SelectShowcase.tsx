import { StyleSheet, View, Text, Pressable } from 'react-native';
import SelectDefault from './SelectDefault';
import SelectCustom from './SelectCustom';

export default function SelectShowcase({ nextColorModeName, toggleColorMode }: { nextColorModeName: string, toggleColorMode: () => void }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Select Showcase</Text>
        <Pressable onPress={toggleColorMode}>
          <Text style={styles.title}>{nextColorModeName === 'dark' ? '🌛' : '🌞'}</Text>
        </Pressable>
      </View>
      <SelectDefault />
      <SelectCustom />
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
