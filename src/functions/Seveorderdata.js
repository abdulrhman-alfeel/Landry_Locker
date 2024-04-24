import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Tostget} from '../massg';
import uuid from 'react-native-uuid';
import usestorageGet from './StorageAsyncget';
import usestorageAsync from './StorageAsync';
import {useDispatch, useSelector} from 'react-redux';
const arrapython = [];

export default function useSeve_order_data({navigation}) {
  //   const [finlyOperation, setFinlyOperation] = useState({});
  const {arrayIron, Language} = useSelector(state => state.userReducer);
  const setItemsStroge = usestorageAsync();
  const getItemsStroge = usestorageGet();

  useEffect(() => {
    getItemsStroge('Iron');
  }, []);
  const saveData = (price, count, Collect, emptys) => {
    try {
      const array = Object.entries(Collect).map(([key, value]) =>
        Object.entries(value).map(([key, value]) => value),
      );

      const OOp = {
        arr: array,
        pric: price,
        countent: count,
      };
      if (count > 0) {
        emptys();
        navigation.navigate('Order_details', {Data: OOp});
      } else {
        Tostget(Language.requests);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const ENdOrder = (washANDIron, Iron, price, count) => {
    try {
      if (parseInt(price) > 0) {
        console.log(washANDIron, Iron, price, count);
        const addNew = [...arrayIron];
        let nameOrder = Language.Fristservice;
        addNew.length;
        if (washANDIron.length <= 0 && Iron.length > 0) {
          nameOrder = Language.Secondservice;
        }
        console.log(Math.max(500, Math.round(Math.random() * 2000)));
        const order = {
          id: Math.max(500, Math.round(Math.random() * 2000)),
          name: nameOrder,
          washANDIron: washANDIron,
          Iron: Iron,
          price: price,
          count: count,
          itHasBeenDelivred: false,
          Time: new Date(Date.now()),
        };
        addNew.push(order);
        setItemsStroge(addNew, 'Iron');
        navigation.navigate('home');
        Tostget(Language.invoiceOrder);
      } else {
        Tostget(Language.zeroOrder);
        navigation.navigate('order');
      }
    } catch (err) {
      console.log(err);
    }
  };
  return {saveData, ENdOrder};
}
