import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, Image, FlatList, Alert } from 'react-native';
import { Card, FAB } from 'react-native-paper';

const Home=({navigation})=> {

    // const data = [
    //     {_id:"1",name:"Fauzan Fathurrahman",email:"fauzan@radyalabs.com",salary:"123456",phone:"0812312",picture:"https://images.unsplash.com/flagged/photo-1578848151039-b8916d7c1c34?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=821&q=80", position:"Chatbot Developer"},
    //     {_id:"2",name:"Asta",email:"asta@radyalabs.com",salary:"124",phone:"008123123",picture:"https://images.unsplash.com/flagged/photo-1578848151039-b8916d7c1c34?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=821&q=80", position:"Web Developer"},
    //     {_id:"3",name:"Yami Sukehiro",email:"yami@radyalabs.com",salary:"124214",phone:"08123123",picture:"https://images.unsplash.com/flagged/photo-1578848151039-b8916d7c1c34?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=821&q=80", position:"Android Developer"},
    //     {_id:"4",name:"Yuno",email:"yuno@radyalabs.com",salary:"4524324",phone:"08123123",picture:"https://images.unsplash.com/flagged/photo-1578848151039-b8916d7c1c34?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=821&q=80", position:"iOS Developer"},
    //     {_id:"5",name:"Charmy-paisen", email:"charmy@radyalabs.com",salary:"0842352",phone:"083821329099",picture:"https://images.unsplash.com/flagged/photo-1578848151039-b8916d7c1c34?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=821&q=80", position:"Food Magic"},
    //     {_id:"6",name:"Gordon Agrippa",email:"gordon@radyalabs.com",salary:"23424",phone:"083653946",picture:"https://images.unsplash.com/flagged/photo-1578848151039-b8916d7c1c34?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=821&q=80", position:"Poison Magic"},
    //     {_id:"7",name:"Grey",email:"grey@radyalabs.com",salary:"54345",phone:"08724525424",picture:"https://images.unsplash.com/flagged/photo-1578848151039-b8916d7c1c34?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=821&q=80", position:"Transformation Magic"},
    //     {_id:"8",name:"Noelle Silver",email:"noelle@radyalabs.com",salary:"23423",phone:"0845678",picture:"https://images.unsplash.com/flagged/photo-1578848151039-b8916d7c1c34?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=821&q=80", position:"Water Magic"},
    //     {_id:"9",name:"Mereoleona",email:"mereoleona@radyalabs.com",salary:"535434",phone:"0845678933",picture:"https://images.unsplash.com/flagged/photo-1578848151039-b8916d7c1c34?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=821&q=80", position:"Fire Magic"},
    //     {_id:"10",name:"Licht",email:"licht@radyalabs.com",salary:"53453",phone:"08235254245",picture:"https://images.unsplash.com/flagged/photo-1578848151039-b8916d7c1c34?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=821&q=80", position:"Light Magic"},
    // ]

    const [data,setData] = useState([])
    const [loading, setLoading] = useState(true)

    const fetchData = () => {
        fetch("http://19a929ab.ngrok.io/")
        .then(res=>res.json())
        .then(results=>{
            setData(results)
            setLoading(false)
        }).catch(err=>{
            Alert.alert("Something went wrong..")
        })
    }

    useEffect(()=>{
        fetchData()
    },[])

    const renderList = ((item)=>{
        return(
            <Card style={styles.myCard}
            onPress={()=>navigation.navigate("Profile", {item})}>
                <View style={styles.cardView}> 
                    <Image
                    style={{width:60, height: 60, borderRadius:30}}
                    source={{uri:item.picture}}
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
            keyExtractor={item=>item._id}
            onRefresh={()=>fetchData()}
            refreshing={loading}
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