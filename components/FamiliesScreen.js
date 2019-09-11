import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  Image,
  Alert
} from 'react-native';


export default class FamiliesScreen extends React.Component {
  static navigationOptions = {
    title: 'Families Category',
  };
  
    render() {
     
  
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Families Screen</Text>

          
        </View>
      );
    }
  }