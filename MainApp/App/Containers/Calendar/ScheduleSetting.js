import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Switch,
  ScrollView
} from "react-native";
import colors from "../../Themes/Colors";
import ApplicationStyles from "../../Themes/ApplicationStyles";
import { totalSize, height, width } from "react-native-dimension";
import Icon from "react-native-vector-icons/FontAwesome";
import { Calendar, CalendarList, Agenda } from "react-native-calendars";
import { fonts } from "../../Themes/Fonts";

const tagList = [
  {
    type: "09.00 - 09.45",
    color: colors.Red
  },
  {
    type: "10.00 - 10.45",
    color: colors.Purple
  },
  {
    type: "11.00 - 12.45",
    color: colors.star
  },
  {
    type: "13.00 - 13.45",
    color: colors.lightRed
  },
  {
    type: "14.00 - 14.45",
    color: colors.tagBlue
  },
  {
    type: "15.00 - 15.45",
    color: colors.tagPurple
  },
  {
    type: "16.00 - 16.45",
    color: colors.tagPurple
  },
  {
    type: "17.00 - 17.45",
    color: colors.tagPurple
  },
  {
    type: "18.00 - 18.45",
    color: colors.tagPurple
  },
  {
    type: "19.00 - 19.45",
    color: colors.tagPurple
  },
  {
    type: "20.00 - 20.45",
    color: colors.tagPurple
  }
];

class ScheduleSetting extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    console.disableYellowBox = true;
  }

  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: "Schedule settings",
      headerTitleStyle: {
        color: colors.snow,
        fontSize: ApplicationStyles.headerTitleFontSize,
        fontWeight: "normal",
        fontFamily: fonts.futuraMedium
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
        //onPress={() => navigation.openDrawer()}
        >
          <Image
            source={require("../../Images/menu.png")}
            style={[
              ApplicationStyles.headerIconStyle,
              {
                marginRight: totalSize(3),
                tintColor: colors.snow
              }
            ]}
            tintColor={colors.snow}
          />
        </TouchableOpacity>

        // <Icon
        //   name={"cog"}
        //   color={colors.snow}
        //   size={30}
        //   style={{ marginRight: totalSize(2) }}
        //   // onPress={() => navigation.openDrawer()}
        // />
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
                tintColor: colors.snow
              }
            ]}
            tintColor={colors.snow}
          />
        </TouchableOpacity>

        // <Icon
        //   name={"arrow-left"}
        //   color={colors.snow}
        //   size={26}
        //   style={{ marginLeft: totalSize(2) }}
        //   onPress={() => navigation.pop()}
        // />
      )
    };
  };

  render() {
    return (
      <View style={[styles.container, { backgrounColor: colors.darkGreen }]}>
        <ScrollView
          style={[styles.container, { backgrounColor: colors.darkGreen }]}
        >
          <View style={[{ backgrounColor: colors.darkGreen }]}>
            <View style={[{ backgrounColor: colors.darkGreen }]}>
              <Text
                style={[
                  ApplicationStyles.h35,
                  {
                    fontWeight: "normal",
                    color: colors.darkGreen,
                    marginHorizontal: totalSize(4)
                  }
                ]}
              >
                Change your availability settings for entire days this month.
              </Text>
              <View style={{ alignSelf: "flex-end", flexDirection: "row" }}>
                <Text
                  style={[
                    ApplicationStyles.h35,
                    {
                      fontWeight: "normal",
                      color: colors.darkGreen,
                      marginRight: totalSize(2)
                    }
                  ]}
                >
                  Change All
                </Text>
                <Switch style={{ marginRight: totalSize(4) }} />
              </View>
            </View>

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
              hideArrows={true}
              // Replace default arrows with custom ones (direction can be 'left' or 'right')
              renderArrow={direction => <Arrow />}
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
                backgroundColor: colors.darkGreen,
                calendarBackground: colors.darkGreen,
                textSectionTitleColor: colors.snow,
                selectedDayBackgroundColor: "#00adf5",
                selectedDayTextColor: colors.snow,
                todayTextColor: colors.snow,
                dayTextColor: colors.snow,
                textDisabledColor: colors.snow,
                dotColor: "#00adf5",
                selectedDotColor: "#ffffff",
                arrowColor: "orange",
                monthTextColor: "blue",
                indicatorColor: "blue",
                textDayFontFamily: "monospace",
                textMonthFontFamily: "monospace",
                textDayHeaderFontFamily: "monospace",
                textDayFontWeight: "500",
                textMonthFontWeight: "bold",
                textDayHeaderFontWeight: "300",
                textDayFontSize: 20,
                textMonthFontSize: 0,
                textDayHeaderFontSize: 16
              }}
              //   style={{
              //     borderTopRightRadius: totalSize(5),
              //     borderTopLeftRadius: totalSize(5)
              //   }}
            />
            <View>
              <View
                style={[
                  styles.container,
                  {
                    flex: 1,
                    backgroundColor: colors.homeBgColor,
                    borderBottomLeftRadius: totalSize(5)
                  }
                ]}
              />
              <View
                style={[
                  styles.container,
                  {
                    flex: 1,
                    backgrounColor: colors.homeBgColor
                    //borderBottomRightRadius: totalSize(5)
                  }
                ]}
              />
            </View>
          </View>
          <View
            style={[
              styles.container,
              {
                backgroundColor: colors.snow
              }
            ]}
          >
            <View
              style={{
                width: "100%",
                height: totalSize(6),
                position: "absolute",
                backgroundColor: colors.darkGreen
              }}
            />
            <View
              style={[
                styles.container,
                {
                  backgroundColor: colors.snow,
                  paddingTop: totalSize(2),
                  borderTopRightRadius: totalSize(5),
                  borderTopLeftRadius: totalSize(5)
                }
              ]}
            >
              {tagList.map((item, key) => {
                return (
                  <View
                    key={key}
                    style={[
                      ApplicationStyles.row,
                      {
                        backgroundColor: colors.snow,
                        borderTopRightRadius: totalSize(5),
                        alignItems: "center",
                        //justifyContent: "center",
                        paddingLeft: totalSize(2),
                        marginTop: totalSize(3),
                        marginBottom: totalSize(2),
                        borderBottomWidth: 0.5,
                        paddingBottom: totalSize(2.5),
                        paddingRight: totalSize(2),
                        justifyContent: "space-between"
                      }
                    ]}
                  >
                    <View />
                    <Text
                      style={[
                        ApplicationStyles.h3,
                        {
                          fontWeight: "bold",
                          color: colors.darkGreen,
                          marginHorizontal: totalSize(1)
                        }
                      ]}
                    >
                      {item.type}
                    </Text>
                    <Switch
                      //accessibilityLabel={locals.label}
                      //ref="input"
                      //disabled={locals.disabled}
                      thumbTintColor={colors.darkGreen}
                      tintColor={colors.Green}
                      //onValueChange={(value) => locals.onChange(value)}
                      //value={locals.value}
                    />
                  </View>
                );
              })}
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

export default ScheduleSetting;
