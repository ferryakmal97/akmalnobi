import React from 'react';
import { Image, Pressable} from 'react-native';

import {black, moderateScale, navy} from '~common';
import {IcEye, LoginButton, NobiLogo} from '~assets';
import {Gap, GradientContainer, TextInput} from '~components';
import { useState } from 'react';

const LoginScreen = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState(false)

  const onSubmit = () => {

  }

  return (
    <GradientContainer colors={[navy, black]}>
      <Image source={NobiLogo} style={{width: '100%', height: '3%', resizeMode: 'contain', marginBottom: moderateScale(44)}} />
      <TextInput
        title="E-mail Address"
        value={email}
        onChange={(val)=>setEmail(val)}
        placeholder="Enter E-mail Address"
        postFixComponent={
          <Pressable style={{}}>
            <Image source={IcEye} style={{}} />
          </Pressable>
        }
        textInputStyle={{textAlign: 'center'}}
        error={errors && 'Invalid E-mail Address'}
      />
      <Gap height={moderateScale(13)} />
      <TextInput
        title="Password"
        value={password}
        onChange={(val)=>setPassword(val)}
        placeholder="Enter Password"
        postFixComponent={
          <Pressable style={{}}>
            <Image source={IcEye} style={{}} />
          </Pressable>
        }
        textInputStyle={{textAlign: 'center'}}
        error={errors && 'Invalid Password'}
      />
      <Pressable
        onPress={onSubmit}
        style={{
          height: moderateScale(50),
          width: '100%',
          position: 'absolute',
          bottom: moderateScale(40),
        }}>
        <Image
          source={LoginButton}
          style={{width: '100%', height: '100%', resizeMode: 'contain'}}
        />
      </Pressable>
    </GradientContainer>
  );
};

export default LoginScreen;
