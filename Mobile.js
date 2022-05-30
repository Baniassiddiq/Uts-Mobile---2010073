import { View, Button } from 'react-native';
import AppSyles from '../Syles/AppSyles';
import { auth } from "../firebase";
import { signOut, sendEmailVerification } from 'firebase/auth';

export default function Mobile({ navigation, route }) {
  let logout = () => {
    signOut(auth).then(() => {
      navigation.popToTop();
    });
  }

  let showContent = () => {};

  let showSendVerificationEmail = () => {
  return (
  <view>
    <Text>Please Verify yout email to use Mobile</Text>
    <Button title="Send verification email" onPress=()
  </view>
  )
}

  return (
    <view style={AppSyles.container}>
      {auth.currentUser.emailVerified ? showContent : showSendVerificationEmail}
      <Button title="Logout" onPress={logout} />
    </view>
  )
}