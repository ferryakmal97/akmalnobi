import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

import {darkNavy, globalStyle, moderateScale} from '~common';

export const ListCoin = ({title, image, amount, style}) => {
  return (
    <View style={[styles.container, style]}>
      <View style={styles.titleContainer}>
        <Image source={{uri: image}} style={styles.image} />
        <Text style={{...globalStyle.text.bold}}>{title}</Text>
      </View>
      <Text style={{...globalStyle.text.bold}}>
        {parseFloat(amount).toFixed(8)}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: moderateScale(12),
    borderBottomWidth: 3,
    borderBottomColor: darkNavy,
  },
  titleContainer: {flexDirection: 'row', alignItems: 'center'},
  image: {
    width: moderateScale(20),
    height: moderateScale(20),
    marginRight: moderateScale(10),
  },
});
