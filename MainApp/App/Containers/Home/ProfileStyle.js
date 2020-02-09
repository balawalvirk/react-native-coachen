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

class ProfileStyle extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View
        style={[
          styles.container,
          { alignItems: "center", backgroundColor: colors.homeBgColor }
        ]}
      >
        <Text
          style={[
            Platform.OS == "ios" ? ApplicationStyles.h3 : ApplicationStyles.h25,
            {
              fontWeight: "bold",
              color: colors.darkPurple,
              marginHorizontal: totalSize(1),
              marginVertical: totalSize(3)
            }
          ]}
        >
          Profile
        </Text>
        <View
          style={[
            ApplicationStyles.row,
            {
              paddingHorizontal: totalSize(2),
              paddingBottom: totalSize(2.5),
              alignItems: "center"
            }
          ]}
        >
          <View style={[ApplicationStyles.row, { alignItems: "center" }]}>
            <Image
              source={require("../../Images/dummy_profile_pic.jpg")}
              style={[
                ApplicationStyles.profilepictureStyle,
                { marginRight: totalSize(1.5) }
              ]}
            />
            <View style={styles.container}>
              <Text
                style={[
                  Platform.OS == "ios"
                    ? ApplicationStyles.h4
                    : ApplicationStyles.h375,
                  {
                    fontWeight: "normal",
                    color: colors.darkPurple,
                    fontFamily: fonts.futuraMedium
                  }
                ]}
              >
                Mille Knudsen
              </Text>
              <Text
                style={[
                  Platform.OS == "ios"
                    ? ApplicationStyles.h55
                    : ApplicationStyles.h5,
                  {
                    fontWeight: "normal",
                    fontFamily: fonts.poppinsRegular,
                    color: colors.darkPurple
                    // marginHorizontal: totalSize(1)
                  }
                ]}
              >
                Location
              </Text>
              {/* <Text
                  style={[
                    ApplicationStyles.h4,
                    {
                      fontWeight: "normal",
                      color: colors.snow,
                      marginHorizontal: totalSize(1)
                      //marginVertical: totalSize(3)
                    }
                  ]}
                >
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text.
                </Text> */}
            </View>
          </View>
        </View>
        {/* <View
          style={{
            marginHorizontal: totalSize(3),
            marginBottom: totalSize(3)
          }}
        >
          <Text
            style={[
              ApplicationStyles.profileName,
              {
                fontWeight: "bold",
                color: colors.darkText
                //marginHorizontal: totalSize(1)
              }
            ]}
          >
            About
          </Text>
          <Text
            style={[
              ApplicationStyles.h4,
              {
                fontWeight: "normal",
                color: colors.darkText
                //marginHorizontal: totalSize(1)
                //marginVertical: totalSize(3)
              }
            ]}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </Text>
        </View> */}

        <View
          style={{
            marginHorizontal: totalSize(3)
            //marginVertical: totalSize(3)
          }}
        >
          <Text
            style={[
              ApplicationStyles.h4,
              {
                alignSelf: "flex-start",
                fontWeight: "normal",
                color: colors.darkPurple,
                marginHorizontal: totalSize(1),
                marginBottom: totalSize(1),
                fontFamily: fonts.futuraMedium
              }
            ]}
          >
            5 finished lessons
          </Text>
          <View
            style={{
              width: totalSize(28),
              height: totalSize(1),
              backgroundColor: colors.grey,
              borderRadius: totalSize(2),
              marginBottom: totalSize(8)
            }}
          >
            <View
              style={{
                width: totalSize(14),
                height: totalSize(1),
                borderRadius: totalSize(2),
                backgroundColor: colors.darkPurple
              }}
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

export default ProfileStyle;
