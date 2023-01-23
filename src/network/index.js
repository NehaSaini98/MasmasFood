import axios from 'axios';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
export function serviceCall(requestData) {
  return new Promise((resolve, reject) => {
    let url = 'https://jsonplaceholder.typicode.com' + requestData.url;
    const request = {
      method: requestData.method || 'GET',
      headers: requestData.headers || { 'Content-Type': 'application/json' },
      data: requestData.data || {},
      url: url,
      responseType: requestData.responseType || '',
    };
    console.log('request', request)
    axios(request)
      .then(response => {
        console.log('response234', response)
        resolve(response);
      })
      .catch(error => {
        if (error?.response?.status === 403) {
          //Auth Permission Denied
          Alert.alert('Authentication Permission Denied');
        } else if (error?.response?.status === 401) {
          //Auth Failed Logout
          AsyncStorage.clear();
          Alert.alert(
            'You have been logged out of the system, please login again',
          );
        } else if (parseInt(error?.response?.status / 100) === 5) {
          //Sever Failed (Something Went Worng)
          Alert.alert('Something Went Wrong');
        }
        reject(error);
      });
  });
}
