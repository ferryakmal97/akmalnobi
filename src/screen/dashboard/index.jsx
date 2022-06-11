import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {useSelector} from 'react-redux';

import {Ads} from '~assets';
import {
  black,
  globalStyle,
  green,
  grey,
  moderateScale,
  navy,
  red,
} from '~common';
import {Button, Gap, GradientContainer} from '~components';
import {LOGOUT} from '~constant/actionType';
import {getDashboard} from '~services/api';
import {dispatch, toast} from '~utils';

const DashboardScreen = ({navigation}) => {
  const [data, setData] = useState({
    changes: 0,
    total_asset: 0,
  });
  const [loading, setLoading] = useState(false);

  const {accessToken} = useSelector(state => state.accountReducer);

  const getData = async () => {
    try {
      setLoading(true);
      const result = await getDashboard({
        body: {
          token: accessToken,
        },
      });
      setData({
        changes: result['24hourchange'],
        total_asset: result.total_asset,
      });
    } catch (error) {
      console.log('error : ', error);
      toast('Something Went Wrong');
    } finally {
      setLoading(false);
    }
  };

  const buttonPressed = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  };

  const logout = () => {
    setLoading(true);
    dispatch({type: LOGOUT});
    setTimeout(() => {
      toast('Logout Success');
      navigation.replace('Login');
    }, 2000);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <GradientContainer colors={[navy, black]}>
      <Image source={Ads} style={styles.adsImage} />

      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={{...globalStyle.text.standard, color: grey}}>
            24H Changes
          </Text>
          <Gap width={moderateScale(6)} />
          <Text style={{...globalStyle.text.standard, color: green}}>
            + {data.changes}%
          </Text>
        </View>
        <Text style={globalStyle.text.special}>${data.total_asset}</Text>
      </View>

      <Button
        title="Deposit"
        iconButton="download"
        iconType="antdesign"
        buttonColor={green}
        disabled={loading}
        onPress={buttonPressed}
      />

      <Button
        title="Logout"
        iconButton="logout"
        iconType="material"
        buttonColor={red}
        disabled={loading}
        onPress={logout}
        style={styles.buttonLogout}
      />
    </GradientContainer>
  );
};

export default DashboardScreen;

const styles = StyleSheet.create({
  adsImage: {
    width: '100%',
    height: moderateScale(72),
    resizeMode: 'contain',
  },
  container: {
    marginVertical: moderateScale(28),
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: moderateScale(8),
  },
  buttonContainer: {
    height: moderateScale(50),
    width: '90%',
  },
  buttonImage: {width: '100%', height: '100%', resizeMode: 'contain'},
  buttonLogout: {
    position: 'absolute',
    bottom: moderateScale(10),
  },
});
