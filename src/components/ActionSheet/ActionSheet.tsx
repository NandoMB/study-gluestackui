import { ReactNode } from 'react';
import { StyleSheet } from 'react-native';
import { StyledActionSheet } from './ActionSheet.styled';

export function ActionSheet({ children, isOpen, onClose }: {
  children: ReactNode,
  isOpen: boolean,
  onClose: () => void
}) {
  function handleClose() {
    console.log('handleClose:', 'Closing ActionSheet');
    onClose();
  }

  return (
    <StyledActionSheet isOpen={isOpen} onClose={handleClose} animationPreset="slide" closeOnOverlayClick useRNModal>
      <StyledActionSheet.Backdrop onTouchEnd={handleClose} />
      <StyledActionSheet.Content>
        <StyledActionSheet.DragIndicatorWrapper>
          <StyledActionSheet.DragIndicator />
        </StyledActionSheet.DragIndicatorWrapper>
        {children}
      </StyledActionSheet.Content>
    </StyledActionSheet>
  );
}

const styles = StyleSheet.create({});
