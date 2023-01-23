import {ActivityIndicator, StyleSheet, View} from 'react-native';
import React from 'react';

const Loader = loading => {
  return (
    <View style={styles.modalBackground}>
      <View style={styles.activityIndicatorWrapper}>
        <ActivityIndicator
          //visibility of Overlay Loading Spinner
          visible={loading}
          animating={true}
          //Text with the Spinner
          color="#53E88B"
          size="large"
          //Text style of the Spinner Text
          style={styles.activityIndicator}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  activityIndicatorWrapper: {
    height: 100,
    width: 100,
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  activityIndicator: {
    alignItems: 'center',
    height: 80,
  },
});

export default Loader;
