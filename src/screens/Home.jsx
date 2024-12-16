import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,FlatList,Image,ActivityIndicator,Button} from 'react-native';

import { CherryCreamSoda_400Regular } from '@expo-google-fonts/cherry-cream-soda'
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { useEffect, useState } from 'react';



 const Home=({navigation})=>{

  let [fonts]=useFonts({
    CherryCreamSoda_400Regular
  })

const [data,setData]=useState([]);
const [isData,setIsData]=useState(false);
  useEffect(()=>{fetch('https://thapatechnical.github.io/userapi/users.json').then((response)=>response.json()).then((json)=>{setData(json);setIsData(true)})},[])

console.log(data)
if(!fonts){return <AppLoading/>}

  return (
    <View style={styles.container}>
      <Button title="How It Works?" onPress={()=>navigation.navigate("OnBoarding")}/>
      <Text  style={{color:"white",margin:10,fontSize:20,fontFamily:"CherryCreamSoda_400Regular",fontVariant:['small-caps'],}}>Developers We Have:</Text>
      
      {isData?<FlatList showsVerticalScrollIndicator={false} data={data} renderItem={(element)=>{return <View style={{backgroundColor:"rgb(104,184,244)",width:210,margin:10,fontSize:20,borderRadius:10,overflow:"hidden"}}><View style={{height:180,width:"100%",backgroundColor:"white",justifyContent:"center",alignItems:"center",}}><Image style={{height:150,width:"90%"}} source={{uri:element.item.image}}/></View><Text style={{fontFamily:"CherryCreamSoda_400Regular",fontWeight:200,margin:10,fontSize:20}}>{`#0${element.item.id}`},{element.item.name}</Text><Text style={{padding:5}}>work as a: {element.item.description}</Text></View> }}/>
      :<ActivityIndicator/>
      }
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    fontFamily:"CherryCreamSoda_400Regular",
    flex: 1,
    paddingTop:100,
    backgroundColor: '#1C1C1C',
    color:'#1C1C1C',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Home