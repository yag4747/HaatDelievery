/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
//#region import
import { Dimensions, Alert, Platform, StatusBar } from 'react-native'
import { widthPercentageToDP as WP, heightPercentageToDP as HP } from 'react-native-responsive-screen';
import { isIphoneX, getStatusBarHeight, getBottomSpace } from 'react-native-iphone-x-helper';
//#endregion

var { height, width } = Dimensions.get('window');
export const hp = HP;
export const wp = WP;
export const DEVICE = {
  DEVICE_HEIGHT: height,
  DEVICE_WIDTH: width,
  ANDROID_DEVICE_HEIGHT:
    Platform.OS === 'android' && Platform.Version > 26
      ? Dimensions.get('screen').height - StatusBar.currentHeight
      : Dimensions.get('window').height,
};
export const iPhoneXConfig = {
  isIphoneX,
  getStatusBarHeight,
  getBottomSpace
}
export const DEVICE_OS = Platform.OS;
export const APP_NAME = "Haat Delivery";

export const SVGwidth = wp(90);
export const SVGheight = wp(40);

export const removeNonNumber = (string = "") => string.replace(/[^\d]/g, "");
export const removeLeadingSpaces = (string = "") => string.replace(/^\s+/g, "");

export function showAlert(msg) {
  Alert.alert(
    APP_NAME,
    '' + msg,
    [
      {
        text: 'OK',
        onPress: () => { },
      },
    ],
    {
      cancelable: false,
    }
  )
}