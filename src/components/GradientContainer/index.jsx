import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {moderateScale} from '~common';

export const GradientContainer = ({colors, children, style}) => {
  return (
    <LinearGradient
      colors={colors}
      style={{
        flex: 1,
        alignItems: 'center',
        padding: moderateScale(24),
        ...style,
      }}>
      {children}
    </LinearGradient>
  );
};
