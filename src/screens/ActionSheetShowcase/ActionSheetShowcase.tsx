import { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import { Actionsheet } from '../../../gluestack/components';

export default function ActionSheetShowcase() {
  const [showActionsheet, setShowActionsheet] = useState(false)
  const handleClose = () => setShowActionsheet(!showActionsheet)

  return (
    <View style={{  }}>
      <Text style={{ color: 'whitesmoke' }}>ActionSheetShowcase</Text>
      <Pressable onPress={handleClose}>
        <Text style={{ color: 'whitesmoke' }}>Open</Text>
      </Pressable>
      <Actionsheet isOpen={showActionsheet} onClose={handleClose} animationPreset="slide" closeOnOverlayClick useRNModal>
        <Actionsheet.Backdrop onTouchEnd={handleClose} />
        <Actionsheet.Content>
          <Actionsheet.DragIndicatorWrapper>
            <Actionsheet.DragIndicator />
          </Actionsheet.DragIndicatorWrapper>
          <Actionsheet.Item>
            <Actionsheet.ItemText>Settings</Actionsheet.ItemText>
          </Actionsheet.Item>
          <Actionsheet.Item>
            <Actionsheet.ItemText>Add account</Actionsheet.ItemText>
          </Actionsheet.Item>
          <Actionsheet.Item onPress={handleClose}>
            <Actionsheet.ItemText>Close</Actionsheet.ItemText>
          </Actionsheet.Item>
        </Actionsheet.Content>
      </Actionsheet>
    </View>
  );
}