import {
  View,
  Button,
  Text,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  ImageBackground,
  Image,
  TextInput,
  ScrollView
} from 'react-native';
import React, { useEffect } from 'react';
import styles from './styles';
import Header from '../../components/Header/Header';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../../components/Loader/Loader';
import imagePath from '../../constants/imagePath';
import axios from 'axios';

const Item = ({ title, image, des, price }) => (
  <View style={styles.item}>
    <View style={styles.imageView}>
      <Image source={image ? { uri: image } : imagePath.icMenu1} resizeMode={'cover'} style={{ width: 70, height: 70, borderRadius: 50 }} />
    </View>
    <View style={styles.titleView}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.des}>{des}</Text>
    </View>
    <View style={styles.priceView}>
      <Text style={styles.price}>${price}</Text>
    </View>
  </View>
);

export default function Home({ navigation }) {
  const dispatch = useDispatch();
  const [text, onChangeText] = React.useState('');
  const isLoading = useSelector(state => state.loader.isLoading);
  const [list, setList] = React.useState('');
  const renderItem = ({ item }) => <Item title={item.title} image={item?.thumbnail} des={item.description} price={item.price} />;
  useEffect(() => {
    getAdvice()
  }, [text])
  const getAdvice = async () => {
    await axios.get(`https://dummyjson.com/products/search?q=${text}`)
      .then(response => {
        console.log('getting data from axios', response);
        setList(response?.data?.products)
      })
      .catch(error => {
        console.log(error);
      });
  };
  return (
    <View style={styles.container}>
      {isLoading ? (
        <Loader loading={isLoading} />
      ) : (
        <ImageBackground
          source={imagePath.icLoginBg}
          resizeMode="cover"
          style={styles.image}>

          <SafeAreaView>
            <Header text="Home" />
            <View style={{ flexDirection: 'row', paddingHorizontal: 25 }}>
              <View style={{ width: '90%' }}>
                <Text style={styles.heading}>Find Your</Text>
                <Text style={styles.heading}>Favorite Food</Text>
              </View>
              <View style={styles.notiButton}>
                <TouchableOpacity onPress={() => { }}>
                  <Image source={imagePath.icNotification} />
                </TouchableOpacity>
              </View>
            </View>
            <View style={{ paddingHorizontal: 25 }}>
              <Image
                source={imagePath.icSearch}
                style={styles.icon}
                alt="your-icon"
                size={20}
              />
              <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
                maxLength={30}
                placeholder="What do you want to order?"
                placeholderTextColor={'#F0BB97'}
              />
            </View>
            <Text style={styles.headList}>Popular Products</Text>
            <ScrollView>
              <View style={{
                paddingHorizontal: 15, marginBottom: 50,
                height: 470,
                width: '100%',
                flex: 1,
              }}>
                <FlatList
                  data={list}
                  renderItem={renderItem}
                  keyExtractor={item => item.id}
                />

              </View>
            </ScrollView>
          </SafeAreaView>

        </ImageBackground>
      )}
    </View>
  );
}
