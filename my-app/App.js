import React, { useState, useEffect } from 'react';
import {} from 'react-native';

import * as Font from "expo-font";
import { AppLoading } from 'expo';

import { NavigationContainer } from '@react-navigation/native';

import { useRoute } from './router';

const loadApplication = async () => {
  await Font.loadAsync({
    'robotoBold': require('./assets/fonts/Roboto-Bold.ttf'),
    'robotoLight': require('./assets/fonts/Roboto-Light.ttf'),
    'robotoRegular': require('./assets/fonts/Roboto-Regular.ttf'),
    'robotoMedium': require('./assets/fonts/Roboto-Medium.ttf'),
  });
};

export default function App() {
  const [isReady, setIsReady] = useState(false);
  const routing = useRoute(true);
  if (!isReady) {
    return (
    <AppLoading
     startAsync={loadApplication}
     onFinish={() => setIsReady(true)} 
     onError={console.warn}
    />
  );
}

return 
  <NavigationContainer>{routing}</NavigationContainer>
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
// });

// const loadApplication = async () => {
//   await Font.loadAsync({
//     'robotoBold': require('./assets/fonts/Roboto-Bold.ttf'),
//     'robotoLight': require('./assets/fonts/Roboto-Light.ttf'),
//     'robotoRegular': require('./assets/fonts/Roboto-Regular.ttf'),
//     'robotoMedium': require('./assets/fonts/Roboto-Medium.ttf'),
//   });
// };