import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FEFEFF',
  },
  image: {
    flex: 1,
    height: 400,
  },
  buttonGo: {
    backgroundColor: '#DA6317',
    padding: 15,
    width: '',
    borderRadius: 20,
    width: 200,
    alignSelf: 'center',
    alignItems: 'center',
    margin: 20,
    marginTop: 150,
  },
  textGo: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15
  },
  logo: {
    marginLeft: 20,
  },
  mainView: {
    backgroundColor: 'white',
    marginTop: 270,
    height: '100%',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
  },
  name: {
    color: '#09051C',
    fontSize: 35,
    fontWeight: 'bold',
  },
  email: {
    color: '#3B3B3B',
    fontSize: 15,
    paddingTop: 7,
    opacity: 0.3,
  }
});

export default styles;
