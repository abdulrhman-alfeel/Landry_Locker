import React from 'react';
import {getArray, setLanguage} from '../redux/action';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch} from 'react-redux';
import Text_Arabic from '../data/dataTextArabic';

export default function usestorageGet() {
  const dispatch = useDispatch();
  const getItemsStroge = key => {
    try {
      AsyncStorage.getItem(key).then(value => {
        const newIron = JSON.parse(value);
        if (newIron && typeof newIron === 'object') {
          dispatch(getArray(newIron));
          // dispatch(setLanguage(Text_Arabic));
        }
        // console.log(newIron, 'get');
      });
    } catch (err) {
      console.log(err);
    }
  };

  return getItemsStroge;
}
