import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Switch,
  ScrollView,
  Platform,
  ActivityIndicator,
  Alert
} from "react-native";
import colors from "../../Themes/Colors";
import ApplicationStyles from "../../Themes/ApplicationStyles";
import { totalSize, height, width } from "react-native-dimension";
import Icon from "react-native-vector-icons/FontAwesome";
import Accordion from "react-native-collapsible/Accordion";
import * as Animatable from "react-native-animatable";
import { fonts } from "../../Themes/Fonts";
import { getAllCategories, getActiveSession } from "../../backend/user/Jobs";
import { getSearchBy, getSearchByCat } from "../../backend/user/Jobs";
import { TextInput } from "react-native-gesture-handler";

export default class Home extends Component {
  constructor(props) {
    super(props); 
    this.state = {
      //Collapsible
      CategoryData: [],
      activeSections: [],
      collapsed: true,
      multipleSelect: true,
      CONTENT: [],
      sessionData:[],
    };
  }

  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: "Coachen",
      headerTitleStyle: {
        color: colors.Green,
        fontSize: ApplicationStyles.headerTitleFontSize,
        fontWeight: "normal"
        // fontFamily: fonts.futuraMedium
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
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Image
            source={require("../../Images/menu.png")}
            style={[
              ApplicationStyles.headerIconStyle,
              {
                marginRight: totalSize(3),
                tintColor: colors.Green
              }
            ]}
            tintColor={colors.Green}
          />
        </TouchableOpacity>
      ),
      headerLeft: <View></View>
    };
  };

  async componentDidMount() {
    let categoryData = await getAllCategories();
    let sessionData = await getActiveSession();

    console.log("sessionData", sessionData);
    this.setState({
      CONTENT: [
        {
          title: "Label",
          content: (
            <View style={styles.collapsibleParent}>
              {/* <View
                style={{
                  position: "absolute",
                  width: "100%",
                  height: height(2),
                  backgroundColor: colors.Green
                }}
              /> */}
              <Text
                style={[
                  Platform.OS == "ios"
                    ? ApplicationStyles.h5
                    : ApplicationStyles.h45,
                  {
                    fontWeight: "normal",
                    color: colors.darkPurple,
                    marginHorizontal: totalSize(3),
                    marginBottom: totalSize(2),
                    fontFamily: fonts.poppinsRegular
                  }
                ]}
              >
                If you are one of those who has done the research, registered on
                the official Voco website got up early on that dreaded Sunday
                morning and sat poised ready with every electronic device you
                own for the moment that ticket sales open... and still did not
                manage to get Glastonbury 2019 tickets at the first sales AND in
                the recent resales - this just might be the opportunity you've
                been waiting for.
              </Text>

              <View
                style={[
                  ApplicationStyles.row,
                  {
                    justifyContent: "flex-end",
                    marginRight: totalSize(3),
                    marginTop: totalSize(2),
                    marginBottom: totalSize(4)
                  }
                ]}
              >
                <Text
                  style={[
                    ApplicationStyles.h4,
                    {
                      fontWeight: "bold",
                      color: colors.darkPurple,
                      textDecorationLine: "underline",
                      fontFamily: fonts.Futura
                      // marginHorizontal: totalSize(6),
                      // marginBottom: totalSize(2)
                    }
                  ]}
                >
                  Share this post
                </Text>
                {/* <Icon
                  name={"facebook"}
                  size={36}
                  color={"blue"}
                  style={{ marginHorizontal: totalSize(2) }}
                />
                <Icon
                  name={"google"}
                  size={36}
                  color={"red"}
                  style={{ marginHorizontal: totalSize(2) }}
                />
                <Icon
                  name={"twitter"}
                  size={36}
                  color={"blue"}
                  style={{ marginHorizontal: totalSize(2) }}
                /> */}
              </View>
            </View>
          )
        }
      ],
      CategoryData: categoryData,
      text: '',

    });
    // console.log(this.state.CategoryData);
  }

  search = async name => {
    console.log("name", name);
    //let getSearch = await getSearchByCat("Hip hop");
    let getSearch = await getSearchBy(name);
    if (getSearch) {
      this.props.navigation.navigate("SearchByNames", {
        item: getSearch
      });
    }
    // console.log("Testing1",getSearch);
    // console.log("Testing",getSearch1);
  };
  toggleExpanded = () => {
    //alert("called");
    this.setState({ collapsed: !this.state.collapsed });
  };

  setSections = sections => {
    this.setState({
      activeSections: sections.includes(undefined) ? [] : sections,
      collapsed: !this.state.collapsed
    });
  };

  renderHeader = (section, _, isActive) => {
    if (this.state.collapsed) {
      // alert(this.state.collapsed);
      return (
        <Animatable.View
          duration={400}
          //style={[styles.header, isActive ? styles.active : styles.inactive]}
          transition="backgroundColor"
        >
          <View>
            {/* <View
              style={{
                flex: 1,
                flexDirection: "row",
                position: "absolute",
                justifyContent: "space-between"
              }}
            >
              <View
                style={{
                  width: "30%",
                  height: totalSize(5),
                  backgroundColor: colors.Red
                }}
              />
              <View
                style={{
                  width: "30%",
                  height: totalSize(5),
                  backgroundColor: colors.snow
                }}
              />
            </View> */}

            <View
              style={{
                backgroundColor: colors.snow,
                // marginHorizontal: totalSize(2),
                width: "100%",
                height: totalSize(12),
                // borderTopLeftRadius: totalSize(4),
                justifyContent: "center",
                borderBottomLeftRadius: totalSize(4)
                // borderBottomRightRadius: totalSize(4)
              }}
            >
              <View
                style={{
                  backgroundColor: colors.redHeader,
                  width: width(16),
                  marginLeft: totalSize(4),
                  marginHorizontal: totalSize(1),
                  marginVertical: totalSize(0.35),
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
                      marginVertical: totalSize(0.2),
                      // marginLeft: totalSize(4),
                      fontFamily: fonts.poppinsLight
                    }
                  ]}
                >
                  Music
                </Text>
              </View>
              <Text
                style={[
                  Platform.OS == "ios"
                    ? ApplicationStyles.h4
                    : ApplicationStyles.h375,
                  {
                    fontWeight: "normal",
                    color: colors.darkPurple,
                    marginLeft: totalSize(3),
                    fontFamily: fonts.futuraMedium
                  }
                ]}
              >
                Competition: Get free songs lessons
              </Text>
            </View>
          </View>
        </Animatable.View>
      );
    } else {
      return (
        <Animatable.View
          duration={400}
          //style={[styles.header, isActive ? styles.active : styles.inactive]}
          transition="backgroundColor"
        >
          <View>
            {/* <View
              style={{
                flex: 1,
                flexDirection: "row",
                position: "absolute",
                justifyContent: "space-between"
              }}
            >
              <View
                style={{
                  width: "30%",
                  height: totalSize(5),
                  backgroundColor: colors.Red
                }}
              />
              <View
                style={{
                  width: "30%",
                  height: totalSize(5),
                  backgroundColor: colors.snow
                }}
              />
            </View> */}

            <View
              style={{
                backgroundColor: colors.snow,
                // marginHorizontal: totalSize(2),
                width: "100%",
                height: totalSize(12),
                // borderTopLeftRadius: totalSize(4),
                justifyContent: "center",
                borderBottomLeftRadius: totalSize(4),
                borderBottomRightRadius: totalSize(4)
              }}
            >
              <View
                style={{
                  backgroundColor: colors.redHeader,
                  width: width(16),
                  marginLeft: totalSize(4),
                  marginHorizontal: totalSize(1),
                  marginVertical: totalSize(0.35),
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
                      marginVertical: totalSize(0.2),
                      // marginLeft: totalSize(4),
                      fontFamily: fonts.poppinsLight
                    }
                  ]}
                >
                  Music
                </Text>
              </View>
              <Text
                style={[
                  ApplicationStyles.h375,
                  {
                    fontWeight: "normal",
                    color: colors.darkPurple,
                    marginLeft: totalSize(4),
                    marginBottom: totalSize(1.5),
                    fontFamily: fonts.futuraMedium
                  }
                ]}
              >
                Competition: Get free songs lessons
              </Text>
            </View>
            <View
              style={{
                position: "absolute",
                width: "100%",
                height: height(3.5),
                bottom: 0,
                backgroundColor: colors.snow
              }}
            />
          </View>
        </Animatable.View>
      );
    }
    // return (
    //   <Animatable.View
    //     duration={400}
    //     //style={[styles.header, isActive ? styles.active : styles.inactive]}
    //     transition="backgroundColor"
    //   >
    //     <View>
    //       <View
    //         style={{
    //           flex: 1,
    //           flexDirection: "row",
    //           position: "absolute",
    //           justifyContent: "space-between"
    //         }}
    //       >
    //         <View
    //           style={{
    //             width: "30%",
    //             height: totalSize(5),
    //             backgroundColor: colors.Red
    //           }}
    //         />
    //         <View
    //           style={{
    //             width: "30%",
    //             height: totalSize(5),
    //             backgroundColor: colors.snow
    //           }}
    //         />
    //       </View>

    //       <View
    //         style={{
    //           backgroundColor: colors.snow,
    //           // marginHorizontal: totalSize(2),
    //           width: "100%",
    //           height: totalSize(10),
    //           borderTopLeftRadius: totalSize(4),
    //           justifyContent: "center",
    //           borderBottomLeftRadius: totalSize(4),
    //           borderBottomRightRadius: totalSize(4)
    //         }}
    //       >
    //         <Text
    //           style={[
    //             ApplicationStyles.h45,
    //             {
    //               fontWeight: "normal",
    //               color: colors.darkPurple,
    //               marginLeft: totalSize(4),
    //               fontFamily: fonts.poppinsLight
    //             }
    //           ]}
    //         >
    //           Music
    //         </Text>
    //         <Text
    //           style={[
    //             ApplicationStyles.h375,
    //             {
    //               fontWeight: "normal",
    //               color: colors.darkPurple,
    //               marginLeft: totalSize(4),
    //               fontFamily: fonts.futuraMedium
    //             }
    //           ]}
    //         >
    //           Competition: Get free songs lessons
    //         </Text>
    //       </View>
    //       {!this.state.collapsed && (
    //         <View
    //           style={{
    //             position: "absolute",
    //             width: "100%",
    //             height: height(3),
    //             bottom: 0,
    //             backgroundColor: colors.Green
    //           }}
    //         />
    //       )}
    //     </View>
    //   </Animatable.View>
    // );
  };

  renderContent(section, _, isActive) {
    return (
      <Animatable.View
        duration={400}
        style={[styles.content, isActive ? styles.active : styles.inactive]}
        transition="backgroundColor"
      >
        <Animatable.View animation={isActive ? "bounceIn" : undefined}>
          {section.content}
        </Animatable.View>
      </Animatable.View>
    );
  }

  render() {
    const { multipleSelect, activeSections } = this.state;
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
              backgroundColor: colors.homeBgColor,
              borderTopLeftRadius: totalSize(4),
              borderTopRightRadius: totalSize(4)
              // marginTop: totalSize(2.5)
            }
          ]}
        >
          <ScrollView
            style={[styles.container, { backgroundColor: colors.darkText }]}
          >
            <View
              style={[
                styles.container,
                {
                  alignItems: "center",
                  backgroundColor: colors.homeBgColor,
                  borderTopLeftRadius: totalSize(4),
                  borderTopRightRadius: totalSize(4)
                }
              ]}
            >
              <View
                style={{
                  alignSelf: "center",
                  marginTop: totalSize(3),
                  backgroundColor: colors.snow,
                  width: width(85),
                  height: Platform.OS == "ios" ? totalSize(4.2) : totalSize(5),
                  borderRadius: totalSize(5),
                  alignItems: "center",
                  flexDirection: "row"
                }}
              >
                <TouchableOpacity onPress={() => this.search(this.state.text)}>
                  <Image
                    source={require("../../Images/search.png")}
                    style={[
                      {
                        width: totalSize(2.2),
                        height: totalSize(2.2),
                        // resizeMode: "center",
                        marginLeft: totalSize(1.5),
                        marginRight: totalSize(1.4),
                        tintColor: colors.Purple
                      }
                    ]}
                    tintColor={colors.Purple}
                  />
                </TouchableOpacity>
                <TextInput
                  style={[
                    Platform.OS == "ios"
                      ? ApplicationStyles.h425
                      : ApplicationStyles.h4,
                    {
                      fontWeight: "normal",
                      fontFamily: fonts.poppinsLight,
                      color: colors.Purple,
                      padding: 5,
                      width: width(85)
                    }
                  ]}
                  onChangeText={text => {
                    this.setState({ text: text });
                  }}
                  placeholder={"Search"}
                ></TextInput>
              </View>

              <View style={{ width: width(90), alignSelf: "center" }}>
                <View>
                  <View
                    style={{
                      width: "20%",
                      height: height(7),
                      position: "absolute",
                      alignSelf: "flex-end",
                      right: 0,
                      bottom: 0,
                      backgroundColor: colors.snow
                    }}
                  />
                  <View
                    style={{
                      //width: "100%",
                      height: totalSize(30),
                      marginTop: totalSize(3),
                      backgroundColor: colors.Red,
                      justifyContent: "center",
                      alignItems: "center",
                      borderTopRightRadius: totalSize(5),
                      borderTopLeftRadius: totalSize(5)
                      // borderBottomRightRadius: totalSize(5)
                    }}
                  >
                    <Icon name={"image"} color={colors.snow} size={50} />
                  </View>
                </View>

                <Accordion
                  activeSections={activeSections}
                  sections={this.state.CONTENT}
                  touchableComponent={TouchableOpacity}
                  expandMultiple={multipleSelect}
                  renderHeader={this.renderHeader}
                  renderContent={this.renderContent}
                  duration={400}
                  onChange={this.setSections}
                />
              </View>

              <Text
                style={[
                  Platform.OS == "ios"
                    ? ApplicationStyles.h4
                    : ApplicationStyles.h35,
                  {
                    fontWeight: "normal",
                    color: colors.darkPurple,
                    marginTop: totalSize(3),
                    fontFamily: fonts.futuraMedium
                  }
                ]}
              >
                Coach of the week
              </Text>
              <View
                style={{
                  width: width(100),
                  marginTop: totalSize(3),
                  justifyContent: "center"
                }}
                //onPress={() => this.props.navigation.navigate("Profile")}
              >
                <TouchableOpacity
                  style={[
                    ApplicationStyles.row,
                    {
                      width: width(90),
                      alignSelf: "center",
                      paddingHorizontal: totalSize(2),
                      paddingVertical: totalSize(2),
                      alignItems: "center",
                      backgroundColor: colors.snow,
                      borderRadius: totalSize(4)
                      // borderBottomLeftRadius: totalSize(4),
                      // borderTopLeftRadius: totalSize(4),
                      // borderTopRightRadius: totalSize(4)
                    }
                  ]}
                  onPress={() => this.props.navigation.navigate("music")}
                >
                  <View style={{ flex: 1 }}>
                    <View
                      style={[
                        ApplicationStyles.row,
                        { alignItems: "center", marginTop: totalSize(1) }
                      ]}
                    >
                      <Image
                        source={require("../../Images/dummy_profile_pic.jpg")}
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
                                Mille Knudsen
                              </Text>

                              <Icon
                                name={"star"}
                                color={colors.star}
                                size={22}
                              />
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
                                4.5
                              </Text>

                              <Icon
                                name={"heart"}
                                color={colors.redHeader}
                                size={22}
                                style={{
                                  alignSelf: "flex-end",
                                  marginLeft: totalSize(5)
                                }}
                              />
                            </View>
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
                              Vocal Coach
                            </Text>
                          </View>
                        </View>

                        <View
                          style={{
                            backgroundColor: colors.redHeader,
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
                            Music
                          </Text>
                        </View>
                      </View>
                    </View>
                  </View>
                  {/* <View
                    style={[ApplicationStyles.row, { alignItems: "center" }]}
                  >
                    <Image
                      source={require("../../Images/dummy_profile_pic.jpg")}
                      style={[
                        Platform.OS == "ios"
                          ? ApplicationStyles.profilepictureStyleIos
                          : ApplicationStyles.profilepictureStyle,
                        { marginRight: totalSize(1) }
                      ]}
                    />
                    <View style={styles.container}>
                      <Text
                        style={[
                          Platform.OS == "ios"
                            ? ApplicationStyles.profileNameIos
                            : ApplicationStyles.profileName,
                          {
                            fontWeight: "normal",
                            color: colors.darkText,
                            fontFamily: fonts.futuraMedium,
                            marginTop: totalSize(2)
                            //marginVertical: totalSize(3)
                          }
                        ]}
                      >
                        Armando Jarl
                      </Text>
                      <Text
                        style={[
                          Platform.OS == "ios"
                            ? ApplicationStyles.h55
                            : ApplicationStyles.h5,
                          {
                            fontWeight: "normal",
                            color: colors.darkText,
                            fontFamily: fonts.poppinsRegular
                            // marginHorizontal: totalSize(1)
                            //marginVertical: totalSize(3)
                          }
                        ]}
                      >
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. active in the field for 30 years.
                      </Text>
                    </View>
                  </View> */}
                </TouchableOpacity>
              </View>

              <Text
                style={[
                  Platform.OS == "ios"
                    ? ApplicationStyles.h4
                    : ApplicationStyles.h35,
                  {
                    fontWeight: "normal",
                    color: colors.darkText,
                    marginVertical: totalSize(3),
                    fontFamily: fonts.futuraMedium
                  }
                ]}
              >
                Your sessions
              </Text>
              <View style={[styles.container]}>
                <ScrollView
                  style={[styles.container]}
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                >
                  <View
                    style={[
                      ApplicationStyles.row,
                      { paddingHorizontal: totalSize(2) }
                    ]}
                  >
                    {this.state.sessionData.length > 0 &&
                    this.state.sessionData ? (
                      this.state.sessionData.map((item, key) => {
                        return (
                          <TouchableOpacity
                            onPress={() =>
                              this.props.navigation.navigate("Categorys")
                            }
                            style={[
                              Platform.OS == "ios"
                                ? ApplicationStyles.homeCardStyleIOS
                                : ApplicationStyles.homeCardStyleAndroid,
                              {
                                backgroundColor: colors.blueHome
                              }
                            ]}
                          >
                            <View
                              style={[
                                Platform.OS == "ios"
                                  ? ApplicationStyles.homeSubCardIOS
                                  : ApplicationStyles.homeSubCardAndroid,
                                {
                                  backgroundColor: colors.Green
                                }
                              ]}
                            >
                              <Image
                                source={{uri: item.image}}
                                style={[
                                  Platform.OS == "ios"
                                    ? styles.cardIconStyleIOS
                                    : styles.cardIconStyleAndroid,
                                  {
                                    tintColor: colors.Purple
                                  }
                                ]}
                                tintColor={colors.Purple}
                              />
                            </View>
                            <Text
                              style={[
                                ApplicationStyles.h375,
                                {
                                  fontWeight: "normal",
                                  marginLeft: totalSize(2),
                                  color: colors.Green,
                                  fontFamily: fonts.futuraMedium
                                }
                              ]}
                            >
                              {item.lesson.title}
                            </Text>
                            <Text
                              style={[
                                Platform.OS == "ios"
                                  ? ApplicationStyles.h5
                                  : ApplicationStyles.h45,
                                {
                                  fontWeight: "normal",
                                  marginLeft: totalSize(2),
                                  marginTop: totalSize(1.5),
                                  color: colors.Green,
                                  fontFamily: fonts.futuraMedium
                                }
                              ]}
                            >
                              {item.session.length} sessions made
                            </Text>
                            <View
                              style={[
                                styles.barBg,
                                {
                                  backgroundColor: colors.blurBarBg
                                }
                              ]}
                            >
                              <View
                                style={[
                                  styles.barFill,
                                  {
                                    backgroundColor: colors.Green
                                  }
                                ]}
                              />
                            </View>
                          </TouchableOpacity>
                        );
                      })
                    ) : (
                      <Text
                        style={[
                          Platform.OS == "ios"
                            ? ApplicationStyles.h4
                            : ApplicationStyles.h35,
                          {
                            fontWeight: "normal",
                            color: colors.darkText,
                            marginVertical: totalSize(3),
                            fontFamily: fonts.futuraMedium
                          }
                        ]}
                      >
                        No session Found
                      </Text>
                    )}
                    {/* <TouchableOpacity
                      onPress={() =>
                        this.props.navigation.navigate("Categorys")
                      }
                      style={[
                        Platform.OS == "ios"
                          ? ApplicationStyles.homeCardStyleIOS
                          : ApplicationStyles.homeCardStyleAndroid,
                        {
                          backgroundColor: colors.blueHome
                        }
                      ]}
                    >
                      <View
                        style={[
                          Platform.OS == "ios"
                            ? ApplicationStyles.homeSubCardIOS
                            : ApplicationStyles.homeSubCardAndroid,
                          {
                            backgroundColor: colors.Green
                          }
                        ]}
                      >
                        <Image
                          source={require("../../Images/DogPaw.png")}
                          style={[
                            Platform.OS == "ios"
                              ? styles.cardIconStyleIOS
                              : styles.cardIconStyleAndroid,
                            {
                              tintColor: colors.Purple
                            }
                          ]}
                          tintColor={colors.Purple}
                        />
                      </View>
                      <Text
                        style={[
                          ApplicationStyles.h375,
                          {
                            fontWeight: "normal",
                            marginLeft: totalSize(2),
                            color: colors.Green,
                            fontFamily: fonts.futuraMedium
                          }
                        ]}
                      >
                        Dogs
                      </Text>
                      <Text
                        style={[
                          Platform.OS == "ios"
                            ? ApplicationStyles.h5
                            : ApplicationStyles.h45,
                          {
                            fontWeight: "normal",
                            marginLeft: totalSize(2),
                            marginTop: totalSize(1.5),
                            color: colors.Green,
                            fontFamily: fonts.futuraMedium
                          }
                        ]}
                      >
                        5 sessions made
                      </Text>
                      <View
                        style={[
                          styles.barBg,
                          {
                            backgroundColor: colors.blurBarBg
                          }
                        ]}
                      >
                        <View
                          style={[
                            styles.barFill,
                            {
                              backgroundColor: colors.Green
                            }
                          ]}
                        />
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={[
                        Platform.OS == "ios"
                          ? ApplicationStyles.homeCardStyleIOS
                          : ApplicationStyles.homeCardStyleAndroid,
                        {
                          backgroundColor: colors.redHeader
                        }
                      ]}
                      onPress={() =>
                        this.props.navigation.navigate("Categorys")
                      }
                    >
                      <View
                        style={[
                          Platform.OS == "ios"
                            ? ApplicationStyles.homeSubCardIOS
                            : ApplicationStyles.homeSubCardAndroid,
                          {
                            backgroundColor: colors.darkText
                          }
                        ]}
                      >
                        <Image
                          source={require("../../Images/Note.png")}
                          style={[
                            Platform.OS == "ios"
                              ? styles.cardIconStyleIOS
                              : styles.cardIconStyleAndroid,
                            {
                              tintColor: colors.Red
                              // marginRight: totalSize(3)
                            }
                          ]}
                          tintColor={colors.Red}
                        />
                      </View>
                      <Text
                        style={[
                          ApplicationStyles.h375,
                          {
                            fontWeight: "normal",
                            marginLeft: totalSize(2),
                            color: colors.darkText,
                            fontFamily: fonts.futuraMedium
                          }
                        ]}
                      >
                        Music
                      </Text>
                      <Text
                        style={[
                          Platform.OS == "ios"
                            ? ApplicationStyles.h5
                            : ApplicationStyles.h45,
                          {
                            fontWeight: "normal",
                            marginLeft: totalSize(2),
                            marginTop: totalSize(2),
                            color: colors.darkText,
                            fontFamily: fonts.futuraMedium
                          }
                        ]}
                      >
                        5 sessions made
                      </Text>
                      <View
                        style={[
                          styles.barBg,
                          {
                            backgroundColor: colors.barBgColor
                          }
                        ]}
                      >
                        <View
                          style={[
                            styles.barFill,
                            {
                              backgroundColor: colors.darkText
                            }
                          ]}
                        />
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={[
                        Platform.OS == "ios"
                          ? ApplicationStyles.homeCardStyleIOS
                          : ApplicationStyles.homeCardStyleAndroid,
                        {
                          backgroundColor: colors.darkGreen
                        }
                      ]}
                      onPress={() =>
                        this.props.navigation.navigate("Categorys")
                      }
                    >
                      <View
                        style={[
                          Platform.OS == "ios"
                            ? ApplicationStyles.homeSubCardIOS
                            : ApplicationStyles.homeSubCardAndroid,
                          {
                            backgroundColor: colors.lightPink
                          }
                        ]}
                      >
                        <Image
                          source={require("../../Images/gamepad.png")}
                          style={[
                            Platform.OS == "ios"
                              ? styles.cardIconStyleIOS
                              : styles.cardIconStyleAndroid,
                            {
                              tintColor: colors.darkGreen
                            }
                          ]}
                          tintColor={colors.darkGreen}
                        />
                      </View>
                      <Text
                        style={[
                          ApplicationStyles.h375,
                          {
                            fontWeight: "normal",
                            marginLeft: totalSize(2),
                            color: colors.lightPink,
                            fontFamily: fonts.futuraMedium
                          }
                        ]}
                      >
                        Gaming
                      </Text>
                      <Text
                        style={[
                          Platform.OS == "ios"
                            ? ApplicationStyles.h5
                            : ApplicationStyles.h45,
                          {
                            fontWeight: "normal",
                            marginLeft: totalSize(2),
                            marginTop: totalSize(2),
                            color: colors.lightPink,
                            fontFamily: fonts.futuraMedium
                          }
                        ]}
                      >
                        5 sessions made
                      </Text>
                      <View
                        style={[
                          styles.barBg,
                          {
                            backgroundColor: colors.greenBarBg
                          }
                        ]}
                      >
                        <View
                          style={[
                            styles.barFill,
                            {
                              backgroundColor: colors.lightPink
                            }
                          ]}
                        />
                      </View>
                    </TouchableOpacity> */}
                  </View>
                </ScrollView>
              </View>

              <Text
                style={[
                  Platform.OS == "ios"
                    ? ApplicationStyles.h4
                    : ApplicationStyles.h35,
                  {
                    fontWeight: "normal",
                    color: colors.darkText,
                    marginTop: totalSize(4),
                    fontFamily: fonts.futuraMedium
                  }
                ]}
              >
                Categories
              </Text>
              <View
                style={{
                  marginTop: totalSize(2),
                  marginBottom: totalSize(15),
                  backgroundColor: colors.snow,
                  width: width(100),
                  flexDirection: "row",
                  flexWrap: "wrap",
                  paddingVertical: totalSize(3),
                  justifyContent: "space-evenly"
                }}
              >
                {this.state.CategoryData.length > 0 ? (
                  this.state.CategoryData.map((item, key) => {
                    return (
                      <TouchableOpacity
                        style={{
                          alignItems: "center",
                          marginVertical: totalSize(1.2)
                        }}
                        key={key}
                        onPress={() =>
                          this.props.navigation.navigate("Categorys", { item })
                        }
                      >
                        <View
                          style={{
                            backgroundColor:item.color,
                            height:
                              Platform.OS == "ios"
                                ? totalSize(9)
                                : totalSize(11),
                            width:
                              Platform.OS == "ios"
                                ? totalSize(9)
                                : totalSize(11),
                            marginHorizontal: totalSize(1.5),
                            borderTopLeftRadius: totalSize(2),
                            borderTopRightRadius: totalSize(2),
                            borderBottomLeftRadius: totalSize(2),
                            justifyContent: "center"
                          }}
                        >
                          <View
                            style={{
                              backgroundColor: item.subColor,
                              justifyContent: "center",
                              alignItems: "center",
                              height:
                                Platform.OS == "ios"
                                  ? totalSize(6)
                                  : totalSize(8),
                              width:
                                Platform.OS == "ios"
                                  ? totalSize(6)
                                  : totalSize(8),
                              marginHorizontal: totalSize(1.5),
                              borderRadius:
                                Platform.OS == "ios"
                                  ? totalSize(6) / 2
                                  : totalSize(8) / 2
                            }}
                          >
                            <Image
                              source={{ uri: item.image }}
                              style={[
                                {
                                  width:
                                    Platform.OS == "ios"
                                      ? totalSize(4)
                                      : totalSize(5),
                                  height:
                                    Platform.OS == "ios"
                                      ? totalSize(4)
                                      : totalSize(5)
                                  // tintColor: item.TintColor
                                }
                              ]}
                              // tintColor={item.TintColor}
                            />
                          </View>
                        </View>
                        <Text
                          style={[
                            Platform.OS == "ios"
                              ? ApplicationStyles.h45
                              : ApplicationStyles.h4,
                            {
                              fontWeight: "normal",
                              color: colors.darkText,
                              marginVertical: totalSize(0.15),
                              marginHorizontal: totalSize(1.3),
                              fontFamily: fonts.poppinsRegular
                            }
                          ]}
                        >
                          {item.name}
                        </Text>
                      </TouchableOpacity>
                    );
                  })
                ) : (
                  <ActivityIndicator size={"large"} />
                )}
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
            style={[
              {
                width: "100%",
                height: totalSize(3),
                position: "absolute",
                flexDirection: "row",
                justifyContent: "space-between"
              }
            ]}
          ></View>
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
              backgroundColor: colors.darkText,
              width: Platform.OS == "ios" ? totalSize(5) : totalSize(6),
              height: Platform.OS == "ios" ? totalSize(5) : totalSize(6),
              borderRadius:
                Platform.OS == "ios" ? totalSize(5) / 2 : totalSize(6) / 2,
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Image
              source={require("../../Images/search.png")}
              style={[ApplicationStyles.iconStyle, { tintColor: colors.snow }]}
              tintColor={colors.snow}
            />
          </View>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("Favourite")}
          >
            <Image
              source={require("../../Images/heart.png")}
              style={[ApplicationStyles.iconStyle, { tintColor: colors.Red }]}
              tintColor={colors.Red}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("Booking")}
          >
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
  cardIconStyleAndroid: {
    width: totalSize(5),
    height: totalSize(5)
    // resizeMode: "contain"
  },
  cardIconStyleIOS: {
    width: totalSize(4),
    height: totalSize(4)
    // resizeMode: "contain"
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
  },
  barBg: {
    width: width(30),
    height: height(0.8),
    borderRadius: totalSize(2),
    marginTop: totalSize(1.3),
    marginHorizontal: totalSize(2)
  },
  barFill: {
    width: width(13),
    height: height(0.8),
    borderRadius: totalSize(2)
  }
});

//export default Home;
