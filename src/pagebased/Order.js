import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Pressable,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {colors} from '../constants/colors';
import {fonts} from '../constants/fonts';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import useCollectOrderData from '../functions/collect_order_data';
import useSeve_order_data from '../functions/Seve_order_data.js';
import {isEmpty} from 'lodash';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import {setArrayOrder} from '../redux/action';
import additionlArabic from '../data/additionl_Arabic';
export default function Order({navigation}) {
  const {Language, arrayOrder, darkmode, Languagesign} = useSelector(
    state => state.userReducer,
  );
  const dispatch = useDispatch();
  const [active, setActive] = useState(1);
  const [Operation, setOperation] = useState('washANDIron');
  const {getOrderData, Collect, emptys} = useCollectOrderData();
  const {saveData} = useSeve_order_data({navigation});
  useEffect(() => {
    dispatch(setArrayOrder(additionlArabic));
  }, []);
  const style_service = {
    flex: 1,
    borderRadius: 25,
    padding: 10,
    marginHorizontal: 15,
    justifyContent: 'center',
    alignItems: 'center',
  };
  const style_font = {
    fontFamily: fonts.TAJAWALEXTRABOLD,
    fontSize: 15,
    textAlign: Languagesign === 'en' ? 'right' : 'left',
    color: darkmode === 'light' ? colors.BLACK : colors.WHITE,
  };
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: darkmode === 'light' ? colors.ASHEN : colors.DARK,
      }}>
      <View
        style={{
          flex: 1,
          padding: 10,
          flexDirection: Languagesign === 'en' ? 'row' : 'row-reverse',
          justifyContent: 'space-around',
          alignItems: 'center',
          backgroundColor: darkmode === 'light' ? colors.WHITE : colors.DARKM,
          opacity: 0.9,
          // height: '14%',
        }}>
        <Text
          style={[style_font, {flex: 1, textAlign: 'center', fontSize: 20}]}>
          {Language.newOrder}
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('home')}>
          <FontAwesome5
            name={
              Languagesign === 'en'
                ? 'arrow-alt-circle-left'
                : 'arrow-alt-circle-right'
            }
            size={39}
            color={darkmode === 'dark' ? colors.WHITE : colors.PREMREYON}
          />
        </TouchableOpacity>
      </View>

      {/* the middle */}
      <View style={{flex: 7}}>
        {/* {additionl.map(pic=><Text>{pic.name}</Text>)} */}
        {/* transportation between  cleand washing ,ironing and ironing */}
        <View>
          <Text
            style={[
              style_font,
              {
                marginTop: 10,
                marginHorizontal: 15,
                textAlign: Languagesign === 'ar' ? 'left' : 'right',
              },
            ]}>
            {Language.addDetails}
          </Text>
          <View
            style={{
              flexDirection: Languagesign === 'en' ? 'row-reverse' : 'row',
              marginVertical: 10,
            }}>
            <Pressable
              android_ripple={{borderless: 10}}
              hitSlop={15}
              style={[
                style_service,
                {
                  backgroundColor:
                    active === 1 ? colors.PREMREYON : colors.WHITE,
                },
              ]}
              onPress={() => {
                setActive(1);
                setOperation('washANDIron');
              }}>
              <Text
                style={[
                  style_font,
                  {
                    textAlign: 'center',
                    color: active === 1 ? colors.BLACK : null,
                  },
                ]}>
                {Language.Fristservice}
              </Text>
            </Pressable>
            <Pressable
              android_ripple={{borderless: 10}}
              hitSlop={15}
              style={[
                style_service,
                {
                  backgroundColor:
                    active === 2 ? colors.PREMREYON : colors.WHITE,
                },
              ]}
              onPress={() => {
                setActive(2);
                setOperation('Iron');
              }}>
              <Text
                style={[
                  style_font,
                  {
                    color: active === 2 ? colors.BLACK : null,
                  },
                ]}>
                {Language.Secondservice}
              </Text>
            </Pressable>
          </View>
        </View>
        {/* view data datils  */}
        <View>
          <FlatList
            style={{height: '80%'}}
            showsVerticalScrollIndicator={false}
            data={arrayOrder}
            renderItem={({item, index}) => (
              <View
                style={{
                  // opacity:0.2,
                  width: '90%',
                  alignSelf: 'center',
                  borderRadius: 15,
                  backgroundColor: colors.WHITE,
                  justifyContent: 'space-around',
                  alignItems: 'center',
                  marginVertical: 5,
                }}>
                <View
                  style={[
                    // style_servece,
                    {
                      width: '100%',
                      marginLeft: 0,
                      padding: 0,
                      paddingVertical: 15,
                      paddingHorizontal: 15,
                      flexDirection:
                        Languagesign === 'ar' ? 'row' : 'row-reverse',
                      justifyContent: 'space-around',
                    },
                  ]}>
                  <View
                    style={{
                      flex: 2,
                      flexDirection:
                        Languagesign === 'ar' ? 'row' : 'row-reverse',
                    }}>
                    <View
                      style={{
                        borderRadius: 10,
                        padding: 5,
                        backgroundColor: colors.BORDER,
                        justifyContent: 'center',
                        marginHorizontal: 10,
                      }}>
                      <Image
                        source={item.image}
                        style={{width: 50, height: 50}}
                      />
                    </View>
                    <View>
                      <Text
                        style={[
                          style_font,
                          {color: colors.BLACK, fontSize: 12},
                        ]}>
                        {item.name}
                      </Text>
                      <Text
                        style={[
                          style_font,
                          {color: colors.BLACK, fontSize: 12},
                        ]}>
                        {item.price}
                        {Language.SR} /{Language.perPiece}
                      </Text>
                    </View>
                  </View>

                  <View>
                    <Text
                      style={[
                        style_font,
                        {
                          textAlign: 'center',
                          color: colors.BLACK,
                          fontSize: 12,
                        },
                      ]}>
                      {!isNaN(Collect?.[Operation][item.name]?.priceTotal)
                        ? parseInt(
                            Collect?.[Operation][item.name]?.priceTotal,
                          ).toFixed(2)
                        : '0.00'}
                      {Language.SR}
                    </Text>
                    <View
                      style={{
                        flex: 1,
                        flexDirection: 'row-reverse',
                        justifyContent: 'space-around',
                        alignItems: 'center',
                      }}>
                      <TouchableOpacity
                        hitSlop={15}
                        onPress={() =>
                          getOrderData(
                            item.name,
                            item.price,
                            1,
                            item.image,
                            'plus',
                            Operation,
                          )
                        }>
                        <FontAwesome5
                          style={{borderRadius: 10}}
                          name="plus-square"
                          color={colors.BLACK}
                          size={15}
                        />
                      </TouchableOpacity>
                      <Text
                        style={[
                          style_font,
                          {color: colors.BLACK, marginHorizontal: 10},
                        ]}>
                        {!isNaN(Collect?.[Operation][item.name]?.count)
                          ? parseInt(Collect?.[Operation][item.name]?.count)
                          : '0'}
                      </Text>
                      <TouchableOpacity
                        hitSlop={15}
                        onPress={() =>
                          getOrderData(
                            item.name,
                            item.price,
                            1,
                            item.image,
                            'minus',
                            Operation,
                          )
                        }>
                        <FontAwesome5
                          name="minus-square"
                          color={colors.BLACK}
                          size={15}
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
            )}
          />
        </View>
      </View>

      <View
        style={{
          // height:'20%',
          flex: 2,
          justifyContent: 'space-around',
          alignItems: 'center',
          flexDirection: Languagesign === 'ar' ? 'row' : 'row-reverse',
          backgroundColor: darkmode === 'light' ? colors.WHITE : colors.DARKM,
          borderTopEndRadius: 50,
          borderTopStartRadius: 50,
          elevation: 10,
        }}>
        <View style={{flex: 1.5, alignItems: 'center'}}>
          <Text style={style_font}>
            {Language.total}({!isEmpty(Collect) ? Collect.ContOrder : '0'}):
          </Text>
          <Text style={[style_font]}>
            {Language.SR}
            {!isEmpty(Collect) ? Collect.PriceTotals : '00.00'}
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            saveData(Collect.PriceTotals, Collect.ContOrder, Collect, emptys);
          }}
          style={{
            flex: 2,
            marginHorizontal: 35,
            padding: 10,
            borderRadius: 5,
            alignItems: 'center',
            backgroundColor: colors.PREMREYON,
          }}>
          <Text style={style_font}>{Language.viewCart}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
