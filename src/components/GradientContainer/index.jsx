import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

export const GradientContainer = ({colors, children}) => {
  return (
    <LinearGradient
      colors={colors}
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      {children}
    </LinearGradient>
  );
};
