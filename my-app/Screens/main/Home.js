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
        <MainTab.Navigator>
        <Text>ProfileScreen</Text>
    </MainTab.Navigator>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});

export default Home;