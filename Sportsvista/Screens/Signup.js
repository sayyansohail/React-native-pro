import * as React from 'react';
import { Text, View, StyleSheet, TextInput,Button } from 'react-native';

export default class Textapp extends React.Component{
  render(){
    return(

        state={
          email:'',
          password:'',
         
      },
 
 signup=(email,password)=>{

firebase.auth().createUserWithEmailAndPassword(email,password)

 },
    <View>
    <View style ={styles.viewcontainer2} >
      <Text style={{ margin: 10, fontSize: 20 , fontWeight: "bold", color:"white", alignItems:'left'}}>
      sign up
      </Text>
      </View>
        <View style = {styles.viewcontainer}>
      <TextInput
      keyboardType="default"
       placeholder= "Team name"
        style={styles.txtin}>
      </TextInput>

      

       <TextInput
      keyboardType="Phone-pad"
       placeholder= "phone number"
        style={styles.txtin}>
      </TextInput>

       <TextInput
      keyboardType="email-address"
       placeholder= "email"
        style={styles.txtin}>
      </TextInput>

       <TextInput
       secureTextEntry={true}
      keyboardType="Password"
       placeholder= "password"
        style={styles.txtin}>
      </TextInput>
      </View>
      <View>
  <Button style= {{marginTop:50}}
      full 
      rounded
      primary
      onPress={()=> this.signup(this.state.email, this.state.password)}
      >
      <Text>signup</Text>
      </Button>

      <Button style= {{marginTop:50}}
      full 
      rounded
      sucsess
    onPress= {()=> this.props.navigation.navigate ("Login")} >
      <Text>login</Text>
      </Button>
    </View>
</View>
    
    )
  }
}


const styles = StyleSheet.create({
  viewcontainer: {
    flex: 1,
    justifyContent: "left",
    backgroundColor: '#ecf0f1',
    alignItems:"center",
    padding: 20,
    backgroundColor: "#03243d"
    
  },
  txtin:{
    padding:10,
    borderWidth:5,
        margin:20,
        backgroundColor:"white",

  },
   viewcontainer2: {
     borderWidth:2,
    justifyContent: "left",
    backgroundColor: '#ecf0f1',
    alignItems:"left",
    backgroundColor: "#03243d"
    
  },

});
