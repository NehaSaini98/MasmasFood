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
// import TabRoutes from '../../Navigations/TabRoutes';
export default function ForgotPassword({navigation}) {
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.loader.isLoading);
  const [confirmPassword, setConfirmPassword] = useState('');
  const [password, setPassword] = useState('');
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
            <Text style={styles.loginText}>Reset your password here</Text>
            <Text style={styles.loginTextCont}>Select which contact details should we</Text>
            <Text style={styles.loginTextCont}>use to reset your password</Text>
            <View style={styles.loginView}>
              <TextField
                onChangeText={value => setPassword(value)}
                value={password}
                placeholder="Password"
                keyboardType="default"
                secureTextEntry={true}
                maxLength={10}
              />
              <TextField
                onChangeText={value => setConfirmPassword(value)}
                value={confirmPassword}
                placeholder="Confirm Password"
                keyboardType="default"
                secureTextEntry={true}
                maxLength={10}
              />
              <TouchableOpacity
                style={styles.buttonGo}
                onPress={() => {
                  dispatch(toggleLoader(true));
                  console.log('navigation', navigation);
                  setTimeout(() => {
                    navigation.navigate(navigationStrings.LOGIN);
                    dispatch(toggleLoader(false));
                  }, 3000);
                }}>
                <Text style={styles.buttonText}>Reset Password</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      )}
    </View>
  );
}
