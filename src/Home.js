import {View, Text, TouchableOpacity, Image, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
// import {setIDEMPLOY} from './redux/action';
import {colors} from './constants/colors.js';
import usestorageGet from './functions/storageAsyncget';
// import uuid from 'react-native-uuid';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import PagerView from 'react-native-pager-view';
import Home_sub from './pagebased/home.js';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Order from './pagebased/Order.js';
import Information from './pagebased/Information.js';
import {fonts} from './constants/fonts.js';
import useSwitchLanguage from './functions/SwitchLanguage.js';

const Tab = createBottomTabNavigator();
export default function Home({navigation}) {
  const {Language, darkmode, Languagesign} = useSelector(
    state => state.userReducer,
  );
  useSwitchLanguage();
  const SwitchingLeft = route => {
    return Languagesign === 'ar'
      ? route.name !== 'information' && route.name !== 'order'
        ? 50
        : 0
      : 0;
  };
  const SwitchingRight = route => {
    return Languagesign === 'ar'
      ? route.name !== 'information' ||
        route.name === 'order' ||
        route.name === 'home'
        ? 0
        : 50
      : 0;
  };
  return (
    <>
      <PagerView style={{flex: 2}}>
        {/* <View> */}
        <Tab.Navigator
          initialRouteName="home"
          screenOptions={({route}) => ({
            tabBarShowLabel: true,
            tabBarActiveTintColor: colors.PREMREYON,

            tabBarLabelStyle: {
              top: -10,
              fontSize: 16,
              // color:color_focus === 'order'? colors.BLACK:colors.PREMREYON,
              fontFamily: fonts.HANDLEE,
              // backgroundColor:'#000'
            },
            tabBarItemStyle: {
              borderTopLeftRadius: SwitchingLeft(route),

              borderTopRightRadius: SwitchingRight(route),

              minWidth: 20,
              minHeight: 100,
              top: -50,
              backgroundColor:
                darkmode === 'light' ? colors.WHITE : colors.DARKM,
              shadowColor: colors.CURRENT,
              paddingVertical: 5,
            },
            tabBarStyle: {
              display: route.name === 'order' ? 'none' : null,
              elevation: 25,
              backgroundColor: colors.BLACK,
            },

            // tabBarLabelStyle: {fontFamily: fonts.CAIROREGULARK},
            tabBarIcon: ({focused, size, color}) => {
              let iconName;

              switch (route.name) {
                case 'home':
                  return (
                    <Image
                      style={{
                        width: '50%',
                        height: '50%',
                        alignItems: 'center',
                        objectFit: 'contain',
                        aspectRatio: 2 / 3.5,
                        // marginHorizontal: 20,
                      }}
                      source={
                        focused
                          ? require('../assets/logo.png')
                          : darkmode === 'dark'
                          ? require('../assets/logoEDark.png')
                          : require('../assets/logoE.png')
                      }
                    />
                  );

                case 'order':
                  return (
                    <Image
                      style={{
                        width: '50%',
                        height: '50%',
                        alignItems: 'center',
                        objectFit: 'fill',
                        aspectRatio: 7 / 5.5,
                        // marginHorizontal: 20,
                      }}
                      source={
                        focused
                          ? require('../assets/laundry-basketE.png')
                          : darkmode === 'dark'
                          ? require('../assets/laundry-basketDark.png')
                          : require('../assets/laundry-basket.png')
                      }
                    />
                  );
                case 'information':
                  iconName = 'user';
                  size = focused ? 25 : 20;
                  const colorDark =
                    darkmode === 'light' ? colors.DARK : colors.WHITE;
                  color = !focused ? colorDark : colors.PREMREYON;
                  return (
                    <FontAwesome5 name={iconName} size={size} color={color} />
                  );
              }
              // return <FontAwesome5 name={iconName} size={size} color={color} />;
            },

            // tabBarActiveBackgroundColor: colors.WHITE,
            // tabBarInactiveBackgroundColor: colors.WHITE,
            tabBarHideOnKeyboard: true,
            // tabBarStyle: {
            //   display: route.name === 'order' ? 'none' : null,
            //   shadowColor: colors.CURRENT,
            //   backgroundColor: colors.BACKGRUONDPAG,
            // },
          })}>
          <Tab.Screen
            name={Languagesign === 'en' ? 'information' : 'home'}
            component={Languagesign === 'en' ? Information : Home_sub}
            options={{
              tabBarLabel:
                Languagesign === 'en' ? Language.information : Language.Home,
              header: () => null,
            }}
          />
          <Tab.Screen
            name="order"
            component={Order}
            options={{
              tabBarLabel: Language.Order,
              header: () => null,
            }}
          />
          <Tab.Screen
            name={Languagesign === 'en' ? 'home' : 'information'}
            component={Languagesign === 'en' ? Home_sub : Information}
            options={{
              tabBarLabel:
                Languagesign === 'en' ? Language.Home : Language.information,

              header: () => null,
            }}
          />
        </Tab.Navigator>
        {/* </View> */}
      </PagerView>
    </>
  );
}
