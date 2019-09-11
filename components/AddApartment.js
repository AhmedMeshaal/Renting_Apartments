

import React from 'react';
import { Container, View , Header, Content, Form, Item, Input, Label, Button, Text } from 'native-base';

// import { Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import ItemInput from './ItemInput';


class AddScreen extends React.Component {
  

  render(){
    addApartment = ((e) => {
      console.log('Clicked');
    })
    arr = ['a','b','c','d','e','f','g'];
    let items = arr.map((elem, i)=>{
      return <ItemInput elem={elem} key={i} />
    })
    return(
      <Container>
        <Content>
          <Form>
            
            {items}
           
        <Button warning rounded block style={{margin: 20}}>
              <Text onPress={this.addApartment} >Submit</Text>
        </Button>
        <View>
          {/* console.log(this.state.apartment) */}
        </View>
          </Form>
        </Content>
      </Container>
    );
  }
}

class UpdateScreen extends React.Component {
    
  render(){
    
    arr = ['a','b','c','d','e','f','g'];
    let items = arr.map((elem, i)=>{
      return <ItemInput elem={elem} key={i} />
    })
    return(
      <Container>
        <Content>
          <Form>
            {/* to call from DB */}
            {items}
        <Button success rounded block style={{margin: 20}}>
              <Text onPress={this.addApartment}>Edit</Text>
        </Button>
        <View>
          {/* console.log(this.state.apartment) */}
        </View>
          </Form>
        </Content>
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
  Add: { screen: AddScreen },
  Edit: { screen: UpdateScreen },
  Delete: { screen: DeleteScreen }
});

export default createAppContainer(TabNavigator);