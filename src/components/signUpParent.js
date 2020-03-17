//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Alert, TextInput, Dimensions, TouchableOpacity, ImageBackground } from 'react-native';
import { Input, Icon } from 'react-native-elements'
import { FontAwesome, Ionicons } from '@expo/vector-icons';
const { width: WIDTH } = Dimensions.get('window');
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
import { width, height, totalSize } from 'react-native-dimension';
import axios from 'axios';
import SpinnerScreen from './SpinnerScreen';
// create a component
export default class signUpParent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      radio_props: [
        { label: 'Parent', value: 0 },
        { label: 'Children', value: 1 }
      ],
      email: '',
      password: '',
      username: '',
      errorText: '',
      loading: false
    }
  }

  onSigUp(email, password, username) {
    //this.setState({ errorText: '', loading: true })
    if (this.state.email === '' || this.state.password === '' || this.state.username === '') {
      return Alert.alert('Plase enter feild')
    }
    else if (this.state.password.length <= 6) {
      return Alert.alert('Please enter atlest 6 character password')
    }
    else {
      this.setState({loading: true})
      axios.post(`https://pcportal.malangis.com/public/api/parent_register`,
        {
          'email': email,
          'password': password,
          'username': username,
        }
      )
      .then((response) =>{
        console.log(response)
        if(response.data.message === "Email already taken"){

          this.setState({loading: false})
          Alert.alert('User already Exist')
          this.onSigupFail()
        }
        else{
          this.onSignUpSuccess();
        }
      })
    }
  }

  renderButton() {
    if (this.state.loading) {
      return <SpinnerScreen />
    }
    return (
      <TouchableOpacity style={{ width: '80%', height: '20%', marginTop: 20 }}
        onPress={() => this.onSigUp(this.state.email, this.state.password, this.state.username)}>
        <Image source={require('./../images/LOGINlbutton.png')} style={{ width: '100%', height: '100%' }}
        />
      </TouchableOpacity>
    )
  }
  onSigupFail() {
    this.setState({ errorText: 'Authentication Failed.', loading: false })
  }
  onSignUpSuccess() {
    this.setState({
      loading: false,
      email: '',
      password: '',
      username: '',
      errorText: '',
    })
    this.props.navigation.navigate('homeParent')
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <ImageBackground source={require('./../images/bg3.png')} style={{ width: '100%', height: '100%', }}>
          <View style={{ flex: 4, alignItems: 'center', marginTop: '5%', justifyContent: 'center' }}>
            <Image source={require('./../images/logo.png')} style={{ marginTop: '40%', marginBottom: '-10%', width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center' }} />
            <Text style={{ color: '#fff', fontSize: 20, fontWeight: 'bold', marginBottom: 60, }}>Parent SignUp</Text>
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
            <View style={{ flexDirection: 'row', marginBottom: 0, marginTop: 20, borderBottomColor: '#fff', borderBottomWidth: 1 }}>
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
                onChangeText={(username) => this.setState({ username })}
                value={this.state.username}

              />
            </View>
            <View style={{ flexDirection: 'row', marginBottom: 0, marginTop: 0, borderBottomColor: '#fff', borderBottomWidth: 1 }}>
              <View style={{ marginTop: 13, }}>
                <Ionicons
                  name='md-mail'
                  type='font-awesome'
                  color='#fff'
                  size={22}
                  containerStyle={{}}
                />
              </View>
              <TextInput
                style={styles.input}
                placeholder={'Email'}
                placeholderTextColor={'#fff'}
                onChangeText={(email) => this.setState({ email })}
                value={this.state.email}

              />
            </View>
            <View style={{ flexDirection: 'row', marginBottom: 0, borderBottomColor: '#fff', borderBottomWidth: 1, }}>
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
            <Text style={{ color: 'red', alignItems: 'center', fontSize: 15 }}>{this.state.errorText}</Text>
            {this.renderButton()}
            <Text style={{ color: '#fff', fontSize: 17, marginTop: 10 }}>Already have account? <Text style={{ fontSize: 18, fontWeight: 'bold', }} onPress={() => { this.props.navigation.navigate('prentLogin') }}>Login</Text></Text>

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
    color: '#fff',
    height: 50,
    padding: 15,

  },
});