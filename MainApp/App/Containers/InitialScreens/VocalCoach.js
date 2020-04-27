import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Platform,
  ScrollView,
  Dimensions,
} from "react-native";
import colors from "../../Themes/Colors";
import ApplicationStyles from "../../Themes/ApplicationStyles";
import { totalSize, height, width } from "react-native-dimension";
import Icon from "react-native-vector-icons/FontAwesome";
import { fonts } from "../../Themes/Fonts";
import { getCoachById,get_unread_message, 
  get_coach_total_earnig, get_coach_total_fav, get_coach_total_session } from "../../backend/user/Jobs";
import ProgressBarAnimated from 'react-native-progress-bar-animated';
const tagList = [
  {
    type: "Music",
    color: colors.Red
  }
  // {
  //   type: "Category E",
  //   color: colors.lightRed
  // }
  // {
  //   type: "Jazz",
  //   color: colors.star
  // },
  // {
  //   type: "Musikal",
  //   color: colors.lightRed
  // },
  // {
  //   type: "Visa",
  //   color: colors.tagBlue
  // },
  // {
  //   type: "Soul",
  //   color: colors.tagPurple
  // }
];

class VocalCoach extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "",
      tagList: "",
      total_earning: "",
      total_fav: "",
      get_all_session: "",
      get_unread_message:"",
    };
  }

  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: "Coachen",
      headerTitleStyle: {
        color: colors.Green,
        fontSize: ApplicationStyles.headerTitleFontSize,
        fontWeight: "normal",
        fontFamily: fonts.futuraMedium
        //left: width(100) / 3
      },
      headerTitleContainerStyle: {
        alignItems: "center",
        justifyContent: "center"
      },
      headerStyle: {
        backgroundColor: colors.darkText,
        shadowColor: "transparent",
        shadowRadius: 0,
        elevation: 0,
        borderBottomWidth: 0,
        shadowOffset: {
          height: 0
        }
      }
    };
  };
  async componentDidMount() {
    let data = await getCoachById();
    let total_earning = await get_coach_total_earnig();
    let total_fav = await get_coach_total_fav();
    let get_all_session = await get_coach_total_session();
    let get_unread_messages= await get_unread_message();
    let txt = get_unread_messages;
   
    var lastChar= this.getLastChar(txt);
    this.setState({
      data: data, total_earning: total_earning,
      total_fav: total_fav,
      get_all_session: get_all_session,
      get_unread_messages:get_unread_messages
    });

    console.log(lastChar);
  };

  async getLastChar(txt){
    
    var lastChar = String(txt).substr(txt.toString().length - 1);
    return lastChar
  }
  render() {

    return (
      <View style={[styles.container, { backgroundColor: colors.darkText }]}>
        <View
          style={[
            styles.container,
            {
              backgroundColor: colors.homeBgColor
            }
          ]}
        >
          <ScrollView style={[styles.container]}>
            <View
              style={{
                backgroundColor: colors.snow,
                borderBottomWidth: 1,
                borderLeftWidth: 1,
                borderColor: colors.ShadowColor,
                borderBottomLeftRadius: totalSize(5),
                borderTopLeftRadius: totalSize(5),
                borderTopRightRadius: totalSize(5)
              }}
            >
              <View
                style={{
                  marginHorizontal: totalSize(3),
                  marginTop: totalSize(5)
                }}
              >
                <View style={[ApplicationStyles.row]}>

                  <Image
                    source={{ uri: this.state.data.profile_photo }}
                    style={[
                      Platform.OS == "ios"
                        ? ApplicationStyles.profilepictureStyleIos
                        : ApplicationStyles.profilepictureStyle,
                      { marginRight: totalSize(1) }
                    ]}
                  />

                  <View>
                    <View style={[ApplicationStyles.row]}>
                      <View>
                        <View
                          style={[
                            ApplicationStyles.row,
                            { justifyContent: "center", alignItems: "center" }
                          ]}
                        >
                          <Text
                            style={[
                              Platform.OS == "ios"
                                ? ApplicationStyles.profileNameIos
                                : ApplicationStyles.profileName,
                              {
                                // fontWeight: "bold",
                                color: colors.darkPurple,
                                marginHorizontal: totalSize(1),
                                fontFamily: fonts.futuraMedium
                              }
                            ]}
                          >
                            {this.state.data.name}
                          </Text>
                          <Icon name={"star"} color={colors.star} size={22} />
                          <Text
                            style={[
                              Platform.OS == "ios"
                                ? ApplicationStyles.h45
                                : ApplicationStyles.h375,
                              {
                                fontWeight: "normal",
                                color: colors.star,
                                marginHorizontal: totalSize(0.5)
                              }
                            ]}
                          >
                            {this.state.data.averrage_rating}
                          </Text>
                        </View>

                        <Text
                          style={[
                            Platform.OS == "ios"
                              ? ApplicationStyles.h5
                              : ApplicationStyles.h4,
                            {
                              fontWeight: "normal",
                              color: colors.darkPurple,
                              marginHorizontal: totalSize(1),
                              // marginBottom: totalSize(0.3),
                              fontFamily: fonts.poppinsRegular
                            }
                          ]}
                        >
                          {this.state.data.type ? (
                            this.state.data.type.name) : null}
                        </Text>
                      </View>
                    </View>
                    <View
                      style={[
                        ApplicationStyles.row,
                        {
                          width: totalSize(30),
                          flexWrap: "wrap"
                        }
                      ]}
                    >
                      {this.state.data.category ? (
                        this.state.data.category.map((item, key) => {
                          return (
                            <View
                              style={{
                                backgroundColor: item.color,
                                width: width(15),
                                justifyContent: "center",
                                alignItems: "center",
                                marginHorizontal: totalSize(1),
                                marginVertical: totalSize(0.35),
                                borderRadius: totalSize(5)
                              }}
                              key={key}
                            >
                              <Text
                                style={[
                                  Platform.OS == "ios"
                                    ? ApplicationStyles.h5
                                    : ApplicationStyles.h45,
                                  {
                                    fontWeight: "normal",
                                    color: colors.snow,
                                    marginVertical: totalSize(0.2)
                                    // marginHorizontal: totalSize(1.3)
                                  }
                                ]}
                              >
                                {item.name}
                              </Text>
                            </View>
                          );
                        })) : null}
                    </View>
                  </View>
                </View>
              </View>

              <View
                style={{
                  marginHorizontal: totalSize(3),
                  marginVertical: totalSize(3)
                }}
              >
                <Text
                  style={[
                    Platform.OS == "ios"
                      ? ApplicationStyles.h4
                      : ApplicationStyles.h375,
                    {
                      fontWeight: "normal",
                      fontFamily: fonts.Futura,
                      color: colors.darkPurple,
                      marginHorizontal: totalSize(1),
                      fontFamily: fonts.futuraMedium
                    }
                  ]}
                >
                  About
                </Text>
                <Text
                  style={[
                    Platform.OS == "ios"
                      ? ApplicationStyles.h5
                      : ApplicationStyles.h45,
                    {
                      fontWeight: "normal",
                      fontFamily: fonts.poppinsRegular,
                      color: colors.darkPurple,
                      marginHorizontal: totalSize(1)
                      //marginVertical: totalSize(3)
                    }
                  ]}
                >
                  {this.state.data.about}
                </Text>
              </View>

              <View
                style={{
                  marginHorizontal: totalSize(3),
                  marginBottom: totalSize(1),
                  flexDirection: "row",
                  justifyContent: "space-between"
                }}
              >
                <TouchableOpacity
                  style={[
                    ApplicationStyles.row,
                    ApplicationStyles.alingCenter,
                    { marginBottom: totalSize(2) }
                  ]}
                  onPress={() => this.props.navigation.navigate("convo")}
                >
                  <Image
                    source={require("../../Images/message.png")}
                    style={[
                      {
                        width:
                          Platform.OS == "ios" ? totalSize(3) : totalSize(3.5),
                        height:
                          Platform.OS == "ios" ? totalSize(3) : totalSize(3.5),
                        // resizeMode: "center",
                        tintColor: colors.darkText
                      }
                    ]}
                    tintColor={colors.darkText}
                  />
                  <Text
                    style={[
                      Platform.OS == "ios"
                        ? ApplicationStyles.h4
                        : ApplicationStyles.h35,
                      {
                        fontWeight: "normal",
                        fontFamily: fonts.Futura,
                        color: colors.darkPurple,
                        marginHorizontal: totalSize(3),
                        fontFamily: fonts.futuraMedium
                        //comments
                      }
                    ]}
                  >
                    Messages
                  </Text>
                </TouchableOpacity>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <View
                    style={{
                      width:
                        Platform.OS == "ios" ? totalSize(2.5) : totalSize(3),
                      height:
                        Platform.OS == "ios" ? totalSize(2.5) : totalSize(3),
                      borderRadius:
                        Platform.OS == "ios"
                          ? totalSize(2.5) / 2
                          : totalSize(3) / 2,
                      marginRight: totalSize(2),
                      backgroundColor: colors.Red,
                      justifyContent: "center",
                      alignItems: "center"
                    }}
                  >
                    <Text
                      style={[
                        Platform.OS == "ios"
                          ? ApplicationStyles.h5
                          : ApplicationStyles.h45,
                        {
                          fontWeight: "bold",
                          color: colors.snow
                        }
                      ]}
                    >
                      6
                    </Text>
                  </View>
                  <Image
                    source={require("../../Images/back.png")}
                    style={[
                      {
                        width:
                          Platform.OS == "ios" ? totalSize(2) : totalSize(2.5),
                        height:
                          Platform.OS == "ios" ? totalSize(2) : totalSize(2.5),
                        // resizeMode: "center",
                        transform: [{ rotate: "180deg" }],
                        // marginLeft: totalSize(3),
                        tintColor: colors.darkText
                      }
                    ]}
                    tintColor={colors.darkText}
                  />
                </View>
              </View>
              <View
                style={{
                  marginHorizontal: totalSize(3),
                  marginBottom: totalSize(2.5),
                  flexDirection: "row",
                  justifyContent: "space-between"
                }}
              >
                <TouchableOpacity
                  style={[ApplicationStyles.row, ApplicationStyles.alingCenter]}
                  onPress={() => this.props.navigation.navigate("Setting")}
                >
                  {/* <Icon name={"gear"} color={colors.darkPurple} size={40} /> */}
                  <Image
                    source={require("../../Images/settings.png")}
                    style={[
                      {
                        width:
                          Platform.OS == "ios" ? totalSize(3) : totalSize(3.5),
                        height:
                          Platform.OS == "ios" ? totalSize(3) : totalSize(3.5),
                        // resizeMode: "center",
                        tintColor: colors.darkText
                        // marginLeft: totalSize(3)
                      }
                    ]}
                    tintColor={colors.darkText}
                  />
                  <Text
                    style={[
                      Platform.OS == "ios"
                        ? ApplicationStyles.h4
                        : ApplicationStyles.h35,
                      {
                        fontWeight: "normal",
                        color: colors.darkPurple,
                        marginHorizontal: totalSize(3),
                        fontFamily: fonts.futuraMedium
                        //comments
                      }
                    ]}
                  >
                    Settings
                  </Text>
                </TouchableOpacity>
                <View>
                  <Image
                    source={require("../../Images/back.png")}
                    style={[
                      {
                        width:
                          Platform.OS == "ios" ? totalSize(2) : totalSize(2.5),
                        height:
                          Platform.OS == "ios" ? totalSize(2) : totalSize(2.5),
                        // resizeMode: "center",
                        transform: [{ rotate: "180deg" }],
                        tintColor: colors.darkText
                      }
                    ]}
                    tintColor={colors.darkText}
                  />
                </View>
              </View>
            </View>
            <View style={styles.container}>
              <View
                style={[
                  ApplicationStyles.row,
                  {
                    backgroundColor: colors.snow,
                    marginHorizontal:
                      Platform.OS == "ios" ? totalSize(2.5) : totalSize(3),
                    marginVertical: totalSize(1.5),
                    borderWidth: 1,
                    borderColor: colors.ShadowColor,
                    borderBottomLeftRadius: totalSize(5),
                    borderTopLeftRadius: totalSize(5),
                    borderBottomRightRadius: totalSize(5),
                    alignItems: "center"
                  }
                ]}
              >
                <View
                  style={[
                    Platform.OS == "ios"
                      ? ApplicationStyles.smallCircleStyleIOS
                      : ApplicationStyles.smallCircleStyle,
                    ApplicationStyles.justifyCenter,
                    ApplicationStyles.alingCenter,
                    {
                      marginRight: totalSize(2),
                      marginLeft: totalSize(2),
                      backgroundColor: colors.Green
                    }
                  ]}
                >
                  <Image
                    source={require("../../Images/stats.png")}
                    style={[
                      ApplicationStyles.iconStyle,
                      { tintColor: colors.darkGreen }
                    ]}
                    tintColor={colors.darkGreen}
                  />
                </View>

                <View
                  style={[ApplicationStyles.row, { marginTop: totalSize(2) }]}
                >
                  <View>
                    <Text
                      style={[
                        Platform.OS == "ios"
                          ? ApplicationStyles.h4
                          : ApplicationStyles.h35,
                        {
                          fontWeight: "normal",

                          color: colors.Green,
                          fontFamily: fonts.futuraMedium
                        }
                      ]}
                    >
                      Total earning {this.state.total_earning.month}
                    </Text>
                    <View
                      style={[
                        ApplicationStyles.row,
                        { marginBottom: totalSize(3), alignItems: "center" }
                      ]}
                    >
                      <Text
                        style={[
                          Platform.OS == "ios"
                            ? ApplicationStyles.h25
                            : ApplicationStyles.h2,
                          {
                            fontWeight: "normal",
                            fontFamily: fonts.futuraMedium,
                            color: colors.Green
                          }
                        ]}
                      >
                        {this.state.total_earning.total > 0 ? this.state.total_earning.total : 0}
                      </Text>
                    </View>
                  </View>
                </View>
              </View>

              <View
                style={[
                  ApplicationStyles.row,
                  {
                    width: "100%",
                    paddingHorizontal:
                      Platform.OS == "ios" ? totalSize(2.5) : totalSize(3),
                    marginBottom: totalSize(12),
                    justifyContent: "space-between"
                  }
                ]}
              >
                <View
                  style={[
                    {
                      // flex: 1,
                      width: width(40),
                      backgroundColor: colors.snow, //snow
                      borderWidth: 1,
                      borderColor: colors.ShadowColor, //ShadowColor
                      borderTopRightRadius: totalSize(5),
                      borderTopLeftRadius: totalSize(5),
                      borderBottomRightRadius: totalSize(5)
                    }
                  ]}
                >
                  <View style={[ApplicationStyles.row]}>
                    <View
                      style={[
                        Platform.OS == "ios"
                          ? ApplicationStyles.smallCircleStyleIOS
                          : ApplicationStyles.smallCircleStyle,
                        ApplicationStyles.justifyCenter,
                        ApplicationStyles.alingCenter,
                        {
                          marginRight: totalSize(0.5),
                          marginLeft: totalSize(2),
                          marginTop: totalSize(2),
                          backgroundColor: colors.tagBlue
                        }
                      ]}
                    >
                      <Icon name={"star"} color={colors.darkBlue} size={32} />
                    </View>
                    <View>
                      <View
                        style={[
                          ApplicationStyles.row,
                          {
                            marginTop: totalSize(3)
                          }
                        ]}
                      >
                        <View>
                          <Text
                            style={[
                              Platform.OS == "ios"
                                ? ApplicationStyles.h25
                                : ApplicationStyles.h2,
                              {
                                fontWeight: "normal",
                                color: colors.tagBlue,
                                marginHorizontal: totalSize(1),
                                fontFamily: fonts.futuraBold
                                //marginVertical: totalSize(3)
                              }
                            ]}
                          >
                            {this.state.get_all_session.total > 0 ? this.state.get_all_session.total : 0}
                          </Text>
                        </View>
                      </View>
                    </View>
                  </View>

                  <View
                    style={[
                      {
                        marginBottom: totalSize(3)
                      }
                    ]}
                  >
                    <Text
                      style={[
                        Platform.OS == "ios"
                          ? ApplicationStyles.h45
                          : ApplicationStyles.h4,
                        {
                          fontWeight: "normal",
                          color: colors.tagBlue,
                          marginLeft: totalSize(2),
                          marginRight: totalSize(1.5),
                          marginTop: totalSize(1),
                          marginBottom: totalSize(1),
                          fontFamily: fonts.futuraMedium
                        }
                      ]}
                    >
                      Sessions made
                    </Text>
                    <View style={{ marginHorizontal: totalSize(2) }}>
                      <ProgressBarAnimated

                        width={width(25)}
                        height={height(1)}
                        value={this.state.get_all_session.total > 0 ? this.state.get_all_session.total : 0}

                        backgroundColorOnComplete="#6CC644"
                      />
                      {/* <View
                        style={{
                          width: width(25),
                          height: height(1),
                          backgroundColor: colors.darkBlue,
                          borderRadius: totalSize(2)
                        }}
                      >
                        <View
                          style={{
                            width: width(12),
                            height: height(1),
                            borderRadius: totalSize(2),
                            backgroundColor: colors.tagBlue
                          }}
                        />
                      </View> */}
                    </View>
                  </View>
                </View>
                <View
                  style={[
                    {
                      // flex: 1,
                      width: width(40),
                      backgroundColor: colors.snow,
                      borderWidth: 1,
                      borderColor: colors.ShadowColor,
                      borderBottomLeftRadius: totalSize(5),
                      borderTopLeftRadius: totalSize(5),
                      borderTopRightRadius: totalSize(5)
                    }
                  ]}
                >
                  <View style={[ApplicationStyles.row]}>
                    <View
                      style={[
                        Platform.OS == "ios"
                          ? ApplicationStyles.smallCircleStyleIOS
                          : ApplicationStyles.smallCircleStyle,
                        ApplicationStyles.justifyCenter,
                        ApplicationStyles.alingCenter,
                        {
                          marginRight: totalSize(0.5),
                          marginLeft: totalSize(2),
                          marginTop: totalSize(2),
                          backgroundColor: colors.Red
                        }
                      ]}
                    >
                      <Image
                        source={require("../../Images/Fav.png")}
                        style={[
                          ApplicationStyles.iconStyle,
                          { tintColor: colors.darkRed }
                        ]}
                        tintColor={colors.darkRed}
                      />
                    </View>
                    <View>
                      <View
                        style={[
                          ApplicationStyles.row,
                          { marginTop: totalSize(3) }
                        ]}
                      >
                        <View>
                          <Text
                            style={[
                              Platform.OS == "ios"
                                ? ApplicationStyles.h25
                                : ApplicationStyles.h2,
                              {
                                fontWeight: "normal",
                                color: colors.Red,
                                marginHorizontal: totalSize(1),
                                fontFamily: fonts.futuraBold
                              }
                            ]}
                          >
                            {this.state.total_fav.total_fav > 0 ? this.state.total_fav.total_fav : 0}
                          </Text>
                        </View>
                      </View>
                    </View>
                  </View>

                  <View style={[{ marginBottom: totalSize(3) }]}>
                    <Text
                      style={[
                        Platform.OS == "ios"
                          ? ApplicationStyles.h45
                          : ApplicationStyles.h4,
                        {
                          fontWeight: "normal",
                          color: colors.Red,
                          marginHorizontal: totalSize(2),
                          marginTop: totalSize(1.2),
                          marginBottom: totalSize(1),
                          fontFamily: fonts.futuraMedium
                        }
                      ]}
                    >
                      Favourites
                    </Text>
                    <View style={{ marginHorizontal: totalSize(2) }}>
                      <ProgressBarAnimated

                        width={width(25)}
                        height={height(1)}
                        value={this.state.total_fav.total_fav > 0 ? this.state.total_fav.total_fav : 0}
                        backgroundColorOnComplete="#9D4949"
                      />
                      {/* <View
                        style={{
                          width: width(25),
                          height: height(1),
                          backgroundColor: colors.darkRed,
                          borderRadius: totalSize(2)
                        }}
                      >
                        <View
                          style={{
                            width: width(10),
                            height: height(1),
                            borderRadius: totalSize(2),
                            backgroundColor: colors.Red
                            //position: "absolute"
                          }}
                        />
                      </View> */}
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </ScrollView>
          <View
            style={[
              ApplicationStyles.row,
              {
                width: "100%",
                alignItems: "center",
                justifyContent: "space-between",
                position: "absolute"
              }
            ]}
          >
            <Image
              source={require("../../Images/headerEdge.png")}
              style={[{ tintColor: colors.darkText }]}
            />
            <Image
              source={require("../../Images/headerEdge.png")}
              style={[
                {
                  tintColor: colors.darkText,
                  transform: [{ rotate: "90deg" }]
                }
              ]}
            />
          </View>
          <View
            style={{
              width: "100%",
              height: height(11),
              backgroundColor: colors.snow,
              paddingTop: totalSize(1),
              paddingBottom: totalSize(3),
              position: "absolute",
              bottom: 0,
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "center",
              shadowRadius: 1,
              shadowColor: "#000000",
              shadowOffset: {
                width: 0,
                height: 2
              },
              shadowOpacity: 0.5,
              elevation: 5
            }}
          >
            <View
              style={{
                backgroundColor: colors.tagBlue,
                width: Platform.OS == "ios" ? totalSize(5) : totalSize(6),
                height: Platform.OS == "ios" ? totalSize(5) : totalSize(6),
                borderRadius:
                  Platform.OS == "ios" ? totalSize(5) / 2 : totalSize(6) / 2,
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <Image
                source={require("../../Images/stats.png")}
                style={[
                  ApplicationStyles.iconStyle,
                  { tintColor: colors.snow }
                ]}
                tintColor={colors.snow}
              />
            </View>

            <Image
              source={require("../../Images/Call.png")}
              style={[
                ApplicationStyles.bigIconStyle,
                {
                  tintColor: colors.darkText
                }
              ]}
              tintColor={colors.darkText}
            />
            <Image
              source={require("../../Images/bookmark.png")}
              style={[
                ApplicationStyles.iconSmallStyle,
                {
                  tintColor: colors.darkGreen
                }
              ]}
              tintColor={colors.darkGreen}
            />
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
  }
});

export default VocalCoach;
