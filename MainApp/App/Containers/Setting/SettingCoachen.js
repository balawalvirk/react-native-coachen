import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Platform,
  Switch,
  ScrollView,
  Alert
} from "react-native";
import colors from "../../Themes/Colors";
import ApplicationStyles from "../../Themes/ApplicationStyles";
import { totalSize, height, width } from "react-native-dimension";
import Icon from "react-native-vector-icons/FontAwesome";
import { fonts } from "../../Themes/Fonts";
import {_retrieveData} from  "../../backend/AsyncFuncs";
import {deleteUser} from  "../../backend/user/Auth";


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
    type: "Soul",
    color: colors.lightRed
  },
  {
    type: "Musikal",
    color: colors.tagBlue
  },
  {
    type: "Klassiskt",
    color: colors.star
  },
  {
    type: "Visa",
    color: colors.tagPurple
  },
  {
    type: "Opera",
    color: colors.Red
  },
  {
    type: "Folkmusik",
    color: colors.Purple
  }
];

class Setting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data:"",
    };
  }
  async componentDidMount(){
    let data = await _retrieveData("login_data");
    this.setState({data:data});
    console.log("OKKKKKKKKK",data);
    };  

    async del(){
      let result=await deleteUser();
      if(result){
        Alert.alert(result.toString());
        this.props.navigation.navigate("Login");
      }
    };
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: "Setting",
      headerStyle: { backgroundColor: colors.lightSnow },
      headerTitleStyle: {
        color: colors.SplashBlueBg,
        fontSize: ApplicationStyles.headerTitleFontSize,
        fontWeight: "normal",
        fontFamily: fonts.futuraMedium
      },
      headerTitleContainerStyle: {
        alignItems: "center",
        justifyContent: "center"
      },
      headerLeft: (
        <TouchableOpacity
          onPress={() => navigation.goBack()} //goBack()
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
      ),
      headerRight: <View />
    };
  };

  render() {
    return (
      <View style={[styles.container, { backgroundColor: colors.settingBg }]}>
        <ScrollView
          style={[styles.container, { backgroundColor: colors.settingBg }]}
        >
          <View
            style={[
              {
                backgroundColor: colors.snow,
                borderBottomWidth: 0.2,
                borderTopWidth: 0.2,
                borderTopColor: colors.settingBorderColor,
                borderBottomColor: colors.settingBorderColor,
                marginBottom: totalSize(2)
              }
            ]}
          >
            <TouchableOpacity
              style={[
                {
                  marginHorizontal: totalSize(4),
                  marginVertical: totalSize(3),
                  justifyContent: "space-between",
                  flexDirection: "row"
                }
              ]}
            >
              <Text
                style={[
                  Platform.OS == "ios"
                    ? ApplicationStyles.h45
                    : ApplicationStyles.h4,
                  { color: colors.darkText, fontFamily: fonts.poppinsRegular }
                ]}
              >
                In App Sound
              </Text>

              <Switch />
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                {
                  marginHorizontal: totalSize(4),
                  marginVertical: totalSize(3),
                  justifyContent: "space-between",
                  flexDirection: "row"
                }
              ]}
            >
              <Text
                style={[
                  Platform.OS == "ios"
                    ? ApplicationStyles.h5
                    : ApplicationStyles.h45,
                  { color: colors.darkText, fontFamily: fonts.poppinsRegular }
                ]}
              >
                Notifications
              </Text>
              <Image
                source={require("../../Images/back.png")}
                style={[
                  {
                    width: totalSize(2.5),
                    height: totalSize(2.5),
                    // resizeMode: "center",
                    marginLeft: totalSize(3),
                    transform: [{ rotate: "180deg" }],
                    tintColor: colors.darkText
                  }
                ]}
                tintColor={colors.darkText}
              />
            </TouchableOpacity>
          </View>

          <View
            style={[
              {
                backgroundColor: colors.snow,
                borderBottomWidth: 0.2,
                borderTopWidth: 0.2,
                borderTopColor: colors.settingBorderColor,
                borderBottomColor: colors.settingBorderColor
              }
            ]}
          >
            <View
              style={[
                {
                  marginHorizontal: totalSize(4),
                  marginVertical: totalSize(3),
                  justifyContent: "space-between",
                  flexDirection: "row"
                }
              ]}
            >
              <Text
                style={[
                  Platform.OS == "ios"
                    ? ApplicationStyles.h45
                    : ApplicationStyles.h4,
                  { color: colors.darkText, fontFamily: fonts.poppinsRegular }
                ]}
              >
                Name
              </Text>
              <Text
                style={[
                  Platform.OS == "ios"
                    ? ApplicationStyles.h5
                    : ApplicationStyles.h45,
                  {
                    color: colors.settingFontDarkColor,
                    fontFamily: fonts.poppinsLight
                  }
                ]}
              >
                {this.state.data.name}
              </Text>
            </View>
            <View
              style={[
                {
                  marginHorizontal: totalSize(4),
                  marginBottom: totalSize(3),
                  justifyContent: "space-between",
                  flexDirection: "row"
                }
              ]}
            >
              <Text
                style={[
                  Platform.OS == "ios"
                    ? ApplicationStyles.h45
                    : ApplicationStyles.h4,
                  { color: colors.darkText, fontFamily: fonts.poppinsRegular }
                ]}
              >
                City
              </Text>
              <Text
                style={[
                  Platform.OS == "ios"
                    ? ApplicationStyles.h5
                    : ApplicationStyles.h45,
                  { color: colors.darkText, fontFamily: fonts.poppinsLight }
                ]}
              >
                {this.state.data.city}
              </Text>
            </View>
            <View
              style={[
                {
                  marginHorizontal: totalSize(4),
                  marginBottom: totalSize(3),
                  justifyContent: "space-between",
                  flexDirection: "row"
                }
              ]}
            >
              <Text
                style={[
                  Platform.OS == "ios"
                    ? ApplicationStyles.h45
                    : ApplicationStyles.h4,
                  { color: colors.darkText, fontFamily: fonts.poppinsRegular }
                ]}
              >
                Phone
              </Text>
              <Text
                style={[
                  Platform.OS == "ios"
                    ? ApplicationStyles.h5
                    : ApplicationStyles.h45,
                  { color: colors.darkText, fontFamily: fonts.poppinsLight }
                ]}
              >
                {this.state.data.phone}
              </Text>
            </View>
            <View
              style={[
                {
                  marginHorizontal: totalSize(4),
                  marginBottom: totalSize(3),
                  justifyContent: "space-between",
                  flexDirection: "row"
                }
              ]}
            >
              <Text
                style={[
                  Platform.OS == "ios"
                    ? ApplicationStyles.h45
                    : ApplicationStyles.h4,
                  { color: colors.darkText, fontFamily: fonts.poppinsRegular }
                ]}
              >
                Email
              </Text>
              <Text
                style={[
                  Platform.OS == "ios"
                    ? ApplicationStyles.h5
                    : ApplicationStyles.h45,
                  { color: colors.darkText, fontFamily: fonts.poppinsLight }
                ]}
              >
                {this.state.data.email}
              </Text>
            </View>
            <View
              style={[
                {
                  marginHorizontal: totalSize(4),
                  marginBottom: totalSize(3),
                  justifyContent: "space-between",
                  flexDirection: "row"
                }
              ]}
            >
              <Text
                style={[
                  Platform.OS == "ios"
                    ? ApplicationStyles.h45
                    : ApplicationStyles.h4,
                  { color: colors.darkText, fontFamily: fonts.poppinsRegular }
                ]}
              >
                Password
              </Text>
              <Text
                style={[
                  Platform.OS == "ios"
                    ? ApplicationStyles.h5
                    : ApplicationStyles.h45,
                  { color: colors.darkText, fontFamily: fonts.poppinsLight }
                ]}
              >
                ******
              </Text>
            </View>

            {/* <View
              style={[
                {
                  marginHorizontal: totalSize(4),
                  marginBottom: totalSize(3),
                  justifyContent: "space-between",
                  flexDirection: "row"
                }
              ]}
            >
              <Text
                style={[
                  Platform.OS == "ios"
                    ? ApplicationStyles.h4
                    : ApplicationStyles.h35,
                  { color: colors.settingFontDarkColor }
                ]}
              >
                Notifications
              </Text>
              <Image
                source={require("../../Images/back.png")}
                style={[
                  {
                    width: totalSize(2.5),
                    height: totalSize(2.5),
                    resizeMode: "center",
                    // marginLeft: totalSize(3),
                    transform: [{ rotate: "180deg" }],
                    tintColor: colors.darkText
                  }
                ]}
                tintColor={colors.darkText}
              />
            </View> */}
          </View>

          {/* <View style={{ width: "100%", height: totalSize(6) }} />

          <View style={{ width: "100%", height: totalSize(1) }} /> */}

          <View
            style={[
              {
                backgroundColor: colors.snow,
                borderBottomWidth: 0.2,
                borderTopWidth: 0.2,
                borderTopColor: colors.settingBorderColor,
                borderBottomColor: colors.settingBorderColor,
                marginTop: totalSize(3),
                marginBottom: totalSize(10)
              }
            ]}
          >
            <TouchableOpacity
              style={[
                {
                  marginHorizontal: totalSize(4),
                  marginVertical: totalSize(3),
                  justifyContent: "space-between",
                  flexDirection: "row"
                }
              ]}
            >
              <Text
                style={[
                  Platform.OS == "ios"
                    ? ApplicationStyles.h45
                    : ApplicationStyles.h4,
                  { color: colors.darkText, fontFamily: fonts.poppinsRegular }
                ]}
              >
                Privacy Policy
              </Text>
              <Image
                source={require("../../Images/back.png")}
                style={[
                  {
                    width: totalSize(2.5),
                    height: totalSize(2.5),
                    // resizeMode: "center",
                    // marginLeft: totalSize(3),
                    transform: [{ rotate: "180deg" }],
                    tintColor: colors.darkText
                  }
                ]}
                tintColor={colors.darkText}
              />
              {/* <Icon
                name={"arrow-right"}
                color={colors.darkText}
                size={26}
                style={{ marginLeft: totalSize(1.5) }}
              /> */}
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                {
                  marginHorizontal: totalSize(4),
                  marginVertical: totalSize(3),
                  justifyContent: "space-between",
                  flexDirection: "row"
                }
              ]}
            >
              <Text
                style={[
                  Platform.OS == "ios"
                    ? ApplicationStyles.h45
                    : ApplicationStyles.h4,
                  { color: colors.darkText, fontFamily: fonts.poppinsRegular }
                ]}
              >
                Terms of Service
              </Text>
              <Image
                source={require("../../Images/back.png")}
                style={[
                  {
                    width: totalSize(2.5),
                    height: totalSize(2.5),
                    // resizeMode: "center",
                    // marginLeft: totalSize(3),
                    transform: [{ rotate: "180deg" }],
                    tintColor: colors.darkText
                  }
                ]}
                tintColor={colors.darkText}
              />
              {/* <Icon
                name={"arrow-right"}
                color={colors.darkText}
                size={26}
                style={{ marginLeft: totalSize(1.5) }}
              /> */}
            </TouchableOpacity>
            <TouchableOpacity onPress={this.del}
              style={[
                {
                  marginHorizontal: totalSize(4),
                  marginVertical: totalSize(3),
                  justifyContent: "space-between",
                  flexDirection: "row"
                }
              ]}
            >
              <Text
                style={[
                  Platform.OS == "ios"
                    ? ApplicationStyles.h45
                    : ApplicationStyles.h4,
                  { color: colors.Red }
                ]}
              >
                Delete Account
              </Text>
            </TouchableOpacity>
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

export default Setting;
