import React, { useEffect, useState } from "react";
import { 
    StyleSheet, 
    View, 
    Text, 
    TextInput, 
    ImageBackground,
    Image, 
    KeyboardAvoidingView,
    Keyboard,
    TouchableWithoutFeedback, 
    Platform, 
    TouchableOpacity,
    Dimensions, 
} from 'react-native';

import {useDispatch} from 'react-redux';
import {authSignInUser} from '../../redux/auth/authOperat';

const initialState = {
    email: "",
    password: "",
}

// export default function LoginScreen({ navigation, route })
export default function LoginScreen({ navigation }) {

    // const { userId } = route.params;

    const [isShowKeyboard, setIsShowKeyboard] = useState(false);
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    
    const [state, setState] = useState(initialState);
    // const [secureText, setSecureText] = useState(true);
    // const [activeEmail, setActiveEmail] = useState(false);
    // const [activePassword, setActivePassword] = useState(false);

    const [dimensions, setDimensions] = useState(Dimensions.get("window").width);
    const [isInputFocusedEmail, setIsInputFocusedEmail] = useState(false);
    const [isInputFocusedPassword, setIsInputFocusedPassword] = useState(false);

    const dispatch = useDispatch();

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
        setIsShowKeyboard(false);
        // if (password === "" || email === "") {
        //     console.log("error");
        // return;
        // };
        // setIsShowKeyboard(false);
        Keyboard.dismiss();
        dispatch(authSignInUser(state));
        // console.log("Credentials", `${email} + ${password}`);
        // setEmail(""), setPassword("");
        setState(initialState);
    };

    const emailHandler = (text) => setEmail(text);
    const passwordHandler = (text) => setPassword(text);

    return (
        <TouchableWithoutFeedback onPress={keyboardHide}>
            <View style={styles.container}>
                <Image
                   style={styles.image}
                   source={require('../../assets/images/photoBG.png')}
                ></Image>
                    <KeyboardAvoidingView
                       behavior={Platform.OS == "ios" ? "padding" : "height"}
                       keyboardVerticalOffset={-35}
                    >
                        <View style={{ ...styles.form, width: dimensions }}>         
                            <Text style={styles.formTitle}>Войти</Text>
                            <View>
                                <TextInput
                                    value={state.email}
                                    onChangeText={(value) =>
                                    setState((prevState) => ({...prevState, email: value}))
                                    }
                                    style={{
                                        ...styles.input,
                                        borderColor: isInputFocusedEmail ? "#ff6c00" : "#e8e8e8",
                                        backgroundColor: isInputFocusedEmail ? "#fff" : "#f6f6f6",
                                    }}
                                    placeholder="Адрес электронной почты"
                                    placeholderTextColor="#bdbdbd"
                                    onFocus={() => {setIsShowKeyboard(true), setActiveEmail(true);
                                    }}
                                    onBlur={() => setActiveEmail(false)}
                                />
                            </View>
                            <View style={{marginTop: 16}}>
                                <TextInput
                                    value={state.password}
                                    onChangeText={(value) =>
                                    setState((prevState) => ({...prevState, password: value}))
                                    }
                                    style={{    
                                        ...styles.input,
                                        borderColor: isInputFocusedPassword ? "#ff6c00" : "#e8e8e8",
                                        backgroundColor: isInputFocusedPassword ? "#fff" : "#f6f6f6",
                                        
                                   }}
                                   placeholder="Пароль"
                                   placeholderTextColor="#bdbdbd"
                                   secureTextEntry={true}
                                   onFocus={() => {setIsShowKeyboard(true), setActivePassword(true);
                                   }}
                                   onBlur={() => setActivePassword(false)}
                                /> 
                                <TouchableOpacity
                                style={styles.showPass} onPress={onLogin}
                                >
                                    <Text style={styles.showPassTxt}>Показать</Text>
                                </TouchableOpacity>   
                            </View>
                            <TouchableOpacity
                                activeOpacity={0.8}
                                style={styles.btn}
                                onPress={onLogin}
                            >
                                <Text style={styles.titleBtn}>Войти</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.subLink} onPress={() => navigation.navigate("Register")}>
                                <Text style={styles.subTitle}>Нет аккаунта? Зарегистрироваться</Text>
                            </TouchableOpacity>
                        </View>
                    </KeyboardAvoidingView>
            </View>
        </TouchableWithoutFeedback>    
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
    // width: Dimensions.get('window').width,
    // height: Dimensions.get('window').height,
      backgroundColor: '#fff',
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "flex-end",
        // width: '100%',
        // height: '100%',
        // position: 'absolute',
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