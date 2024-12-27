import { StyleSheet, Text, View ,} from 'react-native';

import { StatusBar } from 'expo-status-bar';
import React from 'react'
import Onboarding from 'react-native-onboarding-swiper';
import LottieView from 'lottie-react-native';
import { useFirebase } from './firebaseContext/FirebaseContext';
export default function OnBoarding({navigation}) {
 
   const {isLogin}=useFirebase();

    const handleDone=()=>{
      isLogin ? navigation.navigate("Home"):navigation.navigate("Login") 

    }
  return (
    <View style={styles.container}>
     <Onboarding
     style={{fontFamily:"CherryCreamSoda_400Regular",fontVariant:['small-caps'],}}
     onDone={handleDone}
     onSkip={handleDone}
  pages={[
    {
      backgroundColor: '#97dbc2',
      image: (<View ><LottieView style={styles.anime} source={require("../../assets/animation/anime.json")} autoPlay loop/></View>),
      title: 'Grab It',
      subtitle: 'Now , everything lies near you',
    },
    {
      backgroundColor: '#cd97db',
      image: (<View ><LottieView style={styles.anime} source={require("../../assets/animation/animeSell.json")} autoPlay loop/></View>),
      title: 'Sell',
      subtitle: 'sell unnecessaries to ur seniors or junios under the same hostel',
    },
    {
      backgroundColor: '#f2abc1',
      image: (<View ><LottieView style={styles.anime} source={require("../../assets/animation/animeBuy.json")} autoPlay loop/></View>),
      title: 'Purchase',
      subtitle: 'Buy necessaries from ur seniors or junios in your hostel ',
    },
    {
      backgroundColor: '#f1f2ab',
      image: (<View ><LottieView style={styles.anime} source={require("../../assets/animation/animeTq.json")} autoPlay loop/></View>),
      title: 'Sell and Purchase',
      subtitle: 'one can either sell their stuffs or purchase other`s stuff ',
    },
  
  ]}
/>
<StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        height:"100%"
    },
    anime:{
        width:300,
        height:300,
    },
})