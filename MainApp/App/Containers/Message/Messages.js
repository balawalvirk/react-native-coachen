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
import {_retrieveData} from "../../backend/AsyncFuncs";
import{getAllConverstion} from "../../backend/user/Jobs";
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

class Messages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      CoachesList:'',
    };
  }
  async componentDidMount() {
    let userData = await _retrieveData("login_data");     
    let allConversationData = await getAllConverstion();
    await this.setState({
      userData: userData,
      CoachesList:allConversationData,
          });
  
    console.log("coachLIST",this.state.CoachesList);
  }

  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: "Messages",
      headerTitleStyle: {
        color: colors.darkGreen,
        fontSize: ApplicationStyles.headerTitleFontSize,
        fontWeight: Platform.OS == "ios" ? "bold" : "normal",
        //ontWeight: "normal",
        fontFamily: fonts.futuraBold
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
      },
      headerRight: (
        <TouchableOpacity>
          <Image
            source={require("../../Images/search.png")}
            style={[
              ApplicationStyles.headerIconStyle,
              {
                marginRight: totalSize(3),
                tintColor: colors.darkGreen
              }
            ]}
            tintColor={colors.darkGreen}
          />
        </TouchableOpacity>
      ),
      headerLeft: (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require("../../Images/back.png")}
            style={[
              ApplicationStyles.headerIconStyle,
              {
                marginLeft: totalSize(3),
                tintColor: colors.darkGreen
              }
            ]}
            tintColor={colors.darkGreen}
          />
        </TouchableOpacity>
      )
    };
  };

  render() {
    return (
      <View
        style={[
          styles.container,
          {
            backgroundColor: colors.darkText
          }
        ]}
      >
        <View
          style={[
            styles.container,
            {
              backgroundColor: colors.snow
              //alignItems: "center",
              // borderTopLeftRadius: totalSize(5),
              // borderTopRightRadius: totalSize(5)
            }
          ]}
        >
          <ScrollView style={[styles.container]}>
            <View
              style={{
                width: width(100),
                backgroundColor: colors.snow,
                paddingVertical: totalSize(3),
                borderTopLeftRadius: totalSize(5),
                borderTopRightRadius: totalSize(5),
                // marginBottom: totalSize(15),
                // marginTop: totalSize(4),
                justifyContent: "center"
              }}
            >
              { this.state.CoachesList.length>0 ?(
              this.state.CoachesList.map((item, key) => {
                return (
                  <TouchableOpacity
                    style={[
                      ApplicationStyles.row,
                      {
                        paddingHorizontal: totalSize(5),
                        paddingBottom: totalSize(2.5),
                        marginBottom: totalSize(2),
                        justifyContent: "space-between",
                        alignItems: "center"
                        //borderBottomWidth: 0.5 
                      }
                    ]}
                    onPress={() => this.props.navigation.navigate("Chat", { item:item.receiver_id })}
                    key={key}
                  >
                    <View
                      style={[ApplicationStyles.row, { alignItems: "center" }]}
                    >
                      <Image
                        source={{uri:item.sender_profile_photo}}
                        style={[
                          Platform.OS == "ios"
                            ? ApplicationStyles.smallCircleStyleIOS
                            : ApplicationStyles.smallCircleStyle,
                          { marginRight: totalSize(2) }
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
                                ,
                                {
                                  fontWeight: "normal",
                                  color: colors.darkPurple,
                                  fontFamily: fonts.futuraMedium
                                }
                              ]}
                            >
                              {item.sender_name}
                            </Text>
                            <Text
                              style={[
                                Platform.OS == "ios"
                                  ? ApplicationStyles.h5
                                  : ApplicationStyles.h45,
                                {
                                  // fontWeight: "bold",
                                  color: colors.black
                                }
                              ]}
                            >
                              {item.last_message.text}
                            </Text>
                          </View>
                        </View>
                      </View>
                    </View>
                    <Text
                      style={[
                        ApplicationStyles.h45,
                        {
                          fontWeight: "normal",
                          color: colors.steel,
                          marginTop:-30,
                        }
                      ]}
                    >
                     {item.last_message.created_at}
                    </Text>
                  </TouchableOpacity>
                );
              }
              
              )
              ):(
                <Text>No conversation availbe </Text>
              )}
            </View>
          </ScrollView>
        </View>
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

export default Messages;
