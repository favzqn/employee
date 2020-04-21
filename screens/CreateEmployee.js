import React, {useState} from 'react';
import { StyleSheet, Text, View, Modal, Alert } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';

const CreateEmployee = () => {
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [salary, setSalary] = useState("")
    const [picture, setPicture] = useState("")
    const [modal, setModal] = useState(false)

    const pickFromGallery = async () => {
        const {granted} = await Permissions.askAsync(Permissions.CAMERA_ROLL)
        if (granted) {
            let data = await ImagePicker.launchImageLibraryAsync({
                mediaTypes:ImagePicker.MediaTypeOptions.Images,
                allowsEditing:true,
                aspect:[1,1],
                quality:0.5
            })
            console.log(data)
        }else{
            Alert.alert("You need to give a permission")
        }
    }

    const pickFromCamera = async () => {
        const {granted} = await Permissions.askAsync(Permissions.CAMERA)
        if (granted) {
            let data = await ImagePicker.launchCameraAsync({
                mediaTypes:ImagePicker.MediaTypeOptions.Images,
                allowsEditing:true,
                aspect:[1,1],
                quality:0.5
            })
            console.log(data)
        }else{
            Alert.alert("You need to give a permission")
        }
    }

    return(
        <View style={styles.root}>
            <TextInput
            label='Name'
            style={styles.inputStyle}
            value={name}
            theme={theme}
            mode="outlined"
            onChangeText={text => setName(text) }
            />
            <TextInput
            label='Email'
            style={styles.inputStyle}
            value={email}
            theme={theme}
            mode="outlined"
            onChangeText={text => setEmail(text) }
            />
            <TextInput
            label='Phone'
            style={styles.inputStyle}
            value={phone}
            theme={theme}
            keyboardType="number-pad"
            mode="outlined"
            onChangeText={text => setPhone(text) }
            />
            <TextInput
            label='Salary'
            style={styles.inputStyle}
            value={salary}
            theme={theme}
            mode="outlined"
            onChangeText={text => setSalary(text) }
            />
            <Button style={styles.inputStyle} 
            theme={theme}
            icon="upload" mode="contained" onPress={() => setModal(true)}>
                Upload Image
            </Button>
            <Button style={styles.inputStyle} 
            theme={theme}
            icon="content-save" mode="contained" onPress={() => setModal(true)}>
                Save
            </Button>
            <Modal
            animationType="slide"
            transparent={true}
            visible={modal}
            onRequestClose={()=>{
                setModal(false)
            }}
            >
                <View style={styles.modalView}>
                    <View style={styles.modalButtonView}>
                        <Button icon="camera" theme={theme} mode="contained" onPress={() => pickFromCamera()}>
                            Camera
                        </Button>

                        <Button icon="image-area" theme={theme} mode="contained" onPress={() => pickFromGallery()}>
                            Gallery
                        </Button>
                    </View>
                    <Button theme={theme} onPress={() => setModal(false)}>
                            Cancel
                    </Button>
                </View>
            </Modal>
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
    inputStyle:{
        marginVertical:4,
        marginHorizontal: 7
    },
    modalView:{
        position:"absolute",
        bottom:2,
        width:"100%"
    },
    modalButtonView:{
        flexDirection:"row",
        justifyContent:"space-between",
        padding:10
    }
})

export default CreateEmployee