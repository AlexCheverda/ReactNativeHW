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
    Button,
} from 'react-native';

export default function LoginScreen({ navigation, route }) {

    const { userId } = route.params;

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
            console.log("error");
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
                    <KeyboardAvoidingView
                       behavior={Platform.OS == "ios" ? "padding" : "height"}
                       keyboardVerticalOffset={-35}
                    >
                        <Text>User Id {userId}</Text>
                        <Button title="Go To Home" onPress={() => navigation.navigate("Home")} />
                        <View style={{ ...styles.form, width: dimensions }}>         
                            <Text style={styles.formTitle}>Войти</Text>
                            <View>
                                <TextInput
                                    value={email}
                                    onChangeText={emailHandler}
                                    style={{
                                        ...styles.input,
                                        borderColor: activeEmail ? "#ff6c00" : "#e8e8e8",
                                        backgroundColor: activeEmail ? "#fff" : "#f6f6f6",
                                    }}
                                    placeholder="Адрес электронной почты"
                                    placeholderTextColor="#bdbdbd"
                                    onFocus={() => {setIsShowKeyboard(true), setActiveEmail(true);
                                    }}
                                    onBlur={() => setActiveEmail(false)}
                                />
                            </View>
                            <View>
                                <TextInput
                                    value={password}
                                    onChangeText={passwordHandler}
                                    style={{    
                                        ...styles.input,
                                        borderColor: activePassword ? "#ff6c00" : "#e8e8e8",
                                        backgroundColor: activePassword ? "#fff" : "#f6f6f6",
                                        marginTop: 16,
                                   }}
                                   placeholder="Пароль"
                                   placeholderTextColor="#bdbdbd"
                                   secureTextEntry={secureText}
                                   onFocus={() => {setIsShowKeyboard(true), setActivePassword(true);
                                   }}
                                   onBlur={() => setActivePassword(false)}
                                /> 
                                <TouchableOpacity
                                style={styles.showPass}
                                >
                                    <Text style={styles.showPassTxt}>Показать</Text>
                                </TouchableOpacity>   
                            </View>
                            <TouchableOpacity
                                activeOpacity={0.5}
                                style={styles.btn}
                                onPress={onLogin}
                            >
                                <Text style={styles.titleBtn}>Войти</Text>
                            </TouchableOpacity>
                            <View style={styles.subLink}>
                                <Text style={styles.subTitle}>Нет аккаунта?</Text>
                                <Button title="Зарегистрироваться" onPress={() => navigation.navigate("RegistrationScreen")} />
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
        marginBottom: 32,
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
    },
    showPass: {
        position: "absolute",
        right: 16,
        top: 30,
    },
    showPassTxt: {
        fontSize: 16,
        fontFamily: "robotoRegular",
        fontWeight: "400",
        lineHeight: 18.75,
        color: "#1b4371",
    },
    btn: {
        height: 51,
        backgroundColor: "#ff6c00",
        justifyContent: "center",
        alignItems: "center",
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