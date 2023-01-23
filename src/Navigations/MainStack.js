import React from 'react';
import navigationStrings from '../constants/navigationStrings';
import {
  ForgotPassword,
  Home,
  Login,
  LoginOtp,
  Signup,
  Splash,
  Splash2,
} from '../screens';
import TabRoutes from './TabRoutes';

export default function (Stack) {
  return (
    <>
      <Stack.Screen name={navigationStrings.SPLASH} component={Splash} />
      <Stack.Screen name={navigationStrings.SPLASH + '2'} component={Splash2} />
      <Stack.Screen name={navigationStrings.LOGIN} component={Login} />
      <Stack.Screen
        name={navigationStrings.FORGOTPASSWORD}
        component={ForgotPassword}
      />
      <Stack.Screen name={navigationStrings.LOGINOTP} component={LoginOtp} />
      <Stack.Screen name={navigationStrings.SIGNUP} component={Signup} />
      {/* <Stack.Screen name={navigationStrings.HOME} component={Home} /> */}
      <Stack.Screen name={navigationStrings.TABS} component={TabRoutes} />
    </>
  );
}
