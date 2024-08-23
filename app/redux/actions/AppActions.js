/* eslint-disable prettier/prettier */
import * as types from '../events/AppEvents';
import {GET} from '../../apiHelper/ApiServices';
// import { APP_LOADER } from "../events/GeneralEvents";
import {GET_DRIVER_LOCATION, MARKET_DATA} from '../../apiHelper/Api';

export const onGetMarketData = (authRequest, props) => {
  return async dispatch => {
    // dispatch({ type: APP_LOADER, flag: true });
    await GET(
      MARKET_DATA,
      props,
      authRequest?.token,
      dispatch,
      function (response) {
        if (response?.responseData) {
          dispatch({
            type: types.GET_MAIN_PAGE_BANNER,
            mainPageBanners: response?.responseData?.mainPageBanners,
          });

          dispatch({
            type: types.GET_CATEGORIES,
            categories: response?.responseData?.categories,
          });

          dispatch({
            type: types.GET_TAGS,
            tags: response?.responseData?.tags,
          });

          dispatch({
            type: types.APP_SETTINGS,
            appSettings: response?.responseData?.appSettings,
          });
        }
      },
    );
  };
};



export const onGetLocationData = (authRequest, props) => {
  return async dispatch => {
    // dispatch({ type: APP_LOADER, flag: true });
    await GET(
      GET_DRIVER_LOCATION,
      props,
      authRequest?.token,
      dispatch,
      function (response) {
        if (response?.responseData) {
          dispatch({
            type: types.DRIVER_LOCATION,
            driverLocations: response?.responseData,
          });
        }
      },
    );
  };
};
