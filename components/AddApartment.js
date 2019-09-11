

import React from 'react';
import { Container, View , Content, Form, Item, Input, Label, Button, Text } from 'native-base';

// import { Input} from 'react-native';
import { updateApartments } from './apiConfig'
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import ItemInput from './ItemInput';


class EditScreen extends React.Component {

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

updateAprt = () => {
  const id = this.state.apartment._id
  updateApartments(this.state.token , id, this.state.apartment)
  console.log(this.state.apartment);
  
}

async getToken() {
  // console.log("this. is get token") 
  try {
    let token = await AsyncStorage.getItem("access_token");
    let email = await AsyncStorage.getItem("email");
    let id = await AsyncStorage.getItem("user_id");
    console.log(token)
    this.setState({ token, email, id  }); 
  } catch (error) {
    alert(error);
  }
}

  render(){
   
    console.log(this.state.apartment.price);
    


    return(
      // <Container>
      //   <Content>
      //     <Form>
            
          

      //   <Button warning rounded block style={{margin: 20}}>
      //     {this.state.apartment ? <Text onPress={this.addApartment} >
      //     {this.state.apartment.price}
      //     </Text>
          
      //     : null}
              
      //   </Button>
      //   <View>
          
      //   </View>
      //     </Form>
      //   </Content>
      // </Container>

      <Container>
      <Content>
        <Item rounded>
          <Label>Price: </Label>        
          <Input value={this.state.apartment.price} onChangeText={price => this.setState(prevS => ({
            apartment: {...prevS.apartment, price: price}
          }))}/>
          </Item>
          <Item>        
          <Label>Price: </Label>        
          <Input placeholder={this.state.apartment.image} onChangeText={this.updateApartment}/>
          </Item>
          <Item>
          <Label>Price: </Label>        
          <Input placeholder={this.state.apartment.address} onChangeText={this.updateApartment}/>
        </Item>
      </Content>

      <Button onPress={this.updateAprt}><Text>Update</Text></Button>
    </Container>
    );
  }
}



class DeleteScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
      </View>
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  Edit: { screen: EditScreen },
  Delete: { screen: DeleteScreen }
});

export default createAppContainer(TabNavigator);