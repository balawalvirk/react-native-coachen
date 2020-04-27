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
import SwitchSelector from "react-native-switch-selector";
import { getTypes, getCoachByCatId } from "../../backend/user/Jobs";

const options = [
  { label: "Newest", value: "1" },
  { label: "Rating", value: "1.5" },
  { label: "Title", value: "2" }
];

const profileList = [
  {
    type: "Kyle Doddins",
    value: "2",
    rating: "4.5",
    genere: "Vocal coach",
    color: colors.Red
  },
  {
    type: "Matilda Ked",
    value: "6",
    rating: "4.1",
    genere: "Guitar Teacher",
    color: colors.Purple
  },
  {
    type: "Ignacio B.",
    value: "3",
    rating: "3.3",
    genere: "Vocal coach",
    color: colors.star
  },
  {
    type: "Mille Knudsen",
    value: "1",
    rating: "3.8",
    genere: "Drum Teacher",
    color: colors.lightRed
  },
  {
    type: "Leslie Charls",
    value: "4",
    rating: "4.2",
    genere: "Piano Teacher",
    color: colors.tagBlue
  }
];

class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
      TypeData: [],
      previousData:'',
      coachSort:'1',
    };
  }

  static navigationOptions = ({ navigation }) => {
    const {state} = navigation;
    return {
      headerTitle: state.params.headertitle,
      headerStyle: {
        backgroundColor: state.params.headerColor,
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
        fontSize: ApplicationStyles.headerTitleFontSize,
        fontWeight: Platform.OS == "ios" ? "bold" : "normal",
        fontFamily: fonts.futuraBold
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
    let typeData = await getTypes();
    
    let previousData = await this.props.navigation.getParam("item");
    let coachData = await getCoachByCatId(previousData.category_id);
    console.log(coachData);
    this.setState({
      TypeData: coachData,
      previousData: previousData
    });
    const {setParams} = this.props.navigation;
    setParams({headertitle: this.state.previousData.name,headerColor:this.state.previousData.color });
  }

  render() {
    
    return (
      <View style={[styles.container, { backgroundColor: colors.homeBgColor }]}>
        <ScrollView style={styles.container}>
          <View
            style={[
              styles.container,
              {
                alignItems: "center",
                marginTop: Platform.OS == "ios" ? height(32) : height(35),
                paddingTop: totalSize(1),
                paddingBottom: totalSize(5),
                marginBottom: totalSize(10),
                backgroundColor: colors.homeBgColor
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
                    <TouchableOpacity
                      key={key}
                      style={[
                        ApplicationStyles.row,
                        {
                          // flex: 1,
                          width: width(90),
                          backgroundColor: colors.snow,
                          padding: totalSize(2),
                          marginHorizontal: totalSize(2),
                          marginVertical: totalSize(0.5),
                          justifyContent: "space-between",
                          alignItems: "center",
                          borderRadius: totalSize(3)
                        }
                      ]}
                      onPress={() =>
                        this.props.navigation.navigate("music", { item })
                      }
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
                                    fontWeight: "bold",
                                    color: colors.darkPurple,
                                    marginHorizontal: totalSize(1)
                                    // fontFamily: fonts.futuraMedium
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
                                {item.genere}
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
                                  Music
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
                                {item.rating}
                              </Text>
                            </View>
                          </View>
                        </View>
                      </View>

                      <Icon
                        name={"heart"}
                        color={colors.lightBlue}
                        size={22}
                        style={{
                          marginBottom: totalSize(5),
                          marginRight: totalSize(0.5)
                          // marginLeft:  totalSize(2)
                        }}
                      />
                    </TouchableOpacity>
                  );
                })
              ) : (

                <ActivityIndicator size={"large"} />
              )}
              
            </View>
          </View>
        </ScrollView>
        {/* </ScrollView> */}
        <View style={(styles.container, { position: "absolute" })}>
          <View
            style={[
              styles.container,
              {
                backgroundColor: this.state.previousData.color
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
                  color: colors.barFillMusic,
                  marginBottom: totalSize(2),
                  marginHorizontal: totalSize(3),
                  fontFamily: fonts.poppinsRegular
                }
              ]}
            >
              {this.state.previousData.description}
            </Text>
          </View>
          <View
            style={[
              styles.container,
              {
                backgroundColor: this.state.previousData.color,
                width: "100%",
                alignSelf: "center",
                borderBottomLeftRadius: totalSize(7),
                paddingBottom: height(4)
              }
            ]}
          >
            <Text
              style={[
                Platform.OS == "ios"
                  ? ApplicationStyles.h4
                  : ApplicationStyles.h375,
                {
                  fontWeight: "normal",

                  color: colors.barFillMusic,
                  marginVertical: totalSize(1),
                  marginHorizontal: totalSize(4),
                  fontFamily: fonts.futuraMedium
                  // textAlign: "left"
                }
              ]}
            >
              5 finished sessions
            </Text>

            <View
              style={{
                width: width(85),
                height: height(1),
                backgroundColor: colors.fillBg,
                borderRadius: totalSize(2),
                marginHorizontal: totalSize(4)
              }}
            >
              <View
                style={{
                  width: width(50),
                  height: height(1),
                  borderRadius: totalSize(2),
                  backgroundColor: colors.barFillMusic
                }}
              />
            </View>

            <View
              style={[
                {
                  marginTop: totalSize(3),
                  width: width(85),
                  alignSelf: "center"
                  // backgroundColor: colors.darkText
                  // marginBottom: totalSize(2)
                }
              ]}
            >
              <SwitchSelector
                options={options}
                initial={0}
                buttonColor={this.state.previousData.color}
                selectedColor={colors.barFillMusic}
                backgroundColor={colors.barFillMusic}
                textColor={colors.snow}
                textStyle={{ fontFamily: fonts.futuraMedium }}
                selectedTextStyle={{ fontFamily: fonts.futuraMedium }}
                borderColor={colors.transparent}
                animationDuration={300}
                height={30}
                hasPadding
                onPress={value => this.setState({ coachSort: value })}
              />
            </View>
          </View>
        </View>
      </View>
      // <View style={[styles.container, { backgroundColor: colors.homeBgColor }]}>
      //   <ScrollView
      //     style={[styles.container, { backgroundColor: colors.homeBgColor }]}
      //   >
      //     <View
      //       style={[
      //         styles.container,
      //         {
      //           backgroundColor: colors.redHeader
      //         }
      //       ]}
      //     >
      //       <Text
      //         style={[
      //           Platform.OS == "ios"
      //             ? ApplicationStyles.h45
      //             : ApplicationStyles.h4,
      //           {
      //             fontWeight: "normal",
      //             color: colors.barFillMusic,
      //             marginBottom: totalSize(2),
      //             marginHorizontal: totalSize(3),
      //             fontFamily: fonts.poppinsRegular
      //           }
      //         ]}
      //       >
      //         Category explaination lorem ipsum color sit amet, consectuter
      //         adipiscing elit, sed do eiusmod tempor incididunt ut labore.
      //       </Text>
      //     </View>
      //     <View
      //       style={[
      //         styles.container,
      //         {
      //           backgroundColor: colors.redHeader,
      //           width: "100%",
      //           alignSelf: "center",
      //           borderBottomLeftRadius: totalSize(7),
      //           paddingBottom: height(4)
      //         }
      //       ]}
      //     >
      //       <Text
      //         style={[
      //           Platform.OS == "ios"
      //             ? ApplicationStyles.h4
      //             : ApplicationStyles.h375,
      //           {
      //             fontWeight: "normal",

      //             color: colors.barFillMusic,
      //             marginVertical: totalSize(1),
      //             marginHorizontal: totalSize(4),
      //             fontFamily: fonts.futuraMedium
      //             // textAlign: "left"
      //           }
      //         ]}
      //       >
      //         5 finished sessions
      //       </Text>

      //       <View
      //         style={{
      //           width: width(85),
      //           height: height(1),
      //           backgroundColor: colors.fillBg,
      //           borderRadius: totalSize(2),
      //           marginHorizontal: totalSize(4)
      //         }}
      //       >
      //         <View
      //           style={{
      //             width: width(50),
      //             height: height(1),
      //             borderRadius: totalSize(2),
      //             backgroundColor: colors.barFillMusic
      //           }}
      //         />
      //       </View>

      //       <View
      //         style={[
      //           {
      //             marginTop: totalSize(3),
      //             width: width(85),
      //             alignSelf: "center"
      //             // backgroundColor: colors.darkText
      //             // marginBottom: totalSize(2)
      //           }
      //         ]}
      //       >
      //         <SwitchSelector
      //           options={options}
      //           initial={0}
      //           buttonColor={colors.redHeader}
      //           selectedColor={colors.barFillMusic}
      //           backgroundColor={colors.barFillMusic}
      //           textColor={colors.snow}
      //           textStyle={{ fontFamily: fonts.futuraMedium }}
      //           selectedTextStyle={{ fontFamily: fonts.futuraMedium }}
      //           borderColor={colors.transparent}
      //           animationDuration={300}
      //           height={30}
      //           hasPadding
      //           // onPress={value =>
      //           //   console.log(`Call onPress with value: ${value}`)
      //           // }
      //         />
      //       </View>
      //     </View>

      //     <View
      //       style={[
      //         styles.container,
      //         {
      //           alignItems: "center",
      //           paddingTop: totalSize(1),
      //           paddingBottom: totalSize(5),
      //           marginBottom: totalSize(10),
      //           backgroundColor: colors.homeBgColor
      //         }
      //       ]}
      //     >
      //       <View
      //         style={{
      //           flex: 1,
      //           alignItems: "center"
      //         }}
      //       >
      //         {profileList.map((item, key) => {
      //           return (
      //             <TouchableOpacity
      //               key={key}
      //               style={[
      //                 ApplicationStyles.row,
      //                 {
      //                   // flex: 1,
      //                   width: width(90),
      //                   backgroundColor: colors.snow,
      //                   padding: totalSize(2),
      //                   marginHorizontal: totalSize(2),
      //                   marginVertical: totalSize(0.5),
      //                   justifyContent: "space-between",
      //                   alignItems: "center",
      //                   borderRadius: totalSize(3)
      //                 }
      //               ]}
      //               onPress={() => this.props.navigation.navigate("music")}
      //             >
      //               <View
      //                 style={[ApplicationStyles.row, { alignItems: "center" }]}
      //               >
      //                 <Image
      //                   source={require("../../Images/dummy_profile_pic.jpg")}
      //                   style={[
      //                     Platform.OS == "ios"
      //                       ? ApplicationStyles.profilepictureStyleIos
      //                       : ApplicationStyles.profilepictureStyle,
      //                     { marginRight: totalSize(1) }
      //                   ]}
      //                 />
      //                 <View>
      //                   <View style={[ApplicationStyles.row]}>
      //                     <View>
      //                       <Text
      //                         style={[
      //                           Platform.OS == "ios"
      //                             ? ApplicationStyles.profileNameIos
      //                             : ApplicationStyles.profileName,
      //                           {
      //                             fontWeight: "bold",
      //                             color: colors.darkPurple,
      //                             marginHorizontal: totalSize(1)
      //                             // fontFamily: fonts.futuraMedium
      //                           }
      //                         ]}
      //                       >
      //                         {item.type}
      //                       </Text>
      //                       <Text
      //                         style={[
      //                           Platform.OS == "ios"
      //                             ? ApplicationStyles.h5
      //                             : ApplicationStyles.h4,
      //                           {
      //                             fontWeight: "normal",
      //                             color: colors.darkPurple,
      //                             marginHorizontal: totalSize(1)
      //                             //marginVertical: totalSize(3)
      //                           }
      //                         ]}
      //                       >
      //                         {item.genere}
      //                       </Text>

      //                       <View
      //                         style={{
      //                           backgroundColor: item.color,
      //                           width: width(15),
      //                           justifyContent: "center",
      //                           alignItems: "center",
      //                           marginHorizontal: totalSize(1),
      //                           marginVertical: totalSize(0.35),
      //                           borderRadius: totalSize(5)
      //                         }}
      //                         // key={key}
      //                       >
      //                         <Text
      //                           style={[
      //                             Platform.OS == "ios"
      //                               ? ApplicationStyles.h5
      //                               : ApplicationStyles.h45,
      //                             {
      //                               fontWeight: "normal",
      //                               color: colors.snow,
      //                               marginVertical: totalSize(0.2)
      //                               // marginHorizontal: totalSize(1.3)
      //                             }
      //                           ]}
      //                         >
      //                           Music
      //                         </Text>
      //                       </View>
      //                     </View>

      //                     <View
      //                       style={[
      //                         ApplicationStyles.row,
      //                         { justifyContent: "center" }
      //                       ]}
      //                     >
      //                       <Icon name={"star"} color={colors.star} size={22} />
      //                       <Text
      //                         style={[
      //                           Platform.OS == "ios"
      //                             ? ApplicationStyles.h45
      //                             : ApplicationStyles.h375,
      //                           {
      //                             fontWeight: "normal",
      //                             color: colors.star,
      //                             marginHorizontal: totalSize(0.5)
      //                           }
      //                         ]}
      //                       >
      //                         {item.rating}
      //                       </Text>
      //                     </View>
      //                   </View>
      //                 </View>
      //               </View>

      //               <Icon
      //                 name={"heart"}
      //                 color={colors.lightBlue}
      //                 size={22}
      //                 style={{
      //                   marginBottom: totalSize(5),
      //                   marginRight: totalSize(0.5)
      //                   // marginLeft:  totalSize(2)
      //                 }}
      //               />
      //             </TouchableOpacity>
      //           );
      //         })}
      //       </View>
      //     </View>
      //   </ScrollView>
      // </View>
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

export default Category;
