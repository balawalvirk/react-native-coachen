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
    type: "Pop",
    color: colors.Red
  },
  {
    type: "Rock",
    color: colors.Purple
  },
  {
    type: "Jazz",
    color: colors.star
  },
  {
    type: "Musikal",
    color: colors.lightRed
  },
  {
    type: "Visa",
    color: colors.tagBlue
  },
  {
    type: "Soul",
    color: colors.tagPurple
  }
];
const profileList = [
  {
    type: "Monday",
    value: "2",
    color: colors.Red
  },
  {
    type: "Saturday",
    value: "6",
    color: colors.Purple
  },
  {
    type: "Friday",
    value: "3",
    color: colors.star
  },
  {
    type: "Tuesday",
    value: "1",
    color: colors.lightRed
  },
  {
    type: "Sunday",
    value: "4",
    color: colors.tagBlue
  },
  {
    type: "Thursday",
    value: "5",
    color: colors.tagPurple
  }
];

class ProfileDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: "Category A",
      headerTitleStyle: {
        color: colors.snowHeader,
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
        backgroundColor: colors.Purple,
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
          color={colors.snowHeader}
          size={26}
          style={{ marginRight: totalSize(2) }}
          onPress={() => navigation.openDrawer()}
        />
      ),
      headerLeft: (
        <Icon
          name={"arrow-left"}
          color={colors.snowHeader}
          size={26}
          style={{ marginLeft: totalSize(2) }}
          onPress={() => navigation.pop()}
        />
      )
    };
  };

  render() {
    return (
      <View style={[styles.container, { backgroundColor: colors.snow }]}>
        <ScrollView
          style={[styles.container, { backgroundColor: colors.snow }]}
        >
          <View
            style={{
              width: "100%",
              height: totalSize(10),
              backgroundColor: colors.Purple,
              position: "absolute"
            }}
          />
          <View
            style={{
              flex: 1,
              //width: "100%",
              backgroundColor: colors.snow,
              borderTopLeftRadius: totalSize(5),
              borderTopRightRadius: totalSize(5)
            }}
          >
            <View
              style={[
                ApplicationStyles.row,
                {
                  //flex: 1,
                  width: "100%",
                  backgroundColor: colors.snow,
                  paddingHorizontal: totalSize(2),
                  paddingVertical: totalSize(3.5),
                  marginBottom: totalSize(1.5),
                  justifyContent: "space-between",
                  alignItems: "center",
                  borderTopLeftRadius: totalSize(5),
                  borderTopRightRadius: totalSize(5)
                }
              ]}
              onPress={() => this.props.navigation.navigate("Details")}
            >
              <View style={[ApplicationStyles.row, { alignItems: "center" }]}>
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

                      <View
                        style={{
                          backgroundColor: colors.tagDarkPurple,
                          width: totalSize(13),
                          borderRadius: totalSize(5),
                          justifyContent: "center",
                          alignItems: "center",
                          marginLeft: totalSize(1)
                        }}
                      >
                        <Text
                          style={[
                            ApplicationStyles.h45,
                            {
                              fontWeight: "normal",
                              color: colors.snow,
                              marginVertical: totalSize(0.25)
                              //marginHorizontal: totalSize(1.3)
                            }
                          ]}
                        >
                          Category B
                        </Text>
                      </View>
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
                        Lesson type A
                      </Text>
                    </View>

                    <View>
                      <View
                        style={[
                          ApplicationStyles.row,
                          { alignItems: "center" }
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
              </View>

              <View
                style={{
                  alignItems: "center"
                }}
              >
                <View
                  style={[
                    ApplicationStyles.row,
                    {
                      alignItems: "center"
                    }
                  ]}
                >
                  <Icon
                    name={"inbox"}
                    color={colors.lightBlue}
                    size={22}
                    style={{
                      marginBottom: totalSize(2),
                      marginHorizontal: totalSize(0.5)
                    }}
                  />
                  <Icon
                    name={"heart"}
                    color={colors.lightBlue}
                    size={22}
                    style={{
                      marginBottom: totalSize(2),
                      marginHorizontal: totalSize(0.5)
                    }}
                  />
                </View>

                <Text
                  style={[
                    ApplicationStyles.h35,
                    {
                      fontWeight: "bold",
                      color: colors.seaGreen,
                      marginHorizontal: totalSize(0.5),
                      marginTop: totalSize(2.5)
                    }
                  ]}
                >
                  100kr
                </Text>
              </View>
            </View>
          </View>

          <View
            style={[
              styles.container,
              {
                paddingBottom: totalSize(5),
                paddingLeft: totalSize(2.5),
                backgroundColor: colors.homeBgColor,
                borderTopLeftRadius: totalSize(5),
                borderTopRightRadius: totalSize(5)
              }
            ]}
          >
            <Text
              style={[
                Platform.OS == "ios"
                  ? ApplicationStyles.h4
                  : ApplicationStyles.h35,
                {
                  fontWeight: "bold",
                  color: colors.darkPurple,
                  alignSelf: "center",
                  // marginHorizontal: totalSize(1.5),
                  marginVertical: totalSize(2.5)
                }
              ]}
            >
              Available dates
            </Text>
            {profileList.map((item, key) => {
              return (
                <TouchableOpacity
                  style={[
                    ApplicationStyles.row,
                    {
                      width: "100%",
                      backgroundColor: colors.snow,
                      paddingHorizontal: totalSize(2),
                      paddingVertical: totalSize(1.5),
                      marginBottom: totalSize(1.5),
                      justifyContent: "space-between",
                      alignItems: "center",
                      borderTopLeftRadius: totalSize(5),
                      borderBottomLeftRadius: totalSize(5)
                    }
                  ]}
                  onPress={() => this.props.navigation.navigate("Calendar")}
                  key={key}
                >
                  <View
                    style={[ApplicationStyles.row, { alignItems: "center" }]}
                  >
                    <View
                      style={{
                        width: totalSize(4.5),
                        height: totalSize(4.5),
                        borderRadius: totalSize(4.5) / 2,
                        backgroundColor: colors.darkGreen,
                        justifyContent: "center",
                        alignItems: "center",
                        marginRight: totalSize(2)
                      }}
                    >
                      <Text
                        style={[
                          ApplicationStyles.h35,
                          {
                            fontWeight: "bold",
                            color: colors.snow
                          }
                        ]}
                      >
                        {item.value}
                      </Text>
                    </View>
                    <View>
                      <View style={[ApplicationStyles.row]}>
                        <View>
                          <Text
                            style={[
                              Platform.OS == "ios"
                                ? ApplicationStyles.h45
                                : ApplicationStyles.h35,
                              {
                                fontWeight: "bold",
                                color: colors.darkPurple
                                // marginHorizontal: totalSize(1)
                                //marginVertical: totalSize(3)
                              }
                            ]}
                          >
                            {item.type}
                          </Text>
                          <Text
                            style={[
                              Platform.OS == "ios"
                                ? ApplicationStyles.h45
                                : ApplicationStyles.h35,
                              {
                                fontWeight: "normal",
                                color: colors.darkPurple
                                // marginHorizontal: totalSize(1)
                                //marginVertical: totalSize(3)
                              }
                            ]}
                          >
                            20th DEC
                          </Text>
                        </View>
                      </View>
                    </View>
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

export default ProfileDetails;
