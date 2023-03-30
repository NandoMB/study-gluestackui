import { View } from 'react-native';
import { styled } from '@dank-style/react';

export default styled(
  View,
  {
    w: 16,
    h: 16,
    _icon: {
      color: '$backgroundLight300',
    },
  },
  {
    descendantStyle: ['_icon'],
  }
);
