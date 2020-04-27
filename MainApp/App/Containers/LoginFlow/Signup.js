import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  Image,
  TextInput,
  Platform,
  ScrollView,
  Alert
} from "react-native";
import colors from "../../Themes/Colors";
import ImagePicker from "react-native-image-picker";
import ImageResizer from "react-native-image-resizer";
import { CheckBox } from "react-native-elements";
import ApplicationStyles from "../../Themes/ApplicationStyles";
import { totalSize, height, width } from "react-native-dimension";
import Icon from "react-native-vector-icons/FontAwesome";
import { fonts } from "../../Themes/Fonts";
import { onSignup,onSignupCoach } from "../../backend/user/Auth";
import { _storeData } from "../../backend/AsyncFuncs";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loader: false,
      email: "",
      password: "",
      name: "",
      role: "Student",
      profile_photo:
        "https://geo-location-v1.herokuapp.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBEdz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--7ae7771a730d709644134da006a0ed809fb9221f/logo.png",
      city: "",
      phone: "",
      about: "",
      background: "",
      avatarSource: null,
      ImageData: null,
      // avatarSource1: null,
      category_id: 0,
      type_id: 0
    };
  }

  image_picker = () => {
    const options = {
      title: "Select Avatar",
      storageOptions: {
        skipBackup: true,
        path: "images"
      }
    };
    ImagePicker.showImagePicker(options, response => {
      console.log("Response = ", response);
      if (response.didCancel) {
      } else if (response.error) {
      } else if (response.customButton) {
      } else {
        const source = { uri: response.uri };

        // if (img == 1) {
        this.setState({
          avatarSource: response,
          ImageData: response,
          profile_photo:response.uri,
        });
        //console.log(this.state.avatarSource);
        // } else {
        //   this.setState({
        //     avatarSource1: source
        //   });
        // }
      }
    });
  };

  // async onSignupFunc() {
  //   if (this.state.email == "" || this.state.password == "") {
  //     alert("Email and password fields cannot be empty");
  //   } else {
  //     this.setState({ loader: true });
  //     await _storeData("email", this.state.email);

  //     let loginData = await login(this.state.email, this.state.password);
  //     this.setState({ loader: false });

  //     if (loginData) {
  //       this.props.navigation.navigate("initial");
  //     }
  //   }
  // }

  async CheckValidateFn() {
    this.state.email = this.state.email.replace(/\s+/g, '');

    //email
    let reg1 = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg1.test(this.state.email) === false) {
      console.log('Email is Not Correct');
      this.state.email !== undefined &&
        this.state.email !== ''
        ? this.setState({ ErrorMessege: 'Please enter email address' })
        : this.setState({ ErrorMessege: 'email cannot be empty' });
      // this.setState({ email: text })
      return 1;
    }

    let reg2 = /^[\w\d@$!%*#?&]{6,30}$/;
    if (reg2.test(this.state.password) === false) {
      this.state.password === ''
        ? this.setState({ ErrorMessege: 'Password cannot Not be empty' })
        : this.state.password.length > 5
          ? this.setState({ ErrorMessege: 'Please enter proper Password' })
          : this.setState({
            ErrorMessege: 'Password should be atleast 6 characters!',
          });
      // this.setState({ email: text })
      return 1;
    }


    let reg3 = /^[\w  ]{3,30}$/;
    if (reg3.test(this.state.name) === false) {
      console.log('Name is Not Correct');
      this.state.name === ''
        ? this.setState({ ErrorMessege: 'Name cannot Not be empty' })
        : this.state.firstName.length > 2
          ? this.setState({ ErrorMessege: 'Please enter proper Name' })
          : this.setState({
            ErrorMessege: 'Name should be atleast 3 characters!',
          });
      // this.setState({ email: text })
      return 1;
    }

    let reg4 = /^[\w  ]{2,30}$/;
    if (reg4.test(this.state.city) === false) {

      this.state.city === ''
        ? this.setState({ ErrorMessege: 'City name cannot Not be empty' })
        : this.state.city.length > 2
          ? this.setState({ ErrorMessege: 'Please enter proper city name' })
          : this.setState({
            ErrorMessege: 'City name should be atleast 2 characters!',
          });
      // this.setState({ email: text })
      return 1;
    }


    //Phone

    let reg5 = /^[0-9]{11}$/;
    if (reg5.test(this.state.phone) === false) {
      console.log('Phone is Not Correct');
      this.state.phone === ''
        ? this.setState({ ErrorMessege: 'Phone number cannot Not be empty' })
        : this.state.phone.length < 11 && this.state.phone.length > 11
          ? this.setState({ ErrorMessege: 'Phone number should be 11 numbers only!' })
          : this.setState({
            ErrorMessege: 'Phone number should be 11 characters only!',
          });
      // this.setState({ email: text })
      return 1;
    }

    if (this.state.role == "Coach") {
      let reg6 = /^[\w  ]{3,30}$/;
      if (reg6.test(this.state.background) === false) {
        this.state.background === ''
          ? this.setState({ ErrorMessege: 'background cannot Not be empty' })
          : this.state.background.length > 2
            ? this.setState({ ErrorMessege: 'Please enter proper background' })
            : this.setState({
              ErrorMessege: 'background should be atleast 3 characters!',
            });
        // this.setState({ email: text })
        return 1;
      }
      let reg7 = /^[\w  ]{3,30}$/;
      if (reg7.test(this.state.about) === false) {
        this.state.about === ''
          ? this.setState({ ErrorMessege: 'about cannot Not be empty' })
          : this.state.about.length > 2
            ? this.setState({ ErrorMessege: 'Please enter proper about' })
            : this.setState({
              ErrorMessege: 'about should be atleast 3 characters!',
            });
        // this.setState({ email: text })
        return 1;
      }
      let reg8 = /^[0-9]$/;
      if (reg8.test(this.state.category_id) === false) {
        this.state.category_id === ''
          ? this.setState({ ErrorMessege: 'Category_id cannot Not be empty' })
          : this.state.category_id.length > 0
            ? this.setState({ ErrorMessege: 'Please enter proper category_id' })
            : this.setState({
              ErrorMessege: 'Category_id should be atleast 1 characters!',
            });
        // this.setState({ email: text })
        return 1;
      }
      let reg9 = /^[0-9]$/;
      if (reg9.test(this.state.type_id) === false) {
        this.state.type_id === ''
          ? this.setState({ ErrorMessege: 'Type_id cannot Not be empty' })
          : this.state.type_id.length > 0
            ? this.setState({ ErrorMessege: 'Please enter proper type_id' })
            : this.setState({
              ErrorMessege: 'Type_id should be atleast 1 characters!',
            });
        // this.setState({ email: text })
        return 1;
      }

    }

    return 0;
  }
  async ValidationFn() {
    this.setState({ loader: true });
    let TempCheck = await this.CheckValidateFn();

    switch (TempCheck) {
      case 0:
        this.onSignupFunc();

        break;
      case 1:
        this.setState({ loader: false });
        alert(this.state.ErrorMessege);
        break;
      default:
        break;
    }
  }

  async onSignupFunc() {
    //console.log(this.state.role);  
    if (this.state.role == "Coach") {
      let data = await onSignupCoach
        (this.state.email,
          this.state.password,
          this.state.name, this.state.phone, this.state.city, 
          this.state.role,this.state.avatarSource,this.state.background, 
          this.state.about, this.state.type_id, this.state.category_id);
      console.log(data.email);
      if (data.email === this.state.email) {
        Alert.alert("Registration Successful");
        this.props.navigation.navigate("login");
      }
      else {
        Alert.alert("Registration Un-Successful");
      }
    }
    else {
      let data = await onSignup
        (this.state.email,
          this.state.password,
          this.state.name, this.state.phone, this.state.city, this.state.role,
          this.state.avatarSource);
      console.log(data.email);
      if (data.email === this.state.email) {
        Alert.alert("Registration Successful");
        this.props.navigation.navigate("login");
      }
      else {
        Alert.alert("Registration Un-Successful");
      }

    }
    this.setState({ loader: false });
  }

  render() {

    return (
      <View
        style={[
          styles.container,
          {
            backgroundColor: colors.DarkGreyBg
            // alignItems: "center",
            // justifyContent: "center"
          }
        ]}
      >
        <View
          style={[
            styles.container,
            {
              backgroundColor: colors.DarkGreyBg
              // alignItems: "center",
              // justifyContent: "center"
            }
          ]}
        >
          <View
            style={[
              styles.container,
              {
                backgroundColor: colors.homeBgColor,
                borderTopLeftRadius: totalSize(5),
                borderTopRightRadius: totalSize(5),
                width: "100%",
                paddingTop: totalSize(3)
              }
            ]}
          >
            <ScrollView style={styles.container}>
              <View
                style={[
                  styles.container,
                  {
                    alignItems: "center"
                  }
                ]}
              >
                <View style={{ flexDirection: "row" }}>
                  <Text
                    style={[
                      ApplicationStyles.h35,
                      {
                        fontWeight: "normal",
                        color: colors.SplashBlueBg
                        //marginVertical: totalSize(3)
                      }
                    ]}
                  >
                    Create a{" "}
                  </Text>
                  <Text
                    style={[
                      ApplicationStyles.h35,
                      {
                        //fontWeight: "bold",
                        color: colors.SplashBlueBg,
                        fontFamily: fonts.poppinsSemiBold
                        //marginVertical: totalSize(3)
                      }
                    ]}
                  >
                    Coachen Account
                  </Text>
                </View>
                <Text
                  style={[
                    ApplicationStyles.h35,
                    {
                      fontWeight: "normal",
                      color: colors.SplashBlueBg,
                      marginBottom: totalSize(3)
                    }
                  ]}
                >
                  to continue {"<3"}
                </Text>
                <View
                  style={[
                    ApplicationStyles.row,
                    ApplicationStyles.alingCenter,
                    { marginBottom: totalSize(1.5) }
                  ]}
                >
                  <CheckBox
                    title="Coach"
                    iconType="material-community"
                    checkedIcon="checkbox-marked-circle"
                    uncheckedIcon="checkbox-blank-circle-outline"
                    containerStyle={{
                      backgroundColor: "transparent",
                      borderWidth: 0
                    }}
                    textStyle={{
                      fontSize: 14,
                      fontWeight: "normal",
                      color: colors.SplashBlueBg
                    }}
                    size={20}
                    checked={this.state.checked}
                    checkedColor={colors.Red}
                    onPress={() =>
                      this.setState({
                        checked: true,
                        role: "Coach"
                      })
                    }
                  />
                  <CheckBox
                    title="Student"
                    iconType="material-community"
                    checkedIcon="checkbox-marked-circle"
                    uncheckedIcon="checkbox-blank-circle-outline"
                    containerStyle={{
                      backgroundColor: "transparent",
                      borderWidth: 0
                    }}
                    textStyle={{
                      fontSize: 14,
                      fontWeight: "normal",
                      color: colors.SplashBlueBg
                    }}
                    size={20}
                    checked={!this.state.checked}
                    checkedColor={colors.Red}
                    onPress={() =>
                      this.setState({
                        checked: false,
                        role: "Student"
                      })
                    }
                  />
                </View>
                <View style={styles.inputContainerStyle}>
                  <TextInput
                    style={styles.inputfieldStyle}
                    placeholder="Email"
                    placeholderTextColor={colors.steel}
                    underlineColorAndroid="transparent"
                    onChangeText={text => this.setState({ email: text })}
                  />
                </View>
                <View style={styles.inputContainerStyle}>
                  <TextInput
                    style={styles.inputfieldStyle}
                    placeholder="Password"
                    placeholderTextColor={colors.steel}
                    underlineColorAndroid="transparent"
                    secureTextEntry={true}
                    onChangeText={password => this.setState({ password })}
                  />
                </View>
                <View style={styles.inputContainerStyle}>
                  <TextInput
                    style={styles.inputfieldStyle}
                    placeholder="Name"
                    placeholderTextColor={colors.steel}
                    underlineColorAndroid="transparent"
                    onChangeText={name => this.setState({ name })}
                  />
                </View>

                <View style={styles.inputContainerStyle}>
                  <TextInput
                    style={styles.inputfieldStyle}
                    placeholder="City"
                    placeholderTextColor={colors.steel}
                    underlineColorAndroid="transparent"
                    onChangeText={city => this.setState({ city })}
                  />
                </View>
                <View style={styles.inputContainerStyle}>
                  <TextInput
                    style={styles.inputfieldStyle}
                    placeholder="Phone"
                    placeholderTextColor={colors.steel}
                    underlineColorAndroid="transparent"
                    onChangeText={phone => this.setState({ phone })}
                    keyboardType="numeric"
                  />
                </View>
                {this.state.role == "Coach" ? (
                  <View>
                    <View style={styles.inputContainerStyle}>
                      <TextInput
                        style={styles.inputfieldStyle}
                        placeholder="Backgound"
                        placeholderTextColor={colors.steel}
                        underlineColorAndroid="transparent"
                        onChangeText={background =>
                          this.setState({ background })
                        }
                      />
                    </View>
                    <View style={styles.inputContainerStyle}>
                      <TextInput
                        style={styles.inputfieldStyle}
                        placeholder="About"
                        placeholderTextColor={colors.steel}
                        underlineColorAndroid="transparent"
                        onChangeText={about => this.setState({ about })}
                      />
                    </View>
                    <View style={styles.inputContainerStyle}>
                      <TextInput
                        style={styles.inputfieldStyle}
                        placeholder="Category ID"
                        placeholderTextColor={colors.steel}
                        underlineColorAndroid="transparent"
                        onChangeText={category_id =>
                          this.setState({ category_id })
                        }
                        keyboardType="numeric"
                      />
                    </View>
                    <View style={styles.inputContainerStyle}>
                      <TextInput
                        style={styles.inputfieldStyle}
                        placeholder="Type ID"
                        placeholderTextColor={colors.steel}
                        underlineColorAndroid="transparent"
                        onChangeText={type_id => this.setState({ type_id })}
                        keyboardType="numeric"
                      />
                    </View>
                  </View>
                ) : null}

                <View
                  style={[ApplicationStyles.row, ApplicationStyles.alingCenter]}
                >
                  <TouchableOpacity
                    style={[styles.buttonSmall, {}]}
                    onPress={() => this.image_picker()}
                  >
                    <Text
                      style={[
                        styles.welcome,
                        ApplicationStyles.h45,
                        {
                          color: colors.SplashBlueBg,
                          marginHorizontal: totalSize(1),
                          marginVertical: 4
                        }
                      ]}
                    >
                      Upload Image
                    </Text>
                  </TouchableOpacity>
                  <View style={{ width: 20 }} />
                  {this.state.avatarSource === null ? (
                    <Text
                      style={[
                        styles.instructions,
                        { fontSize: 10, color: colors.Red }
                      ]}
                    >
                      No file selected
                    </Text>
                  ) : (
                      <Image
                        source={this.state.avatarSource}
                        style={{ height: 40, width: 40 }}
                      />
                    )}
                </View>

                <TouchableOpacity
                  style={[
                    ApplicationStyles.initalScreenButton,
                    {
                      backgroundColor: colors.SplashBlueBg,
                      marginTop: totalSize(2),
                      marginBottom: totalSize(1.2)
                    }
                  ]}
                  onPress={() => this.ValidationFn()}
                >
                  {this.state.loader ? (
                    <ActivityIndicator size="large" color={colors.snow} />
                  ) : (
                      <Text
                        style={[
                          Platform.OS == "ios"
                            ? ApplicationStyles.initialScreenButtonTextIos
                            : ApplicationStyles.initialScreenButtonTextAndroid, //h4
                          {
                            // color: colors.darkText,
                            color: colors.snow,
                            // fontWeight: "bold",
                            fontFamily: fonts.futuraMedium
                          }
                        ]}
                      >
                        Sign Up
                      </Text>
                    )}
                </TouchableOpacity>

                <Text
                  style={[
                    ApplicationStyles.h45,
                    {
                      fontWeight: "normal",
                      color: colors.SplashBlueBg,
                      marginVertical: totalSize(1)
                    }
                  ]}
                >
                  or with
                </Text>

                <View
                  style={[
                    styles.container,
                    {
                      flexDirection: "row",
                      width: "100%",
                      padding: totalSize(2),
                      justifyContent: "center"
                    }
                  ]}
                >
                  <View
                    style={[
                      {
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: colors.facebookColor,
                        alignSelf: "flex-end",
                        width: totalSize(5),
                        height: totalSize(5),
                        borderRadius: totalSize(5) / 2,
                        marginHorizontal: totalSize(2)
                      }
                    ]}
                  >
                    <Icon name={"facebook"} size={28} color={colors.snow} />
                  </View>

                  <View
                    style={[
                      {
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: colors.Red,
                        alignSelf: "flex-end",
                        width: totalSize(5),
                        height: totalSize(5),
                        borderRadius: totalSize(5) / 2,
                        marginHorizontal: totalSize(2)
                      }
                    ]}
                  >
                    <Icon name={"google"} size={28} color={colors.snow} />
                  </View>

                  {/* <View
                    style={[
                      {
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: colors.lightBlue,
                        alignSelf: "flex-end",
                        width: totalSize(6),
                        height: totalSize(6),
                        borderRadius: totalSize(6) / 2
                      }
                    ]}
                  >
                    <Icon
                      name={"twitter"}
                      size={32}
                      color={colors.snow}
                      style={
                        {
                          // padding: totalSize(2)
                        }
                      }
                    />
                  </View>

                  <View
                    style={[
                      {
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: colors.lightRed,
                        alignSelf: "flex-end",
                        width: totalSize(6),
                        height: totalSize(6),
                        borderRadius: totalSize(6) / 2
                      }
                    ]}
                  >
                    <Icon
                      name={"instagram"}
                      size={32}
                      color={colors.snow}
                      style={
                        {
                          // padding: totalSize(1.2)
                        }
                      }
                    />
                  </View> */}
                </View>

                <View style={[styles.container]}>
                  <Text
                    style={[
                      ApplicationStyles.h5,
                      {
                        fontWeight: "normal",
                        color: colors.SplashBlueBg,
                        alignSelf: "center",
                        marginBottom: totalSize(1),
                        textAlign: "center",
                        marginHorizontal: totalSize(5)
                      }
                    ]}
                  >
                    Phasellus fringilla purus metus, vitae pellentesque neque
                    venenatis at, Curabitur
                  </Text>
                </View>
              </View>
            </ScrollView>

            <View style={[{ bottom: 0 }]}>
              <View
                style={{
                  flexDirection: "row",
                  backgroundColor: colors.loginGreenBar,
                  alignItems: "center",
                  justifyContent: "center"
                  //alignSelf: "flex-end"
                }}
              >
                <Text
                  style={[
                    ApplicationStyles.h4,
                    {
                      fontWeight: "normal",
                      color: colors.darkGreen,
                      marginTop: totalSize(1.8),
                      marginBottom:
                        Platform.OS == "ios" ? totalSize(3) : totalSize(1.8)
                    }
                  ]}
                >
                  Already have an account?{" "}
                </Text>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate("loginAuth")}
                >
                  <Text
                    style={[
                      ApplicationStyles.h4,
                      {
                        fontWeight: "bold",
                        color: colors.darkGreen,
                        marginTop: totalSize(1.8),
                        marginBottom:
                          Platform.OS == "ios" ? totalSize(3) : totalSize(1.8)
                      }
                    ]}
                  >
                    Login
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
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
  buttonSmall: {
    alignItems: "center",
    justifyContent: "center",
    height: totalSize(5),
    backgroundColor: colors.lightPink,
    borderRadius: 2.5
  },
  inputContainerStyle: {
    width: width(80),
    height: height(8),
    borderRadius: totalSize(5),
    borderColor: colors.Blue,
    backgroundColor: colors.snow,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: totalSize(1.5),
    marginBottom: totalSize(1.5)
  },
  inputfieldStyle: {
    flex: 1,
    fontWeight: "normal",
    color: colors.darkText,
    fontFamily: fonts.poppinsLight
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
  }
});

export default Signup;
