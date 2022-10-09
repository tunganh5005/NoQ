import { Pressable, Text } from "react-native"


export default function CustomButton({title, onPress, style, textColor}){
    return (
        <Pressable onPress={onPress} style={{...style}}>
            <Text style={{color: textColor, fontSize: 15}}>{title}</Text>
        </Pressable>
    )
}