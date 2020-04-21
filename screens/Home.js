import React from 'react';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import { Card, FAB } from 'react-native-paper';

const Home=({navigation})=> {
    const data = [
        {id:1,name:"Fauzan Fathurrahman",position:"Chatbot Developer"},
        {id:2,name:"Asta",position:"Web Developer"},
        {id:3,name:"Yami Sukehiro",position:"Android Developer"},
        {id:4,name:"Yuno",position:"iOS Developer"},
        {id:5,name:"Charmy-paisen",position:"Food Magic"},
        {id:6,name:"Gordon Agrippa",position:"Poison Magic"},
        {id:7,name:"Grey",position:"Transformation Magic"},
        {id:8,name:"Noelle Silver",position:"Water Magic"},
        {id:9,name:"Mereoleona",position:"Fire Magic"},
        {id:10,name:"Licht",position:"Light Magic"},
    ]
    const renderList = ((item)=>{
        return(
            <Card style={styles.myCard}
            onPress={()=>navigation.navigate("Profile")}>
                <View style={styles.cardView}> 
                    <Image
                    style={{width:60, height: 60, borderRadius:30}}
                    source={{uri:"https://images.unsplash.com/flagged/photo-1578848151039-b8916d7c1c34?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=821&q=80"}}
                    />
                    <View style={{marginLeft:10}}>
                        <Text style={styles.text}>{item.name}</Text>
                        <Text style={styles.text}>{item.position}</Text>
                    </View>
                </View>
            </Card>
        )
    })
    return (
        <View style={{flex:1}}>
            <FlatList 
            data={data}
            renderItem={({item})=>{
               return renderList(item)
            }}
            keyExtractor={item=>`${item.id}`}
            />
            <FAB
                style={styles.fab}
                small={false}
                icon="plus"
                theme={{colors:{accent:"#006aff"}}}
                onPress={() => navigation.navigate("Create")}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    myCard:{
        margin:5,
    },
    cardView:{
        flexDirection:"row",
        padding: 6
    },
    text: {
        fontSize: 18,
    },
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
    },
})

export default Home