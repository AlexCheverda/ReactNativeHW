import React, { useEffect, useState } from "react";
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
    Dimensions, 
} from 'react-native';

// import * as Font from "expo-font";

// const loadApplication = async() => {
//     await Font.loadAsync({});
// };

export default function LoginScreen() {

    const [isShowKeyboard, setIsShowKeyboard] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [secureText, setSecureText] = useState(true);
    const [activeEmail, setActiveEmail] = useState(false);
    const [activePassword, setActivePassword] = useState(false);

    const [dimensions, setDimensions] = useState(Dimensions.get("window").width);

    useEffect(() => {
        const onChange = () => {
            const width = Dimensions.get("window").width;
            setDimensions(width);
        };
        const subscript = Dimensions.addEventListener("change", onChange);
        return () => subscript?.remove();
    }, []);
    
    const keyboardHide = () => {
        setIsShowKeyboard(false);
        Keyboard.dismiss();
    };

    const onLogin = () => {
        if (password === "" || email === "") {
            console.log("errore");
        return;
        };
        setIsShowKeyboard(false);
        Keyboard.dismiss();
        console.log("Credentials", `${email} + ${password}`);
        setEmail(""), setPassword("");
    };

    const emailHandler = (text) => setEmail(text);
    const passwordHandler = (text) => setPassword(text);

    return (
        <TouchableWithoutFeedback onPress={keyboardHide}>
            <View style={styles.container}>
            <ImageBackground
               style={styles.image}
               source={require('../../assets/images/photoBG.png')}
            >
                {/* <Text style={styles.formTitle}>Войти</Text> */}
                <KeyboardAvoidingView
                    behavior={Platform.OS == "ios" ? "padding" : "height"}
                    keyboardVerticalOffset={-35}
                >
                    <View style={{ ...styles.form, marginBottom: isShowKeyboard ? 173 : 0}}>
                        
                    <Text style={styles.formTitle}>Войти</Text>
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
                            <Text style={styles.titleBtn}>Войти</Text>
                        </TouchableOpacity>
                        <View style={styles.subLink}>
                        <Text style={styles.subTitle}>Нет аккаунта? Зарегистрироваться</Text>
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
    },
    formTitle: {
        fontFamily: "robotoMedium",
        fontSize: 30,
        lineHeight: 35.16,
        alignSelf: "center",
        letterSpacing: 1,
        marginTop: 32,
        marginBottom: 16,
    },
    input: {
        fontFamily: "robotoRegular",
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
        fontFamily: "robotoRegular",
        color: "#fff",
        fontSize: 16,
        lineHeight: 18.75,
    },
    subLink: {
        alignItems: "center",
        marginBottom: 111,
      },
      subTitle: {
        fontFamily: "robotoRegular",
        color: "#1B4371",
        fontSize: 16,
        lineHeight: 18.75,
      },
  });