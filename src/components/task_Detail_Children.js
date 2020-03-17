import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TextInput, Dimensions, TouchableOpacity, ImageBackground } from 'react-native';
import { Input, Icon } from 'react-native-elements'
import { FontAwesome } from '@expo/vector-icons';
import { DrawerActions } from 'react-navigation-drawer';
import pic from './../images/DetailBox.png';
const { width: WIDTH } = Dimensions.get('window');
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
import { width, height, totalSize } from 'react-native-dimension';

// create a component
export default class task_Detail_Children extends Component {
    constructor(props) {
        super(props);
        this.state = {
            radio_props: [
                { label: 'Parent', value: 0 },
                { label: 'Children', value: 1 }
            ]
        }
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ backgroundColor: '#000', height: '4%' }}></View>
                <ImageBackground source={require('./../images/bg7.png')} style={{ width: '100%', height: '100%', }}>
                    <View style={{ height: '10%', backgroundColor: '#8852ff', }}>
                        <View style={{ marginTop: 15, flexDirection: 'row' }}>
                            <View style={{ marginLeft: 20 }}>
                                <Icon name='menu' color='#fff' size={35}
                                    onPress={
                                        () => this.props.navigation.dispatch(DrawerActions.openDrawer())
                                    } />
                            </View>
                            <View style={{ marginTop: 5, }}>
                                <Text style={{ fontSize: 20, marginLeft: 60, fontWeight: 'bold', color: '#fff' }}>Task Details</Text>
                            </View>
                        </View>
                    </View>
                    <ImageBackground source={require('./../images/DetailBox.png')} style={{marginLeft: 25, marginTop: 25, width: 200, height: 100 }}>
                        <TextInput
                            style={styles.input}
                            placeholder={'Type'}
                            secureTextEntry={true}
                            placeholderTextColor={'#fff'}

                        />
                    </ImageBackground>
                    <ImageBackground source={require('./../images/DetailBox.png')} style={{marginLeft: 25, marginTop: 10, width: 250, height: 100 }}>
                        <TextInput
                            style={styles.input}
                            placeholder={'Price'}
                            secureTextEntry={true}
                            placeholderTextColor={'#fff'}

                        />
                    </ImageBackground>
                </ImageBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    input: {
        height: 50,
        marginLeft: 25,
        marginTop: 20

    },
    inputbox: {
        height: 100,
        padding: 10,
        marginBottom: 10,

    },
    inputPrice: {
        height: 100,
        padding: 10,
        marginBottom: 10,

    },
});