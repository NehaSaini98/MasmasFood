import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import navigationStrings from '../../constants/navigationStrings';
import {useDispatch, useSelector} from 'react-redux';
import {toggleLoader} from '../../redux/action/loader';
import Loader from '../../components/Loader/Loader';
import imagePath from '../../constants/imagePath';
import TextField from '../../components/TextField/TextField';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {userDetail} from '../../redux/action/userDetail';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required').label('Name'),
  email: Yup.string()
    .required('Email is required')
    .matches(/^(?!.*@[^,]*,)/, 'Please enter valid email')
    .label('Email'),
  phoneNumber: Yup.string()
    .required('Phone Number is required')
    .label('Mobile Number'),
  password: Yup.string()
    .matches(/\w*[a-z]\w*/, 'Password must have a small letter')
    .matches(/\w*[A-Z]\w*/, 'Password must have a capital letter')
    .matches(/\d/, 'Password must have a number')
    .min(8, ({min}) => `Password must be at least ${min} characters`)
    .required('Password is required')
    .label('Password'),
});

export default function Signup({navigation}) {
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.loader.isLoading);
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
            <Text style={styles.loginText}>Sign Up For Free</Text>
            <Formik
              initialValues={{
                name: '',
                email: '',
                phoneNumber: '',
                password: '',
              }}
              validationSchema={validationSchema}
              onSubmit={values => {
                dispatch(toggleLoader(true));
                dispatch(userDetail(values));
                setTimeout(() => {
                  navigation.navigate(navigationStrings.LOGIN);
                  dispatch(toggleLoader(false));
                }, 3000);
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
                  <TextField
                    onChangeText={handleChange('name')}
                    value={values.name}
                    placeholder="Name"
                    keyboardType="default"
                    maxLength={30}
                    onBlur={handleBlur('name')}
                  />
                  {errors.name && touched.name && (
                    <Text style={styles.errorMsg}>{errors.name}</Text>
                  )}
                  <TextField
                    onChangeText={handleChange('email')}
                    value={values.email}
                    placeholder="Email"
                    keyboardType="email-address"
                    onBlur={handleBlur('email')}
                  />
                  {errors.email && touched.email && (
                    <Text style={styles.errorMsg}>{errors.email}</Text>
                  )}
                  <TextField
                    onChangeText={value =>
                      setFieldValue('phoneNumber', value.replace(/[^0-9]/g, ''))
                    }
                    value={values.phoneNumber}
                    placeholder="Mobile Number"
                    keyboardType="phone-pad"
                    dataDetectorTypes="phoneNumber"
                    maxLength={10}
                    onBlur={handleBlur('phoneNumber')}
                  />
                  {errors.phoneNumber && touched.phoneNumber && (
                    <Text style={styles.errorMsg}>{errors.phoneNumber}</Text>
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
                  <TouchableOpacity
                    style={styles.buttonGo}
                    onPress={handleSubmit}
                    title="Submit">
                    <Text style={styles.buttonText}>Sign Up</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.buttonSigup}
                    onPress={() => {
                      navigation.navigate(navigationStrings.LOGIN);
                    }}>
                    <Text style={styles.buttonSignupText}>
                      already have an account?
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
