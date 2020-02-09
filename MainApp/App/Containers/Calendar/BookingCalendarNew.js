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

const profileList = [
  {
    type: "Kyle Doddins",
    value: "2",
    rating: "4.5",
    genere: "11.00 - 11.45",
    color: colors.Red
  }
];

class BookingCalendarNew extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: "Your Sessions",
      headerTitleStyle: {
        color: colors.snow,
        fontSize: ApplicationStyles.headerTitleFontSize,
        fontWeight: Platform.OS == "ios" ? "bold" : "normal",
        fontFamily: fonts.futuraBold
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
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Image
            source={require("../../Images/menu.png")}
            style={[
              ApplicationStyles.headerIconStyle,
              {
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
              ApplicationStyles.headerIconStyle,
              {
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
      <View style={[styles.container, { backgroundColor: colors.darkGreen }]}>
        <View
          style={[
            styles.container,
            {
              backgroundColor: colors.homeBgColor
              // borderTopLeftRadius: totalSize(5),
              // borderTopRightRadius: totalSize(5)
            }
          ]}
        >
          <ScrollView style={[styles.container]}>
            <View
              style={[
                {
                  marginHorizontal: totalSize(2),
                  paddingTop: totalSize(3)
                }
              ]}
            >
              <Calendar
                // Initially visible month. Default = Date()
                current={"2020-02-01"}
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
                hideExtraDays={true}
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
                  textSectionTitleColor: colors.darkText,
                  selectedDayBackgroundColor: colors.darkGreen,
                  selectedDayTextColor: colors.snow,
                  todayTextColor: colors.black,
                  dayTextColor: colors.black,
                  textDisabledColor: colors.black,
                  dotColor: "#00adf5",
                  selectedDotColor: colors.darkText,
                  arrowColor: colors.darkText,
                  monthTextColor: "blue",
                  indicatorColor: "blue",
                  textDayFontFamily: fonts.poppinsRegular,
                  textDayHeaderFontFamily: fonts.poppinsRegular,
                  //textDayFontFamily: "monospace",
                  //textMonthFontFamily: "monospace",
                  //textDayHeaderFontFamily: "monospace",
                  textDayFontWeight: "500",
                  textMonthFontWeight: "300",
                  textDayHeaderFontWeight: "300",
                  textDayFontSize: 16,
                  textMonthFontSize: 0,
                  textDayHeaderFontSize: 16
                }}
                style={{
                  borderRadius: totalSize(5),
                  paddingBottom: totalSize(2)
                }}
                markedDates={{
                  "2020-02-11": {
                    selected: true,
                    marked: true,
                    selectedColor: colors.darkGreen
                  }
                  // '2012-05-17': {marked: true},
                  // '2012-05-18': {marked: true, dotColor: 'red', activeOpacity: 0},
                  // '2012-05-19': {disabled: true, disableTouchEvent: true}
                }}
              />
            </View>

            <View
              style={{
                flex: 1,
                alignItems: "center",
                marginTop: totalSize(2)
              }}
            >
              {profileList.map((item, key) => {
                return (
                  <TouchableOpacity
                    key={key}
                    style={[
                      ApplicationStyles.row,
                      {
                        // flex: 1,
                        width: width(90),
                        backgroundColor: colors.snow,
                        paddingVertical: totalSize(2),
                        paddingHorizontal:
                          Platform.OS == "ios" ? totalSize(1) : totalSize(2),
                        marginHorizontal: totalSize(2),
                        marginVertical: totalSize(0.5),
                        justifyContent: "space-between",
                        alignItems: "center",
                        borderRadius: totalSize(3)
                      }
                    ]}
                    onPress={() => this.props.navigation.navigate("music")}
                  >
                    <View
                      style={[ApplicationStyles.row, { alignItems: "center" }]}
                    >
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
                                  : ApplicationStyles.h375,
                                {
                                  fontWeight: "bold",
                                  color: colors.darkPurple,
                                  marginHorizontal: totalSize(1)
                                  // fontFamily: fonts.futuraMedium
                                }
                              ]}
                            >
                              {item.type}
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
                            <Text
                              style={[
                                Platform.OS == "ios"
                                  ? ApplicationStyles.h5
                                  : ApplicationStyles.h4,
                                {
                                  fontWeight: "normal",
                                  color: colors.darkPurple,
                                  marginHorizontal: totalSize(1),
                                  fontFamily: fonts.poppinsRegular
                                }
                              ]}
                            >
                              {item.genere}
                            </Text>
                          </View>

                          <View
                            style={[
                              ApplicationStyles.row,
                              { justifyContent: "center" }
                            ]}
                          >
                            <Icon name={"star"} color={colors.star} size={22} />
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

                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        alignSelf: "flex-start"
                      }}
                    >
                      <View
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
                          source={require("../../Images/message.png")}
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
                      </View>
                      <Icon
                        name={"heart"}
                        color={colors.lightBlue}
                        size={22}
                        style={{
                          // marginBottom: totalSize(5),
                          marginRight: totalSize(0.5)
                          // marginLeft:  totalSize(2)
                        }}
                      />
                    </View>
                  </TouchableOpacity>
                );
              })}
            </View>

            {/* onPress={() =>
                  this.props.navigation.navigate("Schedulesetting")
                } */}
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
            style={[{ tintColor: colors.darkGreen }]}
          />
          <Image
            source={require("../../Images/headerEdge.png")}
            style={[
              {
                tintColor: colors.darkGreen,
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
              style={[ApplicationStyles.iconStyle, { tintColor: colors.Red }]}
              tintColor={colors.Red}
            />
          </TouchableOpacity>

          <View
            style={{
              backgroundColor: colors.Green,
              width: Platform.OS == "ios" ? totalSize(5) : totalSize(6),
              height: Platform.OS == "ios" ? totalSize(5) : totalSize(6),
              borderRadius:
                Platform.OS == "ios" ? totalSize(5) / 2 : totalSize(6) / 2,
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Image
              source={require("../../Images/bookmark.png")}
              style={[
                ApplicationStyles.iconSmallStyle,
                {
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
  }
});

export default BookingCalendarNew;
