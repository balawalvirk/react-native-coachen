import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
  StyleSheet
} from "react-native";
import { height, width, totalSize } from "react-native-dimension";
import images from "../Themes/Images";
import colors from "../Themes/Colors";
import ApplicationStyles from "../Themes/ApplicationStyles";
//import { Icon } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import Ionicons from "react-native-vector-icons/Ionicons";
import {
  createAppContainer,
  createSwitchNavigator,
  createDrawerNavigator,
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";
// import { createBottomTabNavigator } from "react-navigation-tabs";
// import { createStackNavigator } from "react-navigation-stack";
// import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
// import { createDrawerNavigator, DrawerItems } from "react-navigation-drawer";
import AuthLoadingScreen from "../Containers/LoginFlow/AuthLoadingScreen";
import Login from "../Containers/LoginFlow/Login";
import LoginAuth from "../Containers/LoginFlow/LoginAuth";
import Signup from "../Containers/LoginFlow/Signup";
import ForgotPassword from "../Containers/LoginFlow/ForgotPassword";
// import Home from "../Containers/MainFlow/Home/home";
import Splash from "../Containers/splash";
import Initial from "../Containers/InitialScreens/Initial";
import WalkthroughScreen from "../Containers/InitialScreens/WalkthroughScreen";
import VocalCoach from "../Containers/InitialScreens/VocalCoach";
import Settings from "../Containers/Setting/Settings";
import SettingCoachen from "../Containers/Setting/SettingCoachen";
import SettingStyle from "../Containers/Setting/SettingStyle";
import Home from "../Containers/Home/Home";
import ProfileStyle from "../Containers/Home/ProfileStyle";
import AnimationTest from "../Containers/Home/AnimationTest";
import Genere from "../Containers/Geners/Genere";
import Coaches from "../Containers/Coach/Coaches";
import CoachProfile from "../Containers/Coach/CoachProfile";
import ProfileDetails from "../Containers/Coach/ProfileDetails";
import BookingsCalendar from "../Containers/Calendar/BookingsCalendar";
import BookingCalendarNew from "../Containers/Calendar/BookingCalendarNew";
import ScheduleSetting from "../Containers/Calendar/ScheduleSetting";
import Favourites from "../Containers/Coach/Favourites";
import Category from "../Containers/Coach/Category";
import SearchByName from "../Containers/Search/SearchByName";
import Music from "../Containers/Coach/Music";
import Messages from "../Containers/Message/Messages";
import MessageStyle from "../Containers/Message/MessageStyle";
import Conversation from "../Containers/Message/Conversation";
import BottomTabBar from "../Containers/Common/BottomTabBar";

const walkthroughStack = createStackNavigator({
  walkthrough: {
    screen: WalkthroughScreen,
    navigationOptions: {
      header: null
    }
  }
});

const Auth = createStackNavigator(
  {
    login: {
      screen: Login,
      navigationOptions: {
        header: null
      }
    },
    loginAuth: {
      screen: LoginAuth,
      navigationOptions: {
        header: null
      }
    },
    signup: {
      screen: Signup,
      navigationOptions: {
        header: null
      }
    },
    forgotPassword: {
      screen: ForgotPassword,
      navigationOptions: {
        header: null
      }
    }
  },
  {
    initialRouteName: "login"
  }
);

const CalendarStack = createStackNavigator(
  {
    MainCalendar: {
      screen: BookingCalendarNew, //BookingsCalendar,
      navigationOptions: {
        // header: null
      }
    },
    Schedulesetting: {
      screen: ScheduleSetting,
      navigationOptions: {
        // header: null
      }
    }
    // signup: {
    //   screen: Signup,
    //   navigationOptions: {
    //     header: null
    //   }
    // }
  },
  {
    // initialRouteName: "login"
  }
);

const TabCoachScreens = createBottomTabNavigator(
  {
    // other screens
    HomeScreen: {
      // screen: Home
      screen: VocalCoach
      // navigationOptions: {
      //   tabBarIcon: <Icon name={"search"} size={30} color={colors.snow} />,
      //   labeled: false,
      //   tabBarColor: "green",
      //   shifting: true
      // }
    },
    Favourite: {
      screen: VocalCoach
      // screen: Favourites
      // screen: Home
      // navigationOptions: {
      //   tabBarIcon: <Icon name={"heart"} size={30} color={colors.Red} />,
      //   labeled: false,
      //   tabBarColor: "blue",
      //   shifting: true
      // }
    },
    Booking: {
      screen: CalendarStack
      //   navigationOptions: {
      //     tabBarIcon: <Icon name={"bookmark"} size={30} color={colors.Green} />,
      //     labeled: false,
      //     tabBarColor: "red",
      //     shifting: true
      //   }
    }
  },
  {
    // tabBarComponent: props => <BottomTabBar {...props} />

    tabBarOptions: {
      keyboardHidesTabBar: true,
      labeled: false,
      activeColor: "red",
      inactiveColor: "green",
      shifting: true,
      initialRouteName: "HomeScreen",
      order: ["HomeScreen", "Favourite", "Booking"],
      tabBarPosition: "bottom",
      // barStyle: { backgroundColor: "yellow" },
      tabBarColor: colors.Blue,
      iconStyle: { height: 30, width: 30 }
    },
    navigationOptions: ({ navigation }) => {
      const { routeName } = navigation.state.routes[navigation.state.index];
      return {
        headerTitle:
          routeName == "HomeScreen"
            ? "Voco"
            : routeName == "Booking"
            ? "Booking Calendar"
            : routeName,
        headerStyle: {
          backgroundColor:
            routeName == "HomeScreen"
              ? colors.snow
              : routeName == "Booking"
              ? colors.darkGreen
              : colors.Red,
          shadowColor: "transparent",
          shadowRadius: 0,
          elevation: 0,
          borderBottomWidth: 0,
          shadowOffset: {
            height: 0
          }
        },
        headerRight: (
          <Icon
            name={"bars"}
            color={routeName == "HomeScreen" ? colors.black : colors.snow}
            size={26}
            style={{ marginRight: totalSize(2) }}
            onPress={() => navigation.openDrawer()}
          />
        ),
        headerLeft: (
          <Icon
            name={"arrow-left"}
            color={routeName == "HomeScreen" ? colors.black : colors.snow}
            size={26}
            style={{ marginLeft: totalSize(2) }}
            onPress={() => navigation.goBack()}
          />
        ),
        // headerStyle: { backgroundColor: "#f57c00" },
        headerTitleStyle: {
          color: routeName == "HomeScreen" ? colors.black : colors.snow,
          fontSize: ApplicationStyles.headerTitleFontSize
        }
        //header: null
      };
    }
  }
);

const CoachStack = createStackNavigator(
  {
    // TabCoach: {
    //   screen: TabCoachScreens,
    //   navigationOptions: {
    //     header: null
    //   }
    // },
    HomeScreen: {
      // screen: Home
      screen: VocalCoach
    },
    Favourite: {
      screen: VocalCoach
    },
    Booking: {
      screen: CalendarStack
    },
    Setting: {
      screen: SettingCoachen,
      navigationOptions: {
        // header: null
      }
    },
    convo: {
      screen: Messages,
      navigationOptions: {
        // header: null
      }
    }
  },
  {
    // initialRouteName: "login"
  }
);

const TabVocalScreens = createBottomTabNavigator(
  {
    // other screens
    HomeScreen: {
      screen: Home
    }
    // Favourite: {
    //   screen: Favourites
    // },
    // Booking: {
    //   screen: CalendarStack
    // }
  },
  {
    // tabBarComponent: props => <BottomTabBar {...props} />

    tabBarOptions: {
      keyboardHidesTabBar: true,
      labeled: false,
      activeColor: "red",
      inactiveColor: "green",
      shifting: true,
      initialRouteName: "HomeScreen",
      order: ["HomeScreen", "Favourite", "Booking"],
      tabBarPosition: "bottom",
      // barStyle: { backgroundColor: "yellow" },
      tabBarColor: colors.Blue,
      iconStyle: { height: 30, width: 30 }
    },
    navigationOptions: ({ navigation }) => {
      const { routeName } = navigation.state.routes[navigation.state.index];
      return {
        headerTitle:
          routeName == "HomeScreen"
            ? "Voco"
            : routeName == "Booking"
            ? "Booking Calendar"
            : routeName,
        headerStyle: {
          backgroundColor:
            routeName == "HomeScreen"
              ? colors.snow
              : routeName == "Booking"
              ? colors.darkGreen
              : colors.Red,
          shadowColor: "transparent",
          shadowRadius: 0,
          elevation: 0,
          borderBottomWidth: 0,
          shadowOffset: {
            height: 0
          }
        },
        headerRight: (
          <Icon
            name={"bars"}
            color={routeName == "HomeScreen" ? colors.black : colors.snow}
            size={26}
            style={{ marginRight: totalSize(2) }}
            onPress={() => navigation.openDrawer()}
          />
        ),
        // headerLeft: (
        //   <Icon
        //     name={"arrow-left"}
        //     color={routeName == "HomeScreen" ? colors.black : colors.snow}
        //     size={26}
        //     style={{ marginLeft: totalSize(2) }}
        //     onPress={() => navigation.goBack()}
        //   />
        // ),
        // headerStyle: { backgroundColor: "#f57c00" },
        headerTitleStyle: {
          color: routeName == "HomeScreen" ? colors.darkPurple : colors.snow,
          fontSize: ApplicationStyles.headerTitleFontSize
        }
        //header: null
      };
    }
  }
);

const messageStack = createStackNavigator({
  Message: {
    screen: Messages
  },
  Chat: {
    screen: Conversation
  }
});

const settingStack = createStackNavigator({
  settings: {
    screen: Settings
  }
});

const appStack = createStackNavigator({
  HomePage: {
    screen: Home 
  },
  // HomeTabs: {
  //   screen: TabVocalScreens
  // },
  Favourite: {
    screen: Favourites
  },
  Booking: {
    screen: BookingCalendarNew //BookingsCalendar
  },
  Details: {
    screen: ProfileDetails
  },
  Profile: {
    screen: CoachProfile
  },
  Categorys: {
    screen: Category
  },
  SearchByNames: {
    screen: SearchByName
  },
  music: {
    screen: Music
  },
  Calendar: {
    screen: BookingCalendarNew //BookingsCalendar
  },
  Schedule: {
    screen: ScheduleSetting
  }
});

// const CustomDrawerComponent = props => (
//   <SafeAreaView style={{ flex: 1 }}>
//     <View style={{ flex: 2.5, justifyContent: "center", alignItems: "center" }}>
//       <Image
//         source={images.profile}
//         style={{
//           height: totalSize(12.5),
//           width: totalSize(12.5),
//           borderRadius: 100,
//           marginHorizontal: width(5)
//         }}
//       />
//       <View style={{ marginHorizontal: width(5) }}>
//         <Text style={{ fontSize: totalSize(2), color: "white" }}>Max Lee</Text>
//       </View>
//     </View>
//     <View style={{ flex: 6 }}>
//       <ScrollView>
//         <DrawerItems {...props} />
//       </ScrollView>
//     </View>
//     <View style={{ flex: 1.5, alignItems: "center", justifyContent: "center" }}>
//       <View style={{ alignSelf: "center" }}>
//         <Image
//           source={require("../Images/dummy_profile_pic.jpg")}
//           style={styles.logoStyle}
//         />
//       </View>
//     </View>
//   </SafeAreaView>
// );

const DrawerStack = createDrawerNavigator(
  {
    AppStack: {
      screen: appStack,
      navigationOptions: {
        drawerLabel: <ProfileStyle />
      }
    },
    message: {
      screen: messageStack,
      navigationOptions: {
        drawerLabel: <MessageStyle />
      }
    },
    setting: {
      screen: settingStack,
      navigationOptions: {
        drawerLabel: <SettingStyle />
      }
    }
  },
  {
    drawerPosition: "right",
    headerMode: "none",
    drawerBackgroundColor: colors.homeBgColor,
    contentOptions: {
      inactiveTintColor: colors.darkText,
      activeTintColor: colors.darkText
    }
  }
);

export default createAppContainer(
  createSwitchNavigator(
    {
      // Loading: AuthLoadingScreen,
      splash: Splash,
      Auth: Auth,
      initial: Initial,
      Coach: CoachStack,
      walkThrough: walkthroughStack,
      App: DrawerStack,
      Home:Home, 
      messageStack:messageStack,
    },
    {
      initialRouteName:  "splash"
    }
  )
);

const styles = StyleSheet.create({
  iconStyle: {
    height: totalSize(3.5),
    width: totalSize(3.5)
  },
  logoStyle: {
    height: totalSize(10),
    width: totalSize(15)
  }
});
