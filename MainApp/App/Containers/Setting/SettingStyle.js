import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Platform,
  ScrollView
} from "react-native";
import colors from "../../Themes/Colors";
import ApplicationStyles from "../../Themes/ApplicationStyles";
import { totalSize, height, width } from "react-native-dimension";
import Icon from "react-native-vector-icons/FontAwesome";
import { fonts } from "../../Themes/Fonts";

class SettingStyle extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          paddingHorizontal: totalSize(2),
          justifyContent: "space-between",
          alignItems: "center",
          marginVertical: totalSize(1),
          backgroundColor: colors.homeBgColor
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image
            source={require("../../Images/settings.png")}
            style={[
              {
                width: totalSize(2.5),
                height: totalSize(2.5),
                // resizeMode: "center",
                marginRight: totalSize(3),
                transform: [{ rotate: "180deg" }],
                tintColor: colors.darkPurple
              }
            ]}
            tintColor={colors.darkPurple}
          />
          {/* <Icon
            name={"cog"}
            color={colors.darkText}
            size={26}
            style={{ marginRight: totalSize(2) }}
            //onPress={() => navigation.openDrawer()}
          /> */}
          <Text
            style={[
              Platform.OS == "ios"
                ? ApplicationStyles.h4
                : ApplicationStyles.h375,
              {
                fontWeight: "normal",
                color: colors.darkPurple,
                fontFamily: fonts.futuraMedium
              }
            ]}
          >
            {" "}
            Settings{" "}
          </Text>
        </View>

        <View>
          <Image
            source={require("../../Images/back.png")}
            style={[
              {
                width: totalSize(1.8),
                height: totalSize(1.8),
                // resizeMode: "center",
                marginRight: totalSize(1),
                transform: [{ rotate: "180deg" }],
                tintColor: colors.darkPurple
              }
            ]}
            tintColor={colors.darkPurple}
          />
          {/* <Icon
            name={"arrow-right"}
            color={colors.darkText}
            size={26}
            style={{ marginRight: totalSize(1) }}
            //onPress={() => navigation.openDrawer()}
          /> */}
        </View>
      </View>
    );
  }
}

export default SettingStyle;
