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
import { Calendar, CalendarList, Agenda } from "react-native-calendars";
import { fonts } from "../../Themes/Fonts";

const tagList = [
  {
    type: "Song lesson",
    color: colors.Red
  }
];

class BookingsCalendar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: "Your sessions",
      headerTitleStyle: {
        color: colors.snow,
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
        backgroundColor: colors.darkGreen,
        shadowColor: "transparent",
        shadowRadius: 0,
        elevation: 0,
        borderBottomWidth: 0,
        shadowOffset: {
          height: 0
        }
      },
      headerRight: (
        <TouchableOpacity
          onPress={() => navigation.navigate("Schedule")} //Schedulesetting
        >
          <Image
            source={require("../../Images/settings.png")}
            style={[
              {
                width: totalSize(3),
                height: totalSize(3),
                // resizeMode: "center",
                marginRight: totalSize(3),
                tintColor: colors.snow
              }
            ]}
            tintColor={colors.snow}
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
              {
                width: totalSize(3),
                height: totalSize(3),
                // resizeMode: "center",
                marginLeft: totalSize(3),
                tintColor: colors.snow
              }
            ]}
            tintColor={colors.snow}
          />
        </TouchableOpacity>
      )
    };
  };

  render() {
    return (
      <View style={[styles.container, { backgrounColor: colors.homeBgColor }]}>
        <ScrollView style={[styles.container]}>
          <View style={[styles.container]}>
            <View
              style={[
                {
                  marginHorizontal: totalSize(4)
                }
              ]}
            >
              <Calendar
                // Initially visible month. Default = Date()
                current={"2019-12-01"}
                // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
                minDate={"2020-05-10"}
                // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
                maxDate={"2019-05-30"}
                // Handler which gets executed on day press. Default = undefined
                onDayPress={day => {
                  console.log("selected day", day);
                }}
                // Handler which gets executed on day long press. Default = undefined
                onDayLongPress={day => {
                  console.log("selected day", day);
                }}
                // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
                monthFormat={"yyyy MM"}
                // Handler which gets executed when visible month changes in calendar. Default = undefined
                onMonthChange={month => {
                  console.log("month changed", month);
                }}
                // Hide month navigation arrows. Default = false
                hideArrows={false}
                // Replace default arrows with custom ones (direction can be 'left' or 'right')
                // renderArrow={direction => <Arrow />}
                // Do not show days of other months in month page. Default = false
                hideExtraDays={false}
                // If hideArrows=false and hideExtraDays=false do not switch month when tapping on greyed out
                // day from another month that is visible in calendar page. Default = false
                disableMonthChange={false}
                // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
                firstDay={1}
                // Hide day names. Default = false
                hideDayNames={false}
                // Show week numbers to the left. Default = false
                showWeekNumbers={false}
                // Handler which gets executed when press arrow icon left. It receive a callback can go back month
                onPressArrowLeft={substractMonth => substractMonth()}
                // Handler which gets executed when press arrow icon left. It receive a callback can go next month
                onPressArrowRight={addMonth => addMonth()}
                theme={{
                  backgroundColor: colors.snow,
                  calendarBackground: colors.snow,
                  textSectionTitleColor: colors.black,
                  selectedDayBackgroundColor: "#00adf5",
                  selectedDayTextColor: colors.black,
                  todayTextColor: colors.black,
                  dayTextColor: colors.black,
                  textDisabledColor: colors.black,
                  dotColor: "#00adf5",
                  selectedDotColor: "#ffffff",
                  arrowColor: "orange",
                  monthTextColor: "blue",
                  indicatorColor: "blue",
                  //textDayFontFamily: "monospace",
                  //textMonthFontFamily: "monospace",
                  //textDayHeaderFontFamily: "monospace",
                  textDayFontWeight: "500",
                  textMonthFontWeight: "bold",
                  textDayHeaderFontWeight: "300",
                  textDayFontSize: 20,
                  textMonthFontSize: 0,
                  textDayHeaderFontSize: 16
                }}
                style={
                  {
                    // borderRadius: totalSize(5)
                  }
                }
              />
              <View
                style={[
                  styles.container,
                  ApplicationStyles.row,
                  {
                    backgroundColor: colors.homeBgColor,
                    width: "100%",
                    height: totalSize(8),
                    borderBottomLeftRadius: totalSize(5),
                    borderBottomRightRadius: totalSize(5)
                  }
                ]}
              />
            </View>
          </View>

          <View
            style={[
              styles.container,
              {
                backgroundColor: colors.homeBgColor,
                paddingVertical: totalSize(3)
              }
            ]}
          >
            {/* <View
              style={{
                width: "100%",
                height: totalSize(6),
                position: "absolute",
                backgroundColor: colors.homeBgColor
              }}
            /> */}

            <View
              style={{
                backgroundColor: colors.snow,
                borderRadius: totalSize(5),
                paddingTop: totalSize(3)
              }}
            >
              <View style={{ marginHorizontal: totalSize(3) }}>
                <View style={[ApplicationStyles.row]}>
                  <Image
                    source={require("../../Images/dummy_profile_pic.jpg")}
                    style={[
                      ApplicationStyles.profilepictureStyle,
                      { marginRight: totalSize(0.1) }
                    ]}
                  />
                  <View>
                    <View
                      style={[
                        ApplicationStyles.row,
                        { marginTop: totalSize(1.5) }
                      ]}
                    >
                      <View
                        style={[
                          ApplicationStyles.row,
                          { justifyContent: "center" }
                        ]}
                      >
                        <Text
                          style={[
                            ApplicationStyles.profileName,
                            {
                              fontWeight: "normal",
                              color: colors.darkPurple,
                              marginHorizontal: totalSize(1),
                              fontFamily: fonts.futuraMedium
                            }
                          ]}
                        >
                          Kyle Doddins
                        </Text>

                        <View
                          style={[
                            ApplicationStyles.row,
                            { justifyContent: "center" }
                          ]}
                        >
                          <Icon name={"star"} color={colors.star} size={24} />
                          <Text
                            style={[
                              ApplicationStyles.h375,
                              {
                                fontWeight: "normal",
                                color: colors.star,
                                marginLeft: totalSize(0.5),
                                marginRight: totalSize(1.5),
                                fontFamily: fonts.poppinsRegular
                              }
                            ]}
                          >
                            4.5
                          </Text>
                        </View>

                        <View
                          style={{
                            backgroundColor: colors.Blue,
                            width: totalSize(3.8),
                            height: totalSize(3.8),
                            borderRadius: totalSize(3.8) / 2,
                            justifyContent: "center",
                            alignItems: "center",
                            marginLeft: totalSize(2)
                          }}
                        >
                          <Image
                            source={require("../../Images/message.png")}
                            style={[
                              {
                                // resizeMode: "center",
                                width: totalSize(2.4),
                                height: totalSize(2.4),
                                tintColor: colors.snow
                              }
                            ]}
                            tintColor={colors.snow}
                          />
                        </View>

                        <View
                          style={{
                            backgroundColor: colors.Red,
                            width: totalSize(3.8),
                            height: totalSize(3.8),
                            borderRadius: totalSize(3.8) / 2,
                            justifyContent: "center",
                            alignItems: "center",
                            marginHorizontal: totalSize(1.5)
                          }}
                        >
                          <Icon
                            name={"close"}
                            size={22}
                            color={colors.snow}
                            style={
                              {
                                //padding: totalSize(1.2)
                              }
                            }
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
                                ApplicationStyles.h4,
                                {
                                  fontWeight: "normal",
                                  color: colors.snow,
                                  marginVertical: totalSize(0.3),
                                  marginHorizontal: totalSize(1),
                                  fontFamily: fonts.futuraMedium
                                }
                              ]}
                            >
                              {item.type}
                            </Text>
                          </View>
                        );
                      })}
                    </View>
                    <Text
                      style={[
                        ApplicationStyles.h4,
                        {
                          fontWeight: "normal",
                          color: colors.darkPurple,
                          marginHorizontal: totalSize(1),
                          fontFamily: fonts.poppinsRegular
                        }
                      ]}
                    >
                      11.00 - 11.45
                    </Text>
                  </View>
                </View>
              </View>
            </View>

            {/* onPress={() =>
                  this.props.navigation.navigate("Schedulesetting")
                } */}
          </View>
        </ScrollView>

        <View
          style={{
            width: "100%",
            height: height(12),
            backgroundColor: colors.snow,
            paddingTop: totalSize(1),
            paddingBottom: totalSize(3),
            position: "absolute",
            bottom: 0,
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center"
          }}
        >
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("HomePage")}
          >
            <Image
              source={require("../../Images/search.png")}
              style={[
                ApplicationStyles.iconStyle,
                { tintColor: colors.darkText }
              ]}
              tintColor={colors.darkText}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("Favourite")}
          >
            <Image
              source={require("../../Images/heart.png")}
              style={[
                ApplicationStyles.iconStyle,
                { resizeMode: "center", tintColor: colors.Red }
              ]}
              tintColor={colors.Red}
            />
          </TouchableOpacity>

          <View
            style={{
              backgroundColor: colors.Green,
              width: totalSize(6),
              height: totalSize(6),
              borderRadius: totalSize(6) / 2,
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Image
              source={require("../../Images/bookmark.png")}
              style={[
                {
                  width: totalSize(3),
                  height: totalSize(3),
                  // resizeMode: "center",
                  tintColor: colors.snow
                }
              ]}
              tintColor={colors.snow}
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

export default BookingsCalendar;
