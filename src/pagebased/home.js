import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
  Pressable,
} from 'react-native';
import {fonts} from '../constants/fonts';
import {colors} from '../constants/colors';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import usestorageGet from '../functions/storageAsyncget';
import {useSelector} from 'react-redux';
import Advertis from '../Component/Advertis';
import OrderList from '../Component/OrderList';
import useSwitchLanguage from '../functions/SwitchLanguage';
import {Tostget} from '../massg';
export default function Home_sub({navigation}) {
  const {arrayIron, Language, darkmode, Languagesign} = useSelector(
    state => state.userReducer,
  );
  const [switchArray, setSwitch] = useState(arrayIron?.slice(0, 2));

  const getItemsStroge = usestorageGet();
  const [moreData, setMore] = useState(false);

  const style_font = {
    fontFamily: fonts.TAJAWALEXTRABOLD,
    fontSize: 25,
    color: darkmode === 'light' ? colors.BLACK : colors.WHITE,
  };
  const style_continer = {
    // maxWidth:150,
    marginHorizontal: 10,
    // backgroundColor:'blue',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    // gap:15
  };

  const style_servece = {
    flex: 1,
    backgroundColor: darkmode === 'light' ? colors.WHITE : colors.DARK,
    borderWidth: 1,
    borderColor: colors.WHITE,
    padding: 7,
    borderRadius: 10,
    marginLeft: 10,
    flexDirection: 'row-reverse',
    justifyContent: 'space-around',
    alignItems: 'center',
  };

  const style_icons = {
    backgroundColor: colors.BORDER,
    padding: 5,
    borderRadius: 10,
  };
  let num = 0;
  useEffect(() => {
    getItemsStroge('Iron');
    // SW();
  }, []);
  // useSwitchLanguage();

  return (
    <View
      style={{
        height: '99%',
        backgroundColor: darkmode === 'light' ? colors.ASHEN : colors.DARK,
      }}>
      <View
        style={{
          alignSelf: Languagesign === 'en' ? 'flex-start' : 'flex-end',
          marginHorizontal: 30,
          marginVertical: 10,
          top: 20,
        }}>
        <Pressable
          android_ripple={{borderless: 10}}
          hitSlop={20}
          onPress={() => {
            Tostget(Language.notifications);
          }}>
          <FontAwesome5
            name="bell"
            size={30}
            color={darkmode === 'light' ? colors.DARK : colors.WHITE}
          />
        </Pressable>
      </View>
      <ScrollView
        scrollEnabled={moreData}
        showsVerticalScrollIndicator={false}
        style={{marginVertical: 0, marginBottom: 45, flex: 1}}>
        <View style={style_continer}>
          <View
            style={{
              // width: 250,
              // backgroundColor:'#00d9e2',
              display: 'flex',
              width: '90%',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row-reverse',
            }}>
            <Image
              style={{
                width: '10%',
                height: '10%',
                alignItems: 'center',
                objectFit: 'fill',
                aspectRatio: 3 / 5.5,
                // marginHorizontal: 20,
              }}
              source={require('../../assets/logo.png')}
            />
            <View style={{margin: 10}}>
              <Text style={style_font}>LAUNDRY</Text>
              <Text style={style_font}>LOCKER</Text>
            </View>
          </View>
        </View>
        <View style={[style_continer, {flex: 1.5, flexDirection: 'column'}]}>
          <View
            style={[
              style_continer,
              {
                width: '100%',
                flexDirection: 'column',
                alignItems: Languagesign === 'en' ? 'flex-end' : 'flex-start',
              },
            ]}>
            <Text style={[style_font, {fontSize: 12}]}>
              {Language.WelcomeYou} sultan
            </Text>
            <Text style={[style_font, {fontSize: 20}]}>
              {Language.titleQuestion}
            </Text>
          </View>

          <Advertis language={Language} languagesign={Languagesign} />
        </View>
        <View
          style={[
            style_continer,
            {
              flex: 1,
              flexDirection: 'column',
              alignItems: Languagesign === 'en' ? 'flex-end' : 'flex-start',
            },
          ]}>
          <Text style={[style_font, {fontSize: 15, marginVertical: 10}]}>
            {Language.titelSectionFrist}
          </Text>

          <View
            style={{
              // opacity:0.2,
              // flex:1,
              flexDirection: Languagesign === 'en' ? 'row-reverse' : 'row',
              justifyContent: 'space-around',
              alignItems: 'center',
              // paddingVertical:10,
              borderRadius: 15,
            }}>
            <Pressable
              android_ripple={{borderless: colors.BANAF}}
              hitSlop={20}
              onPress={() => {
                navigation.navigate('order');
              }}
              style={style_servece}>
              <View style={style_icons}>
                <Image
                  style={{width: 50, height: 50}}
                  source={require('../../assets/washing-machine.png')}
                />
              </View>

              <Text
                style={[
                  style_font,
                  {flexShrink: 1, fontSize: 14, textAlign: 'center'},
                ]}>
                {Language.Fristservice}
              </Text>
            </Pressable>
            <Pressable
              hitSlop={20}
              android_ripple={{borderless: colors.BANAF}}
              onPress={() => {
                navigation.navigate('order');
              }}
              style={style_servece}>
              <View style={style_icons}>
                <Image
                  style={{width: 50, height: 50}}
                  source={require('../../assets/ironing.png')}
                />
              </View>
              <Text style={[style_font, {fontSize: 14}]}>
                {Language.Secondservice}
              </Text>
            </Pressable>
          </View>
        </View>
        {/* order list */}
        <View
          style={[
            style_continer,
            {
              flex: 2,
              flexDirection: 'column',
              alignItems: 'flex-end',
              justifyContent: 'flex-start',
            },
          ]}>
          <View
            style={{
              width: '100%',
              flexDirection: Languagesign === 'en' ? 'row-reverse' : 'row',
              justifyContent: 'space-between',
              marginVertical: 10,
            }}>
            <Text style={[style_font, {fontSize: 15}]}>
              {Language.titleSectionSecond}
            </Text>
            <Pressable
              android_ripple={{borderless: colors.PREMREYON}}
              hitSlop={20}
              onPress={() => {
                if (!moreData && arrayIron.length > 1) {
                  setMore(true);
                  setSwitch(arrayIron);
                } else {
                  setMore(false);
                  setSwitch(arrayIron.slice(0, 2));
                }
              }}>
              <Text style={[style_font, {fontSize: 15}]}>
                {moreData !== true
                  ? Language.PressSectionSecond
                  : Language.PressSectionSecondless}
              </Text>
            </Pressable>
          </View>
          {arrayIron.length <= 0 ? (
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                alignSelf: 'center',
                marginVertical: 30,
              }}>
              <Image
                source={require('../../assets/04e77cc8e99ec927c37de1ac3b3e82cd.png')}
                style={{
                  width: 100,
                  height: 100,
                  objectFit: 'contain',
                  aspectRatio: 5 / 4,
                }}
              />
              <Text style={[style_font, {fontSize: 15, margin: 10}]}>
                لايوجد طلبات حالياً
              </Text>
            </View>
          ) : (
            <View
              style={{
                // opacity:0.2,
                // flex:1,
                backgroundColor: '#fff',

                justifyContent: 'space-around',
                alignItems: 'center',
                // paddingVertical:10,
                marginVertical: 1,
                borderRadius: 20,
              }}>
              {/* one list */}

              {switchArray?.length > 0
                ? switchArray.map((item, index) => (
                    <OrderList
                      key={index}
                      item={item}
                      language={Language}
                      languagesign={Languagesign}
                    />
                  ))
                : arrayIron
                    .slice(0, 2)
                    .map((item, index) => (
                      <OrderList
                        key={index}
                        item={item}
                        language={Language}
                        languagesign={Languagesign}
                      />
                    ))}
            </View>
          )}
        </View>
      </ScrollView>
    </View>
  );
}
