import React, { useState } from "react";
import { 
    StyleSheet, 
    Alert,
    View, 
    Text, 
    TextInput, 
    ImageBackground, 
    KeyboardAvoidingView,
    Keyboard,
    TouchableWithoutFeedback, 
    Platform, 
    TouchableOpacity, 
} from 'react-native';

const initialState = {
    login: '',
    email: '',
}

export default function LoginScreen() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const emailHandler = (text) => setEmail(text);
    const passwordHandler = (text) => setPassword(text);

    const onLogin = () => {
        Alert.alert("Credentials", `${email} + ${password}`);
    }
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
            <ImageBackground
               style={styles.image}
               source={require('../../assets/images/photoBG.png')}
            >
                
                <KeyboardAvoidingView
                    behavior={Platform.OS == "ios" ? "padding" : "height"}
                    keyboardVerticalOffset={-35}
                >
                    <View style={styles.form}>
                    <Text style={styles.formTitle}>Войти</Text>
                        <View>
                            <TextInput
                               value={email}
                               onChangeText={emailHandler}
                               style={styles.input}
                               placeholder="Адрес электронной почты"
                            />
                        </View>
                        <View>
                            <TextInput
                               value={password}
                               onChangeText={passwordHandler}
                               style={styles.input}
                               placeholder="Пароль"
                               secureTextEntry={true}
                            />
                        </View>
                        {/* <Button title="Войти" style={styles.btn}  /> */}
                        <TouchableOpacity
                            activeOpacity={0.5}
                            style={styles.btn}
                            onPress={onLogin}
                        >
                            <Text style={styles.titleBtn}>Войти</Text>
                        </TouchableOpacity> 
                        <View>
                            <Text>Нет аккаунта? Зарегистрироваться</Text>
                        </View>  
                    </View>
                </KeyboardAvoidingView>
            </ImageBackground>
        </View>
        </TouchableWithoutFeedback>
        
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
    form: {
        marginHorizontal: 16,
        backgroundColor: "#fff",
    },
    formTitle: {
        // fontFamily: "robotoMedium",
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
        marginBottom: 16,
    },
    btn: {
        backgroundColor: "#FF6C00",
        padding: 16,
        borderRadius: 100,
        marginTop: 43,
    },
    titleBtn: {
        color: "#fff",
    }
  });