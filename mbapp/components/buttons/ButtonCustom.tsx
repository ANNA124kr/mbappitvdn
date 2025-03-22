import { Button } from "react-native"

const ButtonCustom = () => {
  return(
    <Button
    title="Press me"
    onPress={()=>{
      console.log('button is pressed');
    }}
    color='#81b0ff'
    />
  )
}
export default ButtonCustom