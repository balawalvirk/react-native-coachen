import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Platform,
  ScrollView,
  StatusBar
} from "react-native";
import Coursel from "../../coursel/index";
import colors from "../../Themes/Colors";
import ApplicationStyles from "../../Themes/ApplicationStyles";
import { totalSize, height, width } from "react-native-dimension";
import Icon from "react-native-vector-icons/FontAwesome";
import Accordion from "react-native-collapsible/Accordion";
import * as Animatable from "react-native-animatable";
import { fonts } from "../../Themes/Fonts";

class WalkthroughScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // _renderItem = ({ item, index }) => {
  //   return (
  //     <View style={styles.slide}>
  //       <Text style={styles.title}>{item.title}</Text>
  //     </View>
  //   );
  // };

  render() {
    return (
      <View style={[styles.container, { backgroundColor: colors.homeBgColor }]}>
        <ScrollView style={styles.container}>
          <View>
            <Text
              style={[
                ApplicationStyles.h3,
                {
                  fontWeight: "normal",
                  alignSelf: "center",
                  color: colors.darkText,
                  // marginHorizontal: totalSize(1),
                  marginTop: Platform.OS == "ios" ? totalSize(5) : totalSize(4),
                  marginBottom: totalSize(1)
                }
              ]}
            >
              Coachen
            </Text>
            <View>
              <Coursel />
            </View>
            <View style={{ width: "100%" }}>
              <Text
                style={[
                  ApplicationStyles.h3,
                  {
                    fontWeight: "bold",
                    color: colors.darkText,
                    alignSelf: "center",
                    // marginHorizontal: totalSize(1),
                    marginTop: totalSize(1.5),
                    marginBottom: totalSize(2)
                  }
                ]}
              >
                Browse
              </Text>
              <Text
                style={[
                  ApplicationStyles.h45,
                  {
                    fontWeight: "normal",
                    color: colors.darkText,
                    alignSelf: "center",
                    textAlign: "center",
                    marginHorizontal:
                      Platform.OS == "ios" ? totalSize(7) : totalSize(10),
                    marginTop: totalSize(1)
                  }
                ]}
              >
                Browse through different types of coaches that are suited to
                your specific need!
              </Text>

              <TouchableOpacity
                style={[
                  ApplicationStyles.initalScreenButton,
                  {
                    backgroundColor: colors.darkText,
                    marginTop: totalSize(3),
                    marginBottom: totalSize(5),
                    alignSelf: "center"
                  }
                ]}
                onPress={() => this.props.navigation.navigate("App")}
              >
                <Text
                  style={[
                    ApplicationStyles.h4,
                    {
                      color: colors.Green,
                      fontWeight: "normal",
                      fontFamily: fonts.futuraMedium
                    }
                  ]}
                >
                  {" "}
                  Start{" "}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default WalkthroughScreen;
