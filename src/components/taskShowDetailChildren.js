// import React, { Component } from 'react';
// import { View, Text, StyleSheet, Image, AsyncStorage, TextInput, Dimensions, TouchableOpacity, ImageBackground } from 'react-native';
// import { Input, Icon } from 'react-native-elements'
// import { FontAwesome } from '@expo/vector-icons';
// import { DrawerActions } from 'react-navigation-drawer';
// const { width: WIDTH } = Dimensions.get('window');
// import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
// import { width, height, totalSize } from 'react-native-dimension';
// import axios from 'axios';

// // create a component
// export default class taskShowDetailChildren extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             radio_props: [
//                 { label: 'Parent', value: 0 },
//                 { label: 'Children', value: 1 }
//             ],
//             Id: this.props.navigation.state.params.TaskId,
//             Title: '',
//             Rule: '',
//             Point: ''
//         }
//     }
//     componentDidMount() {
//         axios.get(`https://pcportal.malangis.com/public/api/taskdetail/${this.state.Id}`)
//             .then((response) => {
//                 console.log(response)
//                 if (response.data.success === "1") {
//                     this.setState({ Title: response.data.tasklist[0].title })
//                     this.setState({ Rule: response.data.tasklist[0].task_rules })
//                     this.setState({ Point: response.data.tasklist[0].task_points })
//                     console.log(this.state.Title)
//                 }
//                 // console.log(this.state.responseData);
//                 console.log(this.state.Id)
//             })
//             .catch((error) => {
//                 Alert.alert("Please Check Your Internet Connection");
//             });
//     }
//     render() {
//         return (
//             <View style={{ flex: 1 }}>
//                 <View style={{ backgroundColor: '#000', height: '4%' }}></View>
//                 <ImageBackground source={require('./../images/cashwithdrawlbg.png')} style={{ width: '100%', height: '100%', }}>

//                     <View style={{ height: '10%', backgroundColor: '#8852ff', }}>
//                         <View style={{ marginTop: 15, flexDirection: 'row' }}>
//                             <View style={{ marginLeft: 20 }}>
//                                 <Icon name='menu' color='#fff' size={35}
//                                     onPress={
//                                         () => this.props.navigation.dispatch(DrawerActions.openDrawer())
//                                     } />
//                             </View>
//                             <View style={{ marginTop: 5, }}>
//                                 <Text style={{ fontSize: 20, marginLeft: 60, fontWeight: 'bold', color: '#fff' }}>Task Details</Text>
//                             </View>
//                         </View>
//                     </View>
//                     <Text style={{ marginLeft: 25, marginTop: 30, fontSize: 15, color: '#fff', fontWeight: 'bold' }}>Task</Text>
//                     <View style={{ borderColor: '#fff', borderWidth: 2, marginHorizontal: 25, marginTop: 10 }}>
//                         <Text style={{ fontSize: 15, padding: 10, fontWeight: 'bold', color: '#fff' }}>{this.state.Title}</Text>
//                     </View>
//                     <Text style={{ marginLeft: 25, marginTop: 10, fontSize: 15, color: '#fff', fontWeight: 'bold' }}>Task Rule</Text>
//                     <View style={{ borderColor: '#fff', padding: 15, borderWidth: 2, marginHorizontal: 25, marginTop: 10 }}>
//                         <Text style={{ fontSize: 15, fontWeight: 'bold', color: '#fff' }}>{this.state.Rule}</Text>
//                     </View>
//                     <Text style={{ marginLeft: 25, marginTop: 10, fontSize: 15, color: '#fff', fontWeight: 'bold' }}>Task Point</Text>
//                     <View style={{ borderColor: '#fff', padding: 15, borderWidth: 2, width: 150, marginLeft: 25, marginTop: 10 }}>
//                         <Text style={{ fontSize: 15, fontWeight: 'bold', color: '#fff' }}>$ {this.state.Point}</Text>

//                     </View>
//                 </ImageBackground>
//             </View>
//         );
//     }
// }


// //make this component available to the app


// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#fff',
//         // alignItems: 'center',
//         // justifyContent: 'center',
//     },
//     input: {
//         height: 50,
//         padding: 10,
//         marginBottom: 10,

//     },
//     inputbox: {
//         height: 100,
//         padding: 10,
//         marginBottom: 10,

//     },
//     inputPrice: {
//         height: 100,
//         padding: 10,
//         marginBottom: 10,

//     },
// });

import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TextInput, Dimensions, TouchableOpacity, ImageBackground } from 'react-native';
import { Input, Icon } from 'react-native-elements'
import { FontAwesome } from '@expo/vector-icons';
import { DrawerActions } from 'react-navigation-drawer';
const { width: WIDTH } = Dimensions.get('window');
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
import { width, height, totalSize } from 'react-native-dimension';
import axios from 'axios';

// create a component
export default class taskShowDetailParent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            radio_props: [
                { label: 'Parent', value: 0 },
                { label: 'Children', value: 1 }
            ],
            Id: this.props.navigation.state.params.ChildrenTaskId,
            Title: '',
            Rule: '',
            Point: ''
        }
    }

    componentDidMount() {
        axios.get(`https://pcportal.malangis.com/public/api/taskdetail/${this.state.Id}`)
            .then((response) => {
                console.log(response)
                if (response.data.success === "1") {
                    this.setState({ Title: response.data.tasklist[0].title })
                    this.setState({ Rule: response.data.tasklist[0].task_rules })
                    this.setState({ Point: response.data.tasklist[0].task_points })
                }
                // console.log(this.state.responseData);
                console.log(this.state.Id)
            })
            .catch((error) => {
                Alert.alert("Please Check Your Internet Connection");
            });
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ backgroundColor: '#000', height: '4%' }}></View>
                <ImageBackground source={require('./../images/bg6.png')} style={{ width: '100%', height: '100%', }}>

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
                    <Text style={{ marginLeft: 25, marginTop: 30, fontSize: 15, color: '#fff', fontWeight: 'bold' }}>Task</Text>
                    <View style={{ borderColor: '#fff', borderWidth: 2, marginHorizontal: 25, marginTop: 10 }}>
                        <Text style={{ fontSize: 15, padding: 10, fontWeight: 'bold', color: '#fff' }}>{this.state.Title}</Text>
                    </View>
                    <Text style={{ marginLeft: 25, marginTop: 10, fontSize: 15, color: '#fff', fontWeight: 'bold' }}>Task Rule</Text>
                    <View style={{ borderColor: '#fff', padding: 15, borderWidth: 2, marginHorizontal: 25, marginTop: 10 }}>
                        <Text style={{ fontSize: 15, fontWeight: 'bold', color: '#fff' }}>{this.state.Rule}</Text>
                    </View>
                    <Text style={{ marginLeft: 25, marginTop: 10, fontSize: 15, color: '#fff', fontWeight: 'bold' }}>Task Point</Text>
                    <View style={{ borderColor: '#fff', padding: 15, borderWidth: 2, width: 150, marginLeft: 25, marginTop: 10 }}>
                        <Text style={{ fontSize: 15, fontWeight: 'bold', color: '#fff' }}>$ {this.state.Point}</Text>

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