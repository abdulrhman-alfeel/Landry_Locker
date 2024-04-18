import React from 'react';
import {getArray} from '../redux/action';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch} from 'react-redux';

export default function usestorageAsync() {
  const dispatch = useDispatch();
  const setItemsStroge = (newIron, key) => {
    try {
      AsyncStorage.setItem(key, JSON.stringify(newIron)).then(() => {
        dispatch(getArray(newIron));
      });
      // console.log(newIron);
    } catch (err) {
      console.log(err);
    }
  };

  return setItemsStroge;
}
