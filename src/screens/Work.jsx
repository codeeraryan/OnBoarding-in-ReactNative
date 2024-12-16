import React, { Component, useEffect } from 'react'
import { Text, View,StyleSheet,Image,Button, Alert, TouchableOpacity } from 'react-native'

const Work=()=> {
  useEffect(()=>{fetch('https://api.agify.io?name=meelad').then((response)=>response.json()).then((json)=>console.log(json))},[])
 {
    return (
      <View >
       <TouchableOpacity  onPress={()=>{Alert.alert("What Is Up 😊")}}> <Image style={styles.ImageView} source={require('../../assets/R.png')}/></TouchableOpacity>
       <View style={styles.ButtonStyle}  > <Button color={"red"} disabled title='Greet' onPress={()=>{Alert.alert("Hey Aryan 👋")}}/></View>
       <Text style={{color:"white"}}> Work Experience: </Text>
        <Text style={styles.textlist}>  Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus odit aliquid voluptate autem labore nemo quod impedit quibusdam porro sint commodi fugiat quam architecto officiis, praesentium vero magni, corporis expedita.s </Text>
      </View>
    )
  }


   
}
const styles =StyleSheet.create({
    textlist:{
        color:"red",
      
    },
    ImageView:{
        height:300,
        width:300,
        opacity:0.5,
        
    },
    ButtonStyle:{
        textAlign:"center",
        height:40,
        paddingInline:60,
        marginBottom:100,
       
    },
  });

export default Work
