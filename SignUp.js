import { Text, View, TextInput, ImageBackground, Button, KeyboardAvoidingView, Platform } from 'react-native';
import AppSyles from '../Syles/AppSyles';
import InlineTextButton from '../components/InlineTextButton'
import React from 'react';
import { auth } from "../firebase";
import { createUserWithEmailAndPassword, sentEmailVerification } from "firebase/auth";

export default function SignUp({ navigation }) {
  const background = require("../assets/background.jpg");

  let [email, setEmail] = React.useState("");
  let [password, setPassword] = React.useState("");
  let [confirmPassword, setConfirmPassword] = React.useState("");
  let [validationMessage, setValidayionMessage] = React.useState("");

  let validateAndSet = (value, valueToCompare, setValue) => {
    if (value !== valueToCompare) {
      setValidationMessage("passwords do not match.");
    } else {
      setValidationMessage("");
    }

    setValue(value);
  };

  let signUp = () => {
    if (password === confirmPassword) {
      createUserWithEmailAndPassword(auth, email, password);
      .then((userCredential) => {
        sendEmailVerification(auth.currentUser);
      })
      .catch((error) => {
        setValidationMessage(error.message);
      });
    }
  }

  return (
    <ImageBackground style={AppSyles.container} source={background}>
      <KeyboardAvoidingView
       style={AppSyles.backgroundCover}
       behavior={Platform.OS === "android" ? "padding" : null}
       keyboardVerticalOffset={60}>
      <Text style={[AppSyles.lightText, AppSyles.header]}>Sign Up</Text>
      <Text style={[AppSyles.errorText]}>{validationMessage}</Text>
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
        onChangeText={(value) => validateAndSet(value, confirmPassword, setPassword)} />
      <TextInput
        style={[AppSyles.textInput, AppSyles.lightTextInput, AppSyles.lightText]}
        placeholder='Confirm Password'
        placeholderTextColor="#BEBEBE"
        secureTextEntry={true}
        value={confirmPassword}
        onChangeText={(value) => validateAndSet(value, password, setConfirmPassword)} />} />
       <view style={[AppSyles.rowContainer, AppSyles.topMargin]}>
        <Text style={AppSyles.lightText}>Already have an account?</Text>
        <InlineTextButton text="Login" onPress={() => navigation.popToTop()/>
       </view>
       <Button title="Sign Up" onPress={signUp} color="#f7b267">
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}