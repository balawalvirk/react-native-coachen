import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  Platform
} from "react-native";
import colors from "../../Themes/Colors";
import ApplicationStyles from "../../Themes/ApplicationStyles";
import { totalSize, height, width } from "react-native-dimension";
import Icon from "react-native-vector-icons/FontAwesome";
import { fonts } from "../../Themes/Fonts";

const tagList = [
  {
    type: "Category B",
    color: colors.Red
  },
  {
    type: "Category E",
    color: colors.Purple
  }
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
const profileList = [
  {
    type: "Mille Knudsen",
    color: colors.Red,
    category: "Category D"
  },
  {
    type: "Mille Knudsen",
    color: colors.Purple,
    category: "Category D"
  },
  {
    type: "Mille Knudsen",
    color: colors.star,
    category: "Category B"
  },
  {
    type: "Mille Knudsen",
    color: colors.lightRed,
    category: "Category E"
  },
  {
    type: "Mille Knudsen",
    color: colors.tagBlue,
    category: "Category C"
  },
  {
    type: "Mille Knudsen",
    color: colors.tagPurple,
    category: "Category A"
  }
];

class CoachProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: "Coach Profile",
      headerStyle: {
        backgroundColor: colors.tagPurple,
        shadowColor: "transparent",
        shadowRadius: 0,
        elevation: 0,
        borderBottomWidth: 0,
        shadowOffset: {
          height: 0
        }
      },
      headerTitleStyle: {
        color: colors.darkPurple,
        fontSize: ApplicationStyles.headerTitleFontSize,
        fontWeight: "normal",
        fontFamily: fonts.futuraMedium
        //left: width(100) / 3
      },
      headerTitleContainerStyle: {
        alignItems: "center",
        justifyContent: "center"
      },
      headerRight: (
        <Icon
          name={"bars"}
          color={colors.darkPurple}
          size={26}
          style={{ marginRight: totalSize(2) }}
          onPress={() => navigation.openDrawer()}
        />
      ),
      headerLeft: (
        <Icon
          name={"arrow-left"}
          color={colors.darkPurple}
          size={26}
          style={{ marginLeft: totalSize(2) }}
          onPress={() => navigation.pop()}
        />
      )
    };
  };

  render() {
    return (
      <View style={[styles.container, { backgroundColor: colors.tagPurple }]}>
        <ScrollView
          style={[styles.container, { backgroundColor: colors.homeBgColor }]}
        >
          <View
            style={{
              width: "100%",
              height: totalSize(10),
              backgroundColor: colors.tagPurple,
              position: "absolute"
            }}
          />
          <View
            style={{
              backgroundColor: "#FFFFFF",
              borderBottomWidth: 1,
              borderLeftWidth: 1,
              borderColor: colors.ShadowColor,
              shadowColor: colors.ShadowColor,
              shadowOffset: {
                width: 0,
                height: 1
              },
              shadowRadius: 1,
              shadowOpacity: 0.1,
              elevation: 1,
              //marginTop: totalSize(2),
              borderBottomLeftRadius: totalSize(5),
              borderTopLeftRadius: totalSize(5),
              borderTopRightRadius: totalSize(5)
              //position: "absolute"
            }}
          >
            <View
              style={{
                marginHorizontal: totalSize(3),
                marginTop: totalSize(5),
                marginBottom: totalSize(1)
              }}
            >
              <View style={[ApplicationStyles.row]}>
                <Image
                  source={require("../../Images/dummy_profile_pic.jpg")}
                  style={[
                    Platform.OS == "ios"
                      ? ApplicationStyles.profilepictureStyleIos
                      : ApplicationStyles.profilepictureStyle
                  ]}
                />
                <View>
                  <View
                    style={[
                      ApplicationStyles.row,
                      { marginTop: totalSize(1.5) }
                    ]}
                  >
                    <View>
                      <Text
                        style={[
                          Platform.OS == "ios"
                            ? ApplicationStyles.h45
                            : ApplicationStyles.h35,
                          {
                            fontWeight: "bold",
                            color: colors.darkPurple,
                            marginHorizontal: totalSize(1)
                            //marginVertical: totalSize(3)
                          }
                        ]}
                      >
                        Mille Knudsen
                      </Text>
                      <Text
                        style={[
                          Platform.OS == "ios"
                            ? ApplicationStyles.h5
                            : ApplicationStyles.h45,
                          {
                            fontWeight: "normal",
                            color: colors.darkPurple,
                            marginHorizontal: totalSize(1)
                            //marginVertical: totalSize(3)
                          }
                        ]}
                      >
                        Location
                      </Text>
                    </View>

                    <View>
                      <View
                        style={[
                          ApplicationStyles.row,
                          {
                            justifyContent: "space-between",
                            alignItems: "center"
                          }
                        ]}
                      >
                        <Icon name={"star"} color={colors.star} size={23} />
                        <Text
                          style={[
                            Platform.OS == "ios"
                              ? ApplicationStyles.h5
                              : ApplicationStyles.h45,
                            {
                              fontWeight: "bold",
                              color: colors.star,
                              marginHorizontal: totalSize(1)
                            }
                          ]}
                        >
                          4.5
                        </Text>
                        <Icon
                          name={"heart"}
                          color={colors.lightBlue}
                          size={23}
                          style={{ marginLeft: totalSize(4) }}
                        />
                      </View>
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
                    {tagList.map((item, key) => {
                      return (
                        <View
                          style={{
                            backgroundColor: item.color,
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
                                marginVertical: totalSize(0.2),
                                marginHorizontal: totalSize(1.3)
                              }
                            ]}
                          >
                            {item.type}
                          </Text>
                        </View>
                      );
                    })}
                  </View>
                </View>
              </View>
            </View>

            <View
              style={{
                marginHorizontal: totalSize(3),
                marginBottom: totalSize(3)
              }}
            >
              <Text
                style={[
                  Platform.OS == "ios"
                    ? ApplicationStyles.h45
                    : ApplicationStyles.h35,
                  {
                    fontWeight: "bold",
                    color: colors.darkPurple,
                    marginHorizontal: totalSize(1)
                  }
                ]}
              >
                About
              </Text>
              <Text
                style={[
                  ApplicationStyles.h45,
                  {
                    fontWeight: "normal",
                    color: colors.darkPurple,
                    marginHorizontal: totalSize(1)
                    //marginVertical: totalSize(3)
                  }
                ]}
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text.
              </Text>
            </View>

            <View
              style={{
                marginHorizontal: totalSize(3)
                //marginVertical: totalSize(3)
              }}
            >
              <Text
                style={[
                  Platform.OS == "ios"
                    ? ApplicationStyles.h45
                    : ApplicationStyles.h35,
                  {
                    fontWeight: "bold",
                    color: colors.darkPurple,
                    marginHorizontal: totalSize(1),
                    marginBottom: totalSize(1)
                  }
                ]}
              >
                10 Lessons taken
              </Text>
              <View
                style={{
                  width: width(80),
                  height: totalSize(1.1),
                  backgroundColor: colors.tagPurple,
                  borderRadius: totalSize(2),
                  marginBottom: totalSize(8)
                }}
              >
                <View
                  style={{
                    width: width(14),
                    height: totalSize(1.1),
                    borderRadius: totalSize(2),
                    backgroundColor: colors.darkPurple
                  }}
                />
              </View>
            </View>
          </View>

          <View
            style={[
              styles.container,
              {
                flex: 1,
                width: "100%",
                paddingVertical: totalSize(3),
                paddingLeft: totalSize(2.5),
                justifyContent: "flex-end"
              }
            ]}
          >
            {profileList.map((item, key) => {
              return (
                <TouchableOpacity
                  style={[
                    ApplicationStyles.row,
                    {
                      flex: 1,
                      //width: "100%",
                      backgroundColor: colors.snow,
                      paddingHorizontal: totalSize(2),
                      paddingVertical: totalSize(3.5),
                      marginBottom: totalSize(1),
                      justifyContent: "space-between",
                      alignItems: "center",
                      borderTopLeftRadius: totalSize(5),
                      borderBottomLeftRadius: totalSize(5)
                    }
                  ]}
                  onPress={() => this.props.navigation.navigate("Details")}
                  key={key}
                >
                  <View
                    style={[ApplicationStyles.row, { alignItems: "center" }]}
                  >
                    <Image
                      source={require("../../Images/dummy_profile_pic.jpg")}
                      style={[
                        Platform.OS == "ios"
                          ? ApplicationStyles.profilepictureStyleIos
                          : ApplicationStyles.profilepictureStyle
                      ]}
                    />
                    <View>
                      <View style={[ApplicationStyles.row]}>
                        <View>
                          <Text
                            style={[
                              Platform.OS == "ios"
                                ? ApplicationStyles.h45
                                : ApplicationStyles.h4,
                              {
                                fontWeight: "bold",
                                color: colors.darkPurple,
                                marginHorizontal: totalSize(1)
                                //marginVertical: totalSize(3)
                              }
                            ]}
                          >
                            {item.type}
                          </Text>
                          <Text
                            style={[
                              Platform.OS == "ios"
                                ? ApplicationStyles.h5
                                : ApplicationStyles.h45,
                              {
                                fontWeight: "normal",
                                color: colors.darkPurple,
                                marginHorizontal: totalSize(1)
                                //marginVertical: totalSize(3)
                              }
                            ]}
                          >
                            Location
                          </Text>

                          <View
                            style={{
                              backgroundColor: item.color,
                              width: totalSize(13),
                              borderRadius: totalSize(5),
                              justifyContent: "center",
                              alignItems: "center",
                              marginHorizontal: totalSize(1)
                            }}
                          >
                            <Text
                              style={[
                                Platform.OS == "ios"
                                  ? ApplicationStyles.h45
                                  : ApplicationStyles.h4,
                                {
                                  fontWeight: "normal",
                                  color: colors.snow,
                                  marginVertical: totalSize(0.25)
                                  //marginHorizontal: totalSize(1.3)
                                }
                              ]}
                            >
                              {item.category}
                            </Text>
                          </View>
                          <Text
                            style={[
                              Platform.OS == "ios"
                                ? ApplicationStyles.h45
                                : ApplicationStyles.h4,
                              {
                                fontWeight: "bold",
                                color: colors.snow,
                                marginHorizontal: totalSize(1)
                                //marginVertical: totalSize(3)
                              }
                            ]}
                          >
                            {item.lesson}
                          </Text>
                        </View>

                        <View style={[ApplicationStyles.row]}>
                          <Icon name={"star"} color={colors.star} size={23} />
                          <Text
                            style={[
                              Platform.OS == "ios"
                                ? ApplicationStyles.h5
                                : ApplicationStyles.h45,
                              {
                                fontWeight: "bold",
                                color: colors.star,
                                marginHorizontal: totalSize(0.5)
                              }
                            ]}
                          >
                            4.5
                          </Text>
                        </View>
                      </View>
                    </View>
                  </View>

                  <View
                    style={{
                      alignItems: "center"
                    }}
                  >
                    <Icon
                      name={"heart"}
                      color={colors.lightBlue}
                      size={23}
                      style={{ marginBottom: totalSize(2) }}
                    />
                    <Text
                      style={[
                        ApplicationStyles.h35,
                        {
                          fontWeight: "bold",
                          color: colors.seaGreen,
                          marginRight: totalSize(1),
                          marginTop: totalSize(2.5)
                        }
                      ]}
                    >
                      100kr
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
        </ScrollView>
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
    fontWeight: "bold"
  },
  h2: {
    fontSize: totalSize(4),
    fontWeight: "bold"
  },
  h3: {
    fontSize: totalSize(3),
    fontWeight: "bold"
  },
  h4: {
    fontSize: totalSize(2),
    color: "grey"
  },
  h5: {
    fontSize: totalSize(1.5)
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
  }
});

export default CoachProfile;
