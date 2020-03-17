import SafeAreaView from 'react-native-safe-area-context';
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer';
// import {createStackNavigator} from 'react-navigation';
import homeParent from '../components/homeParent';
import parentDashboardAddTask from '../components/parentDashboardAddTask';
import parentDashBoardPrevious from '../components/parentDashBoardPrevious';
import previousTasks from '../components/previousTasksChildren';
import SideMenuParent from './SideMenuParent';
import taskShowDetail from '../components/taskShowDetailParent'
import taskDetail from '../components/taskDetailChildren'



const DashBoardParent = createDrawerNavigator({
  homeParent: {
    screen: homeParent,
  },
  parentDashboardAddTask: {
    screen: parentDashboardAddTask,
    navigationOptions: {
      header: null,
    },
  },
  parentDashBoardPrevious: {
    screen: parentDashBoardPrevious,
    navigationOptions: {
      header: null,
    },
  },
  taskShowDetail: {
    screen: taskShowDetail,
    navigationOptions: {
      header: null,
    },
  },
  taskDetail: {
    screen: taskDetail,
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
  initialRouteName: 'homeParent',
  contentComponent: SideMenuParent,
});


export default (DashBoardParent);

