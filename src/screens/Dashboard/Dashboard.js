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
  ScrollView,
} from 'react-native';
import React, { useEffect } from 'react';
import styles from './styles';
import navigationStrings from '../../constants/navigationStrings';
import Header from '../../components/Header/Header';
import { useDispatch, useSelector } from 'react-redux';
import { toggleLoader } from '../../redux/action/loader';
import Loader from '../../components/Loader/Loader';
import imagePath from '../../constants/imagePath';
import { randomDetail } from '../../utils/api';
import axios from 'axios';

const Item = ({ title, image, des }) => {
  console.log(image)
  return (
    <View style={styles.item}>
      <View style={styles.imageView}>
        {/* <Image style={{ width: 100, height: 100, borderRadius: 50 }}
          source={image ? { uri: image } : imagePath.icMenu1 }
          resizeMode={'cover'} /> */}
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.des}>{des}</Text>
      </View>
    </View>
  )
};

export default function Dashboard({ navigation }) {
  const dispatch = useDispatch();
  const [text, onChangeText] = React.useState('');
  const [list, setList] = React.useState('');
  const isLoading = useSelector(state => state.loader.isLoading);
  const renderItem = ({ item }) => (
    <Item
      title={item.title}
      image={item.thumbnail}
      des={item.body}
    />
  );
  useEffect(() => {
    getAdvice()
  }, [text])
  const getAdvice = async () => {
    await axios.get(`https://dummyjson.com/posts/search?q=${text}`)
      .then(response => {
        console.log('getting data from axios', response);
        setList(response?.data?.posts)
      })
      .catch(error => {
        console.log(error);
      });
    const response = await randomDetail()
    console.log('response', response)
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
            <Header text="Profile" />
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
            {/* <Text style={styles.headList}>Popular Restaurant</Text> */}
            <Text style={styles.headList}>Posts</Text>
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
