/* eslint-disable eqeqeq */
/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
//#region import
//#region RN
import { StyleSheet, Platform } from 'react-native';
//#endregion
//#region libs
import { getBottomSpace, getStatusBarHeight, ifIphoneX } from 'react-native-iphone-x-helper';
//#endregion
//#region local files
import { colors } from './colors';
import { DEVICE_OS, wp,hp } from '../utils/Constants';
//#endregion
//#endregion

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.BACKGROUND,
  },
  paddingTop: {
    ...ifIphoneX(
      {
        marginTop: getStatusBarHeight() + wp(1)
      },
      {
        marginTop: DEVICE_OS === 'ios' ? getStatusBarHeight() + wp(1) : wp(1)
      }
    )
  },
  subContainer: {
    flex: 1,
    width: wp(88),
    alignSelf: 'center'
  },
  flex: {
    flex: 1,
    backgroundColor: colors.WHITE,
  },
  header: {
    backgroundColor: colors.WHITE,
    ...ifIphoneX(
      {
        paddingTop: getStatusBarHeight() + 15,
      },
      {
        paddingTop: DEVICE_OS == 'ios' ? getStatusBarHeight() + 10 : 16,
      },
    ),
  },
  headerSubContainer: {
    flexDirection: 'row',
    width: wp(90),
    alignSelf: 'center',
    paddingBottom: 4,
  },
  bottomSpace: {
    ...ifIphoneX(
      {
        marginBottom: getBottomSpace(),
      },
      {
        marginBottom: 10,
      },
    ),
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  img: {
    height: wp(4),
    width: wp(4),
    resizeMode: 'contain',
  },
  shadow: {
    ...Platform.select({
      ios: {
        shadowColor: "rgba(0, 0, 0, 0.14)",
        shadowOpacity: 1,
        shadowRadius: 4,
        shadowOffset: { height: 1, width: 1 },
      },
      android: {
        elevation: 4
      },
    }),
    backgroundColor: colors.WHITE,
  },
  headingTxt: {
    fontSize: wp(4.5),
    color: colors.BASE_COLOR,
  }
})

export const iPhone14 = (insets) => StyleSheet.create({
  marginTop: {
    ...ifIphoneX({
      paddingTop: getStatusBarHeight() + wp(4.5)
    }, {
      paddingTop: Platform.OS == "ios" ? (insets == 59) ? hp(8.5) : wp(9) : wp(2)// for android 
    })
  },
  marginBottom: {
    ...ifIphoneX(
      {
        marginBottom: getBottomSpace(),
      },
      {
        marginBottom: Platform.OS == "ios" ? (insets == 59) ? 20 : 10 : 10,
      },
    ),
  }
})