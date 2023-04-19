import React, { useState, useEffect } from "react";
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
  Image,
} from 'react-native';

// export default function RegistrationScreen({ navigation })
export default function RegistrationScreen() {

  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [activeLogin, setActiveLogin] = useState(false);
  const [activePassword, setActivePassword] = useState(false);
  const [activeEmail, setActiveEmail] = useState(false);

  const [dimensions, setDimensions] = useState(Dimensions.get("window"));

  useEffect(() => {
    const onChange = () => {
        const width = Dimensions.get("window").width;
        const height = Dimensions.get("window").height;
        if (width > height) {
            setDimensions({ orientation: "landscape" });
        } else {
            setDimensions({ orientation: "portrait" });
        }
    };
    const subscript = Dimensions.addEventListener("change", onChange);
    return () => subscript?.remove();
}, []);

  const keyboardHide = () => {
    setIsShowKeyboard(false);
      Keyboard.dismiss();
  };

    const onSignUp = () => {
        if (password === "" || email === "" || login === "") {
            console.log("error");
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
                        keyboardVerticalOffset={-90}
                    >
                        <View style={styles.form}>
                            <View style={styles.avaBox}>
                                {isShowKeyboard && (
                                    <Image source={require("../../assets/images/clear.png")} />
                                )}
                                <Image
                                    style={{
                                        ...styles.iconImg,
                                        right: isShowKeyboard ? 0 : -12,
                                        bottom: isShowKeyboard ? 2 : 14,
                                    }}
                                    source={
                                        isShowKeyboard ? require("../../assets/images/avatar.png") : require("../../assets/images/plus.png")
                                    } 
                                />
                            </View>    
                            <Text style={styles.formTitle}>Регистрация</Text>
                            <View>
                                <TextInput
                                    value={login}
                                    onChangeText={loginHandler}
                                    style={{
                                        ...styles.input,
                                        borderColor: activeLogin ? "#ff6c00" : "#e8e8e8",
                                        backgroundColor: activeLogin ? "#fff" : "#f6f6f6",
                                    }}
                                    placeholder="Логин"
                                    placeholderTextColor="#bdbdbd"
                                    onFocus={() => {
                                        setIsShowKeyboard(true),
                                        setActiveLogin(true);
                                    }}
                                    onBlur={() => setActiveLogin(false)}
                                />
                            </View>
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
                                    keyboardType="email-address"
                                    onFocus={() => {
                                        setIsShowKeyboard(true),
                                        setActiveEmail(true);
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
                                        marginBottom: 0,
                                    }}
                                    placeholder="Пароль"
                                    placeholderTextColor="#bdbdbd"
                                    secureTextEntry={true}
                                    onFocus={() => {
                                        setIsShowKeyboard(true),
                                        setActivePassword(true);
                                    }}
                                    onBlur={() => setActivePassword(false)}
                                />
                                <TouchableOpacity style={styles.showPass}>
                                    <Text style={styles.showPassTxt}>Показать</Text>
                                </TouchableOpacity>     
                            </View>
                            <TouchableOpacity
                                activeOpacity={0.5}
                                style={styles.btn}
                                onPress={onSignUp}
                            >
                                <Text style={styles.titleBtn}>Зарегистрироваться</Text>
                            </TouchableOpacity>
                            {/* <TouchableOpacity style={styles.subLink} onPress={() => navigation.navigate("LoginScreen")}>
                                <Text style={styles.subTitle}>Уже есть аккаунт? 
                                <Text>Войти</Text>
                                </Text>
                            </TouchableOpacity> */}
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
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "flex-end",
    },
    form: {
        position: "relative",
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        backgroundColor: "#fff",
        paddingHorizontal: 16,
        paddingBottom: 66,
        paddingTop: 92,
    },
    avaBox: {
        position: "absolute",
        width: 120,
        height: 120,
        backgroundColor: "#f6f6f6",
        borderRadius: 16,
        alignSelf: "center",
        left: "50%",
        top: 0,
        zIndex: 1,
        transform: [{ translateX: -50 }, { translateY: -50 }],
    },
    iconImg: {
        position: 'absolute',
    },
    formTitle: {
        fontFamily: "robotoMedium",
        fontSize: 30,
        color: '#212121',
        lineHeight: 35.16,
        alignSelf: "center",
        letterSpacing: 1,
        marginBottom: 32,
    },
    input: {
        fontFamily: "robotoRegular",
        fontSize: 16,
        height: 50,
        borderRadius: 8,
        borderStyle: "solid",
        borderWidth: 1,
        lineHeight: 18.75,
        padding: 16,
        marginBottom: 16,
    },
    showPass: {
        position: "absolute",
        right: 16,
        top: 15,
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
        fontWeight: "400",
        color: "#fff",
        fontSize: 16,
        lineHeight: 18.75,
    },
    subLink: {
        alignItems: "center",
    },
    subTitle: {
        fontFamily: "robotoRegular",
        color: "#1B4371",
        fontSize: 16,
        lineHeight: 18.75,
        fontWeight: "400",
        textAlign: "center",
    },
  });