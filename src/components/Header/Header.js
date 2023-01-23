import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import imagePath from '../../constants/imagePath';
import {Image} from 'react-native';

const Header = ({goBack, text}) => {
  const navigation = useNavigation();
  return (
    <View style={goBack ? styles.container : styles.containerCenter}>
      {goBack ? (
        <TouchableOpacity
          style={styles.imageBack}
          onPress={!!goBack ? goBack : () => navigation.goBack()}>
          <Image source={imagePath.icBack} />
        </TouchableOpacity>
      ) : (
        ''
      )}
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
    height: 42,
    width: '100%',
  },
  imageBack: {
    width: '10%',
  },
  text: {
    // marginLeft: '30%'
    width: '80%',
    textAlign: 'center',
    paddingTop: 5,
    fontWeight: '500'
  },
  containerCenter: {
    flexDirection: 'row',
    justifyContent: 'center',
    height: 42,
  },
});
