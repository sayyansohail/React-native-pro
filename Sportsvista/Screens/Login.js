import * as React from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';
import * as firebase from 'firebase';
import {Container, Content, Header,Form, Input, Item, Button, Label} from 'native-base';


export default class Login extends React.Component{
  render(){
    return(


      state={
          email:'',
          password:'',
      },
 
 login=(email,password)=>{
firebase.auth().signInWithEmailAndPassword(email,password).then(function (user){console.log(user)})

 },

 signup=(email,password)=>{

firebase.auth().createUserWithEmailAndPassword(email,password)

 },
 async function logIn() {
  try {
    await Facebook.initializeAsync({
      appId: '<212666334403719>',
    });
    const { type, token, expirationDate, permissions, declinedPermissions } =
      await Facebook.logInWithReadPermissionsAsync({
        permissions: ['public_profile'],
      });
    if (type === 'success') {
      // Get the user's name using Facebook's Graph API
      const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
      const credential= firebase.auth.FacebookAuthProvider.credential(token)
      firebase.auth().signInWithCredential(credential)
      Alert.alert('Logged in!', `Hi ${(await response.json()).name}!`);
    } else {
      // type === 'cancel'
    }
  } catch ({ message }) {
    alert(`Facebook Login Error: ${message}`);
  }
},

      <View style = {styles.viewcontainer}>
      <Text style={{ margin: 10, fontSize: 20 , fontWeight: "bold", color:'white'}}>
      Login
      </Text>

      <Container style={styles.viewcontainer}>
      <Form>
      <Item floatingLabel>
      <Label> Enter Your Email </Label>
      <Input
         autoCorrect= {false}
         autoCapitalize={false}
         onChangeText={(email)=> this.setState({email})}
         />
      </Item>
      </Form>
      </Container>

       <Container style={styles.txtin}>
      <Form>
      <Item floatingLabel>
      <Label> Enter Your password </Label>
      <Input
        secureTextEntry={true}
         autoCorrect= {false}
         autoCapitalize={false}
          onChangeText={(password)=> this.setState({password})}
         />
      </Item>

      <Button style= {{marginTop:50}}
      full 
      rounded
      primary
      onPress={()=> this.login(this.state.email, this.state.password)}
      >
      <Text>Login</Text>
      </Button>


      <Button style= {{marginTop:50}}
      full 
      rounded
      sucsess
      onPress={()=> this.signup(this.state.email, this.state.password)}
  >
      <Text> signup</Text>
       <Button style= {{marginTop:50}}
      full 
      rounded
      sucsess
    onPress= {()=> this.props.navigation.navigate ("facebook login")}  >
      <Text> facebook signin</Text>
      </Button>
      </Button>
      </Form>
      </Container>
    </View>
    

    )
  }
}


const styles = StyleSheet.create({
  viewcontainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    alignItems:"center",
    padding: 20,
    backgroundColor:"#03243d"
    },
  txtin:{
    padding:10,
    borderWidth:5,
        margin:20,
        backgroundColor:"white",

  }

});
