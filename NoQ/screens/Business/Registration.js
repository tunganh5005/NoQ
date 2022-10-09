import { View, Text, TextInput } from "react-native"

import {useState} from 'react'
import CustomButton from "../../utils/CustomButton"
import { SafeAreaView } from "react-native-safe-area-context"

import AsyncStorage from '@react-native-async-storage/async-storage';


export default () => {


    const [ businessName, setBusinessName ] = useState()

    const [ businessCode, setBusinessCode ] = useState()

    const [ email, setEmail ] = useState()

    const [ password, setPassword ] = useState()

    const [ businessNameExist, setBusinessNameExist ] = useState(false)


    function emailChangeHandler(text){
        setEmail(text)
    }
    function passwordChangeHandler(text){
        setPassword(text)
    }

    function businessNameChangeHandler(text){
        setBusinessName(text)
    }

    function businessCodeChangeHandler(text){
        setBusinessCode(text)
    }

    const storeBusinessName = async (value) => {
        try {
          await AsyncStorage.setItem('businessName', value)
        } catch (e) {
          // saving error
        }
    }

    async function registerBusiness(){
        const response = await fetch('http://192.168.1.101:8080/newbusiness', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                businessName: businessName,
                businessCode: businessCode,
                email: email,
                password: password

            })
        })
        if(response.status == 400){
            setBusinessNameExist(true)
            return
        }
        const json = response.json()
        storeBusinessName(json.businessName)
        

    }

    return (
        <SafeAreaView style={{flex: 1, display: 'flex', backgroundColor: '#ffffff', alignItems: 'center'}}>
            <Text style={{marginLeft: 'auto', marginRight: 'auto', marginVertical: '30%', fontSize: 35}}>Sign Up</Text>
            <Text style={{width: '85%'}}>Email</Text>
            <TextInput onChangeText={emailChangeHandler} placeholder='Email' style={{marginHorizontal: '10%', marginVertical: '5%', backgroundColor: '#f2f2f3', paddingHorizontal: '4 %', paddingVertical: '2%', borderRadius: 50, width: '85%'}}/>
            <Text style={{width: '85%'}}>Business Name</Text>
            <TextInput onChangeText={businessNameChangeHandler} placeholder='Name' style={{marginHorizontal: '10%', marginVertical: '5%', backgroundColor: '#f2f2f3', paddingHorizontal: '4 %', paddingVertical: '2%', borderRadius: 50, width: '85%'}}/>
            <Text style={{width: '85%'}}>Business Code</Text>
            <TextInput onChangeText={businessCodeChangeHandler} placeholder='Code' style={{marginHorizontal: '10%', marginVertical: '5%', backgroundColor: '#f2f2f3', paddingHorizontal: '4 %', paddingVertical: '2%', borderRadius: 50, width: '85%'}}/>
            <Text style={{width: '85%'}}>Password</Text>
            <TextInput secureTextEntry={true} onChangeText={passwordChangeHandler} placeholder='Password' style={{marginHorizontal: '10%', marginVertical: '5%', backgroundColor: '#f2f2f3', paddingHorizontal: '4 %', paddingVertical: '2%', borderRadius: 50, width: '85%'}}/>
            <CustomButton title='Sign Up' textColor='white' onPress={registerBusiness} style={{marginVertical: '5%', padding: 15, backgroundColor: '#f16124', width: 200, alignItems: 'center', borderRadius:40}}/>
        </SafeAreaView>
    )
}