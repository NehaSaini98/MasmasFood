import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Image,
} from 'react-native';
import React, { useState } from 'react';
import styles from './styles';
import navigationStrings from '../../constants/navigationStrings';
import { useDispatch, useSelector } from 'react-redux';
import { toggleLoader } from '../../redux/action/loader';
import Loader from '../../components/Loader/Loader';
import imagePath from '../../constants/imagePath';
import TextField from '../../components/TextField/TextField';
import { Formik } from 'formik';
import * as Yup from 'yup';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { userDetail } from '../../redux/action/userDetail';
const validationSchema = Yup.object().shape({
  // phoneNumber: Yup.string().required('Phone Number is required').label('Mobile Number'),
  userName: Yup.string().required('Username is required').label('Username'),
  password: Yup.string()
    .matches(/\w*[a-z]\w*/, 'Password must have a small letter')
    .matches(/\w*[A-Z]\w*/, 'Password must have a capital letter')
    .matches(/\d/, 'Password must have a number')
    .min(5, ({ min }) => `Password must be at least ${min} characters`)
    .required('Password is required')
    .label('Password'),
});
export default function Login({ navigation }) {
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.loader.isLoading);
  const userData = useSelector(state => state.userDetail);
  const [isError, setIsError] = useState(null);

  const loginApi = (value) => {
    setIsError(null);
    dispatch(toggleLoader(true));
    setTimeout(async() => {
      await axios.post("https://dummyjson.com/auth/login", {
        username: value.userName,
        password: value.password,
      })
        .then(response => {
          console.log('getting data from axios', response);
          dispatch(userDetail(response?.data));
          navigation.navigate(navigationStrings.TABS);
        })
        .catch(error => {
          setIsError(true);
          console.log(error);
        });
      dispatch(toggleLoader(false));
    }, 3000);

  };
  return (
    <View style={styles.container}>
      {isLoading ? (
        <Loader loading={isLoading} />
      ) : (
        <ImageBackground
          source={imagePath.icLoginBg}
          resizeMode="cover"
          style={styles.image}>
          <Image source={imagePath.icLogo} style={styles.logo} />

          <View>
            <Text style={styles.loginText}>Login To Your Account</Text>
            <Formik
              initialValues={{ userName: '', password: '' }}
              validationSchema={validationSchema}
              onSubmit={(values) => {
                loginApi(values)
                // if (
                //   values?.phoneNumber === userData?.phoneNumber &&
                //   values?.password === userData?.password
                // ) {
                //   setIsError(null);
                //   dispatch(toggleLoader(true));
                //   setTimeout(() => {
                //     AsyncStorage.setItem('name', userData?.name);
                //     AsyncStorage.setItem('email', userData?.email);
                //     AsyncStorage.setItem('phoneNumber', userData?.phoneNumber);
                //     AsyncStorage.setItem('password', userData?.password);
                //     navigation.navigate(navigationStrings.TABS);
                //     dispatch(toggleLoader(false));
                //   }, 3000);
                // } else {
                //   setIsError(true);
                // }
              }}>
              {({
                handleChange,
                handleBlur,
                handleSubmit,
                values,
                errors,
                touched,
                setFieldValue,
              }) => (
                <View style={styles.loginView}>
                  {/* <TextField
                    onChangeText={value =>
                      setFieldValue('phoneNumber', value.replace(/[^0-9]/g, ''))
                    }
                    value={values.phoneNumber}
                    placeholder="Mobile Number"
                    keyboardType="phone-pad"
                    dataDetectorTypes="phoneNumber"
                    maxLength={10}
                    onBlur={handleBlur('phoneNumber')}
                  /> */}
                  <TextField
                    onChangeText={value =>
                      setFieldValue('userName', value)
                    }
                    value={values.userName}
                    placeholder="Username"
                    maxLength={20}
                    onBlur={handleBlur('userName')}
                  />
                  {errors.userName && touched.userName && (
                    <Text style={styles.errorMsg}>{errors.userName}</Text>
                  )}
                  <TextField
                    onChangeText={handleChange('password')}
                    value={values.password}
                    placeholder="Password"
                    keyboardType="default"
                    autoCapitalize="none"
                    secureTextEntry
                    textContentType="password"
                    onBlur={handleBlur('password')}
                    maxLength={10}
                  />
                  {errors.password && touched.password && (
                    <Text style={styles.errorMsg}>{errors.password}</Text>
                  )}
                  {isError && (
                    <Text style={styles.errorMsg1}>
                      {'Please enter valid data'}
                    </Text>
                  )}
                  <TouchableOpacity
                    style={styles.buttonForgot}
                    onPress={() => {
                      navigation.navigate(navigationStrings.FORGOTPASSWORD);
                    }}>
                    <Text style={styles.buttonForgotText}>
                      Forgot Password ?
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.buttonGo}
                    onPress={handleSubmit}
                    title="Submit">
                    <Text style={styles.buttonText}>Login</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.buttonGoOtp}
                    onPress={() => {
                      navigation.navigate(navigationStrings.LOGINOTP);
                    }}>
                    <Text style={styles.buttonText}>Login With OTP</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.buttonSigup}
                    onPress={() => {
                      navigation.navigate(navigationStrings.SIGNUP);
                    }}>
                    <Text style={styles.buttonSignupText}>
                      don't have an account?
                    </Text>
                  </TouchableOpacity>
                </View>
              )}
            </Formik>
          </View>
        </ImageBackground>
      )}
    </View>
  );
}
