import { Button, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomButton from '../utils/CustomButton';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from 'react'

import {DeviceEventEmitter} from "react-native"



export default function WelcomeScreen({route, navigation}) {


    const [ username, setUsername ] = useState()

    const storeUserNo = async (value) => {
        try {
          await AsyncStorage.setItem('userNo', value)
        } catch (e) {
          // saving error
        }
    }

    



    const registerUser = async () => {
        fetch('http://192.168.1.101:8080/newuser', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username 
            })
        })
        .then(function(response){
            return response.json();
          })
          .then(function(json){
            userNo = json.userNo
            storeUserNo(userNo)
            DeviceEventEmitter.emit("event.testEvent", userNo);
            navigation.navigate("UserHome")

          })
          .catch(function(error) {
          console.log('There has been a problem with your fetch operation: ' + error.message);
           // ADD THIS THROW error
            throw error;
          });
    }


    async function navigateUserHome(){
        await registerUser()
    }

    function navigateBusinessLogin(){
        navigation.navigate('BusinessLogin')
    }

    function textInputChangeHandler(text){
        setUsername(text)
    }

    return (
        <>
            <SafeAreaView style={{flex: 1, display: 'flex', backgroundColor: '#ffffff', alignItems: 'center'}}>
                <Text style={{marginLeft: 'auto', marginRight: 'auto', marginVertical: '35%', fontSize: 35}}>Logo Here</Text>
                <Text style={{width: '85%'}}>Your Name</Text>
                <TextInput onChangeText={textInputChangeHandler} placeholder='Name' style={{marginHorizontal: '10%', marginVertical: '5%', backgroundColor: '#f2f2f3', paddingHorizontal: '4 %', paddingVertical: '2%', borderRadius: 50, width: '85%'}}/>
                <CustomButton title='Continue' onPress={navigateUserHome}  textColor='white' style={{marginVertical: '5%', padding: 15, backgroundColor: '#f16124', width: 200, alignItems: 'center', borderRadius:40}}/>
                <Text style={{color: 'black'}}>Are you a Business Owner? <Text onPress={navigateBusinessLogin} style={{color: '#f16124'}}>Click Here</Text></Text>
            </SafeAreaView>
        </>
    )
}