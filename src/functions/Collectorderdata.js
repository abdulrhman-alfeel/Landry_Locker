import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Tostget, findprepare} from '../massg';
import uuid from 'react-native-uuid';
export default function useCollectOrderData() {
  const [iteminputStat, setItem] = useState({});
  const {PrepareEmploy} = useSelector(state => state.userReducer);
  const [Collect, setCollect] = useState({
    washANDIron: {},
    Iron: {},
    PriceTotals: 0,
    ContOrder: 0,
  });

  let arr = [];
  // const [arrays, setArrays] = useState([]);
  const dispatch = useDispatch();

  const getOrderData = (
    nameOrder,
    originPrice,
    count,
    icon,
    kind,
    Operation,
  ) => {
    try {
      let content = 0;
      let counti = 0;
      let Totel = 0;
      let CountOrders = 0;
      let iddult = uuid.v4();
      if (!isNaN(Collect?.[Operation][nameOrder]?.priceTotal)) {
        content = Collect?.[Operation][nameOrder]?.priceTotal;
      }
      if (!isNaN(Collect?.[Operation][nameOrder]?.count)) {
        counti = Collect?.[Operation][nameOrder]?.count;
      }
      if (!isNaN(Collect?.[Operation][nameOrder]?.id)) {
        iddult = Collect?.[Operation][nameOrder]?.id;
      }

      let Price = 0;
      let number = 0;
      if (kind === 'plus') {
        Price = content + originPrice;
        number = counti + count;
        Totel = Collect?.PriceTotals + originPrice;
        CountOrders = Collect?.ContOrder + count;
      } else {
        Price = content - originPrice;
        number = counti - count;
        Totel = Collect?.PriceTotals - originPrice;
        CountOrders = Collect?.ContOrder - count;
      }
      // switch (kind) {
      //   case 'plus':
      //     Price = content + originPrice;
      //     number = counti + count;
      //   case 'minus':
      //     Price = content - originPrice;
      //     number = counti - count;
      // }

      if (number >= 0) {
        setCollect({
          ...Collect,
          [Operation]: {
            ...Collect[Operation],
            [nameOrder]: {
              ...Collect[Operation][nameOrder],
              id: iddult,
              name: nameOrder,
              priceTotal: Price,
              OriginP: originPrice,
              count: number,
              icons: icon,
              operation_Type: Operation,
            },
          },
          PriceTotals: Totel,
          ContOrder: CountOrders,
        });
      }

      // console.log(Collect,'hhhhhiii');

      // arr.forEach(pic=>{
      //   arrays.push(pic)
      //     setArrays(arrays)
      // })
    } catch (err) {
      console.log(err);
    }
  };

  const emptys = () => {
    setCollect({
      washANDIron: {},
      Iron: {},
      PriceTotals: 0,
      ContOrder: 0,
    });
  };

  return {getOrderData, Collect, emptys};
}
