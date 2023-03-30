import { StyleSheet } from 'react-native';
// import { InfoIcon } from 'lucide-react-native';

import { Select } from '../../components';

export default function SelectCustom() {
  const data = Array(100).fill(0).map((_, index) => ({
    key: index,
    label: `Option ${index}`,
    value: index,
    isDisabled: true
  }));
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
