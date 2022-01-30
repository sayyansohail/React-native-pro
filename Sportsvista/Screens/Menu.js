import * as React from 'react';
import { Text, View, StyleSheet, Button, ImageBackground } from 'react-native';
//import Constants from 'expo-constants';

export default class main_screen extends React.Component{
  render(){
    return(
      <View style= {styles.container}>

        <ImageBackground
         source={require("./Sportsgif.gif")}
        style={{ height: 200, width : 100}}/>
      
      <View style={styles.bts}> 

      <Button  disabled={false} title ={"Login"}  onPress= {()=> this.props.navigation.navigate ("Login")} color= "red" />,


       <Button disabled={false} title ={"Signup"} onPress= {()=> this.props.navigation.navigate ("Signup")}   />


       <Button disabled={false} title ={"splashcreen"} onPress= {()=> this.props.navigation.navigate ("Splashscreen")}  />

      
      
      </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    alignItems:'center',
    backgroundColor:"#03243d", 
    justifyContent:"space-around",
    flexDirection:"column",
     borderWidth:5
    
    
  },
  bts: {
     flex: 3,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    alignItems:'center',
    backgroundColor:"#03243d",
    flexDirection:"column",
    justifyContent:"space-around", 
    padding:1,
  }
  
        });