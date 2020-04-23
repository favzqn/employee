import React from 'react';
import { StyleSheet, Text, View, Image, Linking, Platform, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Title, Card, Button } from 'react-native-paper';
import { MaterialIcons, Entypo } from '@expo/vector-icons';

const Profile = (props) =>{

    const {_id,name,picture,phone,email,position,salary} = props.route.params.item
    console.log(_id)
    const deleteEmployee = ()=> {
        fetch("http://19a929ab.ngrok.io/delete", {
            method:"post",
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                id:_id
            })
        })
            .then(res=>res.json())
            .then(deletedEmp=>{
                Alert.alert(`${deletedEmp.name} is deleted`)
                props.navigation.navigate("Home")
            })
            .catch(err=>{
                Alert.alert("Something went wrong..")
            })
        }

    const openDial=()=>{
        if(Platform.OS === "android"){
            Linking.openURL(`tel:${phone}`)
        }else{
            Linking.openURL(`telprompt:${phone}`)
        }
    }
    return (
        <View style={styles.root}>
            <LinearGradient
            colors={["#0033ff","#6bc1ff"]}
            style={{height:"20%"}}
            />
            <View style={{alignItems:"center"}}>
                <Image
                style={{width:140,height:140,borderRadius:140/2,marginTop:-50}}
                source={{uri:picture}} 
                />
            </View>
            <View style={{alignItems:"center", margin:15}}>
                <Title>{name}</Title>
                <Text style={{fontSize:17}}>{position}</Text>
            </View>
            <Card style={styles.myCard} onPress={()=>{
                Linking.openURL(`mailto:${email}`)
            }}>
                <View style={styles.cardContent}>
                    <MaterialIcons name="email" size={32} color="#006aff" />
                    <Text style={styles.myText}>{email}</Text>
                </View>
            </Card>
            <Card style={styles.myCard} onPress={()=>openDial()}>
                <View style={styles.cardContent}>
                    <Entypo name="phone" size={32} color="#006aff" />
                    <Text style={styles.myText}>{phone}</Text>
                </View>
            </Card>
            <Card style={styles.myCard}>
                <View style={styles.cardContent}>
                    <MaterialIcons name="attach-money" size={32} color="#006aff" />
                    <Text style={styles.myText}>{salary}</Text>
                </View>
            </Card>
            <View style={{flexDirection:"row",justifyContent:"space-around",padding:10}}>
                <Button
                theme={theme}
                icon="account-edit" mode="contained" onPress={() => console.log("true")}>
                    Edit
                </Button>

                <Button
                theme={theme}
                icon="delete" mode="contained" onPress={() => deleteEmployee()}>
                    Delete
                </Button>
            </View>
        </View>
    )
}

const theme = {
    colors: {
        primary:"#006aff"
    }
}
const styles = StyleSheet.create({
    root:{
        flex:1
    },
    myCard:{
        margin:3
    },
    cardContent:{
        flexDirection:"row",
        padding:8
    },
    myText:{
        fontSize:17,
        marginTop:5,
        marginLeft:5
    }
})

export default Profile