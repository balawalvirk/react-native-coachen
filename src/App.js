import { createStackNavigator, createAppContainer } from "react-navigation";
import Main from "./Screens/Main";
import Home from "./Screens/Home";

const AppNavigator = createStackNavigator({
  Main: {
    screen: Main
  },
  Home: {
    screen: Home
  }
});

const Navigation = createAppContainer(AppNavigator);
export default Navigation;
