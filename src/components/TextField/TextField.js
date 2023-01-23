import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';

const TextField = props => {
  return (
    <View style={styles.shadowProp}>
      <TextInput
        style={styles.input}
        onChangeText={props?.onChangeText}
        value={props?.text}
        placeholder={props?.placeholder}
        placeholderTextColor="#a39e9e"
        autoCapitalize="none"
        keyboardType={props?.keyboardType}
        {...props}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 45,
    margin: 12,
    borderWidth: 1,
    padding: 12,
    borderColor: '#F4F4F4',
    borderRadius: 15,
    color: 'black',
    marginBottom: 5,
  },
  shadowProp: {
    shadowColor: '#5a6cea12',
    shadowOffset: {width: -2, height: 6},
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
});

export default TextField;
