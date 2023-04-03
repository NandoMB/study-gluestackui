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
  // FIXME: How could I pass my custom Actionsheet?
  // Actionsheet: ActionSheet,

  // FIXME: The farthest that I could get was doing like this. Only passing some
  //        custom styles and that's it. I would like to modify some properties
  //        on my own custom Actionsheet, like in the line 45... Did you got it?
  Actionsheet: StyledActionSheet,
});
