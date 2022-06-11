import {Pressable, StyleSheet, Text} from 'react-native';
import React from 'react';

import {globalStyle, grey, moderateScale} from '~common';
import {Icons} from '~components';

export const Button = ({
  disabled,
  title,
  onPress,
  textStyle,
  buttonColor,
  iconButton,
  iconType,
  style,
}) => {
  return (
    <Pressable
      style={{
        ...styles.container,
        flexDirection: iconButton ? 'row' : 'column',
        backgroundColor: disabled ? grey : buttonColor,
        ...style,
      }}
      onPress={onPress}
      disabled={disabled}>
      {iconButton && (
        <Icons
          name={iconButton}
          type={iconType}
          style={{marginRight: moderateScale(10)}}
        />
      )}
      <Text style={{...globalStyle.text.bold, ...textStyle}}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '90%',
    height: moderateScale(40),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: moderateScale(8),
  },
});
