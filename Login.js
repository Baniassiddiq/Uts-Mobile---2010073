import { Text, View, TextInput, ImageBackground, Button, KeyboardAvoidingView, Platform } from 'react-native';
import AppSyles from '../Syles/AppSyles';
import InlineTextButton from '../components/InlineTextButton'
import React from 'react';
import { auth, , currentUser } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

export default function Login({ navigation }) {
  const background = require("../assets/background.jpg");

  if (auth.currentUser) {
    navigation.navigate("Mobile");
  }

  let [errorMessage, setErrorMessage] = React.useState("");
  let [email, setEmail] = React.useState("");
  let [password, setPassword] = React.useState("");

  let login = () => {
    if (email !== "" && password !== "");
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          navigation.navigate("Mobile", { user: userCredential.user });
        })
        .catch((error) => {
          setErrorMessage(error.message)
        });
    } else {
      setErrorMessage("Please enter an email and password");
    }
  }

  return (
    <ImageBackground style={AppSyles.container} source={background}>
      <KeyboardAvoidingView
       style={AppSyles.backgroundCover}
       behavior={Platform.OS === "android" ? "padding" : null}
       keyboardVerticalOffset={60}>
      <Text style={AppSyles.lightText, AppSyles.header}>Login</Text>
      <Text style={AppSyles.errorText}>{errorMessage}</Text>
      <TextInput
        style={[AppSyles.textInput, AppSyles.lightTextInput, AppSyles.lightText]}
        placeholder='Email'
        placeholderTextColor="#BEBEBE"
        value={email}
        onChangeText={setEmail} />
       <TextInput
        style={[AppSyles.textInput, AppSyles.lightTextInput, AppSyles.lightText]}
        placeholder='Password'
        placeholderTextColor="#BEBEBE"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword} />
       <view style={[AppSyles.rowContainer, AppSyles.topMargin]}>
        <Text style={AppSyles.lightText}>Don't have an account?</Text>
        <InlineTextButton text="Sign Up" onPress={() => navigation.navigate("SignUp")} />
       </view>
       <view style={[AppSyles.rowContainer, AppSyles.bottomMargin]}>
        <Text style={AppSyles.lightText}>Forgotten your account?</Text>
        <InlineTextButton text="Reset" onPress={() => navigation.navigate("ResetPassword")} />
       </view>
       <Button title="Login" onPress={login} color="#f7b267">
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}