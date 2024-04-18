import {View, Text} from 'react-native';
import React, {useState} from 'react';
import {Tostget} from '../massg';
const arrapython = [];

export default function useCollectOrderDatiels() {
  //   const [finlyOperation, setFinlyOperation] = useState({});
  const Collecting = array => {
    try {
      let counting = 0;
      for (const iterator of array) {
        counting += iterator?.count;
      }
      return counting;
    } catch (err) {
      console.log(err);
    }
  };

  const EDitData = (array, id, kind, setArrays, setPriceAll, price) => {
    try {
      let newObject = {};
      let Price = 0;
      let number = 0;
      const index = array.findIndex(pic => pic.id === id);
      console.log(index);
      if (index > -1) {
        const findData = array.find(item => item.id === id);
        if (kind === 'plus') {
          Price = findData.priceTotal + findData.OriginP;
          number = findData.count + 1;
          setPriceAll(pr => pr + findData.OriginP);
        } else {
          Price = findData.priceTotal - findData.OriginP;
          number = findData.count - 1;
          setPriceAll(pr => pr - findData.OriginP);
        }
        let add = [...array];
        if (number > 0) {
          newObject = {
            ...findData,
            priceTotal: Price,
            count: number,
          };
          add[index] = newObject;
          setArrays(add);
        } else {
          const delet = array.filter(pic => pic.id !== id);
          setArrays(delet);
        }

        console.log(add);
      }
    } catch (err) {
      console.log(err);
    }
  };
  const deletItem = (array, id, setArrays, setPriceAll) => {
    try {
      const find = array.find(pic => pic.id === id);
      if (find) {
        setPriceAll(pr => pr - find.priceTotal);
        const delet = array.filter(pic => pic.id !== id);

        setArrays(delet);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return {Collecting, EDitData, deletItem};
}
