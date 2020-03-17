import { createAppContainer, } from 'react-navigation';
import { createStackNavigator, HeaderTitle } from 'react-navigation-stack';
import splash from './../components/splash'
import prentLogin from './../components/prentLogin'
import childrenLogin from './../components/childrenLogin'
import signUpChildren from './../components/signUpChildren'
import parentDashboardAddTask from './../components/parentDashboardAddTask';
import parentDashBoardPrevious from './../components/parentDashBoardPrevious'
import signUpParent from './../components/signUpParent'
import task_Detail_Children from './../components/task_Detail_Children';
import taskShowDetailParent from '../components/taskShowDetailParent'
import DashBoardChildren from './DashBoardChildren';
import DashBoardParent from './DashBoardParent';
import splashFirst from './../components/splashFirst';

const Route = createStackNavigator({
    splashFirst: {
        screen: splashFirst,
        navigationOptions: {
            header: null,
        },
    },
    splash: {
        screen: splash,
        navigationOptions: {
            header: null,
        },
    },
    task_Detail_Children: {
        screen: task_Detail_Children,
        navigationOptions: {
            header: null,
        },
    },
    taskShowDetailParent: {
        screen: taskShowDetailParent,
        navigationOptions: {
            header: null,
        },
    },
    homeChildren:{
        screen: DashBoardChildren,
        navigationOptions: {
            header: null,
        },
    },
    homeParent:{
        screen: DashBoardParent,
        navigationOptions: {
            header: null,
        },
    },
    prentLogin: {
        screen: prentLogin,
        navigationOptions: {
            header: null,
        },
    },
    
    signUpParent: {
        screen: signUpParent,
        navigationOptions: {
            header: null,
        },
    },
    
    childrenLogin: {
        screen: childrenLogin,
        navigationOptions: {
            header: null,
        },
    },
    signUpChildren: {
        screen: signUpChildren,
        navigationOptions: {
            header: null,
        },
    },
    parentDashboardAddTask: {
        screen: parentDashboardAddTask,
        navigationOptions:  {
            headerShown: false
        }
    },
    parentDashBoardPrevious: {
        screen: parentDashBoardPrevious,
        navigationOptions:  {
            headerShown: false
        }
    },
    
},
    {
        initialRouteName: 'splashFirst'
    }
);

export default createAppContainer(Route);