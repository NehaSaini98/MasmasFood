import React from 'react';
import {Dashboard, Home, Profile} from '../screens';
import navigationStrings from '../constants/navigationStrings';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image} from 'react-native';
import imagePath from '../constants/imagePath';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function HomeStackNavigation() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={navigationStrings.HOME} component={Home} />
    </Stack.Navigator>
  );
}

function ProfielStackNavigation() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={navigationStrings.PROFILE} component={Profile} />
    </Stack.Navigator>
  );
}

function DashboardStackNavigation() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={navigationStrings.DASHBOARD} component={Dashboard} />
    </Stack.Navigator>
  );
}

export default TabRoutes = () => {
  return (
    <Tab.Navigator
      initialRouteName={navigationStrings.HOME}
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: 'red',
        tabBarShowLabel: false,
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          backgroundColor: '#53E88B',
          position: 'absolute',
          borderRadius: 50,
          bottom: 20,
          borderColor: '#53E88B',
          borderWidth: 1,
          marginHorizontal: 16,
          alignContent: 'center',
          height: 50,
          paddingVertical: 30,
        },
      }}>
      {/* initialRouteName - this property is use to set initial route and by this we can place screens any where in the list  */}

      <Tab.Screen
        name={navigationStrings.DASHBOARD}
        component={DashboardStackNavigation}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Image
                style={{tintColor: focused ? '#DA6317' : 'white'}}
                source={imagePath.icDashboard}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name={navigationStrings.HOME}
        component={HomeStackNavigation}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Image
                style={{tintColor: focused ? '#DA6317' : 'white'}}
                source={imagePath.icHome}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name={navigationStrings.PROFILE}
        component={ProfielStackNavigation}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Image
                style={{tintColor: focused ? '#DA6317' : 'white'}}
                source={imagePath.icProfile}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};