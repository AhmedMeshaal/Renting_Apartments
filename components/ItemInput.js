import React, {Component} from "react";
import { Item, Input, Label } from 'native-base';
class ItemInput extends Component{
  render(){  
    return(
        <Item floatingLabel>
            <Label>{this.props.elem}</Label>
            <Input />
        </Item>
    );
  }
}
export default ItemInput;