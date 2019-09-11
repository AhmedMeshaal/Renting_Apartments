import React, { Component } from "react";
import { View, Text } from "native-base";
export default class ApartmentInfo extends Component {
  render() {
    // let arr = [
    //     Vacancy, Description, Address, City, Floor, Price, Water Cycles, 'Bedrooms',
    //         , 'Category', 'Cafeteria']
    // let info =
    return (
      <View>
        <Text>Vacancy: {this.props.vacancy}</Text>
        <Text>Address: {this.props.address}</Text>
        <Text>Floor: {this.props.floor}</Text>
        <Text>Price: {this.props.price}</Text>
        <Text>Water Cycles: {this.props.waterCycles}</Text>
        <Text>Bedrooms: {this.props.bedrooms}</Text>
        <Text>Living Rooms: {this.props.livingRoom}</Text>
        <Text>Kitchen: {this.props.kitchen}</Text>
        <Text>Category: {this.props.category}</Text>
        <Text>Cafeteria: {this.props.cafeteria}</Text>
      </View>
    );
  }
}