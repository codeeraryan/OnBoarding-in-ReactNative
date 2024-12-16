import { Text, View,TextInput, TouchableOpacity, Alert ,StyleSheet} from 'react-native'
import  { Checkbox } from 'expo-checkbox'
import { useState } from 'react'
 const Login=({navigation})=> {
    const [checked,SetChecked]=useState(false)
  const [login,SetLogin]=useState(false)
  const [email,SetEmail]=useState("")
  const [Pass,SetPass]=useState("")
  const handleLogin=()=>{
    if(email=="aryanpandey0326@gmail.com"&&Pass=="arya2006"){
      Alert.alert(`user ${email} logged in`)
      SetLogin(true)
      navigation.navigate("Home")
    }
   else{ 
    SetLogin(false)
    Alert.alert("username and password is not correct")
   }
    console.log(login)
  }
    return (
        <View style={styles.head} >
        <View style={{padding:30,height:"70%"}}>
           <Text style={{fontSize:30,fontWeight:400}}>Login Form</Text> 
           <View style={{marginVertical:"20%",gap:40}}>
          <View style={{gap:4}}><Text >Email</Text>
            <TextInput  style={{borderBottomWidth:1,}} autoCapitalize='none' autoCorrect={false} value={email} onChangeText={(e)=>{SetEmail(e)}}/></View>
          <View style={{gap:4}}><Text >Password</Text>
            <TextInput style={{borderBottomWidth:1}} autoCapitalize='none' autoCorrect={false} secureTextEntry={true} value={Pass} onChangeText={(e)=>{SetPass(e)}}/></View>
           </View>
          <View style={{gap:4,flexDirection:'row'}}>
            <Checkbox value={checked} onValueChange={()=>SetChecked(prev=>!prev)} color={checked?"#4630eb":undefined}/>
            <Text >I have read and agreed with the tc</Text>
            </View>
            <TouchableOpacity disabled={!checked} onPress={()=>handleLogin()} >
              <Text style={{backgroundColor:checked?"#4630eb":"#7D7D7D",paddingVertical:"8",textAlign:"center",width:"100",borderRadius:20,fontSize:20,marginTop:40,color:"white"}} >Login</Text>
            </TouchableOpacity>
        </View>
      </View>
    )
  }
  const styles = StyleSheet.create({
    head:{
     justifyContent:"center",
     height:"100%",
    }
 })


export default Login
