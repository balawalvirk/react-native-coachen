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
    type: "Klassiskt",
    color: colors.star
  },
  {
    type: "Jazz",
    color: colors.lightRed
  },
  {
    type: "Musikal",
    color: colors.tagBlue
  },
  {
    type: "Visa",
    color: colors.tagPurple
  },
  {
    type: "Folkmusik",
    color: colors.Purple
  },
  {
    type: "Soul",
    color: colors.star
  },
  {
    type: "Opera",
    color: colors.Red
  }
];

class Genere extends Component {
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
            backgroundColor: colors.homeBgColor,
            justifyContent: "center",
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
              marginHorizontal: totalSize(1.3)
            }
          ]}
        >
          Generes
        </Text>
        <View
          style={{
            marginTop: totalSize(2),
            backgroundColor: colors.snow,
            width: "100%",
            flexDirection: "row",
            flexWrap: "wrap",
            borderRadius: totalSize(5),
            paddingVertical: totalSize(3),
            justifyContent: "space-evenly"
          }}
        >
          {tagList.map((item, key) => {
            return (
              <View
                style={{
                  alignItems: "center",
                  //justifyContent: "space-evenly",
                  marginVertical: totalSize(1.2)
                }}
                key={key}
              >
                <View
                  style={{
                    backgroundColor: item.color,
                    height: totalSize(12),
                    width: totalSize(12),
                    marginHorizontal: totalSize(2),
                    //marginVertical: totalSize(1.5),
                    borderRadius: totalSize(2),
                    justifyContent: "center"
                  }}
                />
                <Text
                  style={[
                    ApplicationStyles.h4,
                    {
                      fontWeight: "normal",
                      color: colors.black,
                      marginVertical: totalSize(0.15),
                      marginHorizontal: totalSize(1.3)
                    }
                  ]}
                >
                  {item.type}
                </Text>
              </View>
            );
          })}
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
  }
});

export default Genere;
