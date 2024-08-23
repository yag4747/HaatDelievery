import { StyleSheet } from "react-native";
import { colors } from "../../res/colors";
import { wp } from "../../utils/Constants";
import { fonts } from "../../res/fonts";

export const style = StyleSheet.create({
  boxShadow: {
    overflow: "hidden",
    elevation: 5,
    // iOS shadow
    shadowColor: colors.BLACK,
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 5,
    shadowRadius: 2,
    borderBottomWidth: wp(0.2),
    borderColor: colors.LIGHT_GRAY,
  },
  wrapperContainer: {
    flexDirection: "row",
    alignSelf: "center",
    borderWidth: wp(0.3),
    marginTop: -4,
  },
  textTile: {
    fontFamily: fonts.BOLD,
    fontSize: wp(4.5),
    alignSelf: "center",
    textAlign: "center",
  },
  txtCommon:{
    color: colors.BLACK,
    fontFamily: fonts.REGULAR,
    alignSelf: "center",
    fontSize:wp(4),
  }
});
