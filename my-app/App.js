import { StatusBar } from 'expo-status-bar';
import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, View } from 'react-native';
import { useFonts } from "expo-font";
// import Home from './Screens/components/Home';
import RegistrationScreen from './Screens/components/RegistrationScreen';
import LoginScreen from './Screens/components/LoginScreen';

// const MainStack = createStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    robotoBold: require('./assets/fonts/Roboto-Bold.ttf'),
    robotoLight: require('./assets/fonts/Roboto-Light.ttf'),
    robotoRegular: require('./assets/fonts/Roboto-Regular.ttf'),
    robotoMedium: require('./assets/fonts/Roboto-Medium.ttf'),
  })
  if (!fontsLoaded) {
    return null;
  }
  return (
    // <NavigationContainer>
    //   <MainStack.Navigator initialRouteName="LoginScreen">
        <View style={styles.container}>
          <LoginScreen />
          <RegistrationScreen />
          {/* <MainStack.Screen name='Home' component={Home} options={{ title: "Start screen" }} />
          <MainStack.Screen name='LoginScreen' component={LoginScreen} options={{headerShown: false}}/>
          <MainStack.Screen name='RegistrationScreen' component={RegistrationScreen} /> */}
          <StatusBar style="auto" />
        </View>
    //   </MainStack.Navigator>   
    // </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
