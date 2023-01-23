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
    marginTop: 60,
    marginLeft: 30,
  },
  loginText: {
    fontSize: 25,
    marginLeft: 40,
    marginTop: 10,
    fontWeight: 'bold',
    color: '#09051C'
  },
  loginTextCont: {
    fontSize: 15,
    marginLeft: 40,
    marginTop: 10,
    fontWeight: '400',
    color: '#09051C',
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
    marginTop: 290,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15
  },
  loginView: {
    paddingTop: 100,
    paddingHorizontal: 20,
  },
});

export default styles;
