import { View, Text, TextInput, Pressable } from "react-native"

import {useState} from 'react'
import CustomButton from "../../utils/CustomButton"
import { SafeAreaView } from "react-native-safe-area-context"

import AsyncStorage from '@react-native-async-storage/async-storage';


export default ({navigation}) => {


    const [ email, setEmail ] = useState()

    const [ password, setPassword ] = useState()


    function navigateRegistration(){
        navigation.navigate('BusinessRegistration')
    }

    function emailChangeHandler(text){
        setEmail(text)
    }
    function passwordChangeHandler(text){
        setPassword(text)
    }

    const storeBusinessName = async (value) => {
        try {
          await AsyncStorage.setItem('businessName', value)
        } catch (e) {
          // saving error
        }
    }

    

    async function registerBusiness(businessName){
        // const response = await fetch('http://192.168.1.101:8080/newbusiness', {
        //     method: 'POST',
        //     headers: {
        //         Accept: 'application/json',
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({
        //         businessName: businessName 
        //     })
        // })
        // if(response.status == 400){
        //     setBusinessNameExist(true)
        //     return
        // }
        // const json = response.json()
        // storeBusinessName(json.businessName)
        

    }

    return (
        <SafeAreaView style={{flex: 1, display: 'flex', backgroundColor: '#ffffff', alignItems: 'center'}}>
            <Text style={{marginLeft: 'auto', marginRight: 'auto', marginVertical: '30%', fontSize: 35}}>Login</Text>
            <Text style={{width: '85%'}}>Email</Text>
            <TextInput onChangeText={emailChangeHandler} placeholder='Email' style={{marginHorizontal: '10%', marginVertical: '5%', backgroundColor: '#f2f2f3', paddingHorizontal: '4 %', paddingVertical: '2%', borderRadius: 50, width: '85%'}}/>
            <Text style={{width: '85%'}}>Password</Text>
            <TextInput secureTextEntry={true} onChangeText={passwordChangeHandler} placeholder='Password' style={{marginHorizontal: '10%', marginVertical: '5%', backgroundColor: '#f2f2f3', paddingHorizontal: '4 %', paddingVertical: '2%', borderRadius: 50, width: '85%'}}/>
            <CustomButton title='Log In' textColor='white' style={{marginVertical: '5%', padding: 15, backgroundColor: '#f16124', width: 200, alignItems: 'center', borderRadius:40}}/>
            <Text style={{color: 'black'}}>Don't have an account? <Text onPress={navigateRegistration} style={{color: '#f16124'}}>Sign Up</Text></Text>
        </SafeAreaView>
    )
}