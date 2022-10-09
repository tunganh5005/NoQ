import { Button, View, Text } from "react-native";

 
 
 
export default function JoinQueue({navigation}){

    function navigateQueueDetail(){
        navigation.navigate("QueueDetail")
    }


    return (
        <View>
            <Text>Business Name</Text>
            <Button title="Join Queue" onPress={navigateQueueDetail}/>
        </View>
    )
}