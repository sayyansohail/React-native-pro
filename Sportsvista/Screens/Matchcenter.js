import * as React from 'react';
import { Container, Header,Text,Button } from 'native-base';
import {Col, Row, Grid}  from 'react-native-easy-grid';

export default class mylayout extends React.Component{
  render(){
return(
          <Container >
          <Header/>
          <Grid>
            <Col style= {{ backgroundColor:'darkorange', height: 200}}>
                       
                        <Row style= {{ backgroundColor:'red', height: 300, borderWidth:2}}>
                        <Button disabled= {false}  >
                        <Text> match details</Text>
                        </Button>
                        </Row>
                        <Row style= {{ backgroundColor:'orange', height: 300, borderWidth:2}}>
                                               <Button disabled= {false}  >
                        <Text> booked matches</Text>
                        </Button>

                        </Row>

            </Col>
                      
                      
            <Col style= {{ backgroundColor:'darkblue', height: 100}}>
                         <Row style= {{ backgroundColor:'pink', height: 300, borderWidth:2}}>
                                                <Button disabled= {false}  >
                        <Text> Venues </Text>
                        </Button>

                        </Row>
                        <Row style= {{ backgroundColor:'darkblue', height: 300 , borderWidth:2}}>
                         <Button disabled= {false} >
                        <Text> star players</Text>
                        </Button>
                       
                                                

                        </Row>

            </Col>


          </Grid>
          </Container>

)

  }
}


