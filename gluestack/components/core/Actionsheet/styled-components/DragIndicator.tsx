import { View } from 'react-native';
import { styled } from '@dank-style/react';

export default styled(
  View,
  {
    height: '$1',
    width: '$12',
    bg: '$backgroundLight400',
    rounded: '$full',
    _dark: {
      bg: '$backgroundDark500',
    },
  },
  {}
);
