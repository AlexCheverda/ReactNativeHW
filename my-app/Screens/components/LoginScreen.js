import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput, ImageBackground, KeyboardAvoidingView, Platform } from 'react-native';

export default function LoginScreen() {
    return (
        <View style={styles.container}>
          <ImageBackground style={styles.image} source={require('../../assets/images/photoBG.png')}>
            <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} keyboardVerticalOffset={-35}>
                <View>
                    <Text style={styles.titleText}>Login</Text>
                    <TextInput style={styles.input}/>
                </View>
            </KeyboardAvoidingView>
          </ImageBackground>
        </View>
      );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    //   alignItems: 'center',
    //   justifyContent: 'center',
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "flex-end",
    },
    titleText: {
        fontFamily: "robotoMedium",
        fontSize: 30,
        lineHeight: 35.16,
        alignSelf: "center",
        letterSpacing: 1,
        marginTop: 32,
        marginBottom: 32,
    },
    input: {
        // fontFamily: "robotoRegular",
        fontSize: 16,
        height: 50,
        backgroundColor: "#F6F6F6",
        borderColor: "#E8E8E8",
        borderRadius: 8,
        borderStyle: "solid",
        borderWidth: 1,
        lineHeight: 18.75,
        padding: 16,
      },
  });