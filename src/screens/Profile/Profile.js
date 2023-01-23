import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ImageBackground,
  Image,
  ScrollView,
  Alert,
} from 'react-native';
import React from 'react';
import styles from './styles';
import navigationStrings from '../../constants/navigationStrings';
import Header from '../../components/Header/Header';
import {useDispatch, useSelector} from 'react-redux';
import {toggleLoader} from '../../redux/action/loader';
import Loader from '../../components/Loader/Loader';
import imagePath from '../../constants/imagePath';

export default function Profile({navigation}) {
  const dispatch = useDispatch();
  const userData = useSelector(state => state.userDetail);
  const isLoading = useSelector(state => state.loader.isLoading);
  console.log('userData', userData);
  return (
    <View style={styles.container}>
      {isLoading ? (
        <Loader loading={isLoading} />
      ) : (
        <ImageBackground
          source={userData?.image ? { uri: userData?.image } : imagePath.imagePath.icProfilePhoto }
          style={styles.image}>
          <ScrollView>
            <SafeAreaView>
              <TouchableOpacity
                onPress={() => {
                  navigation.goBack();
                }}>
                <Image source={imagePath.icBack} style={styles.logo} />
              </TouchableOpacity>
              <View style={styles.mainView}>
                <Header text="Profile" />
                <Text style={styles.name}>{userData.firstName} {userData.lastName}</Text>
                <Text style={styles.email}>Email: {userData.email}</Text>
                <Text style={styles.email}>Gender: {userData.gender}</Text>
                <Text style={styles.email}>Username: {userData.username}</Text>
                <TouchableOpacity
                  style={styles.buttonGo}
                  onPress={() => {
                    Alert.alert('Logout', 'Are you sure you want to logout?', [
                      {
                        text: 'Cancel',
                        onPress: () => console.log('Cancel Pressed'),
                        style: 'cancel',
                      },
                      {
                        text: 'OK',
                        onPress: () => {
                          dispatch(toggleLoader(true));
                          setTimeout(() => {
                            navigation.navigate(navigationStrings.LOGIN);
                            dispatch(toggleLoader(false));
                          }, 3000);
                        },
                      },
                    ]);
                  }}>
                  <Text style={styles.textGo}>Logout</Text>
                </TouchableOpacity>
              </View>
            </SafeAreaView>
          </ScrollView>
        </ImageBackground>
      )}
    </View>
  );
}
