import { TextInput } from 'react-native';
import { styled } from '@dank-style/react';

export default styled(
  TextInput,
  {
    ':focus': {
      borderWidth: '$2',
      borderColor: '$primary700',
    },
    'color': '$textLight900',
    'props': {
      placeholderTextColor: '$textLight400',
    },
    '_dark': {
      color: '$textDark50',
      props: {
        placeholderTextColor: '$textDark400',
      },
    },
  },
  { ancestorStyle: ['_itemList'], resolveProps: ['placeholderTextColor'] },
  {
    propertyTokenMap: {
      placeholderTextColor: 'colors',
    },
  }
);
