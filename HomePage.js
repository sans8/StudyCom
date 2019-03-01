import React,{Component} from 'react';
import {View, Image,AppRegistry, Text,StyleSheet, ScrollView} from 'react-native';

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
  },
  text:{
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Cochin',
  },
  title:{
    /*fontSize: 30,
    fontWeight:'bold',
    alignText:'center',*/
    fontWeight: 'bold',
    fontSize: 25,
    fontFamily: 'Cochin',
    marginTop: 30,
    justifyContent: 'center',
    //alignItems: 'center',
    alignSelf: 'center',
  },
});

class HomePage extends Component
{
  render()
  {
    return(
      <ScrollView>
      <View>
         <View>
            <Text style={styles.title}>Study Com</Text>
            <Text/>
            <Text/>
         </View>

         <View>
          <Image source={{uri:'https://as2.ftcdn.net/jpg/01/38/75/13/500_F_138751388_YuhlMCdcLt6W6lFMiBy7Sfslwo43Ze9x.jpg'}} style={styles.img}/>
        </View>
        <View>
        <Text style={styles.text}>Analysis And Designing
        Algorithms</Text> 
        <Text/>
        <Text/>
        </View>

        <View>
          <Image source={{uri:'https://cdn.pixabay.com/photo/2015/12/04/14/05/code-1076536__340.jpg'}} style={styles.img}/>
        </View>
        <View>
        <Text style={styles.text}>Internet And Web Technology</Text>
        <Text/>
        <Text/> 
        </View>

        <View>
          <Image source={{uri:'https://cdn.pixabay.com/photo/2019/01/31/20/52/web-3967926__340.jpg'}} style={styles.img}/>
        </View>
        <View>
        <Text style={styles.text}>System Programming</Text> 
        <Text/>
        <Text/>
        </View>

        <View>
          <Image source={{uri:'https://image.shutterstock.com/image-photo/hand-touching-tablet-cloud-computing-260nw-1084265843.jpg'}} style={styles.img}/>
        </View>
        <View>
        <Text style={styles.text}>Operating System</Text>
        <Text/>
        <Text/> 
        </View>

        <View>
          <Image source={{uri:'https://cdn.pixabay.com/photo/2017/02/19/23/09/success-2081167__340.jpg'}} style={styles.img}/>
        </View>
        <View>
        <Text style={styles.text}>Industrial Engineering and Management</Text> 
        <Text/>
        <Text/>
        </View>


      </View>
    </ScrollView>
    );
  }
}
export default HomePage