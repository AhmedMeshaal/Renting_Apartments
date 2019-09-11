import React, { Component } from "react";
import { Image, Modal, Alert, TouchableHighlight, TouchableOpacity } from "react-native";
import {
  Container,
  Header,
  View,
  DeckSwiper,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Left,
  Body,
  Button
} from "native-base";
import ApartmentInfo from "./ApartmentInfo";
const cards = [
  {
    text: "Card One",
    name: "One",
    image:
      "https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Flasolasapartmentsftlauderdale.com%2Fwp-content%2Fuploads%2Fphoto-gallery%2FTwo%2520Bedroom%2520Apartments%2520Downtown%2520Fort%2520Lauderdale%2F2%2520Bedroom%2520Apartment%2520Downtown%2520Fort%2520Lauderdale.jpg&f=1&nofb=1"
  },
  {
    text: "Card Two",
    name: "Two",
    image:
      "https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fcdn.home-designing.com%2Fwp-content%2Fuploads%2F2012%2F05%2FBlack-white-cream-lounge-diner-design.jpg&f=1&nofb=1"
  }
];
export default class ViewApartment extends Component {
  state = {
    modalVisible: false
  };
  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }
  render() {
arr = [ 
'https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fs.iha.com%2F6141200003176%2FShort-term-rentals-Nice-Apartment-Flat_3.jpeg&f=1&nofb=1'
    ,'https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fs.iha.com%2F6141200003176%2FShort-term-rentals-Nice-Apartment-Flat_3.jpeg&f=1&nofb=1','c','d','e','f','g'];
    let images = arr.map((elem, index)=>{
    //   return <Text key={index}> {elem} </Text>
      return <Image source={{uri:elem}} 
      style={{width: 110, marginLeft:5, marginTop:10, height: 100 }}
      key={index} />
    })
    return (
      <>
        
        <Container>
          <View>
            <ApartmentInfo
              floor={3}
              address={"Alaulaya"}
              price={"20,0000"}
              waterCycles={2}
              bedrooms={3}
              livingRoom={1}
              kitchen={"True"}
              category={"Single"}
              cafeteria={"True"}
              vacancy={"True"}
            />
          </View>
          {/* <Button onPress={this.props.navigation.navigate('EditApartment')}><Text>Request</Text></Button> */}

          <View>{images}</View>
        </Container>
        {/* <TouchableOpacity style={{ height: 100, marginTop: 10 }}>
          <Text>My button</Text>
        </TouchableOpacity> */}
        
        {/* <Image 
         source={{uri:'https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fs.iha.com%2F6141200003176%2FShort-term-rentals-Nice-Apartment-Flat_3.jpeg&f=1&nofb=1'}} /> */}
        {/* Modal for Request */}
        <View style={{ marginTop: 22 }}>
          <Modal
            animationType="slide"
            transparent={false}
            visible={this.state.modalVisible}
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
            }}
          >
            <View style={{ marginTop: 22 }}>
              <View>
                <Header />
                <Text>Hello World!</Text>
                <TouchableHighlight
                  onPress={() => {
                    this.setModalVisible(!this.state.modalVisible);
                  }}
                >
                  <Text>Hide Modal</Text>
                </TouchableHighlight>
              </View>
            </View>
          </Modal>
        </View>
      </>
    );
  }
}