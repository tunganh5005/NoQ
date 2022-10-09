import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native'

import { createNativeStackNavigator } from '@react-navigation/native-stack'

import WelcomeScreen from './screens/WelcomeScreen';
import UserHome from './screens/User/UserHome';
import EnterCode from './screens/User/EnterCode';
import MyQueues from './screens/User/MyQueues';
import JoinQueue from './screens/User/JoinQueue';
import QueueDetail from './screens/User/QueueDetail';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {io} from 'socket.io-client/dist/socket.io';

import {DeviceEventEmitter} from "react-native"

import { useEffect, useState, useRef, useContext } from 'react'

import {UserContext} from './store/user-context'
import Registration from './screens/Business/Registration';
import Login from './screens/Business/Login';


const Stack = createNativeStackNavigator()

export default () => {


    const socketRef = useRef()

  const userCtx = useContext(UserContext)


  const [userNo, setUserNo] = useState()

  function updateUserNo(userNo) {
    setUserNo(userNo)
  }


  DeviceEventEmitter.addListener("event.testEvent", (userNo) => updateUserNo(userNo));



  function eshtablishConnection(userNo){
    socketRef.current = io('http://192.168.1.101:8080')
    socketRef.current.emit('sendUserNo', userNo)

    socketRef.current.on('returnUserName', (userName) => {
      console.log(userName)
      userCtx.changeUsername(userName)
    })
  }


  useEffect(()=>{
      async function getUser(){
          const value = await AsyncStorage.getItem('userNo')
          setUserNo(value)
      }
      getUser()
      if(userNo){
        eshtablishConnection(userNo)
      }

  }, [userNo])

    return (
        <>
            <StatusBar style="auto" />
            <NavigationContainer>
            <Stack.Navigator>
                {!userNo && <Stack.Screen name='WelcomeScreen' initialParams={{}} component={WelcomeScreen} options={{headerShown: false}}/>}
                <Stack.Screen options={{headerShown: false}} initialParams={{}} name='UserHome' component={UserHome}/>
                <Stack.Screen options={{headerShown: false}} name='EnterCode' component={EnterCode}/>
                <Stack.Screen options={{headerShown: false}} name='MyQueues' component={MyQueues}/>
                <Stack.Screen name='JoinQueue' component={JoinQueue}/>
                <Stack.Screen name='QueueDetail' component={QueueDetail}/>
                <Stack.Screen options={{headerShown: false}} name='BusinessRegistration' component={Registration}/>
                <Stack.Screen options={{headerShown: false}} name='BusinessLogin' component={Login}/>
            </Stack.Navigator>
            </NavigationContainer>
        </>
    )
}