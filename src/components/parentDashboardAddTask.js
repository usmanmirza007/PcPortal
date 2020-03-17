import React, { Component } from 'react';
import { View, Text, TextInput, Alert, FlatList, Picker, ImageBackground } from 'react-native';
import { width, height, totalSize } from 'react-native-dimension';
import { Input, Icon } from 'react-native-elements'
import RNPickerSelect from 'react-native-picker-select';
import { TouchableOpacity } from 'react-native-gesture-handler';
import SpinnerScreen from './SpinnerScreen';
import axios from 'axios';

class parentDashboardAddTask extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            category_id: '',
            task_detail: '',
            children_id: '',
            parent_id: '',
            task_rules: '',
            task_points: '',
            responseData: [],
        };
    }

    //################################################ All category ##########################

    componentDidMount() {
        axios.get(`https://pcportal.malangis.com/public/api/categories`)
            .then((response) => {
                if (response.data.success === "1") {
                    this.setState({ responseData: response.data.list.Title })
                }
                console.log(this.state.responseData);
            })
            .catch((error) => {
                Alert.alert("Please Check Your Internet Connection");
            });
    }

    // renderRow = ({ item }) => {
    //     // console.log(item.englishName);
    //     return (
    //         <View style={{ borderColor: '#8852ff', borderRadius: 1, marginVertical: '3%', width: '95%', height: '8%', borderWidth: 2 }}>
    //             <Picker
    //                 onValueChange={(item2) => this.setState({ category_id: item2 })}
    //                 value={this.state.category_id}>
    //                 <Picker.Item label={item.Title} value={item.Title} />
    //             </Picker>
    //         </View>
    //     )
    // }
    //################################################ Add Task ##############################
    addTask(category_id, task_detail, children_id, task_rules, task_points) {
        console.log('category_id', this.state.category_id)
        console.log('task_detail', this.state.task_detail)
        console.log('children_id', this.state.children_id)
        console.log('task_rules', this.state.task_rules)
        console.log('task_points', this.state.task_points)
        if (this.state.category_id === '', this.state.children_id === '', this.state.task_detail === '', this.state.task_points === '', this.state.task_rules === '') {
            return Alert.alert('Please enter all feild')
        }

        else {
            this.setState({ loading: true })
            axios.post('https://pcportal.malangis.com/public/api/addtask',
                {
                    "category_id": category_id,
                    "parent_id": '1',
                    "children_id": children_id,
                    "task_detail": task_detail,
                    "task_points": task_points,
                    "task_rules": task_rules
                }
                // {
                //     "category_id": '1',
                //     "task_detail": task_detail,
                //     "children_id": 'hello',
                //     "parent_id": '1',
                //     "task_rules": '1',
                //     "task_points": task_points,
                // }
            )
                .then((response) => {
                    console.log(response);
                    if (response.data.message === "Task assigned successfully") {
                        this.setState({ loading: false })
                        this.onLoginSuccess();
                    }
                    else {
                        this.onLoginFail();
                    }
                })
        }
    }

    onLoginFail() {
        this.setState({ errorText: 'Authentication Failed.', loading: false })
    }
    onLoginSuccess() {
        this.setState({
            children_id: '',
            parent_id: '',
            category_id: '',
            task_detail: '',
            task_points: '',
            task_rules: '',
            loading: false,
            errorText: '',
        })

        // this.props.navigation.navigate('#')
    }
    renderButton() {
        if (this.state.loading) {
            return <SpinnerScreen />
        }
        return (
            <TouchableOpacity onPress={() => this.addTask(this.state.children_id, this.state.category_id, this.state.task_detail, this.state.task_points, this.state.task_rules)}
                style={{ height: 50, borderRadius: 5, marginRight: 18, backgroundColor: '#651fff', marginTop: 15, }}>
                <Text style={{ fontSize: 20, color: '#fff', fontWeight: 'bold', alignSelf: 'center', marginTop: 10 }}>Add Task</Text>
            </TouchableOpacity >
        )
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <ImageBackground source={require('./../images/bg7.png')} style={{ width: '100%', height: '100%', }}>
                    <View style={{ backgroundColor: '#000', height: '4%' }}></View>
                    <View style={{ height: '10%', backgroundColor: '#8852ff', }}>
                        <View style={{ marginTop: 15, flexDirection: 'row' }}>
                            <View style={{ marginLeft: 20 }}>
                                <Icon name='menu' color='#fff' size={35}
                                    onPress={
                                        () => this.props.navigation.openDrawer()
                                    } />
                            </View>
                            <View style={{ marginTop: 5, }}>
                                <Text style={{ fontSize: 20, marginLeft: 90, fontWeight: 'bold', color: '#fff' }}>Add Task</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ width: '95%', marginHorizontal: '5%' }}>
                        <Text style={{ color: '#8852ff', marginTop: 20, fontWeight: 'bold' }}>Select Child</Text>
                        <View style={{ borderColor: '#8852ff', borderRadius: 1, marginVertical: '3%', width: '95%', height: '8%', borderWidth: 2 }}>
                            <RNPickerSelect
                                onValueChange={(item) => this.setState({ children_id: item })}
                                value={this.state.children_id}
                                items={[
                                    { label: 'Football', value: 1 },
                                    { label: 'Baseball', value: 2 },
                                    { label: 'Hockey', value: 3 },
                                ]} />
                        </View>
                        <Text style={{ color: '#8852ff', marginTop: 5, fontWeight: 'bold' }}>Select Category</Text>
                        <View style={{ borderColor: '#8852ff', borderRadius: 1, marginVertical: '3%', width: '95%', height: '8%', borderWidth: 2 }}>
                        <RNPickerSelect
                            onValueChange={(item) => this.setState({ category_id: item })}
                            value={this.state.category_id}
                            items={[
                                { label: 'Football', value: 1 },
                                { label: 'Baseball', value: 2 },
                                { label: 'Hockey', value: 3 },
                            ]} />
                    </View>


                        <Text style={{ color: '#8852ff', marginTop: 5, fontWeight: 'bold', marginBottom: 10 }}>Task</Text>
                        <View style={{ borderColor: '#8852ff', borderRadius: 1, marginVertical: '0%', width: '95%', height: '8%', borderWidth: 2 }}>
                            <TextInput
                                placeholder='Enter Task Details'
                                onChangeText={(task_detail) => this.setState({ task_detail })}
                                value={this.state.task_detail}
                                placeholderTextColor='#000'
                                style={{ margin: 5, marginTop: 10 }}>
                            </TextInput>
                        </View>
                        <View style={{ borderColor: '#8852ff', borderRadius: 1, marginVertical: '2%', width: '95%', height: '8%', borderWidth: 2 }}>
                            <TextInput
                                placeholder='Enter Task rule'
                                onChangeText={(task_rules) => this.setState({ task_rules })}
                                value={this.state.task_rules}
                                placeholderTextColor='#000'
                                style={{ margin: 5, marginTop: 10 }}>
                            </TextInput>
                        </View>
                        {/** <View style={{ borderColor: '#8852ff', borderRadius: 1, marginVertical: '3%', width: '95%', height: '15%', borderWidth: 2 }}>
                            <TextInput
                                placeholder='Enter Task Rule'
                                placeholderTextColor='#000'
                                multiline={true}
                                onChangeText={(task_rules) => this.setState({ task_rules })}
                                value={this.state.task_rules}
                                style={{ margin: 5, marginTop: '10%' }}>
                            </TextInput>
                        </View> */}


                        <View style={{ width: '40%', height: '10%', borderColor: '#8852ff', borderWidth: 2, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                            <Icon
                                // reverse
                                name='dollar'
                                type='foundation'
                                color='#8852ff'
                                size={25}
                                style={{ marginHorizontal: 5 }}
                            />
                            <View style={{ borderRadius: 1, marginVertical: '0%', }}>
                                <TextInput
                                    placeholder='Enter Points'
                                    placeholderTextColor='#000'
                                    onChangeText={(task_points) => this.setState({ task_points })}
                                    value={this.state.task_points}
                                    style={{ margin: 5, marginTop: 10 }}>
                                </TextInput>
                            </View>
                        </View>
                        <Text style={{ color: 'red', alignItems: 'center', fontSize: 15 }}>{this.state.errorText}</Text>
                        {this.renderButton()}

                    </View>
                </ImageBackground>
            </View>
        );
    }
}

export default parentDashboardAddTask;
