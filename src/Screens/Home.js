import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { totalSize } from "react-native-dimension";
import { Button, ThemeProvider, Text, Header } from "react-native-elements";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ""
    };
  }

  componentWillMount() {
    const callback = this.props.navigation.getParam("name");
    this.setState({ data: callback });
    //alert(callback.name);
  }

  static navigationOptions = {
    header: null
  };

  render() {
    const theme = {
      Button: {
        raised: true,
        titleStyle: {
          fontSize: totalSize(1.5)
        }
      }
    };
    return (
      <View style={styles.container}>
        <Text h2>Result : {this.state.data}</Text>

        <ThemeProvider theme={theme}>
          <Button
            title="Go Back"
            onPress={() => this.props.navigation.navigate("Main")}
          />
        </ThemeProvider>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  }
});

export default Home;
