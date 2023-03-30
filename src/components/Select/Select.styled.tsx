import { styled } from '@dank-style/react';
import { createSelect } from '@gluestack-ui/select';
import { ActionSheet, StyledActionSheet } from '../ActionSheet';
import {
  Root as GlueStackSelectStyledRoot,
  Icon as GlueStackSelectStyledIcon,
  Item as GlueStackSelectStyledItem,
  ItemList as GlueStackSelectStyledItemList
} from '../../../gluestack/components/core/Select/styled-components';

const StyledRoot = styled(GlueStackSelectStyledRoot, {}, {});
const StyledIcon = styled(GlueStackSelectStyledIcon, {}, {});
const StyledItem = styled(GlueStackSelectStyledItem, {
  w: '100%',
  h: 'auto',
  paddingVertical: 12,
  paddingHorizontal: 16,
  bg: 'transparent',
  // FIXME: I can't define fontSize, colors and other styles to the text.
  // fontSize: 16
});
const StyledItemList = styled(GlueStackSelectStyledItemList, {
  fontSize: '$lg',
  _light: {
    color: '$black',
    props: {
      placeholderTextColor: '$text400'
    }
  },
  _dark: {
    color: '$white',
    props: {
      placeholderTextColor: '$text600'
    }
  }
}, {});

export const StyledSelect = createSelect({
  Root: StyledRoot,
  Icon: StyledIcon,
  Item: StyledItem,
  ItemList: StyledItemList
}, {
  Actionsheet: StyledActionSheet
});
