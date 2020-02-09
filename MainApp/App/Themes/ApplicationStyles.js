import Metrics from "./Metrics";
import { Platform } from "react-native";
import { totalSize, height, width } from "react-native-dimension";

//import { GlobalConst } from "../config/GlobalConst";
// This file is for a reusable grouping of Theme items.
// Similar to an XML fragment layout in Android

const ApplicationStyles = {
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f9f9f9"
  },
  splashLogo: {
    height: Metrics.screenHeight * 0.5,
    width: Metrics.screenWidth * 0.5,
    resizeMode: "contain"
  },
  profilepictureStyle: {
    height: totalSize(8.5),
    width: totalSize(8.5),
    borderRadius: totalSize(8.5) / 2
    //marginHorizontal: totalSize(2)
    //resizeMode: "contain"
  },
  smallCircleStyle: {
    height: totalSize(7),
    width: totalSize(7),
    borderRadius: totalSize(7) / 2
  },
  smallCircleStyleIOS: {
    height: totalSize(6),
    width: totalSize(6),
    borderRadius: totalSize(6) / 2
  },
  bigIconStyle: {
    height: Platform.OS == "ios" ? totalSize(4.2) : totalSize(5),
    width: Platform.OS == "ios" ? totalSize(4.2) : totalSize(5)
  },
  iconStyle: {
    height: Platform.OS == "ios" ? totalSize(3) : totalSize(3.5),
    width: Platform.OS == "ios" ? totalSize(3) : totalSize(3.5)
    // borderRadius: totalSize(9) / 2
  },
  iconSmallStyle: {
    width: Platform.OS == "ios" ? totalSize(2.4) : totalSize(3.2),
    height: Platform.OS == "ios" ? totalSize(2.4) : totalSize(3.2)
  },
  profilepictureStyleIos: {
    height: totalSize(7),
    width: totalSize(7),
    borderRadius: totalSize(7) / 2
    //marginHorizontal: totalSize(2)
    //resizeMode: "contain"
  },
  tagViewStyle: {
    borderRadius: totalSize(2)
  },
  icons: {
    height: Metrics.screenHeight * 0.04,
    width: Metrics.screenWidth * 0.05,
    resizeMode: "contain"
  },
  headerLeft: {
    width: Metrics.screenWidth * 0.1,
    justifyContent: "flex-end",
    alignItems: "flex-end"
  },
  headerRight: {
    width: Metrics.screenWidth * 0.1
  },
  circlesContainer: {
    position: "absolute",
    flex: 0.1,
    left: 0,
    right: 0,
    bottom: 20,
    height: 40,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  initalScreenButton: {
    justifyContent: "center",
    alignItems: "center",
    //paddingHorizontal: totalSize(3),
    width: width(85),
    height: Platform.OS == "ios" ? height(6.5) : height(7.8),
    borderRadius: totalSize(4),
    borderColor: "white",
    borderWidth: 1
    //shadowColor: "#000000",
    // shadowOffset: {
    //   width: 0,
    //   height: 2
    // },
    // shadowRadius: 1,
    // shadowOpacity: 0.5
    //overflow: "visible"
  },
  regularButton: {
    justifyContent: "center",
    alignItems: "center",
    //paddingHorizontal: totalSize(3),
    width: totalSize(25),
    height: totalSize(4.5),
    borderRadius: totalSize(4),
    borderColor: "white",
    borderWidth: 1,
    //shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 1,
    shadowOpacity: 0.5
    //overflow: "visible"
  },
  registrationButton: {
    justifyContent: "center",
    alignItems: "center",
    left: Metrics.screenWidth * 0.5 - 38,
    width: 75,
    height: 75,
    backgroundColor: "#1daecd",
    borderRadius: 38,
    borderColor: "white",
    borderWidth: 1,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 1,
    shadowOpacity: 0.5,
    overflow: "visible"
  },
  initialScreenButtonTextIos: {
    fontSize: totalSize(1.8)
  },
  initialScreenButtonTextAndroid: {
    fontSize: totalSize(2)
  },
  container0: {
    flex: 0
  },
  container: {
    flex: 1
  },
  container1_5: {
    flex: 1.5
  },
  container2: {
    flex: 2
  },
  container3: {
    flex: 3
  },
  container4: {
    flex: 4
  },
  scrollviewContainer: {
    flexGrow: 1
  },
  mapContainer: {
    height: 400,
    width: 400,
    justifyContent: "flex-end",
    alignItems: "center"
  },
  TextFieldContainer: {
    flex: 0.5,
    margin: 5
  },
  searchContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    margin: 5
  },
  textInput: {
    textAlign: "center",
    height: 50,
    width: "90%",
    fontSize: 18
  },
  footerButtonsContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center"
  },
  textCenter: {
    textAlign: "center"
  },
  bigText: {
    fontSize: 27,
    fontFamily: "TTSupermolot-Regular"
  },
  bigTextBold: {
    fontSize: 27,
    //color: GlobalConst.COLOR.BLACK,
    fontFamily: "TTSupermolot-Bold"
  },
  normalText: {
    fontSize: 18,
    //color: GlobalConst.COLOR.BLACK,
    fontFamily: "TTSupermolot-Regular"
  },
  normalTextBold: {
    fontSize: 18,
    fontFamily: "TTSupermolot-Bold"
  },
  smallText: {
    fontSize: 13,
    fontFamily: "TTSupermolot-Regular"
  },
  margin10: {
    margin: 10
  },
  marginLeft10: {
    marginLeft: 10
  },
  marginTop10: {
    marginTop: 10
  },
  marginTop20: {
    marginTop: 20
  },
  marginBottom10: {
    marginBottom: 10
  },
  marginBottom20: {
    marginBottom: 20
  },
  padding10: {
    padding: 10
  },
  padding20: {
    padding: 20
  },
  center: {
    justifyContent: "center",
    alignItems: "center"
  },
  selfCenter: {
    alignSelf: "center"
  },
  justifyCenter: {
    justifyContent: "center"
  },
  alingCenter: {
    alignItems: "center"
  },
  alingEnd: {
    alignItems: "flex-end"
  },
  justifyFlexEnd: {
    justifyContent: "flex-end"
  },
  justifySpaceBetween: {
    justifyContent: "space-between"
  },
  justifySpaceAround: {
    justifyContent: "space-around"
  },
  justifyEvenly: {
    justifyContent: "space-evenly"
  },
  row: {
    flexDirection: "row"
  },
  h001: {
    fontSize: totalSize(6.5),
    //color: colors.Darkgraycolor,
    fontWeight: "bold"
  },
  h01: {
    fontSize: totalSize(6),
    //color: colors.Darkgraycolor,
    fontWeight: "bold"
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
  h25: {
    fontSize: totalSize(3.3),
    //color: colors.Darkgraycolor,
    fontWeight: "bold"
  },
  h3: {
    fontSize: totalSize(3),
    //color: colors.Darkgraycolor,
    fontWeight: "bold"
  },
  h35: {
    fontSize: totalSize(2.5)
    //color: colors.Darkgraycolor,
    //fontWeight: "bold"
  },
  h375: {
    fontSize: totalSize(2.25)
    //color: colors.Darkgraycolor,
    //fontWeight: "bold"
  },
  h4: {
    fontSize: totalSize(2)
    //color: "grey"
  },
  h425: {
    fontSize: totalSize(1.9)
    //color: "grey"
  },
  h45: {
    fontSize: totalSize(1.8)
  },
  h5: {
    fontSize: totalSize(1.5)
    //color: colors.steel
  },
  h55: {
    fontSize: totalSize(1.3)
    //color: colors.steel
  },
  h6: {
    fontSize: totalSize(1)
    //color: colors.steel
  },
  h7: {
    fontSize: totalSize(0.8)
    //color: colors.steel
  },
  profileName: {
    fontSize: totalSize(2.5)
  },
  profileNameIos: {
    fontSize: totalSize(2)
  },
  headerTitleFontSize: Platform.OS == "ios" ? totalSize(2.8) : totalSize(3.2),
  headerIconStyle: {
    width: Platform.OS == "ios" ? totalSize(2.5) : totalSize(3),
    height: Platform.OS == "ios" ? totalSize(2.5) : totalSize(3)
  },
  homeCardStyleAndroid: {
    height: totalSize(24),
    width: totalSize(20),
    marginHorizontal: totalSize(0.5),
    //marginVertical: totalSize(1.5),
    //borderRadius: totalSize(5)
    borderTopLeftRadius: totalSize(4),
    borderTopRightRadius: totalSize(4),
    borderBottomLeftRadius: totalSize(4)
    //justifyContent: "center"
  },
  homeCardStyleIOS: {
    height: totalSize(21),
    width: totalSize(18),
    marginHorizontal: totalSize(0.5),
    //marginVertical: totalSize(1.5),
    //borderRadius: totalSize(5)
    borderTopLeftRadius: totalSize(4),
    borderTopRightRadius: totalSize(4),
    borderBottomLeftRadius: totalSize(4)
    //justifyContent: "center"
  },
  homeSubCardAndroid: {
    height: totalSize(8),
    width: totalSize(8),
    marginLeft: totalSize(2),
    marginVertical: totalSize(1.5),
    borderRadius: totalSize(8) / 2,
    justifyContent: "center",
    alignItems: "center"
  },
  homeSubCardIOS: {
    height: totalSize(6),
    width: totalSize(6),
    marginLeft: totalSize(2),
    marginVertical: totalSize(1.5),
    borderRadius: totalSize(6) / 2,
    justifyContent: "center",
    alignItems: "center"
  }
};

export default ApplicationStyles;
