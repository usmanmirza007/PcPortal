import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {NavigationActions} from 'react-navigation';
import { Text,TouchableOpacity, View, Image} from 'react-native';
import { width, height, totalSize } from 'react-native-dimension';
import { TextInput, ScrollView } from 'react-native-gesture-handler';
import { Icon } from 'react-native-elements'
import { AntDesign, Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

export default class signUpChildren extends Component {

  constructor(props){
    super(props);
  }

  render () {
    return (
      <View style={{flex:1}}>
        <View style = {{flexDirection: 'row'}}>
          <View style={{height:height(30), justifyContent:'center', alignItems: 'center',}}>
              <Image source={require('./../images/logo.png')} style={{width:width(20), height:width(20), marginLeft: 20}}></Image>
          </View>
          <View style = {{justifyContent:'center', alignItems: 'center', marginLeft: 20}}>
            <Text style = {{fontSize: 13, alignSelf: 'flex-start', fontWeight: 'bold'}}>Chilren</Text>
          </View>
        </View>
          <ScrollView>
          <View style = {{ borderBottomWidth: 2, borderBottomColor: '#EAEAEAEA', marginLeft: 30 }}>
            <TouchableOpacity onPress={()=>{this.props.navigation.navigate('home')}} style={{marginLeft: 5, flexDirection:'row', marginVertical: height(2),}}>
            <AntDesign
              name='home'
              type='font-awesome'
              color='#651fff'
              size={24}
              containerStyle={{width:width(10)}}
            />
            <View style = {{marginLeft: 15, marginTop: 1, }}>
              <Text style={{ color:'black', fontSize: 13 }}>HOME</Text>
            </View>
            </TouchableOpacity>
          </View>
          <View style = {{ borderBottomWidth: 2, borderBottomColor: '#EAEAEAEA', marginLeft: 30 }}>
            <TouchableOpacity onPress={()=>{this.props.navigation.navigate('withdraAmount')}} style={{marginLeft: 5, flexDirection:'row', marginVertical: height(2),}}>
            <AntDesign
              name='home'
              type='font-awesome'
              color='#651fff'
              size={24}
              containerStyle={{width:width(10)}}
            />
            <View style = {{marginLeft: 15, marginTop: 1, }}>
              <Text style={{ color:'black', fontSize: 13 }}>Withdraw Amount</Text>
            </View>
            </TouchableOpacity>
          </View>
          <View style = {{ borderBottomWidth: 2, borderBottomColor: '#EAEAEAEA', marginLeft: 30 }}>
            <TouchableOpacity onPress={()=>{this.props.navigation.navigate('previousTasks')}} style={{marginLeft: 5, flexDirection:'row', marginVertical: height(2),}}>
            <FontAwesome
              name='list'
              type='font-awesome'
              color='#651fff'
              size={24}
              containerStyle={{width:width(10)}}
            />
            <View style = {{marginLeft: 15, marginTop: 1, }}>
              <Text style={{ color:'black', fontSize: 13 }}>Previous Tasks</Text>
            </View>
            </TouchableOpacity>
          </View>
          <View style = {{ borderBottomWidth: 2, borderBottomColor: '#EAEAEAEA', marginLeft: 30 }}>
            <TouchableOpacity onPress={()=>{this.props.navigation.navigate('splash')}} style={{marginLeft: 5, flexDirection:'row', marginVertical: height(2),}}>
            <Entypo
              name='log-out'
              type='font-awesome'
              color='#651fff'
              size={24}
              containerStyle={{width:width(10)}}
            />
            <View style = {{marginLeft: 15, marginTop: 1, }}>
              <Text style={{ color:'black', fontSize: 13 }}>Log Out</Text>
            </View>
            </TouchableOpacity>
          </View>
          
          </ScrollView>
      </View>
    );
  }
}


