import { FlatList, View, StyleSheet, StatusBar, Text, Pressable } from "react-native";


data = [
    {id: 1, store: "Store 1", position: '3'},
    {id: 2, store: "Store 2", position: '5'},
    {id: 3, store: "Store 3", position: '2'},
    {id: 4, store: "Store 4", position: '9'}
]



export default function MyQueues({navigation}){

    function navigateQueueDetail(){
        navigation.navigate("QueueDetail")
    }

    const Item = ({ store, position }) => (
        <Pressable onPress={navigateQueueDetail}>
            <View style={styles.item}>
                <Text style={{flex: 1}}>Store 1</Text>
                <View style={{backgroundColor: '#f45922', width: 40, height: 40, borderRadius: 100, justifyContent: "center",alignItems: "center"}}>
                    <Text style={{flex: 1 ,color: 'white', fontSize: 30}}>4</Text>
                </View>
            </View>
        </Pressable>
    );

    const renderItem = ({ item }) => (
        <Item store={item.store} position={item.position} />
    );

    return (
        <View style={{display: 'flex'}}>
            <Text style={{marginHorizontal: 16, marginTop: 50, fontSize: 20}}>Your Queues</Text>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: "center",
        borderRadius: 50,
        backgroundColor: 'white',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        shadowColor: '#f2f2f3',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 2,
    },
    title: {
        fontSize: 32,
    },
  });