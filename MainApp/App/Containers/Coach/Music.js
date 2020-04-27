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
import {getLessonsById} from "../../backend/user/Jobs";
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
const profileList = [
  {
    type: "Introduction",
    value:
      "A 'get started' for those who want to get their singing started. Get the best possible arrangement adapted to your specific needs.",
    rating: "Free",
    genere: "45",
    genereDetail: "min",
    color: colors.Red
  },
  {
    type: "Song lesson",
    value:
      "I work with the song through a mix between Complete vocal Training (CVT) and my own developed technique.",
    rating: "800kr",
    genere: "1",
    genereDetail: "h",
    color: colors.Purple
  },
  {
    type: "Vocal lesson",
    value:
      "Do you want a strong confident, and complelling speaking voice? You no longer need to travel to access expert voice lessons.",
    rating: "800kr",
    genere: "1",
    genereDetail: "h",
    color: colors.star
  },
  {
    type: "Warm up",
    value:
      "Using simple exercises, vocal warm ups and vocal strengthening techniques to get you Ready for that special moment.",
    rating: "100kr",
    genere: "15",
    genereDetail: "min",
    color: colors.lightRed
  }
];

class Music extends Component {
  constructor(props) {
    super(props);
    this.state = {
      TypeData: '',
      category:'',
      type:'',
      profileList:'',
    };
  }
  async componentDidMount() {
    
    let data = await this.props.navigation.getParam("item");
    let getLessons = await getLessonsById(data.coach_id); 
    await this.setState({
      TypeData: data,
      category:data.category,
      type:data.type,
      profileList:getLessons,

    });
  
    console.log("ProfileList",this.state.profileList);
  }

  
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: "Music",
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
      headerTitleStyle: {
        color: colors.darkText,
        alignSelf: "center",
        fontSize: ApplicationStyles.headerTitleFontSize,
        fontWeight: Platform.OS == "ios" ? "bold" : "normal",
        fontFamily: fonts.futuraBold
        //left: width(100) / 3
      },
      headerTitleContainerStyle: {
        alignItems: "center",
        justifyContent: "center"
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
      )
    };
  };

  render() {
    return (
      <View style={[styles.container, { backgroundColor: colors.Red }]}>
        <ScrollView
          style={[styles.container, { backgroundColor: colors.homeBgColor }]}
        >
          <View
            style={{
              backgroundColor: colors.snow,
              borderRadius: totalSize(5),
              paddingTop: totalSize(3)
            }}
          >
            <View style={{ marginHorizontal: totalSize(3) }}>
              <View
                style={[
                  ApplicationStyles.row,
                  { alignItems: "center", marginTop: totalSize(1) }
                ]}
              >
                <Image
                  source={{uri: this.state.TypeData.profile_photo}}
                  style={[
                    Platform.OS == "ios"
                      ? ApplicationStyles.profilepictureStyleIos
                      : ApplicationStyles.profilepictureStyle,
                    { marginRight: totalSize(0.5) }
                  ]}
                />
                <View>
                  <View style={[ApplicationStyles.row]}>
                    <View>
                      <View
                        style={[
                          ApplicationStyles.row,
                          { alignItems: "center" }
                        ]}
                      >
                        <Text
                          style={[
                            Platform.OS == "ios"
                              ? ApplicationStyles.profileNameIos
                              : ApplicationStyles.profileName,
                            {
                              fontWeight: "normal",
                              color: colors.darkPurple,
                              marginHorizontal: totalSize(1),
                              fontFamily: fonts.futuraMedium
                            }
                          ]}
                        >
                          {this.state.TypeData.name}
                        </Text>

                        <Icon name={"star"} color={colors.star} size={22} />
                        <Text
                          style={[
                            Platform.OS == "ios"
                              ? ApplicationStyles.h45
                              : ApplicationStyles.h4,
                            {
                              fontWeight: "normal",
                              color: colors.star,
                              marginLeft: totalSize(0.5)
                            }
                          ]}
                        >
                          {this.state.TypeData.rating}
                        </Text>

                        <TouchableOpacity onPress={() =>
                        this.props.navigation.navigate("Chat", { item:this.state.TypeData.coach_id })
                      }
                          style={{
                            backgroundColor: colors.Blue,
                            width:
                              Platform.OS == "ios"
                                ? totalSize(3)
                                : totalSize(3.5),
                            height:
                              Platform.OS == "ios"
                                ? totalSize(3)
                                : totalSize(3.5),
                            borderRadius:
                              Platform.OS == "ios"
                                ? totalSize(3) / 2
                                : totalSize(3.5) / 2,
                            justifyContent: "center",
                            alignItems: "center",
                            marginHorizontal: totalSize(1)
                          }}
                        >
                          <Image
                            source={require('../../Images/message.png')}
                            style={[
                              {
                                // resizeMode: "center",
                                width:
                                  Platform.OS == "ios"
                                    ? totalSize(1.8)
                                    : totalSize(2.2),
                                height:
                                  Platform.OS == "ios"
                                    ? totalSize(1.8)
                                    : totalSize(2.2),
                                tintColor: colors.snow
                              }
                            ]}
                            tintColor={colors.snow}
                          />
                        </TouchableOpacity>
                        {this.state.TypeData.fav_count ? (
                          <Icon
                            name={"heart"}
                            color={colors.lightBlue}
                            size={22}
                            style={{
                              marginBottom: totalSize(0),
                              marginRight: totalSize(0.5)
                              // marginLeft:  totalSize(2)
                            }}
                          />
                        ) : (
                          <Icon
                            name={"heart-o"}
                            color={colors.lightBlue}
                            size={22}
                            style={{
                              marginBottom: totalSize(0),
                              marginRight: totalSize(0.5)
                              // marginLeft:  totalSize(2)
                            }}
                          />
                        )}
                      </View>
                      <View>
                      <Text
                        style={[
                          ApplicationStyles.h5,
                          {
                            fontWeight: "normal",
                            color: colors.darkPurple,
                            marginHorizontal: totalSize(1)
                            //marginVertical: totalSize(3)
                          }
                        ]}
                      >
                       {this.state.category!=null ?(this.state.category.name):null} 
                      </Text>
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
                    
                        <View
                          style={{
                            backgroundColor: this.state.type!=null? this.state.type.color:null,
                            width: width(15),
                            marginHorizontal: totalSize(1),
                            marginVertical: totalSize(0.35),
                            borderRadius: totalSize(5),
                            justifyContent: "center",
                            alignItems: "center"
                          }}
                          
                        >
                          <Text
                            style={[
                              ApplicationStyles.h5,
                              {
                                fontWeight: "normal",
                                color: colors.snow,
                                marginVertical: totalSize(0.15),
                                marginHorizontal: totalSize(1)
                              }
                            ]}
                          >
                            {this.state.type!=null? this.state.type.name:null}
                          </Text>
                        </View>
                    
                  </View>
                </View>
              </View>
            </View>

            <View
              style={{
                marginHorizontal: totalSize(3),
                marginTop: totalSize(1),
                marginBottom: totalSize(3)
              }}
            >
              <Text
                style={[
                  ApplicationStyles.h4,
                  {
                    fontWeight: "normal",
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
                  ApplicationStyles.h5,
                  {
                    fontWeight: "normal",
                    color: colors.darkText,
                    marginHorizontal: totalSize(1),
                    fontFamily: fonts.poppinsRegular
                    //marginVertical: totalSize(3)
                  }
                ]}
              >
                {this.state.TypeData.about}
              </Text>
              <Text
                style={[
                  ApplicationStyles.h4,
                  {
                    fontWeight: "normal",
                    color: colors.darkPurple,
                    marginHorizontal: totalSize(1),
                    marginTop: totalSize(1),
                    fontFamily: fonts.futuraMedium
                  }
                ]}
              >
                Background
              </Text>
              <Text
                style={[
                  ApplicationStyles.h5,
                  {
                    fontWeight: "normal",
                    color: colors.darkText,
                    marginHorizontal: totalSize(1),
                    fontFamily: fonts.poppinsRegular
                    //marginVertical: totalSize(3)
                  }
                ]}
              >
                {this.state.TypeData.background}
              </Text>
              <Text
                style={[
                  Platform.OS == "ios"
                    ? ApplicationStyles.h45
                    : ApplicationStyles.h4,
                  {
                    fontWeight: "normal",
                    color: colors.Red,
                    marginHorizontal: totalSize(1),
                    marginTop: totalSize(1),
                    textDecorationLine: "underline",
                    fontFamily: fonts.futuraMedium
                  }
                ]}
              >
                Share this profile
              </Text>
            </View>
          </View>

          <View
            style={[
              styles.container,
              {
                alignItems: "center",
                paddingTop: totalSize(3),
                paddingBottom: totalSize(5),
                backgroundColor: colors.homeBgColor
              }
            ]}
          >
            <Text
              style={[
                ApplicationStyles.h4,
                {
                  fontWeight: "normal",
                  color: colors.darkText,
                  marginHorizontal: totalSize(1),
                  marginBottom: totalSize(2),
                  fontFamily: fonts.poppinsRegular
                }
              ]}
            >
              Choose a session to book a time
            </Text>
            <View
              style={{
                flex: 1,
                alignItems: "center",
                marginBottom: totalSize(3)
              }}
            >
              {this.state.profileList.length?(
             this.state.profileList.map((item, key) => {
                return (
                  <TouchableOpacity onPress={()=>this.props.navigation.navigate("Booking")}
                    key={key}
                    style={[
                      ApplicationStyles.row,
                      {
                        width: width(90),
                        backgroundColor: colors.snow,
                        paddingHorizontal: totalSize(2),
                        paddingVertical: totalSize(2),
                        marginHorizontal: totalSize(2),
                        marginVertical: totalSize(0.5),
                        justifyContent: "space-between",
                        alignItems: "center",
                        borderRadius: totalSize(3)
                      }
                    ]}
                  >
                    <View style={[{ justifyContent: "center" }]}>
                      <Text
                        style={[
                          Platform.OS == "ios"
                            ? ApplicationStyles.h4
                            : ApplicationStyles.h375,
                          {
                            fontWeight: "normal",
                            color: colors.darkPurple,
                            marginHorizontal: totalSize(1),
                            fontFamily: fonts.futuraMedium
                          }
                        ]}
                      >
                        {item.title}
                      </Text>
                      <Text
                        style={[
                          Platform.OS == "ios"
                            ? ApplicationStyles.h55
                            : ApplicationStyles.h5,
                          {
                            fontWeight: "normal",
                            color: colors.darkPurple,
                            marginHorizontal: totalSize(1),
                            fontFamily: fonts.poppinsRegular
                            //marginVertical: totalSize(3)
                          }
                        ]}
                      >
                        {item.description}
                      </Text>

                      <View
                        style={{
                          flexDirection: "row",
                          alignItems: "center",
                          marginTop: totalSize(1)
                        }}
                      >
                        <Text
                          style={[
                            ApplicationStyles.h4,
                            {
                              fontWeight: "bold",
                              color: colors.Green,
                              marginLeft: totalSize(1)
                              //marginVertical: totalSize(3)
                            }
                          ]}
                        >
                          {item.fav_count>0?item.fav_count:0}{"  "}
                        </Text>
                        <View
                          style={{
                            flexDirection: "row",
                            alignItems: "center"
                            // marginTop: totalSize(1)
                          }}
                        >
                          <Text
                            style={[
                              ApplicationStyles.h4,
                              {
                                fontWeight: "bold",
                                color: colors.darkPurple,
                                marginLeft: totalSize(0.5)
                                //marginVertical: totalSize(3)
                              }
                            ]}
                          >
                            {item.category?item.category.name:null} {"       "}
                          </Text>
                          
                          <Text
                            style={[
                              ApplicationStyles.h4,
                              {
                                fontWeight: "normal",
                                color: colors.darkPurple
                              }
                            ]}
                          >
                            {item.type?item.type.name:null } {"   "} {item.type?item.type.description:null}
                          </Text>
                          <Text
                            style={[
                              ApplicationStyles.h4,
                              {
                                fontWeight: "normal",
                                color: colors.darkPurple
                              }
                            ]}
                          >
                            {"    Price$"}{item.price}
                          </Text>
                        </View>
                      </View>
                    </View>
                  </TouchableOpacity>
                );
              })
            
              ):(<Text>No Lessons Availbe </Text>)}
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
      </View>

      // </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  TriangleShapeCSS: {
    width: 0,
    height: 0,
    // borderLeftWidth: 100, //60
    // borderBottomWidth: 100,
    borderRightWidth: 100,
    borderTopWidth: 100,
    // borderTopRightRadius: totalSize(5),
    borderStyle: "solid",
    backgroundColor: "transparent",
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderTopColor: "#00BCD4"
    // borderBottomColor: "#00BCD4"
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

export default Music;
