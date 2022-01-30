import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import {Button, Header, Container, Body, Left, Right,Footer, FooterTab, Icon,Title, Content,Badge, Accordion, ExtendedIcon} from 'native-base';
const data= [
{title:"Bath Island ", content:"Time:7 AM to 5 PM, locations:https://www.google.com/maps/dir/24.7983206,67.0582987/cricket+academy+in+karachi/@24.790449,67.0563864,14z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x3eb33d07a469b34f:0xeb57bf8d689790f1!2m2!1d67.090413!2d24.7795009, slots:," },
{title:"Ifza tape ball cricket ground ", content:"Time: 10 AM to 10 PM, locations:https://www.google.com/maps/place/47%C2%B059'15.5%22N+85%C2%B004'57.3%22E/@47.987638,85.082588,15z/data=!4m5!3m4!1s0x0:0x4760a758309d0dc8!8m2!3d47.9876383!4d85.0825882?hl=en-GB, slots:," },
{title:"vital five", content:"Time: 10 AM to 5 PM, locations: google.com/maps/dir/24.7983206,67.0582987/vital+five+cricket+academy+fees/@24.8055691,67.0546051,15z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x3eb33cf56c8ca1e1:0x38fb18f2c163b6a8!2m2!1d67.06834!2d24.80988, slots:," },
{title:"sports timeout", content:"Time: 9 AM to 6 PM, locations: https:https://www.google.com/maps/dir/24.7988224,67.043328/sports+timeout/@24.8111269,67.038833,15z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x3eb33c4d66344c31:0x4b5e3610ff7f028b!2m2!1d67.0482575!2d24.8197617, slots:," },
{title:"National Cricket Academy", content:"Time: 8 AM to 6 PM, locations:https://www.google.com/maps/dir/24.7983206,67.0582987/national+cricket+academy/@24.8440283,67.0378849,13z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x3eb33ed06b050543:0xad368d40cc8228e0!2m2!1d67.0831471!2d24.8932739, slots:," },

]
export default class Acc extends React.Component{

render(){
  return(
    <Container>
    <Header>
     <Left>
      <Button transparent>
        <Icon name= 'menu'/>
          </Button>
            </Left>

    <Body>
    <Title style={{ textAlign:"center",}}>  </Title>
    </Body>
    <Right/>
    </Header>
    <Content>
      <Accordion dataArray={data} icon= "add" expendedIcon= "remove" 
      iconStyle ={{color:'blue'}} 
      expandedIconStyle={{color:'red'}}
      headerStyle={{backgroundColor: "pink"}}
      contentStyle={{color: "green"}}
       />
    </Content>
        <Footer>
        <FooterTab>
        <Button full>
        <Text>developed by ss </Text>
        </Button>
        </FooterTab>
        </Footer>

       </Container>
    

  )
  }
  }
    