import React, { useEffect } from "react";
import { View, Text, BackHandler } from "react-native";

export default function QueueDetail({navigation}){

    // function backAction(){
    //     navigation.navigate("MyQueues")
    //     return true
    // }

    // useEffect(() => {
    //     BackHandler.addEventListener("hardwareBackPress", backAction);
    
    //     return () =>
    //       BackHandler.removeEventListener("hardwareBackPress", backAction);
    //   }, []);


    return (
        <View>
            <Text>Queue Details</Text>
        </View>
    )
}