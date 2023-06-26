import React, { useState } from 'react';
import { View, Text, StyleSheet, ImageBackground, TextInput, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import firebase from '../Firebase/FirebaseConnection';

export default function Login({ navigation }) {

    const [visiblePass, setVisiblePass] = useState(true);
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();


async function logar(){
    await firebase.auth().signInWithEmailAndPassword(email, password)
    .then((value)=>{

        navigation.navigate('Home',{user: value.user.email});
    })
    .catch((error)=>{
        alert('ops deu algo errado!');
        return;
    })

    setEmail('');
    setPassword('');
}



    return (

        <View style={styles.container}>
            <ImageBackground style={styles.image} source={require('../img/Bakcground.jpg')} resizeMode="cover">
                <View style={styles.areaLogin}>
                    <Text style={styles.titulo}>E-mail: </Text>
                    <TextInput value={email}onChangeText={(texto)=>setEmail(texto)} style={styles.input}></TextInput>
                    <Text style={styles.titulo}>Senha: </Text>
                    <TextInput value={password} onChangeText={(texto)=>setPassword(texto)} style={styles.input} secureTextEntry={visiblePass}></TextInput>
                    <TouchableOpacity style={styles.btn} onPress={logar}>
                        <Text style={styles.tituloBtn}>Login</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },

    image: {
        flex: 1,
        justifyContent: 'center',
    },

    areaLogin:{
        justifyContent: 'center',
        
    },
    input: {
        backgroundColor: '#fff',
        margin: 15,
        padding: 15,
        fontSize: 17,
        borderRadius: 8
    },

    titulo:{
        fontSize:15,
        marginLeft: 15,
        fontWeight: 'bold',
        color: 'black'

    },

    btn:{
        backgroundColor: '#6495ED',
        padding: 10,
        margin: 15,
        marginTop:5,
        borderRadius: 5,
        alignItems: 'center',
        borderRadius: 8

    },

    tituloBtn:{
        fontSize: 20,
        fontWeight: 'bold', 
        color: 'black'
    }


})