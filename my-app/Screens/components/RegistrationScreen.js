import React, { useState } from "react";
import { 
  StyleSheet, 
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

export default function RegistrationScreen() {

  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const keyboardHide = () => {
    setIsShowKeyboard(false);
      Keyboard.dismiss();
  };

    const onLogin = () => {
        if (password === "" || email === "" || login === "") {
            console.log("errore");
        return;
        };
        setIsShowKeyboard(false);
        Keyboard.dismiss();
        console.log("Credentials", `${login} + ${email} + ${password}`);
        setLogin(""), setEmail(""), setPassword("");
    };

    const loginHandler = (text) => setLogin(text);
    const emailHandler = (text) => setEmail(text);
    const passwordHandler = (text) => setPassword(text);

    return (
        <TouchableWithoutFeedback onPress={keyboardHide}>
            <View style={styles.container}>
            <ImageBackground
               style={styles.image}
               source={require('../../assets/images/photoBG.png')}
            >
              <KeyboardAvoidingView
                    behavior={Platform.OS == "ios" ? "padding" : "height"}
                    keyboardVerticalOffset={-32}
                >
                    <View style={{ ...styles.form, marginBottom: isShowKeyboard ? 35 : 0}}>
                        
                    <Text style={styles.formTitle}>Регистрация</Text>
                        <View>
                            <TextInput
                               value={login}
                               onChangeText={loginHandler}
                               style={styles.input}
                               placeholder="Логин"
                               placeholderTextColor="#bdbdbd"
                               onFocus={() => setIsShowKeyboard(true)}
                            />
                        </View>
                        <View>
                            <TextInput
                               value={email}
                               onChangeText={emailHandler}
                               style={styles.input}
                               placeholder="Адрес электронной почты"
                               placeholderTextColor="#bdbdbd"
                               onFocus={() => setIsShowKeyboard(true)}
                            />
                        </View>
                        <View>
                            <TextInput
                               value={password}
                               onChangeText={passwordHandler}
                               style={styles.input}
                               placeholder="Пароль"
                               placeholderTextColor="#bdbdbd"
                               secureTextEntry={true}
                               onFocus={() => setIsShowKeyboard(true)}
                            />    
                        </View>
                        <TouchableOpacity
                            activeOpacity={0.5}
                            style={styles.btn}
                            onPress={onLogin}
                        >
                            <Text style={styles.titleBtn}>Зарегистрироваться</Text>
                        </TouchableOpacity>
                        
                        <View style={styles.subLink}>
                        <Text style={styles.subTitle}>Уже есть аккаунт? Войти</Text>
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
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        backgroundColor: "#fff",
        paddingHorizontal: 16,
        // marginBottom: 0,
    },
    formTitle: {
        // fontFamily: "robotoMedium",
        fontSize: 30,
        lineHeight: 35.16,
        alignSelf: "center",
        letterSpacing: 1,
        marginTop: 92,
        marginBottom: 16,
    },
    input: {
        // fontFamily: "robotoRegular",

        fontSize: 16,
        height: 50,
        backgroundColor: "#f6f6f6",
        borderColor: "#e8e8e8",
        borderRadius: 8,
        borderStyle: "solid",
        borderWidth: 1,
        lineHeight: 18.75,
        padding: 16,
        marginTop: 16,
    },
    btn: {
        height: 51,
        backgroundColor: "#ff6c00",
        // marginHorizontal: 16,
        justifyContent: "center",
        alignItems: "center",
        padding: 16,
        borderRadius: 100,
        marginTop: 43, 
        marginBottom: 16,
    },
    titleBtn: {
        color: "#fff",
        fontSize: 16,
        lineHeight: 18.75,
    },
    subLink: {
      alignItems: "center",
      marginBottom: 45,
    },
    subTitle: {
      color: "#1B4371",
      fontSize: 16,
    },
  });