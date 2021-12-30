/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import OpenSettings from './OpenSettings';
import OpenDeepLink from './OpenDeepLink';
import {name as appName} from './app.json';
import Router from './router';

AppRegistry.registerComponent(appName, () => Router);
