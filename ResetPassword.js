import { Text, View, TextInput, ImageBackground, Button, KeyboardAvoidingView, Platform } from 'react-native';
import AppSyles from '../Syles/AppSyles';
import InlineTextButton from '../components/InlineTextButton'
import React from 'react';
import { auth } from "../firebase";
import { sendPasswordResetEmail } from 'firebase/auth';

export default function ResetPassword({ navigation }) {
  const background = require("../assets/background.jpg");

  let [email, setEmail] = React.useState("");
  let [errorMessage, setErrorMessage] = React.useState("");

  let resetPassword = () => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        navigation.popToTop();
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  }

  return (
    <ImageBackground style={AppSyles.container} source={background}>
      <KeyboardAvoidingView
       style={AppSyles.backgroundCover}
       behavior={Platform.OS === "android" ? "padding" : null}
       keyboardVerticalOffset={60}>
      <Text style={AppSyles.lightText, AppSyles.header}>Reset Password</Text>
      <Text style={AppSyles.errorText}>{errorMessage}</Text>
      <TextInput
        style={[AppSyles.textInput, AppSyles.lightTextInput, AppSyles.lightText]}
        placeholder='Email'
        placeholderTextColor="#BEBEBE"
        value={email}
        onChangeText={setEmail} />
       <view style={[AppSyles.rowContainer, AppSyles.topMargin]}>
        <Text style={AppSyles.lightText}>Don't have an account?</Text>
        <InlineTextButton text="Sign Up" onPress={() => navigation.navigate("SignUp")} />
       </view>
       <Button title="Reset Password" onPress={resetPassword} color="#f7b267">
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}