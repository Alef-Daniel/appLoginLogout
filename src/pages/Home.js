import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import firebase from '../Firebase/FirebaseConnection';
export default function Home({navigation, route}) {
    
    async function deslogar(){

        await firebase.auth().signOut();
        navigation.navigate('Login');

    }
    
    
    
    
    
    return (

        <View style={styles.container}>
            <ImageBackground style={styles.image} source={require('../img/Bakcground.jpg')} resizeMode="cover">
               <View style={styles.areaApresentacao}>
                <Text style={{marginBottom: 50, fontWeight: 'bold', fontSize: 30}}> Seja Bem-Vindo!</Text>
                <Text style={{marginBottom: 10, fontWeight: 'bold', fontSize: 20}}>Usuário Logado: {route.params.user}</Text>
                <TouchableOpacity style={styles.areaBtn} onPress={deslogar}>
                    <Text>Logout</Text>
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

    areaApresentacao:{
        alignItems: 'center',
    },
    areaBtn:{
        backgroundColor: '#6495ED',
        padding: 15,
        margin: 15,
        marginTop:5,
        borderRadius: 5,
        alignItems: 'center',
    }
})