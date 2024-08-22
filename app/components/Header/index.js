/* eslint-disable jsx-quotes */
/* eslint-disable quotes */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */

import {Alert, StyleSheet, TouchableOpacity, View, Text} from 'react-native';
import FastImage from 'react-native-fast-image';
import {images} from '../../res/images';
import {colors} from '../../res/colors';
import {wp} from '../../utils/Constants';
import {fonts} from '../../res/fonts';

/* eslint-disable react-native/no-inline-styles */
export const Header = props => {
  return (
    <View
      className={'flex-row justify-between bg-white px-4 w-full pb-2'}
      style={style.boxShadow}>
      <TouchableOpacity
        onPress={() => {
          Alert.alert('menu');
        }}>
        <FastImage
          style={{alignSelf: 'center'}}
          source={images.menu_alt}
          className={'w-10 h-10'}
          resizeMode="contain"
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={style.wrapperContainer}
        className={'p-2 px-4 rounded-full border-gray-200 '}>
        <FastImage
          style={{alignSelf: 'center'}}
          source={images.location}
          className={'w-5 h-5'}
          resizeMode="contain"
        />
        <Text
          style={{
            fontFamily: fonts.SEMI_BOLD,
            fontSize: wp(4),
            alignSelf: 'center',
          }}
          className={'px-2'}>
          {'Umm al-fahem'}
        </Text>
        <FastImage
          style={{alignSelf: 'center'}}
          source={images.down_ic}
          className={'w-6 h-6'}
          resizeMode="cover"
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          Alert.alert('search');
        }}>
        <FastImage
          style={{alignSelf: 'center', marginRight: -5}}
          source={images.search_ic}
          className={'w-12 h-12'}
          resizeMode="contain"
        />
      </TouchableOpacity>
    </View>
  );
};

export const style = StyleSheet.create({
  boxShadow: {
    overflow:"hidden",
    elevation: 5,
    // iOS shadow
    shadowColor: colors.BLACK,
    shadowOffset: {width: 1, height: 2},
    shadowOpacity: 5,
    shadowRadius: 2,
    borderBottomWidth:wp(0.2),
    borderColor: colors.LIGHT_GRAY
  },
  wrapperContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    borderWidth: wp(0.3),
    marginTop: -4,
  },
});
