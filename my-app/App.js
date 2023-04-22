import React, { useState, useEffect } from 'react';
// import { View, StyleSheet } from 'react-native';
// import { StatusBar } from 'expo-status-bar';
import { useRoute } from './router';
import * as Font from "expo-font";
// import { AppLoading } from 'expo';

import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  const [isReady, setIsReady] = useState(false);
  const routing = useRoute(true);

  useEffect(() => {
    const loadApplication = async () => {
      try {
        await Font.loadAsync({
          'robotoBold': require('./assets/fonts/Roboto-Bold.ttf'),
          'robotoLight': require('./assets/fonts/Roboto-Light.ttf'),
          'robotoRegular': require('./assets/fonts/Roboto-Regular.ttf'),
          'robotoMedium': require('./assets/fonts/Roboto-Medium.ttf'), 
        });
        setIsReady(true);
      } catch (error) {
        console.log(error);
      }
    };
    loadApplication();
  }, []);
  if (!isReady) {
    return null;
  }  
  return ( 
    <NavigationContainer>
      {routing}
    </NavigationContainer>
  );
}