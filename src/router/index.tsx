import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomNavigator} from '../components';
import {
  Call,
  Message,
  GetStarted,
  Grup,
  Login,
  Register,
  Setting,
  Splash,
  Status,
  UploadPhoto,
  Chatting,
} from '../screens';
import {useFocusEffect} from '@react-navigation/native';
import {BackHandler} from 'react-native';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
  useFocusEffect(
    React.useCallback(() => {
      const backHandler = BackHandler.addEventListener(
        'hardwareBackPress',
        (): boolean => {
          BackHandler.exitApp();
          return true;
        },
      );
      return () => backHandler.remove();
    }, []),
  );
  return (
    <Tab.Navigator tabBar={props => <BottomNavigator {...props} />}>
      <Tab.Screen
        name="Chat"
        component={Message}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Status"
        component={Status}
        options={{headerShown: false}}
      />
      <Tab.Screen name="Grup" component={Grup} options={{headerShown: false}} />
      <Tab.Screen name="Call" component={Call} options={{headerShown: false}} />
      <Tab.Screen
        name="Setting"
        component={Setting}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};

const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="GetStarted"
        component={GetStarted}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="UploadPhoto"
        component={UploadPhoto}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Chatting"
        component={Chatting}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;
