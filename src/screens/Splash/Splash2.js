import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import styles from './styles2';
import navigationStrings from '../../constants/navigationStrings';
import imagePath from '../../constants/imagePath';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function Splash2({navigation}) {
  return (
    <View style={styles.container}>
      <View style={{paddingTop: 40}}>
        <Image source={imagePath.icSplash2} style={styles.logo} />
        <View>
          <View style={{paddingBottom: 20}}>
            <Text style={styles.splashText}>Food Ninja is Where Your</Text>
            <Text style={styles.splashText}>Comfort Food Lives</Text>
          </View>
          <Text style={styles.splashText1}>
            Enjoy a fast and smooth food delivery at
          </Text>
          <Text style={styles.splashText1}>your doorstep</Text>
          <View style={styles.splashView}>
            <TouchableOpacity
              style={styles.buttonGo}
              onPress={async () => {
                await AsyncStorage.setItem('@storage_Key', 'true');
                navigation.navigate(navigationStrings.LOGIN);
              }}>
              <Text style={styles.buttonText}>Next</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
