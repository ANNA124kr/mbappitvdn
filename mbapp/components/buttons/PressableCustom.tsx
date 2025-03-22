import { Pressable, Text } from "react-native";


export default function PressableCustom() {
  return (
    <Pressable
      onPress={() =>{
        console.log('button is pressed by pressable')
      }}
      style = {({pressed}) => [
        {backgroundColor: pressed ? 'lightblue' : 'blue'}
      ]}
    >
      {({pressed}) => (
        <Text>
          {pressed ? 'press' : 'pressed'}
        </Text>
      )}
    </Pressable>
  )
}
