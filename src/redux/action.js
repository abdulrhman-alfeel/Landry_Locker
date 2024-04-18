export const SET_ARRAY = 'SET_ARRAY';
export const SET_LANGUAGE = 'SET_LANGUAGE';
export const SET_LANGUAGESIGN = 'SET_LANGUAGESIGN';
export const SET_ArrayOrder = 'SET_ArrayOrder';
export const SET_DARK = 'SET_DARK';

export const getArray = arrayIron => dispatch => {
  dispatch({type: SET_ARRAY, payload: arrayIron});
};
export const setLanguage = Language => dispatch => {
  dispatch({type: SET_LANGUAGE, payload: Language});
};
export const setLanguageSign = Languagesign => dispatch => {
  dispatch({type: SET_LANGUAGESIGN, payload: Languagesign});
};

export const setArrayOrder = arrayOrder => dispatch => {
  dispatch({type: SET_ArrayOrder, payload: arrayOrder});
};
export const setDark = darkmode => dispatch => {
  dispatch({type: SET_DARK, payload: darkmode});
};
