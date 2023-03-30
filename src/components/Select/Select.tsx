import { useMemo, useState } from 'react';
import { Pressable, ScrollView, StyleSheet, useWindowDimensions } from 'react-native';
import { StyledSelect } from './Select.styled';

type SelectItem = {
  key: number,
  label: string,
  value: any,
  isDisabled: boolean
};

export type SelectProps = {
  data: SelectItem[],
  placeholder?: string,
  size?: number,
  onClose: () => void,
  onSelectItem: (value: any) => void,
  closeOnSelectItem: boolean
  closeOnTouchBackdrop: boolean
};

export function Select({ data, placeholder, size = 40, onSelectItem, onClose, closeOnSelectItem, closeOnTouchBackdrop }: SelectProps) {
  const [selectedItem, setSelectedItem] = useState<SelectItem>();
  const { height: SCREEN_HEIGHT } = useWindowDimensions();
  const ACTION_SHEET_HEIGHT = useMemo(() => SCREEN_HEIGHT * (size / 100), [size]);

  function onCloseActionSheetHandler() {
    onClose && onClose();
    // FIXME:
    // How can I close the Actionsheet? Where is the controller property to do this?
    // How do I make Actionsheet closes after touch the overlay?
  };

  function onSelectItemHandler(item: SelectItem) {
    setSelectedItem(item);
    onSelectItem && onSelectItem(item.value);
    closeOnSelectItem && onCloseActionSheetHandler();
  };

  return (
    <StyledSelect>
      <StyledSelect.ItemList placeholder={placeholder} value={selectedItem?.label}>
        <ScrollView style={[styles.scrollView, { height: ACTION_SHEET_HEIGHT }]}>
          {data.map(item => (
            <Pressable key={item.key} onPress={() => onSelectItemHandler(item)}>
              <StyledSelect.Item value={item.value} label={item.label} isDisabled={item.isDisabled} />
            </Pressable>
          ))}
        </ScrollView>
      </StyledSelect.ItemList>
      <StyledSelect.Icon></StyledSelect.Icon>
    </StyledSelect>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    width: '100%'
  }
});
