import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps171475Navigator from '../features/Maps171475/navigator';
import Settings171453Navigator from '../features/Settings171453/navigator';
import Settings171438Navigator from '../features/Settings171438/navigator';
import NotificationList171437Navigator from '../features/NotificationList171437/navigator';
import Maps171436Navigator from '../features/Maps171436/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps171475: { screen: Maps171475Navigator },
Settings171453: { screen: Settings171453Navigator },
Settings171438: { screen: Settings171438Navigator },
NotificationList171437: { screen: NotificationList171437Navigator },
Maps171436: { screen: Maps171436Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
