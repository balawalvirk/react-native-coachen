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

const CoachesList = [
  {
    type: "Mille Knudsen",
    color: colors.Red
  },
  {
    type: "Mille Knudsen",
    color: colors.Purple
  },
  {
    type: "Mille Knudsen",
    color: colors.star
  },
  {
    type: "Mille Knudsen",
    color: colors.lightRed
  },
  {
    type: "Mille Knudsen",
    color: colors.tagBlue
  }
];

class Conversation extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: "Mille Knudsen",
      headerTitleStyle: {
        color: colors.darkText,
        fontSize: ApplicationStyles.headerTitleFontSize,
        fontWeight: Platform.OS == "ios" ? "bold" : "normal",
        fontFamily: fonts.futuraBold
        //left: width(100) / 3
      },
      headerTitleContainerStyle: {
        alignItems: "center",
        justifyContent: "center"
      },
      headerStyle: {
        backgroundColor: colors.homeBgColor,
        shadowColor: "transparent",
        shadowRadius: 0,
        elevation: 0,
        borderBottomWidth: 0,
        shadowOffset: {
          height: 0
        }
      },
      headerRight: (
        <TouchableOpacity
        // onPress={() => navigation.openDrawer()}
        >
          <Image
            source={require("../../Images/search.png")}
            style={[
              ApplicationStyles.headerIconStyle,
              {
                marginRight: totalSize(3),
                tintColor: colors.darkText
              }
            ]}
            tintColor={colors.darkText}
          />
        </TouchableOpacity>
      ),
      headerLeft: (
        <TouchableOpacity onPress={() => navigation.pop()}>
          <Image
            source={require("../../Images/back.png")}
            style={[
              ApplicationStyles.headerIconStyle,
              {
                marginLeft: totalSize(3),
                tintColor: colors.darkText
              }
            ]}
            tintColor={colors.darkText}
          />
        </TouchableOpacity>
        // <Icon
        //   name={"arrow-left"}
        //   color={colors.darkText}
        //   size={26}
        //   style={{ marginLeft: totalSize(2) }}
        //   onPress={() => navigation.pop()}
        // />
      )
    };
  };

  render() {
    return (
      <View
        style={[
          styles.container,
          {
            backgroundColor: colors.homeBgColor
          }
        ]}
      >
        <View
          style={[
            styles.container,
            {
              backgroundColor: colors.homeBgColor
            }
          ]}
        >
          <ScrollView style={[styles.container]}>
            <View style={[styles.container, { padding: totalSize(4) }]}>
              <View
                style={[
                  ApplicationStyles.row,
                  { marginVertical: totalSize(2) }
                ]}
              >
                <Image
                  source={require("../../Images/dummy_profile_pic.jpg")}
                  style={[
                    {
                      width: totalSize(6),
                      height: totalSize(6),
                      borderRadius: totalSize(6) / 2,
                      marginRight: totalSize(1.5)
                    }
                  ]}
                />
                <View
                  style={{
                    backgroundColor: colors.Green,
                    justifyContent: "center",
                    alignItems: "center",
                    borderTopLeftRadius:
                      Platform.OS == "ios" ? totalSize(3) : totalSize(5),
                    borderTopRightRadius: totalSize(5),
                    borderBottomRightRadius: totalSize(5)
                  }}
                >
                  <Text
                    style={[
                      Platform.OS == "ios"
                        ? ApplicationStyles.h5
                        : ApplicationStyles.h45,
                      {
                        fontWeight: "normal",
                        color: colors.darkText,
                        marginHorizontal: totalSize(2),
                        fontFamily: fonts.poppinsRegular
                        //marginVertical: totalSize(3)
                      }
                    ]}
                  >
                    Hey send me an audio file!
                  </Text>
                </View>
              </View>
              <View
                style={[
                  ApplicationStyles.row,
                  { marginVertical: totalSize(2), alignSelf: "flex-end" }
                ]}
              >
                <View
                  style={{
                    backgroundColor: colors.darkText,
                    justifyContent: "center",
                    alignItems: "center",
                    borderTopLeftRadius: totalSize(5),
                    borderTopRightRadius:
                      Platform.OS == "ios" ? totalSize(3) : totalSize(5),
                    borderBottomLeftRadius: totalSize(5)
                  }}
                >
                  <Text
                    style={[
                      Platform.OS == "ios"
                        ? ApplicationStyles.h5
                        : ApplicationStyles.h45,
                      {
                        fontWeight: "normal",
                        color: colors.snow,
                        marginHorizontal: totalSize(2),
                        fontFamily: fonts.poppinsRegular
                        //marginVertical: totalSize(3)
                      }
                    ]}
                  >
                    Yep, here it is.
                  </Text>
                </View>
                <Image
                  source={require("../../Images/dummy_profile_pic.jpg")}
                  style={[
                    {
                      width: totalSize(6),
                      height: totalSize(6),
                      borderRadius: totalSize(6) / 2,
                      marginLeft: totalSize(1.5)
                    }
                  ]}
                />
              </View>
              <View
                style={[
                  ApplicationStyles.row,
                  { marginVertical: totalSize(2) }
                ]}
              >
                <View
                  style={{
                    width: totalSize(6),
                    height: totalSize(6),
                    borderRadius: totalSize(6) / 2,
                    backgroundColor: "transparent",
                    marginRight: totalSize(1.5)
                  }}
                />
                <View
                  style={{
                    // borderRadius: totalSize(5),
                    // borderWidth: 0.7,
                    // borderColor: colors.Blue,
                    backgroundColor: colors.Green,
                    justifyContent: "center",
                    alignItems: "center",
                    borderTopLeftRadius:
                      Platform.OS == "ios" ? totalSize(3) : totalSize(5),
                    borderTopRightRadius: totalSize(5),
                    // borderBottomLeftRadius: totalSize(5),
                    borderBottomRightRadius: totalSize(5)
                  }}
                >
                  <Text
                    style={[
                      Platform.OS == "ios"
                        ? ApplicationStyles.h5
                        : ApplicationStyles.h45,
                      {
                        fontWeight: "normal",
                        color: colors.darkText,
                        marginHorizontal: totalSize(2),
                        fontFamily: fonts.poppinsRegular
                        //marginVertical: totalSize(3)
                      }
                    ]}
                  >
                    Very Good !
                  </Text>
                </View>
              </View>
              <View
                style={[
                  ApplicationStyles.row,
                  { marginVertical: totalSize(2) }
                ]}
              >
                <View
                  style={{
                    width: totalSize(6),
                    height: totalSize(6),
                    borderRadius: totalSize(6) / 2,
                    backgroundColor: "transparent",
                    marginRight: totalSize(1.5)
                  }}
                />
                <View
                  style={{
                    // borderRadius: totalSize(5),
                    // borderWidth: 0.7,
                    // borderColor: colors.Blue,
                    backgroundColor: colors.Green,
                    justifyContent: "center",
                    alignItems: "center",
                    borderTopLeftRadius:
                      Platform.OS == "ios" ? totalSize(3) : totalSize(5),
                    borderTopRightRadius: totalSize(5),
                    // borderBottomLeftRadius: totalSize(5),
                    borderBottomRightRadius: totalSize(5)
                  }}
                >
                  <Text
                    style={[
                      Platform.OS == "ios"
                        ? ApplicationStyles.h5
                        : ApplicationStyles.h45,
                      {
                        fontWeight: "normal",
                        color: colors.darkText,
                        marginHorizontal: totalSize(2),
                        fontFamily: fonts.poppinsRegular
                        //marginVertical: totalSize(3)
                      }
                    ]}
                  >
                    Thanks.
                  </Text>
                </View>
              </View>
              <View
                style={[
                  ApplicationStyles.row,
                  { marginVertical: totalSize(2) }
                ]}
              >
                <Image
                  source={require("../../Images/dummy_profile_pic.jpg")}
                  style={[
                    {
                      width: totalSize(6),
                      height: totalSize(6),
                      borderRadius: totalSize(6) / 2,
                      marginRight: totalSize(1.5)
                    }
                  ]}
                />
                <View
                  style={{
                    backgroundColor: colors.Green,
                    justifyContent: "center",
                    alignItems: "center",
                    borderTopLeftRadius:
                      Platform.OS == "ios" ? totalSize(3) : totalSize(5),
                    borderTopRightRadius: totalSize(5),
                    borderBottomRightRadius: totalSize(5)
                  }}
                >
                  <Text
                    style={[
                      Platform.OS == "ios"
                        ? ApplicationStyles.h5
                        : ApplicationStyles.h45,
                      {
                        fontWeight: "normal",
                        color: colors.darkText,
                        marginHorizontal: totalSize(2),
                        fontFamily: fonts.poppinsRegular
                      }
                    ]}
                  >
                    Hey, Send me audio file!
                  </Text>
                </View>
              </View>
            </View>
          </ScrollView>
          <View
            style={{
              //alignSelf: "flex-end",
              justifyContent: "center",
              alignItems: "center",
              marginVertical: totalSize(4)
            }}
          >
            <View
              style={{
                width: width(80),
                height: totalSize(5),
                borderRadius: totalSize(5),
                borderColor: colors.Blue,
                backgroundColor: colors.snow,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between"
              }}
            >
              <Text
                style={[
                  Platform.OS == "ios"
                    ? ApplicationStyles.h4
                    : ApplicationStyles.h375,
                  {
                    fontWeight: "normal",
                    color: colors.darkText,
                    marginHorizontal: totalSize(2),
                    fontFamily: fonts.poppinsLight
                  }
                ]}
              >
                Messages ...
              </Text>
              <Image
                source={require("../../Images/Call.png")}
                style={[
                  {
                    width: totalSize(4),
                    height: totalSize(4),
                    // resizeMode: "center",
                    marginRight: totalSize(2),
                    tintColor: colors.darkText
                  }
                ]}
                tintColor={colors.darkText}
              />
            </View>
          </View>
        </View>
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
    borderRadius: 2.5,
    alignItems: "center",
    justifyContent: "center"
  },
  detailContainer: {
    width: width(80),
    borderBottomWidth: 1,
    marginVertical: height(1)
  },
  collapsibleParent: {
    width: "100%",
    backgroundColor: colors.snow,
    borderBottomLeftRadius: totalSize(5),
    borderBottomRightRadius: totalSize(5)
  },
  collapsibleChild: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: totalSize(1)
  }
});

export default Conversation;
