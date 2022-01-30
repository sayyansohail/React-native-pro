import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {StackNavigator} from 'react-navigation';
//import * as firebase from 'firebase';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Menu from "./Screens/Menu";
import Login from  "./Screens/Login";
import Signup from "./Screens/Signup";
import Splashscreen from "./Screens/Splashscreen";
//import Academy from "./Screens/Academy";
//import Maps from "./Screens/Maps";


/*const firebaseConfig = {
  apiKey: "AIzaSyBVtsheFa-l-2sf8KJdyIG_NkHguwBXnXU",
  authDomain: "sportsvista-19664.firebaseapp.com",
  projectId: "sportsvista-19664",
  storageBucket: "sportsvista-19664.appspot.com",
  messagingSenderId: "319624225408",
  appId: "1:319624225408:web:485bd3ef7b1d349c07fc65",
  measurementId: "G-WJJ700TRTG"
};
if (firebase.apps.length){
firebase.initializeApp(firebaseConfig);
}
  */
const Stack = createNativeStackNavigator();
 
function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screens name="Menu" component={Menu} />
      <Stack.Screens name="Login" component={Login} />
      <Stack.Screens name="Signup" component={Signup}/> 
      <Stack.Screens name="Splashscreen" component={Splashscreen}/>    
        
       
    </Stack.Navigator>
    
   
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
    
    
  );
}

