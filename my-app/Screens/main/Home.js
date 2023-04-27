import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import PostsScreen from './PostsScreen';
import CommentsScreen from './CommentsScreen';
import CreatePostsScreen from './CreatePostsScreen';
import MapScreen from './MapScreen';
import ProfileScreen from './ProfileScreen';

const MainTab = createBottomTabNavigator();


const Home = () => {
    return (
        <MainTab.Navigator
          initialRouteName="PostsScreen"
          screenOptions={{
            tabBarActiveBackgroundColor: '#ff6c00',
            tabBarShowLabel: false,
            tabBarActiveTintColor: 'white',
            tabBarStyle: {
                width: 'auto',
                alignItems: 'center',
            },
            tabBarItemStyle: {
                borderRadius: 20,
                margin: 5,
                minHeight: 40,
                maxWidth: 70,
            },
          }}
        >
            <MainTab.Screen
              name='PostsScreen'
              component={PostsScreen}
              options={{
                tabBarIcon: ({ focused, size, color }) => (
                    <Ionicons name="md-grid-outline" size={24} color={color} />
                ),
                title: "Publications",
                headerTitleStyle: {
                fontSize: 17,
                fontWeight: "500",
                color: "#212121",
                },
                headerTitleAlign: "center",
                headerRight: () => (
                  <Ionicons
                    name="exit-outline"
                    size={24}
                    color="grey"
                    style={{ marginRight: 5 }}
                  />
                ),
              }}
            />
            <MainTab.Screen
              name="CreatePostsScreen"
              component={CreatePostsScreen}
              options={{
                tabBarIcon: ({ focused, size, color }) => (
                    <Feather name="plus" size={24} color={color} />
                ),
                headerTitleStyle: {
                fontSize: 17,
                fontWeight: "500",
                color: "#212121",
                },
                headerTitleAlign: "center",
              }}
            />
            <MainTab.Screen
              name="ProfileScreen"
              component={ProfileScreen}
              options={{
                tabBarIcon: ({ focused, size, color }) => (
                    <Feather name="user" size={24} color={color} />
                ),
                headerTitleStyle: {
                fontSize: 17,
                fontWeight: "500",
                color: "#212121",
                },
                headerTitleAlign: "center",
              }}
            />
            <MainTab.Screen
              name="CommentsScreen"
              component={CommentsScreen}
              options={{
                    tabBarButton: () => null,
                    tabBarStyle: { display: "none" },
              }}
            />
            <MainTab.Screen
              name="MapScreen"
              component={MapScreen}
              options={{
                    tabBarButton: () => null,
                    tabBarStyle: { display: "none" },
              }}
            />
    </MainTab.Navigator>
    );
};

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: "center",
//         alignItems: "center",
//     },
// });

export default Home;