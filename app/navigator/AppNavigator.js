/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable no-unused-vars */
/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
//#region import
//#region RN
import React, {useEffect, useState} from 'react';
//#endregion
//#region libs
import {
  getFocusedRouteNameFromRoute,
  NavigationContainer,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
//#endregion
//#region local files
import {DEVICE_OS} from '../utils/Constants';
import {TabBar} from './tabBar';
import HomeContainer from '../container/HomeContainer';
import {Provider, useDispatch, useSelector} from 'react-redux';
import configureStore from '../redux/store/store';
import { onGetLocationData, onGetMarketData } from '../redux/actions/AppActions';
import MyOrderContainer from '../container/MyOrderContainer';
import TrackOrderContainer from '../container/TrackOrderContainer';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const store = configureStore();


const options = type => ({
  headerShown: false,
  gestureEnabled: DEVICE_OS === 'android' ? false : true,
});

const OrderStackNavigator = () => {
  return (
      <Stack.Navigator initialRouteName={'MyOrderContainer'} >
          <Stack.Screen name={'MyOrderContainer'} component={MyOrderContainer} options={options}></Stack.Screen>
          <Stack.Screen name={'TrackOrder'} component={TrackOrderContainer} options={options}></Stack.Screen>
      </Stack.Navigator>
  )
}

function DashboardStackNavigator() {
  // const dashboardReducers = useSelector((state) => state.dashboardReducers);

  const dispatch = useDispatch()
  dispatch(onGetMarketData(null,null))
  dispatch(onGetLocationData(null,null))
  
  return (
    <Tab.Navigator
      tabBar={props => <TabBar {...props} />}
      screenOptions={({route}) => ({
        tabBarStyle: true,
      })}>
      <Tab.Screen name="Restaurants" component={HomeContainer} options={options} />
      <Tab.Screen name="Market" component={HomeContainer} options={options} />
      <Tab.Screen name="My Cart" component={HomeContainer} options={options} />
      <Tab.Screen name="My Orders" component={OrderStackNavigator} options={options} />
      <Tab.Screen name="Profile" component={HomeContainer} options={options} />
    </Tab.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={'Auth'}>
          <Stack.Screen
            name={'Dashboard'}
            component={DashboardStackNavigator}
            options={options}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
