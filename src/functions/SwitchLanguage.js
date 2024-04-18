import {View, Text} from 'react-native';
import React from 'react';
import {useState} from 'react';
import Text_Arabic from '../data/Data_Text_Arabic';
import Text_English from '../data/Data_Text_English';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {useEffect} from 'react';
import additionlArabic from '../data/additionl_Arabic';
import additionlEnglish from '../data/additionl_English';
import {
  setLanguage,
  setLanguageSign,
  setArrayOrder,
  setDark,
} from '../redux/action';
import {useSelector, useDispatch} from 'react-redux';
export default function useSwitchLanguage() {
  //   const {Language} = useSelector(state => state.userReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setLanguage(Text_Arabic));
    getLanguage('language');
    getLanguage('dark');
  }, []);
  const getLanguage = (key, kind = null) => {
    try {
      AsyncStorage.getItem(key).then(value => {
        const newIron = JSON.parse(value);
        if (newIron && typeof newIron === 'object') {
          if (key === 'language') {
            dispatch(setLanguageSign(newIron?.language));
            if (newIron?.language === 'en') {
              dispatch(setLanguage(Text_English));
              dispatch(setArrayOrder(additionlEnglish));
            } else {
              dispatch(setLanguage(Text_Arabic));
              dispatch(setArrayOrder(additionlArabic));
            }
          } else {
            dispatch(setDark(newIron.type));
          }
        }
        console.log(newIron, 'get');
      });
    } catch (err) {
      console.log(err);
    }
    dispatch(setLanguage(Text_Arabic));
  };
  const changingLanguage = (key, newIron) => {
    try {
      AsyncStorage.setItem(key, JSON.stringify(newIron)).then(() => {
        if (key === 'language') {
          dispatch(setLanguageSign(newIron.language));
          if (newIron.language === 'en') {
            dispatch(setLanguage(Text_English));
            dispatch(setArrayOrder(additionlEnglish));
          } else {
            dispatch(setLanguage(Text_Arabic));
            dispatch(setArrayOrder(additionlArabic));
          }
        } else {
          dispatch(setDark(newIron.type));
        }
      });
      console.log(newIron);
    } catch (err) {
      console.log(err);
    }
  };

  return changingLanguage;
}
