import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Dashboard, Home, Profile} from '../screens';
import navigationStrings from '../constants/navigationStrings';
import {createDrawerNavigator} from '@react-navigation/drawer';
import MainStack from './MainStack';
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{presentation: 'card', headerShown: false}}>
        {MainStack(Stack)}
      </Stack.Navigator>
      {/* <Drawer.Navigator
        screenOptions={{
          drawerStyle: {
            backgroundColor: '#c6cbef', //Set Drawer background
            width: 250, //Set Drawer width
          },
          headerStyle: {
            backgroundColor: '#f4511e', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          }
        }}>
        <Drawer.Screen name={navigationStrings.HOME} component={Home} />
        <Drawer.Screen
          name={navigationStrings.DASHBOARD}
          component={Dashboard}
        />
      </Drawer.Navigator> */}
    </NavigationContainer>
  );
}
