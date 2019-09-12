

import React from 'react';
import { Container, View, Content, Item, Input, Label, Button, Text } from 'native-base';

import { AsyncStorage } from 'react-native';
import { updateApartments } from './apiConfig';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { deleteApartments } from './apiConfig';
import ItemInput from './ItemInput';


class EditScreen extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      apartment: {},
      token: '',
      email: '',
      id: ''
    }
  }


  componentDidMount() {
    const { navigation } = this.props;
    const apartment = navigation.getParam("appartmentData")
    console.log(apartment);
    this.getToken()
    this.setState({ apartment })
  }

  updateAprt = () => {
    const id = this.state.apartment._id
    updateApartments(this.state.token, id, this.state.apartment)
    console.log(this.state.apartment);

  }

  deleteAprt = () => {
    console.log("delete token", this.state.token);
    const id = this.state.apartment._id
    deleteApartments(this.state.token, id)

  }

  async getToken() {
    // console.log("this. is get token") 
    try {
      let token = await AsyncStorage.getItem("access_token");
      let email = await AsyncStorage.getItem("email");
      let id = await AsyncStorage.getItem("user_id");
      console.log(token)
      this.setState({ token, email, id });
    } catch (error) {
      alert(error);
    }
  }

  render() {

    console.log(this.state.apartment.price);



    return (
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
            <Label>Floor: </Label>
            <Input value={this.state.apartment.floor} onChangeText={floor => this.setState(prevS => ({
              apartment: { ...prevS.apartment, floor: floor }
            }))} />
          </Item>
          <Item rounded>
            <Label>Address: </Label>
            <Input value={this.state.apartment.address} onChangeText={address => this.setState(prevS => ({
              apartment: { ...prevS.apartment, address: address }
            }))} />
          </Item>
          <Item rounded>
            <Label>Price: </Label>
            <Input value={this.state.apartment.price} onChangeText={price => this.setState(prevS => ({
              apartment: { ...prevS.apartment, price: price }
            }))} />
          </Item>

          <Item rounded>
            <Label>Water Cycles: </Label>
            <Input value={this.state.apartment.waterCycles} onChangeText={waterCycles => this.setState(prevS => ({
              apartment: { ...prevS.apartment, waterCycles: waterCycles }
            }))} />
          </Item>

          <Item rounded>
            <Label>Bedrooms: </Label>
            <Input value={this.state.apartment.bedrooms} onChangeText={bedrooms => this.setState(prevS => ({
              apartment: { ...prevS.apartment, bedrooms: bedrooms }
            }))} />
          </Item>

          <Item rounded>
            <Label>Livingroom: </Label>
            <Input value={this.state.apartment.livingRoom} onChangeText={livingRoom => this.setState(prevS => ({
              apartment: { ...prevS.apartment, livingRoom: livingRoom }
            }))} />
          </Item>

          <Item rounded>
            <Label>Kitchen: </Label>
            <Input value={this.state.apartment.kitchen} onChangeText={kitchen => this.setState(prevS => ({
              apartment: { ...prevS.apartment, kitchen: kitchen }
            }))} />
          </Item>

          <Item rounded>
            <Label>Category: </Label>
            <Input value={this.state.apartment.category} onChangeText={category => this.setState(prevS => ({
              apartment: { ...prevS.apartment, category: category }
            }))} />
          </Item>


          <Item rounded>
            <Label>Vacancy: </Label>
            <Input value={this.state.apartment.vacancy} onChangeText={vacancy => this.setState(prevS => ({
              apartment: { ...prevS.apartment, vacancy: vacancy }
            }))} />
          </Item>

          <Item rounded>
            <Label>Image URL: </Label>
            <Input value={this.state.apartment.image} onChangeText={image => this.setState(prevS => ({
              apartment: { ...prevS.apartment, image: image }
            }))} />
          </Item>

          <Item rounded>
            <Label>Cafeteria: </Label>
            <Input value={this.state.apartment.cafeteria} onChangeText={cafeteria => this.setState(prevS => ({
              apartment: { ...prevS.apartment, cafeteria: cafeteria }
            }))} />
          </Item>

        </Content>

        <Button onPress={this.updateAprt}><Text>Update</Text></Button>
        <Button onPress={this.deleteAprt}><Text>Delete</Text></Button>

      </Container>
    );
  }
}





const TabNavigator = createBottomTabNavigator({
  Edit: { screen: EditScreen }
});

export default createAppContainer(TabNavigator);