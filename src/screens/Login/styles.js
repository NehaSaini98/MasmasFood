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
    margin: 60,
  },
  loginText: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#09051C'
  },
  buttonGo: {
    backgroundColor: '#53E88B',
    padding: 15,
    width: '',
    borderRadius: 20,
    width: 200,
    alignSelf: 'center',
    alignItems: 'center',
    margin: 10,
    // marginTop: 40,
  },
  buttonGoOtp: {
    backgroundColor: '#DA6317',
    padding: 15,
    width: '',
    borderRadius: 20,
    width: 200,
    alignSelf: 'center',
    alignItems: 'center',
    margin: 10,
    // marginTop: 40,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15
  },
  buttonForgot: {
    width: '',
    width: 200,
    alignSelf: 'flex-end',
    alignItems: 'flex-end',
    margin: 20,
  },
  buttonForgotText: {
    color: '#53E88B',
    fontWeight: 'bold',
    fontSize: 12
  },
  loginView: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  buttonSigup: {
    alignSelf: 'center',
    alignItems: 'center',
  },
  buttonSignupText: {
    color: '#53E88B',
    fontWeight: 'bold',
    fontSize: 12,
    textDecorationLine: 1,
  },
  errorMsg: {
    color: 'red',
    fontSize: 10,
    marginLeft: 15,
  },
  errorMsg1: {
    color: 'red',
    fontSize: 10,
    textAlign: 'center',
  }
});

export default styles;
