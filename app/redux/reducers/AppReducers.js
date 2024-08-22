/* eslint-disable semi */
/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
import * as types from '../events/AppEvents';

const initialState = {
  categories: [],
  tags: null,
  mainPageBanners: null,
  appSettings: null,
};

export function appReducer(state = initialState, action) {
  switch (action.type) {
    case types.GET_MAIN_PAGE_BANNER:
      return {
        ...state,
        mainPageBanners: action.mainPageBanners,
      };
    case types.GET_CATEGORIES:
      return {
        ...state,
        categories: action.categories,
      };
    case types.GET_TAGS:
      return {
        ...state,
        tags: action.tags,
      };
    case types.APP_SETTINGS:
      return {
        ...state,
        appSettings: action.appSettings,
      };
    default:
      return state;
  }
}
