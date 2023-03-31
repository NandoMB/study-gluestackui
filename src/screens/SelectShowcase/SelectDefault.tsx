import { StyleSheet, ScrollView } from 'react-native';
import { Icon, Select } from '../../../gluestack/components';
import { InfoIcon } from 'lucide-react-native';

export default function SelectDefault({ data }: { data: any[] }) {
  return (
    <Select>
      <Select.ItemList placeholder="Default Select">
        <ScrollView style={styles.scrollView}>
          {data.map(item => (
            <Select.Item key={item.key} value={item.value} label={item.label} />
          ))}
        </ScrollView>
      </Select.ItemList>
      <Select.Icon>
        <Icon as={InfoIcon} />
      </Select.Icon>
    </Select>
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
  },
  scrollView: {
    // width: '100%',
    height: 400,
    // backgroundColor: 'blue'
  }
});
