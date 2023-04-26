import React from "react";
import { createStackNavigator } from '@react-navigation/stack';

const AuthStack = createStackNavigator();

import LoginScreen from './Screens/auth/LoginScreen';
import RegistrationScreen from './Screens/auth/RegistrationScreen';
import Home from './Screens/main/Home';

export const useRoute = (isAuth) => {
    if (!isAuth) {
      return (
        <AuthStack.Navigator>
          <AuthStack.Screen
            options={{ headerShown: false }}
            name="Register"
            component={RegistrationScreen}          
          />
          <AuthStack.Screen
            options={{ headerShown: false }}
            name="Login"
            component={LoginScreen}     
          />
        </AuthStack.Navigator>
      );      
    }
  return <Home />;
};