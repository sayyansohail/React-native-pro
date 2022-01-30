import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import {Button, Header, Container, Body, Left, Right,Footer, FooterTab, Icon,Title, Content,Badge, Accordion, ExtendedIcon} from 'native-base';
const data= [
{title:"janoobixi", content:"players: " },
{title:"khargosh", content:"players: " },
{title:"badr11", content:"players: " },
{title:"hawks", content:"players: " },
{title:"etc", content:"players: " },

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
    