import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {fonts} from '../constants/fonts';
import {colors} from '../constants/colors';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import useEnquryLanguag from '../functions/EnquryLanguag';

export default function OrderList({item, language, languagesign}) {
  const {flexS, rowS, iconName, rowSexpception} = useEnquryLanguag();

  const style_font = {
    fontFamily: fonts.TAJAWALEXTRABOLD,
    fontSize: 25,
    color: colors.BLACK,
  };
  return (
    <TouchableOpacity
      //   key={index}
      style={{
        // opacity:0.2,
        // flex:1,
        flexDirection: rowS(),
        justifyContent: 'space-around',
        alignItems: 'center',
        borderBottomWidth: 0.2,
        marginVertical: 1,
        padding: 2,
        // borderRadius: 15,
      }}>
      <View
        style={[
          // style_servece,
          {
            width: '100%',
            marginLeft: 0,
            padding: 0,
            paddingVertical: 15,
            flexDirection: rowS(),
            justifyContent: 'space-around',
          },
        ]}>
        <View
          style={{
            flexDirection: rowS(),
          }}>
          <View
            style={{
              borderRadius: 100,
              padding: 5,
              backgroundColor: '#00d9e2',
              justifyContent: 'center',
              marginHorizontal: 10,
            }}>
            <FontAwesome5 name="clock" size={30} />
          </View>
          <View>
            <Text style={[style_font, {fontSize: 12}]}>
              {item.itHasBeenDelivred === true
                ? language.verificationDelivredTrue
                : language.verificationDelivredFalse}
            </Text>
            <Text style={[style_font, {fontSize: 12}]}>{item.name}</Text>
          </View>
        </View>
        <View>
          <Text style={[style_font, {fontSize: 12}]}>
            {new Date(item.Time).getDate()}/{new Date(item.Time).getUTCMonth()}
          </Text>
        </View>
        <View>
          <Text style={[style_font, {fontSize: 12}]}>
            {language.OrderSingle}:{String(item.id).slice(0, 7)}
          </Text>
          <Text style={[style_font, {fontSize: 12}]}>
            {item.price.toFixed(2)}
            {language.SR}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
