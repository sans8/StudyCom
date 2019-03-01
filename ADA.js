import React,{Component} from 'react';
import {View, Image,AppRegistry, Text,StyleSheet, ScrollView} from 'react-native';
import Category from './Category';

const styles = StyleSheet.create({
  img:{
    width:"100%",
    height:250,
    justifyContent:'center',
    alignItems:'center',
    //opacity: 0.7,
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
  }
})

class ADA extends Component
{
  render()
  {
    return(
    <ScrollView>
      <View>
        <Text/>
        <Text/>
      </View>

      <View>
        <Text/>
        <Text/>
        <Text style={{fontSize:30,fontWeight:'700'}}>Analysis And Designing Of Algorithms</Text>
        <Text/>
      </View>
      
      <View>
          <Image source={{uri:'https://cdn.pixabay.com/photo/2015/12/04/14/05/code-1076536__340.jpg'}} style={styles.img}/>
      </View>

      <View style={{flex:1}}>
        <Text/>
        <Text/>
        <Text style={{fontSize:24,fontWeight:'700'}}>Books</Text>
        <View style={{height:130,marginTop:20}}>
          <ScrollView horizontal={true}>
            <Category imageUri={{uri:'https://cdn.pixabay.com/photo/2015/12/04/14/05/code-1076536__340.jpg'}} name="L1"/>
            <Category imageUri={{uri:'https://cdn.pixabay.com/photo/2015/12/04/14/05/code-1076536__340.jpg'}} name="L2"/>
            <Category imageUri={{uri:'https://cdn.pixabay.com/photo/2015/12/04/14/05/code-1076536__340.jpg'}} name="L3"/>
            <Category imageUri={{uri:'https://cdn.pixabay.com/photo/2015/12/04/14/05/code-1076536__340.jpg'}} name="L4"/>
            <Category imageUri={{uri:'https://cdn.pixabay.com/photo/2015/12/04/14/05/code-1076536__340.jpg'}} name="L5"/>
          </ScrollView>
        </View>
      </View>

      <View style={{flex:1}}>
        <Text/>
        <Text/>
        <Text style={{fontSize:24,fontWeight:'700'}}>Notes</Text>
        <View style={{height:130,marginTop:20}}>
          <ScrollView horizontal={true}>
            <Category imageUri={{uri:'https://cdn.pixabay.com/photo/2015/12/04/14/05/code-1076536__340.jpg'}} name="L1"/>
            <Category imageUri={{uri:'https://cdn.pixabay.com/photo/2015/12/04/14/05/code-1076536__340.jpg'}} name="L2"/>
            <Category imageUri={{uri:'https://cdn.pixabay.com/photo/2015/12/04/14/05/code-1076536__340.jpg'}} name="L3"/>
            <Category imageUri={{uri:'https://cdn.pixabay.com/photo/2015/12/04/14/05/code-1076536__340.jpg'}} name="L4"/>
            <Category imageUri={{uri:'https://cdn.pixabay.com/photo/2015/12/04/14/05/code-1076536__340.jpg'}} name="L5"/>
          </ScrollView>
        </View>
      </View>

      <View style={{flex:1}}>
        <Text/>
        <Text/>
        <Text style={{fontSize:24,fontWeight:'700'}}>Video Lectures</Text>
        <View style={{height:130,marginTop:20}}>
          <ScrollView horizontal={true}>
            <Category imageUri={{uri:'https://cdn.pixabay.com/photo/2015/12/04/14/05/code-1076536__340.jpg'}} name="L1"/>
            <Category imageUri={{uri:'https://cdn.pixabay.com/photo/2015/12/04/14/05/code-1076536__340.jpg'}} name="L2"/>
            <Category imageUri={{uri:'https://cdn.pixabay.com/photo/2015/12/04/14/05/code-1076536__340.jpg'}} name="L3"/>
            <Category imageUri={{uri:'https://cdn.pixabay.com/photo/2015/12/04/14/05/code-1076536__340.jpg'}} name="L4"/>
            <Category imageUri={{uri:'https://cdn.pixabay.com/photo/2015/12/04/14/05/code-1076536__340.jpg'}} name="L5"/>
          </ScrollView>
        </View>
      </View>

    </ScrollView>
    );
  }
}

export default ADA