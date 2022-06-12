import React, {useEffect, useState} from 'react';
import {Image, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';

import {NobiLogo} from '~assets';
import {black, moderateScale, navy, purple} from '~common';
import {Button, Gap, GradientContainer, TextInput} from '~components';
import {LOGIN} from '~constant/actionType';
import {login} from '~services/api';
import {dispatch, toast} from '~utils';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);

  const {accessToken} = useSelector(state => state.accountReducer);

  const onSubmit = async () => {
    if (email !== '' && password !== '') {
      if (email === 'test@usenobi.com') {
        if (password !== 'Test123') {
          setErrors({email: '', password: 'Invalid Password'});
        } else {
          // If true
          setErrors({email: '', password: ''});
          setLoading(true);
          try {
            const result = await login({
              body: {
                email,
                password,
              },
            });
            toast('Success Login');
            dispatch({type: LOGIN, value: result.token});
            navigation.replace('TabStack');
          } catch (error) {
            console.log('error : ', error);
            toast('Login Failed' + error);
          } finally {
            setLoading(false);
          }
        }
      } else {
        setErrors({email: 'Invalid E-mail Address', password: ''});
      }
    } else {
      setErrors({
        email: 'Invalid E-mail Address',
        password: 'Invalid Password',
      });
    }
  };

  useEffect(() => {
    if (accessToken) {
      navigation.replace('Dashboard');
    }
  }, []);

  return (
    <GradientContainer colors={[navy, black]}>
      <Image source={NobiLogo} style={styles.logo} />
      <TextInput
        title="E-mail Address"
        value={email}
        onChangeText={setEmail}
        placeholder="Enter E-mail Address"
        textInputStyle={{textAlign: 'center'}}
        error={errors.email}
      />
      <Gap height={moderateScale(13)} />
      <TextInput
        title="Password"
        value={password}
        onChangeText={setPassword}
        placeholder="Enter Password"
        textInputStyle={{textAlign: 'center'}}
        error={errors.password}
        type="password"
      />
      <Button
        title="Login"
        buttonColor={purple}
        disabled={loading}
        onPress={onSubmit}
        style={styles.buttonContainer}
      />
    </GradientContainer>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  logo: {
    width: '100%',
    height: '3%',
    resizeMode: 'contain',
    marginBottom: moderateScale(44),
  },
  buttonContainer: {
    height: moderateScale(50),
    width: '100%',
    position: 'absolute',
    bottom: moderateScale(40),
  },
  buttonImage: {width: '100%', height: '100%', resizeMode: 'contain'},
});
