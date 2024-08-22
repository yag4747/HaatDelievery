/**
 * @format
 */

import {AppRegistry, YellowBox} from 'react-native';
import {name as appName} from './app.json';
import AppNavigator from './app/navigator/AppNavigator';

AppRegistry.registerComponent(appName, () => AppNavigator);
YellowBox.ignoreWarnings(['']);
