import React, { Component } from 'react';

import { Container, Content, List, ListItem, Thumbnail, Text, Button } from 'native-base';

import { getApartments } from './apiConfig';
export default class TradingScreen extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
       apartments: []
    }
  }
  
    static navigationOptions = {
        title: 'Admin CRUD'
      };

      componentDidMount() {
        getApartments().then(res => {
          this.setState({
            apartments: res.data.apartments
          })
            console.log(res.data.apartments);
            
        }).catch(err=>{
            console.log(err);
            
        })
      }
  
    render() {
     const listApartment = this.state.apartments.map(appart => {
       return <ListItem key={appart._id} onPress={() => this.props.navigation.navigate('ApartmentControl', {
         appartmentData: appart
       })} style={{display: 'inline-block', flexDirection:'row', flexWrap:'wrap'}}>
       <Thumbnail style={{height: 50}} source={{uri: 'https://di-uploads-pod4.dealerinspire.com/rivercityhyundai/uploads/2017/05/HyundaiLogoStacked_4cblk-1024x659.gif'}} />
       
       <Text style={{ marginLeft: 15, marginRight: 5}}>Street:</Text>
       <Text note>{appart.address}</Text> 

         <Text style={{ marginLeft: 10, marginRight: 5}}>Category :</Text>
       <Text note>{appart.category}</Text> 

       <Text style={{ marginLeft: 70, marginRight: 5}}>Rooms :</Text>
       <Text note>{appart.bedrooms}</Text>  
       <Text style={{ marginLeft: 25, marginRight: 5}}>Rent Amount:</Text>
       <Text note>{appart.price}</Text>
   </ListItem>
     })
  
      return (
        <Container>
                <Content>
                    <List>
                        
                        {this.state.apartments ? listApartment: null}
                       
                    </List>

                    {/* <Button onPress={() => this.props.navigation.navigate('Singles')}><Text>+++</Text></Button> */}
                </Content>
            </Container>
    
      );
    }
  }


