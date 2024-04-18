import {View, Text} from 'react-native';
import React from 'react';
import {fonts} from '../constants/fonts';
import {colors} from '../constants/colors';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function Advertis({language, languagesign}) {
  const style_font = {
    fontFamily: fonts.TAJAWALEXTRABOLD,
    fontSize: 25,
    color: colors.BLACK,
  };
  return (
    <View
      style={{
        backgroundColor: '#00d9e2',
        // opacity:0.2,
        marginVertical: 10,
        width: '100%',
        height: '30%',
        flex: 1,
        flexDirection: languagesign === 'en' ? 'row' : 'row-reverse',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingVertical: 10,
        borderRadius: 15,
      }}>
      <View style={{marginHorizontal: 10}}>
        <FontAwesome5 name="heartbeat" color={'#fff'} size={20} />
        <FontAwesome5 name="heartbeat" color={'#fff'} size={40} />
      </View>
      <View>
        <Text style={[style_font, {fontSize: 12, color: '#fff'}]}>
          {language.nameApplication}
        </Text>
        <Text style={[style_font, {fontSize: 17}]}>
          {language.DefinitionSentence}
        </Text>
      </View>
      <View>
        <FontAwesome5 name="tshirt" color={'#fff'} size={70} />
      </View>
    </View>
  );
}
