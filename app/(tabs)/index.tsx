import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';

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

    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',

      width: 210,
      height: 40,

      backgroundColor: '#686B8D',
      borderRadius: 10,

      position: 'absolute',
      top: 350,

      paddingHorizontal: 4,
    },

    icone: {
      fontSize: 20,
      marginRight: 8,
      color: 'white',
    },

    inputnome: {
      flex: 1,
      color: 'white',
    },
    inputsenha: {
      flex: 1,
      color: 'white',
    },
    botaoentrar: {
        width: 150,
        height: 40,
        backgroundColor: '#686B8D',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    }

  });

  return (

    <View style={styles.container}>
      <Image
        style={styles.perfil}
        source={require('../../assets/images/logo.png')}
      />

      <View style={styles.inputContainer}>

        <Text style={styles.icone}>👤</Text>

        <TextInput
          placeholder='Digite seu nome de usuario'
          placeholderTextColor='#ffffff86'
          style={styles.inputnome}
        />

      </View>

        <View style={[styles.inputContainer, { top: 410 }]}>
            <Text style={styles.icone}>🔒</Text>

            <TextInput
            placeholder='Digite sua senha'
            secureTextEntry={true}
            placeholderTextColor='#ffffff86'
            style={styles.inputsenha}
            />
        </View>
{/* ATENÇAO LUCAS DO FUTURO, nao meche nessa parte, só eu do passado e Deus sabemos como que isso funcionou, eu mesmo ja esqueci ;( */}
        <View style={{ position: 'absolute', top: 470 }}>
            <TouchableOpacity style={styles.botaoentrar}>
                <Text style={{ color: 'white' }}>Entrar</Text>
            </TouchableOpacity>
        </View>
    </View>
  );
}
