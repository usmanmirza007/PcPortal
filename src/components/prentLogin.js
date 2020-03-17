//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TextInput, Dimensions, TouchableOpacity, ImageBackground,AsyncStorage } from 'react-native';
import { Input, Icon } from 'react-native-elements'
import { FontAwesome } from '@expo/vector-icons';
import axios from 'axios';
import SpinnerScreen from './SpinnerScreen';
const { width: WIDTH } = Dimensions.get('window');

import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
import { width, height, totalSize } from 'react-native-dimension';

// create a component
export default class prentLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      radio_props: [
        { label: 'Parent', value: 0 },
        { label: 'Children', value: 1 }
      ],
      email: '',
      password: '',
      errorText: '',
      loading: false,
    }
  }
  onSignin(email, password) {

    this.setState({ errorText: '', loading: true });

    if (this.state.email === '' || this.state.password === '') {
      this.onLoginFail();
    }
    else {
      axios.post(`https://pcportal.malangis.com/public/api/parent_login`,
        {
          "email": email,
          "password": password
        }
      )
        .then((response) => {
          console.log(response.data.data.id);
          if (response.data.message === "Incorrect email or password") {
            this.setState({ loading: false })
            this.onLoginFail();
          }
          else {
            AsyncStorage.setItem("userId",JSON.stringify(response.data.data.id));
            this.onLoginSuccess();
          }
        })
    }
  }
  renderButton() {
    if (this.state.loading) {
      return <SpinnerScreen />
    }
    return (
      <TouchableOpacity style={{ width: '80%', height: '20%', }}
        onPress={() => this.onSignin(this.state.email, this.state.password)}>
        <Image source={require('./../images/LOGINlbutton.png')} style={{ width: '100%', height: '100%' }}
        />
      </TouchableOpacity>
    )
  };
  onLoginFail() {
    this.setState({ errorText: 'Authentication Failed.', loading: false })
  }
  onLoginSuccess() {
    this.setState({
      email: '',
      password: '',
      loading: false,
      errorText: '',


    })

    this.props.navigation.navigate('homeParent')
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <ImageBackground source={require('./../images/bg3.png')} style={{ width: '100%', height: '100%', }}>
          <View style={{ flex: 4, alignItems: 'center', marginTop: '5%', justifyContent: 'center' }}>
            <Image source={require('./../images/logo.png')} style={{ marginTop: '40%', marginBottom: -30, width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center' }} />
            <Text style={{ color: '#fff', fontSize: 20, fontWeight: 'bold', marginBottom: 60, }}>Parent Login</Text>
          </View>
          <View style={{ flex: 6, height: '100%', width: '100%', justifyContent: 'center', paddingHorizontal: '10%', alignItems: 'center' }}>
            {/*  <Input
              placeholder='User Name'
              placeholderTextColor='#fff'
              leftIcon={<Icon
                // reverse
                name='user'
                type='font-awesome'
                color='#fff'
              />}
              containerStyle={{ marginVertical: '5%' }}
            />

            <Input
              placeholder='Password'
              placeholderTextColor='#fff'
              // inputContainerStyle={{marginVertical:'3%',marginHorizontal:'5%'}}
              // inputStyle={{marginLeft:'5%'}}
              leftIcon={<Icon
                // reverse
                name='lock'
                type='font-awesome'
                color='#fff'
              />}
            />
*/}
            <View style={{ flexDirection: 'row', marginBottom: 10, marginTop: 20, borderBottomColor: '#fff', borderBottomWidth: 1 }}>
              <View style={{ marginTop: 13, }}>
                <FontAwesome
                  name='user'
                  type='font-awesome'
                  color='#fff'
                  size={22}
                  containerStyle={{}}
                />
              </View>
              <TextInput
                style={styles.input}
                placeholder={'User Name'}
                placeholderTextColor={'#fff'}
                onChangeText={(email) => this.setState({ email })}
                value={this.state.email}
              />
            </View>
            <View style={{ flexDirection: 'row', marginBottom: 10, borderBottomColor: '#fff', borderBottomWidth: 1, }}>
              <View style={{ marginTop: 13, marginLeft: 0 }}>
                <FontAwesome
                  name='lock'
                  type='font-awesome'
                  color='#fff'
                  size={22}
                  containerStyle={{}}
                />
              </View>
              <TextInput
                style={styles.input}
                placeholder={'Password'}
                secureTextEntry={true}
                placeholderTextColor={'#fff'}
                onChangeText={(password) => this.setState({ password })}
                value={this.state.password}
              />
            </View>
            <Text style={{ color: '#fff', alignSelf: 'flex-end', marginVertical: '5%', fontSize: 17 }}>Forget Password?</Text>
            {/* Button */}
            <Text style = {{color: 'red', alignItems: 'center', fontSize: 15}}>{this.state.errorText}</Text>
            {this.renderButton()}
           
            <TouchableOpacity onPress={() => { this.props.navigation.navigate('signUpParent') }} >
              <Text style={{ color: '#fff', fontSize: 17, marginTop: 20 }}>Create Account</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    );
  }
}


//make this component available to the app


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  input: {
    width: WIDTH - 100,
    height: 50,
    color: '#fff',
    padding: 15,

  },
});