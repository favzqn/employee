import React from 'react';
import { StyleSheet, Text, View, Image, Linking, Platform } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Title, Card, Button } from 'react-native-paper';
import { MaterialIcons, Entypo } from '@expo/vector-icons';

const Profile = () =>{
    const openDial=()=>{
        if(Platform.OS === "android"){
            Linking.openURL("tel:083821329099")
        }else{
            Linking.openURL("telprompt:083821329099")
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
                source={{uri:"https://images.unsplash.com/flagged/photo-1578848151039-b8916d7c1c34?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=821&q=80"}} 
                />
            </View>
            <View style={{alignItems:"center", margin:15}}>
                <Title>Fauzan Fathurrahman</Title>
                <Text style={{fontSize:17}}>Chatbot Developer</Text>
            </View>
            <Card style={styles.myCard} onPress={()=>{
                Linking.openURL("mailto:fauzan@radyalabs.com")
            }}>
                <View style={styles.cardContent}>
                    <MaterialIcons name="email" size={32} color="#006aff" />
                    <Text style={styles.myText}>fauzan@radyalabs.com</Text>
                </View>
            </Card>
            <Card style={styles.myCard} onPress={()=>openDial()}>
                <View style={styles.cardContent}>
                    <Entypo name="phone" size={32} color="#006aff" />
                    <Text style={styles.myText}>083821329099</Text>
                </View>
            </Card>
            <Card style={styles.myCard}>
                <View style={styles.cardContent}>
                    <MaterialIcons name="attach-money" size={32} color="#006aff" />
                    <Text style={styles.myText}>123456</Text>
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
                icon="delete" mode="contained" onPress={() => console.log("true")}>
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