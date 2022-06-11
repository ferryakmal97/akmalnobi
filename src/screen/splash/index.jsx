import React, {useEffect} from 'react';
import {Image} from 'react-native';
import {useSelector} from 'react-redux';

import {NobiLogo} from '~assets';
import {black, navy} from '~common';
import {GradientContainer} from '~components';

const SplashScreen = ({navigation}) => {
  const {accessToken} = useSelector(state => state.accountReducer);

  useEffect(() => {
    setTimeout(() => {
      if (accessToken) {
        navigation.replace('TabStack');
      } else {
        navigation.replace('Login');
      }
    }, 1000);
  }, []);

  return (
    <GradientContainer colors={[navy, black]}>
      <Image
        source={NobiLogo}
        style={{
          width: '40%',
          height: '3%',
          flex: 1,
          resizeMode: 'contain',
          alignSelf: 'center',
        }}
      />
    </GradientContainer>
  );
};

export default SplashScreen;
