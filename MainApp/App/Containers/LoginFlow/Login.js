import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Image,
  Platform,
  ScrollView
} from "react-native";
import colors from "../../Themes/Colors";
import ApplicationStyles from "../../Themes/ApplicationStyles";
import { totalSize, height, width } from "react-native-dimension";
import Icon from "react-native-vector-icons/FontAwesome";
import { fonts } from "../../Themes/Fonts";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View
        style={[
          styles.container,
          {
            backgroundColor: colors.DarkGreyBg
            // alignItems: "center",
            // justifyContent: "center"
          }
        ]}
      >
        <View
          style={[
            styles.container,
            {
              backgroundColor: colors.DarkGreyBg
              // alignItems: "center",
              // justifyContent: "center"
            }
          ]}
        >
          <View
            style={[
              {
                flex: Platform.OS == "ios" ? 0.45 : 0.35,
                backgroundColor: colors.DarkGreyBg,
                width: "100%"
              }
            ]}
          />
          <View
            style={[
              styles.container,
              {
                backgroundColor: colors.homeBgColor,
                borderTopLeftRadius: totalSize(5),
                borderTopRightRadius: totalSize(5),
                width: "100%"
              }
            ]}
          >
            <View
              style={{
                width: "100%"
              }}
            >
              <View
                style={[
                  {
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: colors.Red,
                    alignSelf: "flex-end",
                    width: totalSize(4),
                    height: totalSize(4),
                    borderRadius: totalSize(4) / 2,
                    margin: totalSize(2.5)
                  }
                ]}
              >
                {/* <Image
                  source={require("../../Images/cross.png")}
                  style={[
                    {
                      width: totalSize(3),
                      height: totalSize(3),
                      resizeMode: "center",
                      marginLeft: totalSize(3)
                    }
                  ]}
                  tintColor={colors.snow}
                /> */}
                <Icon
                  name={"close"}
                  size={18}
                  color={colors.snow}
                  style={
                    {
                      //padding: totalSize(1.2)
                    }
                  }
                />
              </View>
            </View>
            <ScrollView style={styles.container}>
              <View
                style={[
                  styles.container,
                  {
                    alignItems: "center"
                  }
                ]}
              >
                <View style={{ flexDirection: "row" }}>
                  <Text
                    style={[
                      ApplicationStyles.h35,
                      {
                        fontWeight: "normal",
                        color: colors.SplashBlueBg
                        //marginVertical: totalSize(3)
                      }
                    ]}
                  >
                    You need a{" "}
                  </Text>
                  <Text
                    style={[
                      ApplicationStyles.h35,
                      {
                        //fontWeight: "bold",
                        color: colors.SplashBlueBg,
                        fontFamily: fonts.poppinsSemiBold
                        //marginVertical: totalSize(3)
                      }
                    ]}
                  >
                    Coachen Account
                  </Text>
                </View>
                <Text
                  style={[
                    ApplicationStyles.h35,
                    {
                      fontWeight: "normal",
                      color: colors.SplashBlueBg,
                      marginBottom: totalSize(1)
                    }
                  ]}
                >
                  to continue {"<3"}
                </Text>

                <TouchableOpacity
                  style={[
                    ApplicationStyles.initalScreenButton,
                    {
                      backgroundColor: colors.Green,
                      marginTop: totalSize(2),
                      marginBottom: totalSize(1.2)
                    }
                  ]}
                  onPress={() => this.props.navigation.navigate("signup")}
                >
                  <Text
                    style={[
                      Platform.OS == "ios"
                        ? ApplicationStyles.initialScreenButtonTextIos
                        : ApplicationStyles.initialScreenButtonTextAndroid, //h4
                      {
                        color: colors.darkText,
                        // fontWeight: "bold",
                        fontFamily: fonts.futuraMedium
                      }
                    ]}
                  >
                    Register with e-mail
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    ApplicationStyles.initalScreenButton,
                    {
                      backgroundColor: colors.SplashBlueBg,
                      marginBottom: totalSize(2)
                    }
                  ]}
                  onPress={() => this.props.navigation.navigate("signup")}
                >
                  <Text
                    style={[
                      Platform.OS == "ios"
                        ? ApplicationStyles.initialScreenButtonTextIos
                        : ApplicationStyles.initialScreenButtonTextAndroid, //h4
                      {
                        color: colors.Green,
                        fontWeight: "normal",
                        fontFamily: fonts.futuraMedium
                      }
                    ]}
                  >
                    Register with Apple
                  </Text>
                </TouchableOpacity>

                <Text
                  style={[
                    ApplicationStyles.h45,
                    {
                      fontWeight: "normal",
                      color: colors.SplashBlueBg,
                      marginVertical: totalSize(1)
                    }
                  ]}
                >
                  or with
                </Text>

                <View
                  style={[
                    styles.container,
                    {
                      flexDirection: "row",
                      width: "100%",
                      padding: totalSize(2),
                      justifyContent: "center"
                    }
                  ]}
                >
                  <View
                    style={[
                      {
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: colors.facebookColor,
                        alignSelf: "flex-end",
                        width: totalSize(5),
                        height: totalSize(5),
                        borderRadius: totalSize(5) / 2,
                        marginHorizontal: totalSize(2)
                      }
                    ]}
                  >
                    <Icon name={"facebook"} size={28} color={colors.snow} />
                  </View>

                  <View
                    style={[
                      {
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: colors.Red,
                        alignSelf: "flex-end",
                        width: totalSize(5),
                        height: totalSize(5),
                        borderRadius: totalSize(5) / 2,
                        marginHorizontal: totalSize(2)
                      }
                    ]}
                  >
                    <Icon name={"google"} size={28} color={colors.snow} />
                  </View>

                  {/* <View
                    style={[
                      {
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: colors.lightBlue,
                        alignSelf: "flex-end",
                        width: totalSize(6),
                        height: totalSize(6),
                        borderRadius: totalSize(6) / 2
                      }
                    ]}
                  >
                    <Icon
                      name={"twitter"}
                      size={32}
                      color={colors.snow}
                      style={
                        {
                          // padding: totalSize(2)
                        }
                      }
                    />
                  </View>

                  <View
                    style={[
                      {
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: colors.lightRed,
                        alignSelf: "flex-end",
                        width: totalSize(6),
                        height: totalSize(6),
                        borderRadius: totalSize(6) / 2
                      }
                    ]}
                  >
                    <Icon
                      name={"instagram"}
                      size={32}
                      color={colors.snow}
                      style={
                        {
                          // padding: totalSize(1.2)
                        }
                      }
                    />
                  </View> */}
                </View>

                <View style={[styles.container]}>
                  <Text
                    style={[
                      ApplicationStyles.h5,
                      {
                        fontWeight: "normal",
                        color: colors.SplashBlueBg,
                        alignSelf: "center",
                        marginBottom: totalSize(1),
                        textAlign: "center",
                        marginHorizontal: totalSize(5)
                      }
                    ]}
                  >
                    Phasellus fringilla purus metus, vitae pellentesque neque
                    venenatis at, Curabitur
                  </Text>
                </View>
              </View>
            </ScrollView>

            <View style={[{ bottom: 0 }]}>
              <View
                style={{
                  flexDirection: "row",
                  backgroundColor: colors.loginGreenBar,
                  alignItems: "center",
                  justifyContent: "center"
                  //alignSelf: "flex-end"
                }}
              >
                <Text
                  style={[
                    ApplicationStyles.h4,
                    {
                      fontWeight: "normal",
                      color: colors.darkGreen,
                      marginTop: totalSize(1.8),
                      marginBottom:
                        Platform.OS == "ios" ? totalSize(3) : totalSize(1.8)
                    }
                  ]}
                >
                  Already have an account?{" "}
                </Text>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate("loginAuth")}
                >
                  <Text
                    style={[
                      ApplicationStyles.h4,
                      {
                        fontWeight: "bold",
                        color: colors.darkGreen,
                        marginTop: totalSize(1.8),
                        marginBottom:
                          Platform.OS == "ios" ? totalSize(3) : totalSize(1.8)
                      }
                    ]}
                  >
                    Login
                  </Text>
                </TouchableOpacity>
              </View>
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

export default Login;
