import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Image,
  TextInput,
  Platform,
  ScrollView
} from "react-native";
import colors from "../../Themes/Colors";
import { CheckBox } from "react-native-elements";
import ApplicationStyles from "../../Themes/ApplicationStyles";
import { totalSize, height, width } from "react-native-dimension";
import Icon from "react-native-vector-icons/FontAwesome";
import { fonts } from "../../Themes/Fonts";

class ForgotPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      name: "",
      role: "",
      profile_photo: "",
      city: "",
      phone: "",
      about: "",
      background: ""
      //category_id 0
      //type_id 0
    };
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
              styles.container,
              {
                backgroundColor: colors.homeBgColor,
                borderTopLeftRadius: totalSize(5),
                borderTopRightRadius: totalSize(5),
                width: "100%",
                paddingTop: totalSize(3)
              }
            ]}
          >
            <ScrollView style={styles.container}>
              <View
                style={[
                  styles.container,
                  {
                    alignItems: "center",
                    marginTop: totalSize(10)
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
                    Fill below fields for{" "}
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
                      marginBottom: totalSize(3)
                    }
                  ]}
                >
                  to continue {"<3"}
                </Text>

                <View style={styles.inputContainerStyle}>
                  <TextInput
                    style={styles.inputfieldStyle}
                    placeholder="Email"
                    placeholderTextColor={colors.steel}
                    underlineColorAndroid="transparent"
                    onChangeText={text => this.setState({ email: text })}
                  />
                </View>
                <View style={styles.inputContainerStyle}>
                  <TextInput
                    style={styles.inputfieldStyle}
                    placeholder="New Password"
                    placeholderTextColor={colors.steel}
                    underlineColorAndroid="transparent"
                    onChangeText={text => this.setState({ email: text })}
                  />
                </View>
                <View style={styles.inputContainerStyle}>
                  <TextInput
                    style={styles.inputfieldStyle}
                    placeholder="Re-enter New Password"
                    placeholderTextColor={colors.steel}
                    underlineColorAndroid="transparent"
                    onChangeText={text => this.setState({ email: text })}
                  />
                </View>

                <TouchableOpacity
                  style={[
                    ApplicationStyles.initalScreenButton,
                    {
                      backgroundColor: colors.SplashBlueBg,
                      marginTop: totalSize(2),
                      marginBottom: totalSize(1.2)
                    }
                  ]}
                  onPress={() => this.props.navigation.navigate("initial")}
                >
                  <Text
                    style={[
                      Platform.OS == "ios"
                        ? ApplicationStyles.initialScreenButtonTextIos
                        : ApplicationStyles.initialScreenButtonTextAndroid, //h4
                      {
                        // color: colors.darkText,
                        color: colors.snow,
                        // fontWeight: "bold",
                        fontFamily: fonts.futuraMedium
                      }
                    ]}
                  >
                    Log In
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
                  Don't have an account?{" "}
                </Text>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate("signup")}
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
                    Register
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
  buttonSmall: {
    alignItems: "center",
    justifyContent: "center",
    height: totalSize(5),
    backgroundColor: colors.lightPink,
    borderRadius: 2.5
  },
  inputContainerStyle: {
    width: width(80),
    height: height(8),
    borderRadius: totalSize(5),
    borderColor: colors.Blue,
    backgroundColor: colors.snow,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: totalSize(1.5),
    marginBottom: totalSize(1.5)
  },
  inputfieldStyle: {
    flex: 1,
    fontWeight: "normal",
    color: colors.darkText,
    fontFamily: fonts.poppinsLight
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

export default ForgotPassword;
