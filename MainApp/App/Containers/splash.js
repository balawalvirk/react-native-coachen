import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import colors from "../Themes/Colors";
import ApplicationStyles from "../Themes/ApplicationStyles";
import { totalSize, height, width } from "react-native-dimension";
import Icon from "react-native-vector-icons/FontAwesome";
import AsyncStorage from "@react-native-community/async-storage";
import { GlobalConst } from "../config/imports";

class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    // this._bootstrapAsync();
  }

  // Fetch the token from storage then navigate to our appropriate place
  // _bootstrapAsync = async () => {

  async componentDidMount() {
    AsyncStorage.removeItem("login_data");
    const userToken = await AsyncStorage.getItem("login_data");
    console.log(userToken);
    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    let that = this;
    that.props.navigation.navigate(userToken ? "initial" : "Auth");
  }

  // async componentDidMount() {
  //   const userToken = await AsyncStorage.getItem(
  //     GlobalConst.STORAGE_KEYS.userId
  //   );
  //   //alert(userToken);
  //   let that = this;
  //   setTimeout(() => {
  //     // that.props.navigation.navigate(userToken ? "App" : "Auth");
  //     that.props.navigation.navigate("Auth");
  //   }, 3000);
  // }

  render() {
    return (
      <View
        style={[
          styles.container,
          {
            backgroundColor: colors.SplashBlueBg,
            justifyContent: "center",
            alignItems: "center"
          }
        ]}
      >
        <Text
          style={[
            ApplicationStyles.h01,
            {
              fontWeight: "normal",
              color: colors.Green
              //marginVertical: totalSize(3)
            }
          ]}
        >
          Coachen
        </Text>
      </View>
    );
  }
}

export default Splash;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  logo: {
    height: totalSize(20),
    width: totalSize(30),
    borderRadius: 100
  }
});
