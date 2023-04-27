import React from 'react';
import 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';
// import { StatusBar } from 'expo-status-bar';

import { useFonts } from "expo-font";
// import { AppLoading } from 'expo';

import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { useRoute } from './router';

export default function App() {
  // const [isReady, setIsReady] = useState(false);
  const routing = useRoute(false);

  const [fontsLoad] = useFonts({
    'robotoBold': require('./assets/fonts/Roboto-Bold.ttf'),
    'robotoLight': require('./assets/fonts/Roboto-Light.ttf'),
    'robotoRegular': require('./assets/fonts/Roboto-Regular.ttf'),
    'robotoMedium': require('./assets/fonts/Roboto-Medium.ttf'),
  });
  if (!fontsLoad) {
    return null;
  }

    
  return ( 
    <Provider store={store}>
      <NavigationContainer>
        {routing}
      </NavigationContainer>
    </Provider>
    
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     height: '100%',
//   },
// });

// useEffect(() => {
//   const loadApplication = async () => {
//     try {
//       await Font.loadAsync({
//         'robotoBold': require('./assets/fonts/Roboto-Bold.ttf'),
//         'robotoLight': require('./assets/fonts/Roboto-Light.ttf'),
//         'robotoRegular': require('./assets/fonts/Roboto-Regular.ttf'),
//         'robotoMedium': require('./assets/fonts/Roboto-Medium.ttf'), 
//       });
//       setIsReady(true);
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   loadApplication();
// }, []);
// if (!isReady) {
//   return null;
// }