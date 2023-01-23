import {View, Image} from 'react-native';
import React, {useEffect} from 'react';
import styles from './styles';
import navigationStrings from '../../constants/navigationStrings';
import imagePath from '../../constants/imagePath';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function Splash({navigation}) {
  useEffect(() => {
    setTimeout(async () => {
      // await AsyncStorage.clear();
      const jsonValue = await AsyncStorage.getItem('@storage_Key');
      if (jsonValue !== null && jsonValue === 'true') {
        // value previously stored
          navigation.navigate(navigationStrings.LOGIN);
        
      } else {
        await AsyncStorage.setItem('@storage_Key', 'false');
        navigation.navigate(navigationStrings.SPLASH + '2');
      }
    }, 3000);
  }, []);
  return (
    <View style={styles.container}>
      <Image source={imagePath.icSplash} style={styles.logo} />
    </View>
  );
}
