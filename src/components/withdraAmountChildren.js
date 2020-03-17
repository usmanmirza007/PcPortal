import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Alert, AsyncStorage, TextInput, Dimensions, TouchableOpacity, ImageBackground } from 'react-native';
import { Input, Icon } from 'react-native-elements'
import { FontAwesome } from '@expo/vector-icons';
const { width: WIDTH } = Dimensions.get('window');
import SpinnerScreen from './SpinnerScreen';
import axios from 'axios';
import { width, height, totalSize } from 'react-native-dimension';

// create a component
export default class withdraAmountChildren extends Component {
    constructor(props) {
        super(props);
        this.state = {
            radio_props: [
                { label: 'Parent', value: 0 },
                { label: 'Children', value: 1 }
            ],
            amountwithdraw: '',
            payment_type: '',
            payment_details: '',
            errorText: '',
            loading: false,
        }
    }
    onWithdraw(amountwithdraw, payment_type, payment_details) {
        console.log(amountwithdraw)
        console.log(payment_details)
        console.log(payment_type)
        this.setState({ errorText: '', loading: true });

        // if ( this.state.children_id === '' || this.state.amountwithdraw === '' || this.state.payment_type === '' || this.state.payment_details === '') {
        //     return Alert.alert('Please Enter All Feild')
        // }
        // else {
            try{
        AsyncStorage.getItem('userId').then((id) => {
            console.log(id)
            axios.post(`https://pcportal.malangis.com/public/api/withdraw`,
                {
                    "children_id": id,
                    "amountwithdraw": amountwithdraw,
                    "payment_type": payment_type,
                    "payment_details": payment_details
                }
            )
                .then((response) => {
                    console.log(response);
                    if (response.data.success === "1") {
                        console.log(response)
                        this.setState({ loading: false })
                        Alert.alert('Data has been sent')
                        this.onLoginSuccess();
                    }
                    else {
                        this.onLoginFail();
                    }
                })
        })
    }
    catch{
        Alert.alert('erro')
    }
    }

    renderButton() {
        if (this.state.loading) {
            return <SpinnerScreen />
        }
        return (
            <TouchableOpacity style={{ width: '60%', height: '10%', marginTop: 30, marginLeft: 70 }}
                onPress={() => this.onWithdraw(this.state.payment_type, this.state.payment_details, this.state.amountwithdraw)}>
                <Image source={require('./../images/CashWithdrawalbutton.png')} style={{ width: '100%', height: '100%' }}
                />
            </TouchableOpacity>
        )
    };
    onLoginFail() {
        this.setState({ errorText: 'Authentication Failed.', loading: false })
    }
    onLoginSuccess() {
        this.setState({
            
            amountwithdraw: '',
            payment_type: '',
            payment_details: '',
            loading: false,
            errorText: '',
        })

        this.props.navigation.navigate('#')
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ backgroundColor: '#000', height: '4%' }}></View>
                <ImageBackground source={require('./../images/cashwithdrawlbg.png')} style={{ width: '100%', height: '100%', }}>

                    <View style={{ height: '10%', backgroundColor: '#8852ff', }}>
                        <View style={{ marginTop: 15, flexDirection: 'row' }}>
                            <View style={{ marginLeft: 20 }}>
                                <Icon name='menu' color='#fff' size={35}
                                    onPress={
                                        () => this.props.navigation.openDrawer()
                                    } />
                            </View>
                            <View style={{ marginTop: 5, }}>
                                <Text style={{ fontSize: 20, marginLeft: 60, fontWeight: 'bold', color: '#fff' }}>Children Withdraw</Text>
                            </View>
                        </View>
                    </View>
                    <View>
                        <View style={{ marginLeft: 20, marginTop: 10 }}>
                            <Text style={{ fontSize: 15, fontWeight: 'bold', color: '#fff' }}>Total Amount</Text>
                        </View>
                        <View style={{ width: '40%', height: '25%', borderColor: '#fff', marginLeft: 25, marginTop: 10, borderWidth: 2, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                            <Icon
                                // reverse
                                name='dollar'
                                type='foundation'
                                color='#fff'
                                size={25}
                                style={{ marginHorizontal: 5 }}
                            />
                            <View style={{ borderRadius: 1, marginVertical: '0%', }}>
                                <TextInput placeholder='Total Amount' placeholderTextColor='#fff' style={{ margin: 5, marginTop: 10 }}></TextInput>
                            </View>
                        </View>
                    </View>
                    <View style={{ marginLeft: 20, marginTop: '-25%' }}>
                        <Text style={{ fontSize: 15, fontWeight: 'bold', color: '#fff' }}>Withdraw</Text>
                        <Text style={{ fontSize: 15, fontWeight: 'bold', color: '#fff' }}>Type</Text>
                    </View>
                    <View style={{ borderColor: '#fff', borderWidth: 2, marginHorizontal: 25, marginTop: 10 }}>
                        <TextInput
                            style={styles.input}
                            placeholder={'Enter your withdraw type'}
                            placeholderTextColor={'#fff'}
                            onChangeText={(payment_type) => this.setState({ payment_type })}
                            value={this.state.payment_type}
                        />
                    </View>
                    <View style={{ borderColor: '#fff', borderWidth: 2, marginHorizontal: 25, marginTop: 10 }}>
                        <TextInput
                            style={styles.inputbox}
                            placeholder={'Enter your withdraw Details'}
                            placeholderTextColor={'#fff'}
                            onChangeText={(payment_details) => this.setState({ payment_details })}
                            value={this.state.payment_details}
                        />
                    </View>
                    <View style={{ width: '40%', height: '10%', borderColor: '#fff', marginLeft: 25, marginTop: 10, borderWidth: 2, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <Icon
                            // reverse
                            name='dollar'
                            type='foundation'
                            color='#fff'
                            size={25}
                            style={{ marginHorizontal: 5 }}
                        />
                        <View style={{ borderRadius: 1, marginVertical: '0%', }}>
                            <TextInput placeholder='Enter Points'
                            keyboardType = {'numeric'}
                                onChangeText={(amountwithdraw) => this.setState({ amountwithdraw })}
                                value={this.state.amountwithdraw}
                                placeholderTextColor='#fff' style={{ margin: 5, marginTop: 10 }}></TextInput>
                        </View>
                    </View>
                    <Text style={{ color: 'red', alignItems: 'center', fontSize: 15 }}>{this.state.errorText}</Text>
                    {this.renderButton()}

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
        height: 50,
        padding: 10,
        marginBottom: 10,

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