import { styled } from '@dank-style/react';
import { createActionsheet } from '@gluestack-ui/actionsheet';
import {
  Root as GlueStackStyledActionsheetRoot,
  Backdrop as GlueStackStyledActionsheetBackdrop,
  Item as GlueStackStyledActionsheetItem,
  ItemText as GlueStackStyledActionsheetItemText,
  DragIndicator as GlueStackStyledActionsheetDragIndicator,
  IndicatorWrapper as GlueStackStyledActionsheetIndicatorWrapper,
  Content as GlueStackStyledActionsheetContent,
} from '../../../gluestack/components/core/Actionsheet/styled-components';

const StyledRoot = styled(GlueStackStyledActionsheetRoot, {}, {});
const StyledBackdrop = styled(GlueStackStyledActionsheetBackdrop, {
  bgColor: '$blue600'
}, {});
const StyledItem = styled(GlueStackStyledActionsheetItem, {}, {});
const StyledItemText = styled(GlueStackStyledActionsheetItemText, {}, {});
const StyledDragIndicator = styled(GlueStackStyledActionsheetDragIndicator, {}, {});
const StyledIndicatorWrapper = styled(GlueStackStyledActionsheetIndicatorWrapper, {}, {});
const StyledContent = styled(GlueStackStyledActionsheetContent, {}, {});

export const StyledActionSheet = createActionsheet({
  Root: StyledRoot,
  Backdrop: StyledBackdrop,
  Item: StyledItem,
  ItemText: StyledItemText,
  DragIndicator: StyledDragIndicator,
  IndicatorWrapper: StyledIndicatorWrapper,
  Content: StyledContent,
});
