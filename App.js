import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons'

export default function App() {

  const[contador,setContador]=useState(0)

  const sumar=()=>{
    setContador(contador+1)
  }

  const restar=()=>{
    setContador(contador-1)
  }

  useEffect(()=>{

    if(contador>=10){
      Alert.alert("Alerta","No puedes seguir contando")      
    }
  },[contador])
  

  return (
    <View style={styles.container}>
      <Text style={{fontSize: 40}}>Contador: {contador}</Text>

      <TouchableOpacity style={[styles.button, styles.derecha]} activeOpacity={0.6} onPress={()=>sumar()} disabled={contador>=10}> 

        <Text>
          <Ionicons name='add-outline' size={35} color="green"/>
        </Text>

      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, styles.izquierda]} activeOpacity={0.6} onPress={()=>restar()}> 

        <Text>
          <Ionicons name='remove-outline' size={35} color="red"/>
        </Text>

      </TouchableOpacity>
    </View>
  );
}


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },

    button:{
      alignItems: 'center',
      borderRadius: 30,
      padding:10,
      position: "absolute",
      bottom:30
    },

    derecha:{
      right:20,
      backgroundColor: "#bbf7d0"
    },

    izquierda:{
    left:20,
    backgroundColor: "#fecdd3"
    }

  });

