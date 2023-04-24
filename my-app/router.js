import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const AuthStack = createStackNavigator();
const MainTab = createBottomTabNavigator();

import LoginScreen from './Screens/components/LoginScreen';
import RegistrationScreen from './Screens/components/RegistrationScreen';
import PostsScreen from './Screens/components/PostsScreen';
import CreatePostsScreen from './Screens/components/CreatePostsScreen';
import ProfileScreen from './Screens/components/ProfileScreen';
// import CommentsScreen from "./Screens/components/CommentsScreen";
// import MapScreen from './Screens/components/MapScreen';
// import Home from "./Screens/components/Home";

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from "@expo/vector-icons";

export const useRoute = (isAuth) => {
    if (!isAuth) {
      return (
        <AuthStack.Navigator>
          <AuthStack.Screen
           name="Login"
           component={LoginScreen}
           options={{ headerShown: false, }}
          />
          <AuthStack.Screen
           name="Register"
           component={RegistrationScreen}
           options={{ headerShown: false, }}
          />
        </AuthStack.Navigator>
      );      
    }
    return (
      <MainTab.Navigator tabBarOptions={{ showLabel: false }}>
        <MainTab.Screen
          options={{
            tabBarIcon: ({ focused, size, color }) => (
              <MaterialCommunityIcons
                name="postage-stamp"
                size={size}
                color={color}
              />
            ),
          }}
          name='Posts'
          component={PostsScreen}
        />
        <MainTab.Screen
          options={{
            tabBarIcon: ({ focused, size, color }) => (
              <AntDesign
                name="pluscircleo"
                size={35}
                color={color}
              />
            ),
         }}
         name='Create'
         component={CreatePostsScreen}
        />
        <MainTab.Screen
          options={{
            tabBarIcon: ({focused, size, color}) => (
              <MaterialCommunityIcons
                name="face-recognition"
                size={size}
                color={color}
              />
            ),
          }}
          name='Profile'
          component={ProfileScreen}
        />
      </MainTab.Navigator> 
    );   
  }; 

          {/* <MainTab.Screen
         options={{
           headerShown: false,
           tabBarIcon:({focused, size, color }) => 
          <FontAwesome
            name="comments" size={size} color={color}
          />
         }}
         name="Comments"
         component={CommentsScreen}
        />
        <MainTab.Screen
         options={{
           headerShown: false,
           tabBarIcon:({focused, size, color }) => 
          <FontAwesome
            name="map" size={size} color={color}
          />
         }}
         name="Map"
         component={MapScreen}
        />
        <MainTab.Screen
         options={{
           headerShown: false,
           tabBarIcon:({focused, size, color }) => 
          <FontAwesome
            name="home" size={size} color={color}
          />
         }}
         name="Home"
         component={Home}
        /> */}