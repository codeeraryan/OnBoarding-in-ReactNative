
import { Text, View,Button,Image, Linking } from 'react-native'


 const  NetflixCard=()=> {
   
    return (
      <View style={{height:500,width:220,justifyContent:'center',alignItems:"center",borderColor:"white",borderWidth:2,gap:5,backgroundColor:"white",marginBottom:50,}}>
        <View><Image style={{height:250,width:200}} source={{uri:"https://th.bing.com/th/id/OIP.8rSHSBN_QLEccp-XX0QjZwHaLG?w=115&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"}}/></View>
       <View ><Text style={{fontSize:20,fontWeight:600}}>The Social Network</Text><Text style={{paddingInline:"10"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus eveniet similique numquam dicta laudantium illum optio, enim quo qui nihil maiores totam error. Repudiandae reprehenderit nemo ipsam. Nostrum, sapiente aperiam?  </Text><Button onPress={()=>{Linking.openURL("https://www.netflix.com/in/")}} title='Watch Now'/></View> 
      </View>
    )
  
}

export default NetflixCard
