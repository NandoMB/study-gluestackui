import { StyleSheet } from 'react-native';
// import { InfoIcon } from 'lucide-react-native';

import { Select } from '../../components';

export default function SelectCustom({ data }: { data: any[] }) {
  return (
    <Select
      data={data}
      placeholder="My placeholder"
      onSelectItem={(value) => console.log(`SelectCustom > onSelectItem() --> ${JSON.stringify(value)}`)}
      onClose={() => console.log('SelectCustom > onClose()')}
      closeOnSelectItem
      closeOnTouchBackdrop
    />
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
