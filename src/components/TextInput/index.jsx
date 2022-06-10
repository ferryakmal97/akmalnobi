import React from 'react';
import {StyleSheet, TextInput as RNTextInput, View} from 'react-native';

import {black, darkNavy, grey, greyDark, moderateScale} from '~common';

export const TextInput = ({
  value,
  onChange,
  placeholder,

  isHidden = false,

  // Components
  prefixComponent,
  postFixComponent,

  // Style
  wrapperStyle,
  textInputStyle,
}) => {
  return (
    <View style={styles.container}>
      {prefixComponent && (
        <View style={[styles.prepostFixWrapper, styles.prefixWrapper]}>
          {prefixComponent}
        </View>
      )}
      <RNTextInput
        value={value}
        onChange={onChange}
        secureTextEntry={isHidden}
        placeholder={placeholder}
        placeholderTextColor={greyDark}
        style={[styles.textInputStyle, textInputStyle]}
      />
      {postFixComponent && (
        <View style={[styles.prepostFixWrapper, styles.postFixWrapper]}>
          {postFixComponent}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '90%',
    backgroundColor: darkNavy,
    height: moderateScale(50),
    borderRadius: moderateScale(8),
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  textInputWrapper: {
    flex: 1,
    flexDirection: 'row',
    height: moderateScale(40),
    borderRadius: moderateScale(4),
    borderWidth: 1,
    borderColor: grey,
  },
  textInputStyle: {
    flex: 1,
    fontSize: moderateScale(15),
    color: greyDark,
    paddingHorizontal: moderateScale(10),
  },
  prepostFixWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: moderateScale(4),
    borderBottomLeftRadius: moderateScale(4),
  },
  prefixWrapper: {
    paddingLeft: moderateScale(10),
    paddingRight: moderateScale(5),
  },
  postFixWrapper: {
    paddingRight: moderateScale(10),
    paddingLeft: moderateScale(5),
  },
});
