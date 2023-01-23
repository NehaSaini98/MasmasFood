import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FEFEFF',
  },
  textStyle: {
    fontSize: 20,
  },
  image: {
    flex: 1,
  },
  heading: {
    fontWeight: 'bold',
    fontSize: 31,
    color: '#09051C',
  },
  notiButton: {
    width: '10%',
    height: 40
  },
  headList: {
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 20,
    color: '#09051C',
    paddingHorizontal: 25
  },
  input: {
    height: 40,
    padding: 10,
    paddingLeft: 50,
    backgroundColor: '#FEF7ED',
    borderRadius: 15,
    color: '#DA6317',
    marginTop: 20,
  },
  icon: {
    position: 'absolute',
    left: 38,
    top: 28,
    zIndex: 99
  },
  item: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: '#E5E4E2',
    borderRadius: 22,
    padding: 15
  },
  imageView: {
    width: '25%',
  },
  titleView: {
    width: '65%',
    flex:1,
    justifyContent: "center",
  },
  title: {
    fontSize: 15,
    fontWeight: '400',
    color: '#09051C'
  },
  des: {
    fontSize: 14,
    fontWeight: '400',
    color: '#3B3B3B',
    opacity: 0.3,
  },
  priceView: {
    width: '10%',
    flex:1,
    justifyContent: "center",
    alignItems: 'center'
  },
  price: {
    fontSize: 22,
    fontWeight: '500',
    color: '#FEAD1D'
  },
});

export default styles;
