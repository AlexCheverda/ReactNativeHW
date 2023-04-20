import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, View } from 'react-native';
// import { useFonts } from "expo-font";

// import * as Font from "expo-font";
// import { AppLoading } from 'expo';

// import Home from './Screens/components/Home';
import RegistrationScreen from './Screens/components/RegistrationScreen';
import LoginScreen from './Screens/components/LoginScreen';



// const initialState = {
//   email: '',
//   password: '',
// }


const MainStack = createStackNavigator();

// const loadApplication = async () => {
//   await Font.loadAsync({
//     'robotoBold': require('./assets/fonts/Roboto-Bold.ttf'),
//     'robotoLight': require('./assets/fonts/Roboto-Light.ttf'),
//     'robotoRegular': require('./assets/fonts/Roboto-Regular.ttf'),
//     'robotoMedium': require('./assets/fonts/Roboto-Medium.ttf'),
//   });
// };
  

export default function App() {
//   const [isReady, setIsReady] = useState(false);

//   if(!isReady) {
//     return (
//     <AppLoading
//      startAsync={loadApplication}
//      onFinish={() => setIsReady(true)} 
//      onError={console.warn}
//     />
//   );
// }

return (
  <NavigationContainer>
    <MainStack.Navigator>
      <MainStack.Screen
       name="Login"
       component={LoginScreen}
       options={{headerShown: false}}
      />
      <MainStack.Screen
       name="Register"
       component={RegistrationScreen}
       options={{headerShown: false}}
      />
    </MainStack.Navigator>   
  </NavigationContainer>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
