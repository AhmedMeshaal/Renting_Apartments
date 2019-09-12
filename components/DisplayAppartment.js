import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';



export default class DisplayApartment extends React.Component {
    constructor(props) {
        super(props)
      
        this.state = {
           apartment : {},
           token: '',
           email: '',
           id: ''
        }
      }
      
      
    componentDidMount(){
      const { navigation } = this.props;
      const apartment = navigation.getParam("appartmentData")
      console.log(apartment);
      
      this.setState({apartment})
    } 

  static navigationOptions = {
    title: 'Displaying Apartment',
  };
  
    render() {
        console.log(this.state.apartment.price);

  
      return (
        <Container>
        <Content>
          <Card style={{flex: 0}}>
            <CardItem>
              <Left>
              <Thumbnail style={{height: 50}} source={{uri: this.state.apartment.image}} />
                <Body>
                  <Text>{this.state.apartment.address} - For {this.state.apartment.category}</Text>
                  <Text note>{this.state.apartment.updatedAt}</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Image source={{uri:this.state.apartment.image}} style={{height: 200, width: 350, flex: 1}}/>
                <Text>
                * Location : {this.state.apartment.address}
                </Text>
                <Text>
                * Badrooms : {this.state.apartment.bedrooms}
                </Text> 
                <Text>
                * At Floor Number : {this.state.apartment.floor} 
                </Text>
                <Text>
                * Water Cycle/s Number : {this.state.apartment.waterCycles} 
                </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent textStyle={{color: '#87838B'}}>
                  <Icon name="logo-github" />
                  <Text>1,926 stars</Text>
                </Button>
              </Left>
            </CardItem>
          </Card>
        </Content>
      </Container>
      );
    }
  }