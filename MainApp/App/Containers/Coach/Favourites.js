import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  Platform,
  ActivityIndicator
} from "react-native";
import colors from "../../Themes/Colors";
import ApplicationStyles from "../../Themes/ApplicationStyles";
import { totalSize, height, width } from "react-native-dimension";
import Icon from "react-native-vector-icons/FontAwesome";
import { fonts } from "../../Themes/Fonts";
import { getTypes, getFavCoaches } from "../../backend/user/Jobs";

const profileList = [
  {
    type: "Kyle Dod",
    value: "2",
    rating: "4.5",
    genere: "Vocal coach",
    genereDetails: "Music",
    color: colors.Red
  },
  {
    type: "Matilda Ked",
    value: "6",
    rating: "4.1",
    genere: "Guitar Teacher",
    genereDetails: "Dogs",
    color: colors.Purple
  },
  {
    type: "Ignacio B.",
    value: "3",
    rating: "3.3",
    genere: "Vocal coach",
    genereDetails: "Art & Design",
    color: colors.star
  },
  {
    type: "Mille Knud",
    value: "1",
    rating: "3.8",
    genere: "Drum Teacher",
    genereDetails: "Language",
    color: colors.lightRed
  },
  {
    type: "Leslie Charl",
    value: "4",
    rating: "4.2",
    genere: "Piano Teacher",
    genereDetails: "Dogs",
    color: colors.tagBlue
  },
  {
    type: "Charl S.",
    value: "4",
    rating: "4.6",
    genere: "Piano Teacher",
    genereDetails: "Music",
    color: colors.tagBlue
  }
];

