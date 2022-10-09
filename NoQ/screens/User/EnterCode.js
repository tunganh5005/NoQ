import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomButton from '../../utils/CustomButton';


export default function EnterCode({navigation}){

    function navigateJoinQueue(){
        navigation.navigate('JoinQueue')
    }

    return (
        <SafeAreaView style={{display: 'flex', flex: 1, alignItems: 'center'}}>
            <Text style={{flex: 1, paddingTop: 150, fontSize: 30}}>Restaurant Code</Text>
            <View style={{display: 'flex', flex: 3, alignItems: 'center'}}>
                <TextInput style={{}} placeholder="Code"/>
                <CustomButton title='Confirm' style={{marginTop: 100, paddingVertical: 20, paddingHorizontal: 50,  backgroundColor: '#f45922', alignItems: 'center', borderRadius: 50}} textColor='white' onPress={navigateJoinQueue}/>
            </View>
        </SafeAreaView>
    )
}