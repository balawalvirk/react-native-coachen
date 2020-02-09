import { Platform } from "react-native";

const type = {
  base: "Avenir-Book",
  bold: "Avenir-Black",
  emphasis: "HelveticaNeue-Italic"
};

export const fonts = {
  poppinsLight: "Poppins-Light",
  poppinsRegular: "Poppins-Regular",
  poppinsSemiBold: "Poppins-SemiBold",
  futuraMedium: Platform.OS == "ios" ? "Futura-Medium" : "futura medium bt",
  futuraBold: Platform.OS == "ios" ? "Futura-Medium" : "Futura Bold font"
};

const size = {
  h1: 38,
  h2: 34,
  h3: 30,
  h4: 26,
  h5: 20,
  h6: 19,
  input: 18,
  regular: 17,
  medium: 14,
  small: 12,
  tiny: 8.5
};

const style = {
  h1: {
    fontSize: size.h1
  },
  h2: {
    fontSize: size.h2
  },
  h3: {
    fontSize: size.h3
  },
  h4: {
    fontSize: size.h4
  },
  h5: {
    fontSize: size.h5
  },
  h6: {
    fontSize: size.h6
  },
  small: {
    fontSize: size.tiny
  },
  normal: {
    fontSize: size.regular
  },
  description: {
    fontSize: size.h4
  }
};
// export default { size, fonts };
// export default {
//   type,
//   size,
//   style
// }
