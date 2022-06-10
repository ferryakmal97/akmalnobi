import React from 'react';
import {View, StyleSheet, Image, Pressable} from 'react-native';
import {Formik} from 'formik';

import {black, darkNavy, greyDark, moderateScale, navy} from '~common';
import {IcEye, LoginButton} from '~assets';
import {GradientContainer, TextInput} from '~components';

const LoginScreen = () => {
  return (
    <GradientContainer colors={[navy, black]}>
      <Formik
        initialValues={{email: ''}}
        onSubmit={values => console.log(values)}>
        {({handleChange, handleBlur, handleSubmit, values}) => (
          <>
            <TextInput
              value={values.email}
              onChange={handleChange('email')}
              placeholder="Enter E-mail Address"
              postFixComponent={
                <Pressable style={{}}>
                  <Image source={IcEye} style={{}} />
                </Pressable>
              }
              textInputStyle={{textAlign: 'center'}}
            />
            <Pressable
              onPress={handleSubmit}
              style={{
                height: moderateScale(50),
                width: '90%',
                position: 'absolute',
                bottom: moderateScale(20),
              }}>
              <Image
                source={LoginButton}
                style={{width: '100%', height: '100%', resizeMode: 'contain'}}
              />
            </Pressable>
          </>
        )}
      </Formik>
    </GradientContainer>
  );
};

export default LoginScreen;
