import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Image,
  Alert
} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import navigationStrings from '../../constants/navigationStrings';
import {useDispatch, useSelector} from 'react-redux';
import {toggleLoader} from '../../redux/action/loader';
import Loader from '../../components/Loader/Loader';
import imagePath from '../../constants/imagePath';
import TextField from '../../components/TextField/TextField';
import OTPInput from '../../components/OtpInput/OtpInput';
// import TabRoutes from '../../Navigations/TabRoutes';
export default function LoginOtp({navigation}) {
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.loader.isLoading);
  const [otpCode, setOTPCode] = useState('');
  const [isPinReady, setIsPinReady] = useState(false);
  const maximumCodeLength = 4;
  return (
    <View style={styles.container}>
      {isLoading ? (
        <Loader loading={isLoading} />
      ) : (
        <ImageBackground
          source={imagePath.icLoginBg}
          resizeMode="cover"
          style={styles.image}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate(navigationStrings.LOGIN);
            }}>
            <Image source={imagePath.icBack} style={styles.logo} />
          </TouchableOpacity>

          <View>
            <Text style={styles.loginText}>Enter 4-digit</Text>
            <Text style={styles.loginText}>Verification code</Text>
            <Text style={styles.loginTextCont}>
              Code send to +6282045**** . This code will
            </Text>
            <Text style={styles.loginTextCont}> expired in 01:30</Text>
            <View style={styles.loginView}>
              <OTPInput
                code={otpCode}
                setCode={setOTPCode}
                maximumLength={maximumCodeLength}
                setIsPinReady={setIsPinReady}
              />
              <TouchableOpacity
                style={styles.buttonGo}
                onPress={() => {
                  if(otpCode === '0000'){
                  dispatch(toggleLoader(true));
                  console.log('navigation', navigation);
                  setTimeout(() => {
                    navigation.navigate(navigationStrings.TABS);
                    dispatch(toggleLoader(false));
                  }, 3000);
                } else{
                  Alert.alert('Wrong Otp', 'Please enter correct OTP', [
                    {
                      text: 'OK',
                      onPress: () => console.log('Cancel Pressed'),
                      style: 'OK',
                    },
                  ]);
                }
                }}
                disabled={!isPinReady}>
                <Text style={styles.buttonText}>Login</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      )}
    </View>
  );
}
