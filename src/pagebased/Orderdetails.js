import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  ScrollView,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {colors} from '../constants/colors.js';
import {fonts} from '../constants/fonts.js';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import additionl from '../data/additionlArabic.js';
import SideMenu from '../Component/SideMenu.js';
import useCollectOrderDatiels from '../functions/Collectorderdatiels.js';
import useSeve_order_data from '../functions/Seveorderdata.js';
import {useSelector} from 'react-redux';
import useEnquryLanguag from '../functions/EnquryLanguag.js';
export default function Order_details({route, navigation}) {
  const {Language, darkmode, Languagesign} = useSelector(
    state => state.userReducer,
  );
  const {flexS, rowS, iconName, rowSexpception} = useEnquryLanguag();

  const {Data} = route.params;
  const [washing, setWashing] = useState([]);
  const [Iron, setIron] = useState([]);
  const [countAll, setCountAll] = useState(0);
  const [PriceAll, setPriceAll] = useState(0);
  const [pressPay, setPressPay] = useState(1);
  const {Collecting, EDitData, deletItem} = useCollectOrderDatiels();
  const {ENdOrder} = useSeve_order_data({navigation});
  const style_font = {
    fontFamily: fonts.TAJAWALEXTRABOLD,
    fontSize: 15,
    // textAlign: Leftn(),
    color: darkmode === 'light' ? colors.BLACK : colors.WHITE,
  };
  const style_font_heder = {
    fontFamily: fonts.TAJAWALEXTRABOLD,
    fontSize: 15,
    marginTop: 10,
    marginHorizontal: 15,
    textAlign: 'left',
    color: darkmode === 'light' ? colors.PREMREYON : colors.WHITE,
  };
  const style_Taching = {
    flex: 2,
    height: '40%',
    marginHorizontal: 5,
    padding: 5,
    borderRadius: 5,
    alignItems: 'center',
  };
  useEffect(() => {
    // console.log(Data, 'hhhhhhhhhhhhhhh');
    setWashing(Data.arr[0]);
    setIron(Data.arr[1]);
    setPriceAll(Data.pric);
    setCountAll(Data.countent);
    // console.log(Object.entries(Data).forEach(([key, value]) => value));
  }, []);
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
          flexDirection: rowSexpception(),
          justifyContent: 'space-around',
          alignItems: 'center',
          backgroundColor:
            darkmode === 'light' ? colors.WHITE : colors.PREMREYON,
          // height: '14%',
        }}>
        <TouchableOpacity onPress={() => navigation.goBack()} hitSlop={15}>
          <Text
            style={{color: darkmode === 'light' ? colors.BLACK : colors.WHITE}}>
            {Language.cancel}
          </Text>
        </TouchableOpacity>
        <Text
          style={[
            style_font,
            {
              flex: 1,
              textAlign: 'center',
              fontSize: 20,
              color: darkmode === 'light' ? colors.BLACK : colors.WHITE,
            },
          ]}>
          {Language.OrderDetails}
        </Text>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <FontAwesome5
            name={iconName()}
            size={39}
            color={darkmode === 'light' ? colors.PREMREYON : colors.WHITE}
          />
        </TouchableOpacity>
      </View>
      {/* <SideMenu/> */}

      {/* the middle */}
      <View style={{flex: 6}}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          snapToAlignment="center"
          style={{paddingBottom: 1}}>
          {/* prat one */}
          <View
            style={{
              display: Data.arr[0].length > 0 ? 'flex' : 'none',
              flexDirection: rowS(),
              justifyContent: 'space-between',
              marginVertical: 15,
            }}>
            <Text style={style_font_heder}>{Language.Fristservice}</Text>

            <Text style={style_font_heder}>
              {Collecting(washing)} {Language.piece}
            </Text>
          </View>

          {/* view data datils  */}
          <View>
            {washing.map((item, index) => (
              <SideMenu
                key={index}
                items={item}
                touch={EDitData}
                arr={washing}
                setArray={setWashing}
                setPrice={setPriceAll}
                Deletit={deletItem}
              />
            ))}

            {/* prat tow */}
            <View
              style={{
                display: Data.arr[1].length > 0 ? 'flex' : 'none',
                flexDirection: rowS(),
                justifyContent: 'space-between',
                marginVertical: 15,
              }}>
              <Text style={style_font_heder}>{Language.Secondservice}</Text>
              <Text style={style_font_heder}>
                {Collecting(Iron)} {Language.piece}
              </Text>
            </View>
            {Iron.map((item, index) => (
              <SideMenu
                key={index}
                items={item}
                touch={EDitData}
                arr={Iron}
                setArray={setIron}
                setPrice={setPriceAll}
                price={PriceAll}
                Deletit={deletItem}
              />
            ))}
          </View>
        </ScrollView>
      </View>

      <View
        style={{
          // height:'20%',
          flex: 4,
          justifyContent: 'space-around',
          alignItems: 'center',
          // flexDirection: 'row-reverse',
          backgroundColor: darkmode === 'light' ? colors.WHITE : colors.DARKM,
          borderWidth: darkmode === 'dark' ? 1 : 0,
          borderTopColor: colors.WHITE,

          borderTopEndRadius: 50,
          borderTopStartRadius: 50,
          elevation: 20,
          shadowColor: colors.BLACK,
        }}>
        <View
          style={{
            width: '85%',
            flex: 1.5,
            alignItems: 'center',
            flexDirection: rowS(),
            justifyContent: 'space-between',
          }}>
          <View>
            <Text style={[style_font, {fontSize: 17}]}>{Language.cost}</Text>
            <Text style={[style_font, {fontSize: 17}]}>
              {Language.Delivery}
            </Text>
            <Text style={[style_font, {fontSize: 17}]}>{Language.Tax} 15%</Text>
            <Text style={[style_font, {fontSize: 17}]}>
              {Language.TotalCost}
            </Text>
          </View>
          <View>
            <Text style={[style_font, {fontSize: 17}]}>
              {PriceAll.toFixed(2)} {Language.SR}
            </Text>
            <Text style={[style_font, {fontSize: 17}]}>0.00 {Language.SR}</Text>
            <Text style={[style_font, {fontSize: 17}]}>0.00 {Language.SR}</Text>
            <Text style={[style_font, {fontSize: 17}]}>
              {PriceAll.toFixed(2)} {Language.SR}
            </Text>
          </View>
        </View>
        <Text
          style={[
            style_font,
            {
              fontSize: 12,
              color: darkmode === 'light' ? colors.CURRENT : colors.WHITE,
              alignSelf: flexS(),
              marginHorizontal: 25,
            },
          ]}>
          {Language.includingvalueAddedTex} 15%
        </Text>
        <View
          style={{
            flex: 1,
            flexDirection: rowS(),
          }}>
          <TouchableOpacity
            onPress={() => {
              ENdOrder(washing, Iron, PriceAll, countAll);
              setPressPay(1);
            }}
            style={[
              style_Taching,
              {
                backgroundColor:
                  pressPay === 1 ? colors.PREMREYON : colors.WHITE,
                borderWidth: pressPay !== 1 ? 1 : 0,
              },
            ]}>
            <Text
              style={[
                style_font,
                {
                  fontSize: 17,
                  color:
                    darkmode === 'light'
                      ? colors.BLACK
                      : darkmode === 'dark' && pressPay === 2
                      ? colors.BLACK
                      : colors.WHITE,
                },
              ]}>
              {Language.CardPayment}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              ENdOrder(washing, Iron, PriceAll, countAll);
              setPressPay(2);
            }}
            style={[
              style_Taching,
              {
                backgroundColor:
                  pressPay === 2 ? colors.PREMREYON : colors.WHITE,
                borderWidth: pressPay !== 2 ? 1 : 0,
              },
            ]}>
            <Text
              style={[
                style_font,
                {
                  fontSize: 17,
                  color:
                    darkmode === 'light'
                      ? colors.BLACK
                      : darkmode === 'dark' && pressPay === 1
                      ? colors.BLACK
                      : colors.WHITE,
                },
              ]}>
              pay
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
