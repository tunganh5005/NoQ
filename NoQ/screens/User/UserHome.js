import { Button, StyleSheet, Text, View } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
import CustomButton from '../../utils/CustomButton';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { useState, useEffect, useContext } from 'react'

import {UserContext} from '../../store/user-context'

export default function UserHome({route, navigation}){

    const userCtx = useContext(UserContext)
    

    


    function navigateEnterCode(){
        navigation.navigate('EnterCode')
    }

    function navigateMyQueues(){
        navigation.navigate('MyQueues')
    }


    return (
        <>
            <SafeAreaView style={style.container}>
                <Text style={{marginHorizontal: 30, paddingTop: 150, marginBottom: 0, fontSize: 30}}>Welcome {userCtx.username}!</Text>
                <View style={{flex: 1, justifyContent: 'center'}}>
                    <CustomButton title='Enter Code' textColor='white' style={{margin: 20, padding: 20, backgroundColor: '#f88316', alignItems: 'center', borderRadius: 50}} onPress={navigateEnterCode}/>
                    <CustomButton title='My Queues' textColor='white' style={{margin: 20, padding: 20, backgroundColor: '#f45922', alignItems: 'center', borderRadius: 50}} onPress={navigateMyQueues}/>
                </View>
            </SafeAreaView>
        </>
    )
}


const style = StyleSheet.create({
        container: {
            flex: 1,
            display: 'flex',
            justifyContent: 'center'
        }
})