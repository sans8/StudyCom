import {View, Text, StyleSheet, Image} from 'react-native';
import React, {Component} from 'react';
class Category extends Component{
  render(){
    return(
      <View style={{height:130, width:130, marginLeft:10, borderWidth:0.5, borderColor:'black'}}>
        <View style={{flex:2}}>
          <Image source={this.props.imageUri} 
            style={{flex:1, height:null, width:null, resizeMode:'cover'}}
          />
        </View>
        <View style={{flex:1, paddingTop:20}}>
          <Text>{this.props.name}</Text>
        </View>
      </View>
    );
  }
}
export default Category;