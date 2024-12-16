
import { useState } from 'react'
import { Text, View, Button } from 'react-native'

const Counter=()=> {
    const [count,setCount]=useState(0);
   {
    return (
      <View style={{backgroundColor:"white",position:"absolute",left:20}}>
        <Button onPress={()=>{setCount(prev=>prev+10)}} title='+10'/><Button onPress={()=>{setCount(prev=>prev==0?prev:prev=prev-10)}} title='-10'/><Button onPress={()=>{setCount(prev=>prev=0)}} title='Reset'/><Text>{count}</Text>
       
      </View>
    )
  }
}

export default Counter
