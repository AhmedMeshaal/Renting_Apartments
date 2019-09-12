import React, { Component } from 'react';
import {
    Container,
    Text,
    Content,
    Form,
    Item,
    Label,
    Input,
    Left,
    Thumbnail,
    Body,
    Icon,
    Button
} from 'native-base';
import apiUrl from './apiConfig';
import axios from 'axios';
import { AsyncStorage} from 'react-native';

export default class ApartmentView extends React.Component {
    state = {
        id: []
    }
  
    componentDidMount(){
        
        this.getToken()

      } 
      
    changeHandler = (e,name) => {
        console.log(e.nativeEvent.text)
        console.log(name)
        //Log every key value and save to state from form
        let data = { ...this.state }
        data[name] = e.nativeEvent.text
        this.setState(data)
    }

    apartment = (e) => {
        console.log(this.state);
        const config = {
            headers: { Authorization: `bearer ${this.state.token}`}
          };
        axios.post(`${apiUrl}/apartments`, {apartment:{ floor: this.state.floor, address: this.state.address, 
            price: this.state.price, waterCycles: this.state.waterCycles, bedrooms: this.state.bedrooms,
            livingRoom: this.state.livingRooms, kitchen: this.state.kitchen, category: this.state.category,
            cafeteria: this.state.cafeteria, vacancy: this.state.vacancy, image: this.state.image
        }},config)
        .then(console.log('Success!!'))
        .catch(console.log('Error!!'))
    }

    static navigationOptions = {
        title: 'ApartmentView',
    };

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

    render() {

        return (
            <Container>

                <Content>
                    <Form>
                        <Item fixedLabel>
                            <Label>floor</Label>
                            <Input onChange={(e) => this.changeHandler(e,'floor')} name='floor' />
                        </Item>
                        <Item fixedLabel last>
                            <Label>address</Label>
                            <Input onChange={(e) => this.changeHandler(e,'address')} name='address' />
                        </Item>
                        <Item fixedLabel last>
                            <Label>price</Label>
                            <Input onChange={(e) => this.changeHandler(e,'price')} name='price' />
                        </Item>
                        <Item fixedLabel last>
                            <Label>wc</Label>
                            <Input onChange={(e) => this.changeHandler(e,'waterCycles')} name='waterCycles' />
                        </Item>
                        <Item fixedLabel last>
                            <Label>bedrooms</Label>
                            <Input onChange={(e) => this.changeHandler(e,'bedrooms')} name='bedrooms' />
                        </Item>
                        <Item fixedLabel last>
                            <Label>living room</Label>
                            <Input onChange={(e) => this.changeHandler(e,'livingRooms')} name='livingRooms' />
                        </Item>
                        <Item fixedLabel last>
                            <Label>kitchen</Label>
                            <Input onChange={(e) => this.changeHandler(e,'kitchen')} name='kitchen' />
                        </Item>
                        <Item fixedLabel last>
                            <Label>category</Label>
                            <Input onChange={(e) => this.changeHandler(e,'category')} name='category' />
                        </Item>
                        <Item fixedLabel last>
                            <Label>vacancy</Label>
                            <Input onChange={(e) => this.changeHandler(e,'vacancy')} name='vacancy' />
                        </Item>
                        <Item fixedLabel last>
                            <Label>image</Label>
                            <Input onChange={(e) => this.changeHandler(e,'image')} name='image' />
                        </Item>
                        <Item fixedLabel last>
                            <Label>Cafeteria</Label>
                            <Input onChange={(e) => this.changeHandler(e,'cafeteria')} name='cafeteria' />
                        </Item>


                    </Form>
                    <Button onPress={(e)=>this.apartment(e)}><Text>Add</Text></Button>
                </Content>
            </Container>
        );
    }
}

