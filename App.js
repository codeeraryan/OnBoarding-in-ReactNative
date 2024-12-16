
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './src/screens/Login';
import Home from './src/screens/Home';
import OnBoarding from './src/screens/OnBoarding';

const App =()=> {
  
const Stack = createNativeStackNavigator();

  {
    return (
      <NavigationContainer >
        <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName='OnBoarding'>
       <Stack.Screen  name='OnBoarding' component={OnBoarding}/>
       <Stack.Screen name='Login' component={Login}/>
       <Stack.Screen name='Home' component={Home} />
      </Stack.Navigator>
      </NavigationContainer>
    )
  }
}





export default App
