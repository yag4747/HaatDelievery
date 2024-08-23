import { useEffect, useState, useRef } from "react";
import {
  FlatList,
  Text,
  TouchableOpacity,
  View,
  Animated,
  SafeAreaView,
  ActivityIndicator,
  ImageBackground,
} from "react-native";
import { style } from "./style";
import { fonts } from "../../res/fonts";
import { hp, wp } from "../../utils/Constants";
import { colors } from "../../res/colors";
import { Spacer } from "../../res/spacer";
import FastImage from "react-native-fast-image";
import { images } from "../../res/images";

export default OrderContainer = () => {
  return (
    <SafeAreaView className={"flex-1 bg-white"}>
      <View
        className={"justify-between bg-white px-4 w-full p-2"}
        style={style.boxShadow}
      >
        <Text style={style.textTile} className={"px-2"}>
          {"Order History"}
        </Text>
      </View>
      <View className={"flex-1"} style={{ backgroundColor: colors.BASE_COLOR }}>
        <Spacer space={hp(1)} />
        <View style={{ width: wp(92), alignSelf: "center" }}>
          <View className={"bg-white p-3 pb-4 rounded-xl"}>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text
                style={{
                  color: colors.TEXT_GRAY,
                  fontSize: wp(3.5),
                  fontFamily: fonts.SEMI_BOLD,
                }}
              >
                Order ID :{" "}
                <Text style={{ color: colors.BLACK }}>723 (2947723)</Text>
              </Text>
              <Text
                style={{ color: colors.BLACK, fontFamily: fonts.SEMI_BOLD }}
              >
                26/01/2023 15:30
              </Text>
            </View>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
              className={"mt-1"}
            >
              <Text
                style={{
                  color: colors.TEXT_GRAY,
                  fontSize: wp(3.5),
                  fontFamily: fonts.SEMI_BOLD,
                }}
              >
                Reference number:{" "}
                <Text style={{ color: colors.BLACK }}>2947723</Text>
              </Text>
              <Text
                style={{ color: colors.BLACK, fontFamily: fonts.SEMI_BOLD }}
              >
                Arrived at 16:14
              </Text>
            </View>
            <Spacer space={hp(0.5)} />
            <FastImage
              source={images.track_ic}
              style={{ width: wp(85), height: wp(18) }}
              resizeMode="contain"
            />
            <Spacer space={hp(1)} />
            <View style={{ flexDirection: "row" }}>
              <FastImage
                source={images.business_ic}
                style={{ width: wp(13), height: wp(13) }}
                resizeMode="contain"
              />
              <Text
                className={"ml-4"}
                style={{
                  color: colors.BLACK,
                  fontFamily: fonts.SEMI_BOLD,
                  alignSelf: "center",
                }}
              >
                Business Name
              </Text>
            </View>
            <Spacer space={hp(1)} />
            <View style={{ flexDirection: "row" }}>
              <FastImage
                source={images.item_ic}
                style={{ width: wp(15), height: wp(15) }}
                resizeMode="contain"
              />
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  flex: 1,
                }}
              >
                <View style={{ flexDirection: "column", alignSelf: "center" }}>
                  <Text
                    className={"ml-3"}
                    style={{ color: colors.BLACK, fontFamily: fonts.REGULAR }}
                  >
                    Item Name
                  </Text>
                  <Text
                    className={"ml-3"}
                    style={{ color: colors.BLACK, fontFamily: fonts.REGULAR }}
                  >
                    Qty: 1
                  </Text>
                </View>
                <Text
                  style={{
                    color: colors.BLACK,
                    fontFamily: fonts.SEMI_BOLD,
                    alignSelf: "center",
                  }}
                >
                  ₪44.0
                </Text>
              </View>
            </View>
            <Spacer space={hp(1)} />
            <View style={[{ height: 1, overflow: "hidden" }]}>
              <View
                style={[
                  {
                    height: 3,
                    borderWidth: 1,
                    borderColor: "#ddd",
                    borderStyle: "dashed",
                  },
                ]}
              ></View>
            </View>
            <Spacer space={hp(0.5)} />

            <View
             className={"my-1"}
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Text
                  style={{...style.txtCommon,color:colors.NORMAL_GRAY}}
              >
               Payment Method
              </Text>
             <FastImage
                source={images.payment_ic}
                style={{ width: wp(8), height: wp(8) }}
                resizeMode="contain"
              />
            </View>


            <View
             className={"my-1"}
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Text
                 style={{...style.txtCommon,color:colors.NORMAL_GRAY}}
              >
               Subtotal
              </Text>
              <Text
                  style={{...style.txtCommon,fontFamily:fonts.SEMI_BOLD}}
              >
                ₪156.0
              </Text>
            </View>
         
            <View
             className={"my-1"}
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Text
                  style={{...style.txtCommon,color:colors.NORMAL_GRAY}}
              >
               Delivery Fee
              </Text>
              <Text
                 style={{...style.txtCommon,fontFamily:fonts.SEMI_BOLD}}
              >
                ₪12.0
              </Text>
            </View>


            <View
             className={"my-1"}
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Text
                 style={{...style.txtCommon,color:colors.NORMAL_GRAY}}
              >
               Service Fee
              </Text>
              <Text
                 style={{...style.txtCommon,fontFamily:fonts.SEMI_BOLD}}
              >
                ₪1.0
              </Text>
            </View>
         
            <View
             className={"my-1"}
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Text
                  style={{...style.txtCommon,color:colors.NORMAL_GRAY}}
              >
               Reeemed Coins
              </Text>
              <Text
                 style={{...style.txtCommon,fontFamily:fonts.SEMI_BOLD}}
              >
               -₪100.0
              </Text>
            </View>


            <View
             className={"my-1"}
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Text
                style={{...style.txtCommon,color:colors.NORMAL_GRAY}}
              >
               Total
              </Text>
              <Text
                style={{...style.txtCommon,color:colors.DARK_RED,fontFamily:fonts.SEMI_BOLD}}
              >
               -₪69.0
              </Text>
            </View>
         
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
