/* eslint-disable no-trailing-spaces */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable eqeqeq */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
//#region import
//#region RN
import {
    View,
    TouchableOpacity,
    Image,
    Text,
    StyleSheet,
    Platform,
  } from "react-native";
  //#endregion
  //#region common files
  import { images } from "../res/images";
  import { globalStyles } from "../res/globalStyles";
  import { iPhoneXConfig, wp } from "../utils/Constants";
  import { useSafeAreaInsets } from "react-native-safe-area-context";
import { colors } from "../res/colors";
import { fonts } from "../res/fonts";
  //#endregion

  export function TabBar({ state, descriptors, navigation }) {
    const focusedOptions = descriptors[state.routes[state.index].key].options;
    const insets = useSafeAreaInsets();
    return focusedOptions?.tabBarStyle == false ? null : (
      <View style={{ ...styles.mainContiner }}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const isFocused = state.index === index;
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;
          const icon =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : index === 0
              ? isFocused
                ? images.restaurant_ic
                : images.restaurant_ic
              : index === 1
              ? isFocused
                ? images.shop
                : images.shop
              : index === 2
              ? isFocused
                ? images.shopping_bag
                : images.shopping_bag
              : index === 3
              ? isFocused
                ? images.delivery
                : images.delivery
              : isFocused
              ? images.profile
              : images.profile;
  
          const onPress = () => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });
  
            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate({ name: route.name, merge: true });
            }
          };
  
          const onLongPress = () => {
            navigation.emit({
              type: "tabLongPress",
              target: route.key,
            });
          };
          return (
            <TouchableOpacity
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={styles.tabBtn(insets)}
            >
              <Image
                source={icon}
                tintColor={isFocused ? colors.DARK_RED : colors.DARK_GRAY}
                style={{
                  ...globalStyles.img,
                  ...styles.tabIcon,
                  resizeMode: "contain",
                }}
              />
              <Text
                style={[
                  styles.tabLabel,
                  isFocused && { color: colors.DARK_RED },
                ]}
              >
                {label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  }
  const styles = StyleSheet.create({
    mainContiner: {
      flexDirection: "row",
      width: wp(100),
      justifyContent: "space-between",
      backgroundColor: colors.WHITE,
      paddingHorizontal: wp(5),
      paddingBottom: iPhoneXConfig.isIphoneX()
        ? iPhoneXConfig.getBottomSpace() - wp(4)
        : 0,
    },
    tabBtn: (insets) => ({
      alignItems: "center",
      padding: wp(3),
      paddingTop: wp(4),
      paddingBottom: wp(Platform.OS == "ios" ? (insets.top == 59 ? 6 : 3) : 3),
    }),
    tabLabel: {
      fontSize: wp(3),
      color: colors.DARK_GRAY,
      fontFamily:fonts.SEMI_BOLD
    },
    tabIcon: {
      height: wp(6),
      width: wp(6),
      marginBottom: wp(1),
    },
  });
  