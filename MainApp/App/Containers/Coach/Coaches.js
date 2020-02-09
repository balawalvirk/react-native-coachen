import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView
} from "react-native";
import colors from "../../Themes/Colors";
import ApplicationStyles from "../../Themes/ApplicationStyles";
import { totalSize, height, width } from "react-native-dimension";
import Icon from "react-native-vector-icons/FontAwesome";

const tagList = [
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

class Coaches extends Component {
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
            backgroundColor: colors.homeBgColor
            //justifyContent: "center",
            //alignItems: "center"
          }
        ]}
      >
        <ScrollView
          style={[
            styles.container,
            {
              backgroundColor: colors.homeBgColor
              //justifyContent: "center",
              //alignItems: "center"
            }
          ]}
        >
          <View
            style={[
              styles.container,
              {
                backgroundColor: colors.homeBgColor,
                //justifyContent: "center",
                alignItems: "center"
              }
            ]}
          >
            <Text
              style={[
                ApplicationStyles.h3,
                {
                  fontWeight: "normal",
                  color: "grey",
                  marginHorizontal: totalSize(1.3),
                  marginTop: totalSize(10),
                  marginBottom: totalSize(2)
                }
              ]}
            >
              Generes
            </Text>

            <View
              style={{
                width: "100%",
                backgroundColor: colors.snow,
                paddingVertical: totalSize(3),
                borderRadius: totalSize(5),
                marginBottom: totalSize(15),
                justifyContent: "center"
              }}
            >
              {tagList.map((item, key) => {
                return (
                  <TouchableOpacity
                    style={[
                      ApplicationStyles.row,
                      {
                        paddingHorizontal: totalSize(3),
                        paddingBottom: totalSize(2.5),
                        marginBottom: totalSize(2),
                        justifyContent: "space-between",
                        alignItems: "center",
                        borderBottomWidth: 0.5
                      }
                    ]}
                    onPress={() => this.props.navigation.navigate("Profile")}
                    key={key}
                  >
                    <View
                      style={[ApplicationStyles.row, { alignItems: "center" }]}
                    >
                      <Image
                        source={require("../../Images/dummy_profile_pic.jpg")}
                        style={[
                          ApplicationStyles.profilepictureStyle,
                          { marginRight: totalSize(2) }
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

                    <Icon
                      name={"heart"}
                      color={colors.lightBlue}
                      size={28}
                      //style={{ alignSelf: "flex-end" }}
                    />
                  </TouchableOpacity>
                );
              })}

              <View style={{ width: "100%", alignItems: "center" }}>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate("Profile")}
                  style={[
                    ApplicationStyles.regularButton,
                    {
                      backgroundColor: colors.darkGreen,
                      position: "absolute"
                      //alignSelf: "flex-end"
                    }
                  ]}
                >
                  <Text
                    style={[
                      ApplicationStyles.h35,
                      {
                        fontWeight: "normal",
                        color: colors.snow
                      }
                    ]}
                  >
                    See all coaches
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
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

export default Coaches;