class Favourites extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      TypeData: []
    };
  }

  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: "Favourites",
      headerTitleStyle: {
        color: colors.darkText,
        fontSize: ApplicationStyles.headerTitleFontSize,
        fontWeight: Platform.OS == "ios" ? "bold" : "normal",
        fontFamily: fonts.futuraBold
      },
      headerTitleContainerStyle: {
        alignItems: "center",
        justifyContent: "center"
      },
      headerStyle: {
        backgroundColor: colors.Red,
        shadowColor: "transparent",
        shadowRadius: 0,
        elevation: 0,
        borderBottomWidth: 0,
        shadowOffset: {
          height: 0
        }
      },
      headerRight: (
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Image
            source={require("../../Images/menu.png")}
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
        <TouchableOpacity
          onPress={() => navigation.pop()} //goBack()
        >
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
      )
    };
  };

  async componentDidMount() {
    let typeData = await getFavCoaches();
    // let previousData = await this.props.navigation.getParam("item");
    console.log("FAVvvvv",typeData);
    this.setState({
      TypeData: typeData
    });
  }

  render() {
    return (
      <View style={[styles.container, { backgroundColor: colors.Red }]}>
        <ScrollView
          style={[styles.container, { backgroundColor: colors.homeBgColor }]}
        >
          <View
            style={{
              backgroundColor: colors.homeBgColor,
              borderTopLeftRadius: totalSize(5),
              borderTopRightRadius: totalSize(5)
            }}
          />

          <View
            style={[
              styles.container,
              {
                alignItems: "center",
                paddingTop: totalSize(3),
                paddingBottom: totalSize(15),
                marginTop: totalSize(1),
                backgroundColor: colors.homeBgColor,
                borderTopLeftRadius: totalSize(5),
                borderTopRightRadius: totalSize(5)
              }
            ]}
          >
            <View
              style={{
                flex: 1,
                alignItems: "center"
              }}
            >
              {this.state.TypeData.length > 0 && this.state.TypeData ? (
                this.state.TypeData.map((item, key) => {
                  return (
                    <View
                      key={key}
                      style={[
                        ApplicationStyles.row,
                        {
                          width: width(90),
                          backgroundColor: colors.snow,
                          padding: totalSize(2),
                          marginHorizontal: totalSize(2),
                          marginVertical: totalSize(0.4),
                          justifyContent: "space-between",
                          alignItems: "center",
                          borderRadius: totalSize(3)
                        }
                      ]}
                      //onPress={() => this.props.navigation.navigate("Details")}
                    >
                      <View
                        style={[
                          ApplicationStyles.row,
                          { alignItems: "center" }
                        ]}
                      >
                        <Image
                          // source={require("../../Images/dummy_profile_pic.jpg")}
                          source={{ uri: item.image }}
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
                                {item.name}
                              </Text>
                              <Text
                                style={[
                                  Platform.OS == "ios"
                                    ? ApplicationStyles.h5
                                    : ApplicationStyles.h4,
                                  {
                                    fontWeight: "normal",
                                    color: colors.darkPurple,
                                    marginHorizontal: totalSize(1)
                                    //marginVertical: totalSize(3)
                                  }
                                ]}
                              >
                                {item.type.name}
                              </Text>

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
                                // key={key}
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
                                  {item.category.name}
                                </Text>
                              </View>
                            </View>

                            <View
                              style={[
                                ApplicationStyles.row,
                                { justifyContent: "center" }
                              ]}
                            >
                              <Icon
                                name={"star"}
                                color={colors.star}
                                size={22}
                              />
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
                                4.5
                              </Text>
                            </View>
                          </View>
                        </View>
                      </View>
                      <TouchableOpacity>          
                      <Icon
                        name={"heart"}
                        color={colors.Red}
                        size={22}
                        style={{
                          marginBottom: totalSize(5),
                          marginRight: totalSize(0.5)
                          // marginLeft:  totalSize(2)
                        }}
                      />
                      </TouchableOpacity>
                    </View>
                  );
                })
              ) : (
                <ActivityIndicator size={"large"} />
              )}
            </View>
            {/* <Text
              style={[
                ApplicationStyles.h3,
                {
                  fontWeight: "bold",
                  color: colors.Purple,
                  //marginHorizontal: totalSize(1.5),
                  marginVertical: totalSize(2.5)
                }
              ]}
            >
              Lektioner
            </Text> */}
            {/* <View
              style={[
                styles.container,
                { paddingVertical: totalSize(3), paddingLeft: totalSize(2.5) }
              ]}
            >
              {profileList.map((item, key) => {
                return (
                  <TouchableOpacity
                    style={[
                      ApplicationStyles.row,
                      {
                        width: "100%",
                        backgroundColor: colors.snow,
                        paddingHorizontal: totalSize(2),
                        paddingVertical: totalSize(3.5),
                        marginBottom: totalSize(1.5),
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
                          ApplicationStyles.profilepictureStyle,
                          { marginRight: totalSize(1) }
                        ]}
                      />
                      <View>
                        <View style={[ApplicationStyles.row]}>
                          <View>
                            <Text
                              style={[
                                ApplicationStyles.profileName,
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
                                ApplicationStyles.h4,
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
                                alignItems: "center"
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
                                Category A
                              </Text>
                            </View>
                            <Text
                              style={[
                                ApplicationStyles.profileName,
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

                          <View style={[ApplicationStyles.row]}>
                            <Icon name={"star"} color={colors.star} size={28} />
                            <Text
                              style={[
                                ApplicationStyles.profileName,
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
                        size={28}
                        style={{ marginBottom: totalSize(2) }}
                      />
                      <Text
                        style={[
                          ApplicationStyles.h25,
                          {
                            fontWeight: "bold",
                            color: colors.darkGreen,
                            marginHorizontal: totalSize(0.5),
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
            </View> */}
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
            style={[{ tintColor: colors.Red }]}
          />
          <Image
            source={require("../../Images/headerEdge.png")}
            style={[
              {
                tintColor: colors.Red,
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
          <TouchableOpacity onPress={() => this.props.navigation.pop()}>
            <Image
              source={require("../../Images/search.png")}
              style={[
                ApplicationStyles.iconStyle,
                { tintColor: colors.darkText }
              ]}
              tintColor={colors.darkText}
            />
          </TouchableOpacity>

          <View
            style={{
              backgroundColor: colors.Red,
              width: Platform.OS == "ios" ? totalSize(5) : totalSize(6),
              height: Platform.OS == "ios" ? totalSize(5) : totalSize(6),
              borderRadius:
                Platform.OS == "ios" ? totalSize(5) / 2 : totalSize(6) / 2,
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Image
              source={require("../../Images/heart.png")}
              style={[ApplicationStyles.iconStyle, { tintColor: colors.snow }]}
              tintColor={colors.snow}
            />
          </View>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("Booking")}
          >
            <Image
              source={require("../../Images/bookmark.png")}
              style={[
                ApplicationStyles.iconSmallStyle,
                {
                  tintColor: colors.Green
                }
              ]}
              tintColor={colors.Green}
            />
          </TouchableOpacity>
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

export default Favourites;
