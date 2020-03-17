import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { width, height, totalSize } from 'react-native-dimension';
import { Input, Icon } from 'react-native-elements'
import DatePicker from 'react-native-datepicker'
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';

class addChildren extends Component {

    constructor(props) {
        super(props)
        this.state = { date: "2016-05-15" }
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ marginVertical: height(5),marginHorizontal: width(5), backgroundColor: '#3284E8', width: width(30), justifyContent: 'flex-end', alignItems: 'flex-end', height: width(30), borderRadius: 90 }}>
                <Icon
                            // reverse
                            name='plus-circle'
                            type='font-awesome'
                            color='blue'
                            size={30}
                            style={{borderColor:'white', borderWidth:1, borderRadius:90,position:'relative',  }}
                        />
                </View>
                <View style={{ width: '100%', justifyContent: 'center', paddingHorizontal: '10%', alignItems: 'center' }}>
                    <Input
                        placeholder='First Name'
                        placeholderTextColor='#3284E8'
                    />
                    <Input
                        placeholder='Last Name'
                        placeholderTextColor='#3284E8'
                        containerStyle={{ marginVertical: '5%' }}
                    />
                    <Input
                        placeholder='Age'
                        placeholderTextColor='#3284E8'
                    />
                    <DatePicker
                        style={{ width: '90%', marginTop: '2%' }}
                        date={this.state.date}
                        mode="date"
                        placeholder="select date"
                        format="YYYY-MM-DD"
                        minDate="1980-01-01"
                        maxDate="2030-12-30"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        customStyles={{
                            dateIcon: {
                                // position: 'absolute',
                                left: 0,
                                marginTop: '1%',
                                marginLeft: 0,
                                top: 4
                            },
                            dateInput: {
                                marginLeft: 36,
                            }
                        }}
                        onDateChange={(date) => { this.setState({ date: date }) }}
                    />
                    <TouchableOpacity  onPress={()=>{this.props.navigation.navigate('childrenDashBoard')}} style={{ marginVertical: height(5), backgroundColor: '#3284E8', justifyContent: 'center', alignItems: 'center', width: width(17), height: height(5) }}>
                        <Text style={{ color: 'white' }}>Add</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

export default addChildren;
