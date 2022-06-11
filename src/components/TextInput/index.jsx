import React, {useState} from 'react';
import {
  StyleSheet,
  TextInput as RNTextInput,
  View,
  Text,
  Pressable,
} from 'react-native';

import {
  circularBook,
  darkNavy,
  gold,
  grey,
  greyDark,
  moderateScale,
} from '~common';
import {Icons} from '~components';

export const TextInput = ({
  title,
  value,
  onChangeText,
  placeholder,

  error,

  type = '',

  // Components
  prefixComponent,
  postFixComponent,

  // Style
  wrapperStyle,
  textInputStyle,
}) => {
  const [hide, setHide] = useState(type === 'password');
  return (
    <>
      {title && <Text style={styles.title}>{title}</Text>}
      <View style={[styles.container, wrapperStyle]}>
        {prefixComponent && (
          <View style={[styles.prepostFixWrapper, styles.prefixWrapper]}>
            {prefixComponent}
          </View>
        )}
        <RNTextInput
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={hide}
          placeholder={placeholder}
          placeholderTextColor={greyDark}
          style={[
            {
              paddingRight:
                type === 'password' ? moderateScale(25) : moderateScale(10),
            },
            styles.textInputStyle,
            textInputStyle,
          ]}
        />
        {type === 'password' ? (
          <Pressable
            style={[styles.prepostFixWrapper, styles.postFixWrapper]}
            onPress={() => setHide(!hide)}>
            <Icons
              name={hide ? 'eye-with-line' : 'eye'}
              type="entypo"
              color={greyDark}
              style={{
                width: moderateScale(20),
                position: 'absolute',
                right: moderateScale(10),
              }}
            />
          </Pressable>
        ) : (
          postFixComponent && (
            <View style={[styles.prepostFixWrapper, styles.postFixWrapper]}>
              {postFixComponent}
            </View>
          )
        )}
      </View>
      {error ? <Text style={styles.warn}>{error}</Text> : null}
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: moderateScale(15),
    fontFamily: circularBook,
    color: greyDark,
    marginBottom: moderateScale(13),
    alignSelf: 'flex-start',
  },
  warn: {
    fontSize: moderateScale(13),
    fontFamily: circularBook,
    color: gold,
    marginTop: moderateScale(8),
    alignSelf: 'flex-start',
  },
  container: {
    backgroundColor: darkNavy,
    height: moderateScale(40),
    borderRadius: moderateScale(8),
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    position: 'relative',
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
