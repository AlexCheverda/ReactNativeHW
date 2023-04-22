import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const MainStack = createStackNavigator();
const MainTab = createBottomTabNavigator();

import LoginScreen from './Screens/components/LoginScreen';
import RegistrationScreen from './Screens/components/RegistrationScreen';
import PostsScreen from './Screens/components/PostsScreen';
import CreatePostsScreen from './Screens/components/CreatePostsScreen';
import ProfileScreen from './Screens/components/ProfileScreen';

export const useRoute = (isAuth) => {
    if (!isAuth) {
      return (
        <MainStack.Navigator>
          <MainStack.Screen
           name="Login"
           component={LoginScreen}
           options={{headerShown: false,}}
          />
          <MainStack.Screen
           name="Register"
           component={RegistrationScreen}
           options={{headerShown: false,}}
          />
        </MainStack.Navigator>
      );      
    }
    return (
      <MainTab.Navigator>
        <MainTab.Screen name='Posts' component={PostsScreen} />
        <MainTab.Screen name='Create' component={CreatePostsScreen} />
        <MainTab.Screen name='Profile' component={ProfileScreen} />
      </MainTab.Navigator> 
    );   
  }; 