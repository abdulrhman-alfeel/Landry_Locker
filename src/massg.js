import {ToastAndroid} from 'react-native';

export const Tostget = textTost =>
  ToastAndroid.showWithGravity(
    textTost,
    ToastAndroid.CENTER,
    ToastAndroid.LONG,
  );
export const findprepare = (getPre, Vaulchange) =>
  getPre.find(
    item =>
      new Date(item.TimeMonth).getDay() ===
        new Date(Vaulchange.TimeMonth).getDay() &&
      item.IDHom === Vaulchange.IDHom,
  );
export const findSeralyStatus = (getPre, Vaulchange) =>
  getPre.find(
    item =>
      new Date(item.TimeMonthReceipt).getMonth() ===
        new Date(Vaulchange.TimeMonthReceipt).getMonth() &&
      item.IDHom === Vaulchange.IDHom,
  );
