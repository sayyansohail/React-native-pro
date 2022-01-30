import * as React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
//import MapView from 'react-native-maps';

export default class Maps extends React.Component{
  render(){
    return(
<View style={styles.mapview}>
<Text>
My maps
</Text>
</View>
    )
  }
}

const styles=StyleSheet.create({
  mapview:{
    flex:1
  }
})