import { Text, Pressable } from 'react-native';
import AppSyles from '../Syles/AppSyles';

export default function InlineTextButton(props) {
  return (
    <Pressable onPress={props.onPress}>
      {({ pressed }) => (
       <text
         style={pressed ? AppSyles.pressedInlineTextButton : AppSyles.InlineTextButton}>
           {props.text}
       </text>
      )}
    </Pressable>
  )
}