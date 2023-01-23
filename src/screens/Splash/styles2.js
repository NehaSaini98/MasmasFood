import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  image: {
    flex: 1,
  },
  logo: {
    alignSelf: 'center',
    margin: 50,
  },
  splashText: {
    fontSize: 22,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#09051C',
    padding: 4,
    letterSpacing: 1,
  },
  splashText1: {
    fontSize: 12,
    textAlign: 'center',
    fontWeight: '400',
    color: '#000000',
    padding: 3,
  },
  buttonGo: {
    backgroundColor: '#53E88B',
    padding: 15,
    width: '',
    borderRadius: 20,
    width: 200,
    alignSelf: 'center',
    alignItems: 'center',
    margin: 30,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15
  },
  splashView: {
    paddingTop: 30,
    paddingHorizontal: 20,
  }
});

export default styles;
