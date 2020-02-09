import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Animated,
  Button,
  TouchableOpacity
} from "react-native";

class AnimationTest extends Component {
  constructor() {
    super();
    this.animated = new Animated.Value(0);

    var range = 1,
      snapshot = 50,
      radius = 100;

    /// translateX
    var inputRange = [],
      outputRange = [];
    for (var i = 0; i <= snapshot; ++i) {
      var value = i / snapshot;
      var move = Math.sin(value * Math.PI * 2) * radius;
      inputRange.push(value);
      outputRange.push(move);
    }
    this.translateX = this.animated.interpolate({ inputRange, outputRange });

    /// translateY
    var inputRange = [],
      outputRange = [];
    for (var i = 0; i <= snapshot; ++i) {
      var value = i / snapshot;
      var move = -Math.cos(value * Math.PI * 2) * radius;
      inputRange.push(value);
      outputRange.push(move);
    }
    this.translateY = this.animated.interpolate({ inputRange, outputRange });
  }

  animate() {
    this.animated.setValue(0);
    Animated.timing(this.animated, {
      toValue: 1,
      duration: 3000
    }).start();
  }

  render() {
    const transform = [
      { translateY: this.translateY },
      { translateX: this.translateX }
    ];
    return (
      <View style={styles.container}>
        <Animated.View style={[{ transform }]}>
          <TouchableOpacity style={styles.btn}>
            <Text>hello</Text>
          </TouchableOpacity>
        </Animated.View>
        <Button
          title="Test"
          onPress={() => {
            //console.log();
            this.animate();
          }}
        />
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2c3e50"
  },
  btn: {
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
    width: 50,
    height: 50,
    borderRadius: 50 / 2
  }
});

export default AnimationTest;
