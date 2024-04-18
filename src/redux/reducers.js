import {
  SET_ARRAY,
  SET_LANGUAGE,
  SET_LANGUAGESIGN,
  SET_ArrayOrder,
  SET_DARK,
} from './action';

const initialState = {
  arrayIron: [],
  arrayOrder: [],
  Language: {},
  Languagesign: 'ar',
  darkmode: 'light',
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case SET_LANGUAGE:
      return {...state, Language: action.payload};
    case SET_LANGUAGESIGN:
      return {...state, Languagesign: action.payload};
    case SET_ARRAY:
      return {...state, arrayIron: action.payload};
    case SET_ArrayOrder:
      return {...state, arrayOrder: action.payload};
    case SET_DARK:
      return {...state, darkmode: action.payload};
    default:
      return state;
  }
}

export default userReducer;
