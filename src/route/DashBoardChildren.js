import SafeAreaView from 'react-native-safe-area-context';
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer';
// import {createStackNavigator} from 'react-navigation';
import homeChildren from '../components/homeChildren';
import withdraAmount from '../components/withdraAmountChildren';
import previousTasks from '../components/previousTasksChildren';
import SideMenuChildren from './SideMenuChildren';
import taskShowDetailChildren from '../components/taskShowDetailChildren'
import taskDeatilChildren from '../components/taskDetailChildren'
import task_Detail_Children from '../components/task_Detail_Children'



const DashBoardChildren = createDrawerNavigator({
  homeChildren: {
    screen: homeChildren,
  },
  withdraAmount: {
    screen: withdraAmount,
    navigationOptions: {
      header: null,
    },
  },
  taskShowDetailChildren: {
    screen: taskShowDetailChildren,
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
  taskDeatilChildren: {
    screen: taskDeatilChildren,
    navigationOptions: {
      header: null,
    },
  },
  previousTasks: {
    screen: previousTasks,
    navigationOptions: {
      header: null,
    },
  },

}, {
  drawerWidth: 300,
  initialRouteName: 'homeChildren',
  contentComponent: SideMenuChildren,
});


export default (DashBoardChildren);

