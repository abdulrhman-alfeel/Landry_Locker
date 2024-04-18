import {View, Text, TextInput, Pressable, StyleSheet} from 'react-native';
import React from 'react';
import {colors} from '../constants/colors';
import {useSelector} from 'react-redux';
import useSwitchLanguage from '../functions/SwitchLanguage';
import {fonts} from '../constants/fonts';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function Information() {
  const {Language, Languagesign, darkmode} = useSelector(
    state => state.userReducer,
  );
  const changingLanguage = useSwitchLanguage();
  const BUTTON = {
    // backgroundColor: 'red',
    padding: 10,
    marginBottom: 5,
  };
  const style_continer = {
    marginVertical: 20,
    marginHorizontal: 10,
    borderRadius: 10,
    padding: 5,
    elevation:1,
    backgroundColor: darkmode === 'light' ? colors.WHITE : colors.DARK,
    borderWidth: 1,
    borderColor: colors.WHITE,
  };
  const style_font = {
    fontFamily: fonts.TAJAWALEXTRABOLD,
    fontSize: 15,
    color: darkmode === 'light' ? colors.BLACK : colors.WHITE,
  };

  const LagnguageSwitch = () => {
    if (Languagesign === 'ar') {
      changingLanguage('language', {language: 'en'});
    } else {
      changingLanguage('language', {language: 'ar'});
    }
  };
  const darkSwitch = () => {
    if (darkmode === 'light') {
      changingLanguage('dark', {type: 'dark'});
    } else {
      changingLanguage('dark', {type: 'light'});
    }
  };
  return (
    <View
      style={{
        
        backgroundColor: darkmode === 'light' ? colors.ASHEN : colors.DARK,
        height: '100%',
      }}>
      <View style={{height: '80%'}}>
        {/* settings string and search */}
        <View style={{marginHorizontal: 10, marginTop: 20}}>
          <Text style={[style_font, {fontSize: 20}]}>{Language.settings}</Text>
        </View>
        {/* data user */}
        <View
          style={[
            style_continer,
            {flexDirection: Languagesign === 'en' ? 'row-reverse' : 'row'},
          ]}>
          <View
            style={{
              height: 80,
              width: 80,
              borderRadius: 100,
              backgroundColor: colors.ASHEN,
              alignSelf: Languagesign === 'ar' ? 'flex-end' : 'flex-start',
              margin: 10,
              justifyContent: 'center',
              alignItems: 'center',
              overflow: 'hidden',
            }}>
            <FontAwesome5 name="user-alt" size={80} />
          </View>
          <View style={[style_continer, {borderWidth: 0}]}>
            <Text style={style_font}>{Language.nameuser}</Text>
            <Text style={style_font}>{Language.MembershipType}</Text>
          </View>
        </View>
        {/* option setttings */}
        <View>
          <View style={style_continer}>
            <Pressable
              onPress={LagnguageSwitch}
              android_ripple={{borderless: 50}}
              hitSlop={10}
              style={BUTTON}>
              <Text style={style_font}>{Language.ChangeTheLanguage}</Text>
              <Text style={[style_font, {marginHorizontal: 10}]}>
                {Language.len}
              </Text>
            </Pressable>
            <Pressable
              onPress={darkSwitch}
              android_ripple={{borderless: 50}}
              hitSlop={10}
              style={BUTTON}>
              <Text style={style_font}>{Language.ChangeDarkMode}</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
}
// const style = StyleSheet.create({
//   BUTTON:{
//     // backgroundColor: 'red',
//     padding: 10,
//     marginBottom: 5,
//   }
// });
