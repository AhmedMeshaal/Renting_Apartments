import React, { Component } from 'react';
import { Container, Content, List, ListItem, InputGroup, Input, Icon, Button,Text, View, Body} from 'native-base';
import { createAppContainer } from 'react-navigation'; // 1.0.0-beta.27
import { createStackNavigator } from 'react-navigation-stack';

import { loginUser } from "./apiConfig";


const ACCESS_TOKEN = "access_token";
const USERNAME = "username";
const ID = "user_id";

export default class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      password: "",
      token: "",
      err: ""
    };
  }

  onEmailChange = e =>{
    console.log(e.nativeEvent.text);
    this.setState({userName: e.nativeEvent.text})
  }
  onPasswordChange = e =>{
    console.log(e.nativeEvent.text);
    this.setState({password: e.nativeEvent.text})
  }


  checkLogIn = () => {
    Keyboard.dismiss();
    const { userName, password } = this.state;
    if (userName && password) {
      //make log in
      this.loginUser(userName, password);
    } else {
      alert("Fill the Input");
    }
  };

  loginUser = () => {
    const screenProps = this.props.screenProps;
    const { navigation } = this.props;
    const { userName, password } = this.state;
    loginUser(userName, password)
      .then(res => {
        const userData = res.data.user;
        console.log(res);

        screenProps.setUser(
          userData.token,
          userData.username,
          userData._id
        );
        this.saveToken(
          userData.token,
          userData.username,
          userData._id
        );
        
        navigation.navigate("Admin");
      })
      .catch(err => {
        console.log(err);
        alert(err);
      });
  };

  async saveToken(token, user, id) {
    try {
      await AsyncStorage.setItem(ACCESS_TOKEN, token);
      await AsyncStorage.setItem(USERNAME, user);
      await AsyncStorage.setItem(ID, id);
    } catch (error) {
      console.log("somthing wrong" + error);
    }
  }

  
  static navigationOptions = {
    headerTitle: 'Admin Login',
    
      };
    

  
    render() {
     
  
      return (
        <Container>
                <Content>
                    <List>
                        <ListItem>
                            <InputGroup style={{marginTop: 80}}>
                                <Icon name="ios-person" />
                                <Input placeholder="EMAIL" value={this.state.userName} onChange={this.onEmailChange}/>
                            </InputGroup>
                        </ListItem>

                        <ListItem>
                            <InputGroup>
                                <Icon name="ios-unlock" />
                                <Input placeholder="PASSWORD" secureTextEntry={true} value={this.state.password} onChange={this.onPasswordChange}/>
                            </InputGroup>
                            
                        </ListItem>
                        <Button 
                         onPress={() => this.loginUser}
                        primary rounded block iconRight style={{margin: 20}}><Text>LOG IN</Text><Icon name="ios-arrow-forward" /></Button>
                    </List>
                </Content>
            </Container>
      );
    }
  }

  class DetailsScreen extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Details Screen</Text>
        </View>
      );
    }
  }


