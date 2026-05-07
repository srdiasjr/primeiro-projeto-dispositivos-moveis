import react from 'react';
import {View,Text,StyleSheet,Image,ScrollView,TouchableOpacity,TextInput} from 'react-native';
import { useState } from 'react';

export default function Index() {
  
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        },
        perfil: {
            width: 200,
            height: 200,
            borderRadius: 100,
            borderWidth: 1,

            position: 'absolute',
            top: 110,
        },
        inputnome: {
            width: 200,
            height: 40,
            borderRadius: 10,
            position: 'absolute',
            top: 350,
            backgroundColor: '#686B8D',
            paddingLeft: 15,
            placeholderTextColor: '#ffffff',
        },
        
        });

    return (
    <View>
        <View style={styles.container}>
                <Image
                    style={styles.perfil}
                    source={require('../../assets/images/logo.png')} />
            </View>
            <View style={styles.container}>
                <TextInput placeholder='Digite seu nome de usuario' style={styles.inputnome}/>
            </View>
    </View>
  );
    }