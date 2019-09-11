import React from 'react';
import { Button, View, Text, Image } from 'react-native';
import { createAppContainer } from 'react-navigation'; // 1.0.0-beta.27
import { createStackNavigator } from 'react-navigation-stack';

import LoginScreen from './components/LoginScreen';
import SinglesScreen from './components/SingleScreen';
import FamiliesScreen from './components/FamiliesScreen';
import LaborsScreen from './components/LaborScreen';
import TradingScreen from './components/TradingScreen';
import AddApartment from './components/AddApartment';
import ViewApartment from './components/ViewApartment';  
import AdminControl from './components/AdminControl';  


class HomeScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};

    return {
      
      headerLeft: (
        <Button
          onPress={() => navigation.navigate('Login')}
          title="Login"
          color="#fff"
        />
      )
    };
  };


  render() {
    return (
      <View style={{ flex: 0, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{
          fontWeight: 'bold', 
          marginTop: 15, 
          textAlign: 'center', 
          fontSize: 30,
          marginBottom: 15
          }}>
            Welcome, We're best way to find your dream apartment</Text>
        
           
            <View style={{flexDirection:'row', flexWrap:'wrap', marginTop: 20}}>

            <Button style={{
          alignItems: 'center',
          backgroundColor: '#DDDDDD',
          
        }}
          title="Singles Apartment"
          onPress={() => {
            /* 1. Navigate to the Details route with params */
            this.props.navigation.navigate('Singles');
          }}
        />

           <Button style={{
          alignItems: 'center',
          backgroundColor: 'black'
        }}
          title="Family Apartment"
          onPress={() => {
            /* 1. Navigate to the Details route with params */
            this.props.navigation.navigate('Families');
          }}
        />

            </View>

            <View style={{flexDirection:'row', flexWrap:'wrap', marginTop: 20}}>

            <Button style={{
          alignItems: 'center',
          backgroundColor: '#DDDDDD'
        }}
          title="Labors Apartment"
          onPress={() => {
            /* 1. Navigate to the Details route with params */
            this.props.navigation.navigate('Labors');
          }}
        />

          <Button style={{
          alignItems: 'center',
          backgroundColor: 'black'
        }}
          title="Trading Apartment"
          onPress={() => {
            /* 1. Navigate to the Details route with params */
            this.props.navigation.navigate('Trading');
          }}
        />
            </View>
      </View>
    );
  }
}



const MainStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Singles: {
      screen: SinglesScreen,
    },
    Families: {
      screen: FamiliesScreen,
    },
    Labors: {
      screen: LaborsScreen,
    },
    Trading: {
      screen: TradingScreen,
    },
    Login: {
      screen: LoginScreen,
      // navigationOptions:{
      //   title: 'gg'
      // }
    },
    ApartmentControl: {
      screen: AddApartment,
      navigationOptions:{
        title: 'Apartment Control'
      }
    },
    Apartment: {
      screen: ViewApartment
    },
    Admin: {
      screen: AdminControl
    }
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#d1ba7b',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
);



const AppContainer = createAppContainer(MainStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}



