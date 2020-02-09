import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform
} from "react-native";
import colors from "../../Themes/Colors";
import ApplicationStyles from "../../Themes/ApplicationStyles";
import { totalSize, height, width } from "react-native-dimension";
import { fonts } from "../../Themes/Fonts";

class Initial extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View
        style={[
          styles.container,
          ApplicationStyles.justifyCenter,
          ApplicationStyles.alingCenter,
          { backgroundColor: colors.initalBg }
        ]}
      >
        <Text
          style={[
            ApplicationStyles.h001,
            {
              color: colors.darkText,
              fontWeight: "normal"
              // fontFamily: fonts.futuraMedium
            }
          ]}
        >
          {" "}
          Coachen{" "}
        </Text>
        <TouchableOpacity
          style={[
            ApplicationStyles.initalScreenButton,
            {
              backgroundColor: colors.Green,
              marginTop: totalSize(8),
              marginBottom: totalSize(2),
              borderColor: "transparent"
            }
          ]}
          onPress={() => this.props.navigation.navigate("walkThrough")}
        >
          <Text
            style={[
              Platform.OS == "ios"
                ? ApplicationStyles.initialScreenButtonTextIos
                : ApplicationStyles.initialScreenButtonTextAndroid,
              {
                color: colors.darkText,
                // fontWeight: "bold",
                fontFamily: fonts.futuraMedium
              }
            ]}
          >
            {" "}
            Student{" "}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            ApplicationStyles.initalScreenButton,
            {
              backgroundColor: colors.SplashBlueBg,
              borderColor: "transparent"
            }
          ]}
          onPress={() => this.props.navigation.navigate("Coach")} //App ... Coach
        >
          <Text
            style={[
              Platform.OS == "ios"
                ? ApplicationStyles.initialScreenButtonTextIos
                : ApplicationStyles.initialScreenButtonTextAndroid,
              {
                color: colors.Green,
                // fontWeight: "bold",
                fontFamily: fonts.futuraMedium
              }
            ]}
          >
            {" "}
            Coach{" "}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  logo: {
    height: totalSize(6),
    width: totalSize(9)
  },
  h1: {
    fontSize: totalSize(5),
    //color: colors.Darkgraycolor,
    fontWeight: "bold"
  },
  h2: {
    fontSize: totalSize(4),
    //color: colors.Darkgraycolor,
    fontWeight: "bold"
  },
  h3: {
    fontSize: totalSize(3),
    //color: colors.Darkgraycolor,
    fontWeight: "bold"
  },
  h4: {
    fontSize: totalSize(2),
    color: "grey"
  },
  h5: {
    fontSize: totalSize(1.5)
    //color: colors.steel
  },
  profile_container: {
    width: width(90),
    height: height(10),
    borderRadius: 5,
    backgroundColor: "white",
    elevation: 10,
    marginTop: height(2),
    flexDirection: "row"
  },
  jobs_container: {
    width: width(90),
    height: height(65),
    borderRadius: 5,
    backgroundColor: "white",
    elevation: 10,
    marginTop: height(5),
    alignItems: "center"
    // flexDirection: 'row'
  },
  profile_pic: {
    height: totalSize(6),
    width: totalSize(6),
    borderRadius: 100
  },
  time_container: {
    height: height(4),
    width: width(30),
    //marginVertical: height(0.5),
    //marginHorizontal: width(1.5),
    borderRadius: 2.5,
    //elevation: 5,
    //backgroundColor: colors.Green,
    alignItems: "center",
    justifyContent: "center"
    //fontSize: totalSize(1.5)
  },
  detailContainer: {
    width: width(80),
    //borderBottomColor: colors.steel,
    borderBottomWidth: 1,
    marginVertical: height(1)
    // Platform.OS === "ios" ?  : ;
  }
});

export default Initial;
