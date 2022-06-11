import React from 'react';
import {StyleSheet, TextInput as RNTextInput, View, Text} from 'react-native';

import {circularBook, darkNavy, gold, grey, greyDark, moderateScale} from '~common';

export const TextInput = ({
  title,
  value,
  onChange,
  placeholder,
  
  error,

  isHidden = false,

  // Components
  prefixComponent,
  postFixComponent,

  // Style
  wrapperStyle,
  textInputStyle,
}) => {
  return (
    <>
    {title && (
      <Text style={styles.title}>{title}</Text>
    )}
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
    {error && (
      <Text style={styles.warn}>{error}</Text>
    )}
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: moderateScale(15),
    fontFamily: circularBook,
    color: greyDark,
    marginBottom: moderateScale(13),
    alignSelf: 'flex-start'
  },
  warn: {
    fontSize: moderateScale(13),
    fontFamily: circularBook,
    color: gold,
    marginTop: moderateScale(8),
    alignSelf: 'flex-start'
  },
  container: {
    width: '100%',
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
