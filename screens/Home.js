import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Card } from 'react-native-paper';

const Home=()=> {
    const data = [
        {id:1,name:"Fauzan Fathurrahman",position:"Chatbot Developer"},
        {id:2,name:"Asta",position:"Web Developer"},
        {id:3,name:"Yami Sukehiro",position:"Android Developer"},
        {id:4,name:"Yuno",position:"iOS Developer"},
    ]
    const renderList = data.map((item)=>{
        return(
            <Card style={styles.myCard} key={item.id}>
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
        <View>
            { renderList }
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
    }
})

export default Home