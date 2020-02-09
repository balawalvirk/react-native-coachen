/**
 * @format
 */

import { AppRegistry, Text } from "react-native";
import AppNavigation from "./MainApp/App/Navigation/AppNavigation";
//import App from './src/App';
import { name as appName } from "./app.json";

Text.defaultProps = Text.defaultProps || {};
Text.defaultProps.allowFontScaling = false;

AppRegistry.registerComponent(appName, () => AppNavigation);
