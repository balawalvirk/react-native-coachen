import React, { Component } from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  ActivityIndicator,
  TouchableOpacity
} from "react-native";
import axios from "axios";
// import {
//   GetSheetName,
//   SheetId,
//   SheetTotalPages,
//   SheetTotalCount,
//   SheetPageSize
// } from "../Requests/AsyncFunc";
import { totalSize } from "react-native-dimension";
import { Button, ThemeProvider, Text, Header } from "react-native-elements";

const URL = "https://api.smartsheet.com/2.0/sheets/";
const USER_TOKEN = "Bearer hcmq1wgdg47mcm83hna7kxaqu4";

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    console.disableYellowBox = true;
  }

  static navigationOptions = {
    header: null
  };

  async sendRequestToServer(opt) {
    switch (opt) {
      case "1":
        await this.GetSheetName(URL, USER_TOKEN);
        break;

      case "2":
        await this.SheetId(URL, USER_TOKEN);
        break;

      case "3":
        await this.SheetTotalPages(URL, USER_TOKEN);
        break;

      case "4":
        await this.SheetTotalCount(URL, USER_TOKEN);
        break;

      case "5":
        await this.SheetPageSize(URL, USER_TOKEN);
        break;
    }
  }

  async GetSheetName(URL, USER_TOKEN) {
    try {
      await axios
        .get(URL, { headers: { Authorization: USER_TOKEN } })
        .then(response => {
          const name = response.data.data[0].name;
          if (name) this.props.navigation.navigate("Home", { name });
        })
        .catch(error => {
          alert("error " + error);
        });
    } catch (error) {
      alert("error from catch");
    }
  }

  async SheetId(URL, USER_TOKEN) {
    try {
      await axios
        .get(URL, { headers: { Authorization: USER_TOKEN } })
        .then(response => {
          const name = response.data.data[0].id;
          if (name) this.props.navigation.navigate("Home", { name });
        })
        .catch(error => {
          alert("error " + error);
        });
    } catch (error) {
      alert("error from catch");
    }
  }

  async SheetTotalPages(URL, USER_TOKEN) {
    try {
      await axios
        .get(URL, { headers: { Authorization: USER_TOKEN } })
        .then(response => {
          const name = response.data.totalPages;
          if (name) this.props.navigation.navigate("Home", { name });
        })
        .catch(error => {
          alert("error " + error);
        });
    } catch (error) {
      alert("error from catch");
    }
  }

  async SheetTotalCount(URL, USER_TOKEN) {
    try {
      await axios
        .get(URL, { headers: { Authorization: USER_TOKEN } })
        .then(response => {
          const name = response.data.totalCount;
          if (name) this.props.navigation.navigate("Home", { name });
        })
        .catch(error => {
          alert("error " + error);
        });
    } catch (error) {
      alert("error from catch");
    }
  }

  async SheetPageSize(URL, USER_TOKEN) {
    try {
      await axios
        .get(URL, { headers: { Authorization: USER_TOKEN } })
        .then(response => {
          const name = response.data.pageSize;
          if (name) this.props.navigation.navigate("Home", { name });
        })
        .catch(error => {
          alert("error " + error);
        });
    } catch (error) {
      alert("error from catch");
    }
  }

  render() {
    const theme = {
      Button: {
        raised: true,
        titleStyle: {
          fontSize: totalSize(2)
        }
      }
    };

    return (
      <View style={styles.container}>
        <Header
          //leftComponent={{ icon: "menu", color: "#fff" }}
          centerComponent={{
            text: "SmartSheet api Test",
            style: { color: "#fff", fontSize: totalSize(3) }
          }}
          //rightComponent={{ icon: "home", color: "#fff" }}
        />

        <View style={styles.childContainer}>
          <ThemeProvider theme={theme}>
            <Button
              title="Get My Sheet name"
              onPress={() => this.sendRequestToServer("1")}
            />
          </ThemeProvider>

          <ThemeProvider theme={theme}>
            <Button
              title="Get my Sheet id"
              onPress={() => this.sendRequestToServer("2")}
            />
          </ThemeProvider>

          <ThemeProvider theme={theme}>
            <Button
              title="Get my Sheet total pages"
              onPress={() => this.sendRequestToServer("3")}
            />
          </ThemeProvider>

          <ThemeProvider theme={theme}>
            <Button
              title="Get my Sheet total count"
              onPress={() => this.sendRequestToServer("4")}
            />
          </ThemeProvider>

          <ThemeProvider theme={theme}>
            <Button
              title="Get my Sheet page size"
              onPress={() => this.sendRequestToServer("5")}
            />
          </ThemeProvider>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  childContainer: {
    flex: 0.9,
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  }
});
