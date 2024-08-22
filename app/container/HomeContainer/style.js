/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
import {StyleSheet, Platform} from 'react-native';
import {ifIphoneX, getStatusBarHeight} from 'react-native-iphone-x-helper';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {colors} from '../../res/colors';
import {fonts} from '../../res/fonts';

export const styles = StyleSheet.create({
boxShadow:{
    elevation: 5,
    // iOS shadow
    shadowColor: colors.GRAY_SCALE_LIGHT,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 1.5,
    borderWidth:wp(0.2)
},
  txtTitle: {
    fontSize: wp(4.2),
    fontFamily: fonts.BOLD,
    color: colors.GRAY_SCALE,
  },
  grayScaleLight:{
    fontSize: wp(3.8),
    fontFamily: fonts.REGULAR,
    color: colors.GRAY_SCALE_LIGHT,
  },
  txtSubTitle: {
    fontSize: wp(3.2),
    fontFamily: fonts.REGULAR,
    color: colors.GRAY_SCALE,
  },
  imageContainer: {
    marginHorizontal: wp(1.5), // Add margin to space out images
    backgroundColor: colors.GRAY_BLUE,
    padding: wp(1.5),
    borderRadius: wp(3.5),
  },
  image: {
    width: wp(21), // Set the desired width for each image
    height: wp(21), // Set the desired height for each image
  },
  card_image: {
    width: wp(30), // Set the desired width for each image
    height: wp(30), // Set the desired height for each image
    alignSelf: 'center',
  },
  slider_image: {
    height: hp(37.5),
    width: wp('100%'),
  },
  cardWrapperContainer: {
    padding: wp(1.5),
    alignSelf: 'center',
  },
  back_wrapper: {
    flexDirection: 'row',
    position: 'absolute',
    left: wp(3),
    zIndex: 1,
    ...ifIphoneX(
      {
        paddingTop: getStatusBarHeight() + 15,
      },
      {
        paddingTop: Platform.OS === 'ios' ? getStatusBarHeight() + 10 : 16, // for android
      },
    ),
  },
  dotstyle: {
    width: wp(2),
    height: wp(2),
    borderRadius: wp(2),
  },
  backIcon: {
    width: wp(5),
    height: wp(5),
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  bottom_view: {
    alignSelf: 'center',
    position: 'absolute',
    ...ifIphoneX(
      {
        bottom: getStatusBarHeight() + 15,
      },
      {
        bottom: Platform.OS === 'ios' ? getStatusBarHeight() + 10 : 16, // for android
      },
    ),
  },
});
