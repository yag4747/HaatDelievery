/* eslint-disable jsx-quotes */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-undef */
/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react/react-in-jsx-scope */
import {useEffect, useState, useRef} from 'react';
import {
  FlatList,
  Text,
  TouchableOpacity,
  View,
  Animated,
  SafeAreaView,
  ActivityIndicator,
  ImageBackground,
} from 'react-native';
import {useSelector} from 'react-redux';
import Carousel from 'react-native-snap-carousel';
import FastImage from 'react-native-fast-image';
import {styles} from './style';
import {hp, wp} from '../../utils/Constants';
import {Spacer} from '../../res/spacer';
import {colors} from '../../res/colors';
import {Header} from '../../components/Header';
import { fonts } from '../../res/fonts';
import { images } from '../../res/images';

export default HomeContainer = () => {
  const appReducer = useSelector(state => state.appReducer);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [imageServer, setImageServer] = useState(null);
  const [filterHorizontalSFalse, setFilterHorizontalSFalse] = useState([]);
  const [filterHorizontalSTrue, setFilterHorizontalSTrue] = useState([]);
  const [filterVerticalData, setFilterVerticalData] = useState([]);
  const [filterHorizontalData, setFilterHorizontalData] = useState([]);


  const sliderRef = useRef(null);

  useEffect(() => {
    console.log(appReducer?.appSettings?.imageServer)
    setImageServer(appReducer?.appSettings?.imageServer);
    const filteredData = appReducer?.categories.filter(
      item =>
        item.elementType === 'MarketHorizontalCategory' &&
        item.topImage.serverImage === null &&
        item.topImage.smallServerImage === null &&
        item.topImage.blurhashImage === null &&
        item.isSponsored === false,
    );
    setFilterHorizontalSFalse(filteredData);

    const filteredDataSponserTrue = appReducer?.categories.filter(
      item =>
        item.elementType === 'MarketHorizontalCategory' &&
        item.topImage.serverImage === null &&
        item.topImage.smallServerImage === null &&
        item.topImage.blurhashImage === null &&
        item.isSponsored === true,
    );
    setFilterHorizontalSTrue(filteredDataSponserTrue);

    const filteredVerticalData = appReducer?.categories.filter(
        item =>
          item.elementType === 'MarketVerticalCategory' 
      );
      setFilterVerticalData(filteredVerticalData);

   const filteredHData = appReducer?.categories.filter(
        item =>
          item.elementType === 'MarketHorizontalCategory' &&
          item.topImage.serverImage != null &&
          item.topImage.smallServerImage != null &&
          item.topImage.blurhashImage != null &&
          item.backgroundColor != null,
      );
    setFilterHorizontalData(filteredHData);

  }, [appReducer]);

  useEffect(()=>{
    console.log("filteredHData")
    console.log(filterHorizontalData)
  },[filterHorizontalData])

  const renderImage = ({item, index}) => {
    return (
      <TouchableOpacity
        activeOpacity={0.9}
        style={{alignSelf: 'flex-start'}}
        key={index}
        onPress={() => {
          sliderRef.current.snapToItem(index + 1, true);
        }}>
        <FastImage
          source={{uri: imageServer + '/' + item?.image?.serverImage}}
          style={styles.slider_image}
          resizeMode={FastImage.resizeMode.stretch}
        />
      </TouchableOpacity>
    );
  };

  const renderItem = ({item}) => (
    <View>
      <View style={styles.imageContainer}>
        <FastImage
          source={{uri: imageServer + '/' + item?.images?.serverImage}}
          fallback
          defaultSource={images.business_ic}
          style={styles.image}
        />
      </View>
      <Text
        className={'self-center text-center mt-2 w-24'}
        style={styles.txtSubTitle}>
        {item?.name}
      </Text>
    </View>
  );

  const renderMutlipleItem = ({item}) => (
    <TouchableOpacity
      activeOpacity={0.7}
      className={'border-gray-200 rounded-xl p-3 my-2 mx-1 bg-white'} style={styles.boxShadow}>
      <View style={styles.cardWrapperContainer}>
        <FastImage
          source={{uri: imageServer + '/' + item?.icon?.serverImage}}
          style={styles.card_image}
        />
      </View>
      <View
        className={'flex-col pb-2 border-b-2 border-gray-200'}
        style={{width: wp(32)}}>
        <Text
          className={'text-left mt-2'}
          style={{flexWrap: 'wrap', fontSize: wp(3.3),fontFamily:fonts.BOLD}}>
          {'Business in \nhorizontal category'}
        </Text>
        <Text
          className={'text-left mt-2'}
          numberOfLines={1}
          style={{...styles.txtSubTitle,color:colors.GRAY_SCALE_LIGHT_SUBTITLE}}>
          {item?.name}
        </Text>
      </View>
      <Text className={'pt-2'} style={styles.grayScaleLight}><Text style={{color:colors.GREEN}}>Open</Text> until 11:00</Text>
    </TouchableOpacity>
  );


  const renderVerticalMutlipleItem = ({item}) => (
    <TouchableOpacity
      activeOpacity={0.7}
      className={'border-gray-200 rounded-xl p-3 my-2 mx-2 bg-white'} style={{...styles.boxShadow,flex:1}}>
      <View style={styles.cardWrapperContainer}>
        <FastImage
          source={{uri: imageServer + '/' + item?.icon?.serverImage}}
          style={styles.card_image}
        />
      </View>
      <View
        className={'flex-col pb-2 border-b-2 border-gray-200'}
        >
        <Text
          className={'text-left mt-2'}
          style={{flexWrap: 'wrap', fontSize: wp(3.3),fontFamily:fonts.BOLD}}>
          {'Business in \nhorizontal category'}
        </Text>
        <Text
          className={'text-left mt-2'}
          numberOfLines={1}
          style={{...styles.txtSubTitle,color:colors.GRAY_SCALE_LIGHT_SUBTITLE}}>
          {item?.name}
        </Text>
      </View>
      <Text className={'pt-2'} style={styles.grayScaleLight}><Text style={{color:colors.GREEN}}>Open</Text> until 11:00</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView className={'flex-1 bg-white'}>
      {appReducer?.mainPageBanners == null ||
      appReducer?.tags == null ||
      appReducer?.appSettings == null ? (
        <View style={{flex: 1, justifyContent: 'center'}}>
          <ActivityIndicator size={'large'} color={colors.DARK_RED} />
        </View>
      ) : (
        <>
          <Header />
          <View
            className={'flex-1'}
            style={{backgroundColor: colors.BASE_COLOR}}>
            <Animated.FlatList
              bounces={false}
              ListHeaderComponent={
                <View>
                  <Spacer space={hp(0.6)} />
                  <Carousel
                    ref={sliderRef}
                    data={appReducer?.mainPageBanners?.banners}
                    renderItem={renderImage}
                    sliderWidth={wp(100)}
                    itemWidth={wp(100)}
                    hasParallaxImages={true}
                    firstItem={0}
                    inactiveSlideScale={1}
                    inactiveSlideOpacity={0.7}
                    loop={false}
                    autoplay={false}
                    currentIndex={activeSlideIndex}
                    autoplayDelay={1000}
                    onSnapToItem={index => setActiveSlideIndex(index)}
                    enableMomentum={true}
                    decelerationRate={0.1}
                  />

                  <Spacer space={hp(0.8)} />
                  <View className={'pl-2 pt-6 pb-6 bg-white'}>
                    <Text style={styles.txtTitle} className={'ml-2'}>
                      What are you in the mood for? 🤔
                    </Text>
                    <Spacer space={hp(1)} />
                    <FlatList
                      data={appReducer?.tags?.tags}
                      renderItem={renderItem}
                      keyExtractor={item => item.id}
                      horizontal
                      showsHorizontalScrollIndicator={false} // Hide the scroll indicator if desired
                    />
                  </View>
                  <Spacer space={hp(0.6)} />
                  <View className={'pl-2 pt-6 pb-4 bg-white'}>
                    <Text style={styles.txtTitle} className={'ml-2'}>
                      New in HAAT ✨ 🏷️
                    </Text>
                    <Spacer space={hp(0.6)} />
                    <FlatList
                      data={filterHorizontalSFalse[0]?.stores}
                      renderItem={renderMutlipleItem}
                      keyExtractor={item => item.id}
                      horizontal
                      showsHorizontalScrollIndicator={false} // Hide the scroll indicator if desired
                    />
                  </View>
                  <Spacer space={hp(0.6)} />

                  <View
                    className={'pl-2 pt-6 pb-4 bg-white rounded-xl'}
                    style={{width: wp(92), alignSelf: 'center'}}>
                    <Text style={styles.txtTitle} className={'ml-2'}>
                      Recommended Restaurants
                    </Text>
                    <Spacer space={hp(0.2)} />
                    <Text style={styles.grayScaleLight} className={'ml-2'}>
                      Sponsored
                    </Text>
                    <Spacer space={hp(0.6)} />
                    <FlatList
                      data={filterHorizontalSTrue[0]?.stores}
                      renderItem={renderMutlipleItem}
                      keyExtractor={item => item.id}
                      horizontal
                      showsHorizontalScrollIndicator={false} // Hide the scroll indicator if desired
                    />
                  </View>

                  <Spacer space={hp(0.6)} />
                  <View className={'pb-4'} style={{backgroundColor: filterHorizontalData[0]?.backgroundColor}}>
                    <FastImage style={{width:wp(100),height:wp(40)}} resizeMode='cover' source={{uri: imageServer + "/" + filterHorizontalData[0]?.topImage?.serverImage}} />
                    <Spacer space={hp(0.6)} />
                    <FlatList
                      contentContainerStyle={{paddingLeft:wp(2)}}
                      data={filterHorizontalData[0]?.stores}
                      renderItem={renderMutlipleItem}
                      keyExtractor={item => item.id}
                      horizontal
                      showsHorizontalScrollIndicator={false} // Hide the scroll indicator if desired
                    />
                  </View>


                  <Spacer space={hp(0.6)} />
                  <View className={'pl-2 pr-2 pt-6 pb-4 bg-white'}>
                    <Text style={styles.txtTitle} className={'ml-2'}>
                    {filterVerticalData[0]?.name}
                    </Text>
                    <Spacer space={hp(0.6)} />
                    <FlatList
                      data={filterVerticalData[0]?.stores}
                      renderItem={renderVerticalMutlipleItem}
                      keyExtractor={item => item.id}
                      numColumns={2}
                      showsHorizontalScrollIndicator={false} // Hide the scroll indicator if desired
                    />
                  </View>

                  <Spacer space={hp(0.6)} />
                  <View className={'pl-2 pr-2 pt-6 pb-4 bg-white'}>
                    <Text style={styles.txtTitle} className={'ml-2'}>
                    {filterVerticalData[1]?.name}
                    </Text>
                    <Spacer space={hp(0.6)} />
                    <FlatList
                      data={filterVerticalData[1]?.stores}
                      renderItem={renderVerticalMutlipleItem}
                      keyExtractor={item => item.id}
                      numColumns={2}
                      showsHorizontalScrollIndicator={false} // Hide the scroll indicator if desired
                    />
                  </View>

                  <Spacer space={hp(0.6)} />
                  <View className={'pl-2 pr-2 pt-6 pb-4 bg-white'}>
                    <Text style={styles.txtTitle} className={'ml-2'}>
                    {filterVerticalData[2]?.name}
                    </Text>
                    <Spacer space={hp(0.6)} />
                    <FlatList
                      data={filterVerticalData[2]?.stores}
                      renderItem={renderVerticalMutlipleItem}
                      keyExtractor={item => item.id}
                      numColumns={2}
                      showsHorizontalScrollIndicator={false} // Hide the scroll indicator if desired
                    />
                  </View>
                </View>
              }
              showsVerticalScrollIndicator={false}
              data={null}
              renderItem={null}
              ListFooterComponent={<Spacer space={hp(5)} />}
            />
          </View>
        </>
      )}
    </SafeAreaView>
  );
};
