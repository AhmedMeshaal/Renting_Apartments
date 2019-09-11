import React, { Component } from 'react';

import { Container, Content, List, ListItem, Thumbnail, Text, Button } from 'native-base';



export default class LaborsScreen extends React.Component {
    static navigationOptions = {
        title: 'Trading Category',
      };
  
    render() {
     
  
      return (
        <Container>
                <Content>
                    <List>
                        <ListItem onPress={() => this.props.navigation.navigate('Apartment')} style={{display: 'inline-block', flexDirection:'row', flexWrap:'wrap'}}>
                            <Thumbnail style={{height: 50}} source={{uri: 'https://di-uploads-pod4.dealerinspire.com/rivercityhyundai/uploads/2017/05/HyundaiLogoStacked_4cblk-1024x659.gif'}} />
                            
                            <Text style={{ marginLeft: 15, marginRight: 5}}>Street:</Text>
                            <Text note>Olia, Riyadh</Text> 

                              <Text style={{ marginLeft: 10, marginRight: 5}}>Category :</Text>
                            <Text note>Families</Text> 

                            <Text style={{ marginLeft: 70, marginRight: 5}}>Rooms :</Text>
                            <Text note>4</Text>  
                            <Text style={{ marginLeft: 25, marginRight: 5}}>Rent Amount:</Text>
                            <Text note>16.000 SR</Text>
                        </ListItem>
                        
                       
                    </List>
                </Content>
            </Container>
    
      );
    }
  }





