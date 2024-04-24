import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
  Pressable,
} from 'react-native';
import {
  PanGestureHandler,
  State,
  PanGestureHandlerGestureEvent,
} from 'react-native-gesture-handler';
import {colors} from '../constants/colors';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {fonts} from '../constants/fonts';
import {useSelector} from 'react-redux';
import useEnquryLanguag from '../functions/EnquryLanguag';
const SideMenu: React.FC<ListItemProps> = ({
  items,
  touch,
  arr,
  setArray,
  setPrice,
  price,
  Deletit,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [translationX, setTranslationX] = useState(0);
  const {Language, darkmode, Languagesign} = useSelector(
    state => state.userReducer,
  );
  const {flexS, rowS, Leftn, rowSexpception} = useEnquryLanguag();

  const handleDrowng = () => {
    console.log(Languagesign === 'en', translationX < 0);
    setTranslationX(0);

    if (translationX < 0 && Languagesign === 'en') {
      setTranslationX(0);
    } else if (translationX > 0 && Languagesign === 'ar') {
      setTranslationX(0);
    } else {
      Languagesign === 'en' ? setTranslationX(-70) : setTranslationX(70);
    }
  };
  const handleDrag = event => {
    // console.log(event._dispatchInstances[0])
    // setTranslationX( - 80);
    // setTranslationX(-event._dispatchInstances[0]['treeBaseDuration'] - 80);
    // if (translationX < 0){
    //   setTranslationX(0);
    // }
  };

  const animatedStyle = {
    transform: [
      {
        translateX: translationX,
      },
    ],
  };
  const style_font = {
    fontFamily: fonts.TAJAWALEXTRABOLD,
    fontSize: 15,
    // textAlign: Languagesign === 'en' ? 'right' : 'left',
    color: darkmode === 'light' ? colors.BLACK : colors.WHITE,
  };

  return (
    <View style={styles.Container}>
      {/* <PanGestureHandler onGestureEvent={handleDrag} onEnded={true}> */}

      <TouchableOpacity
        style={{
          zIndex: 1,
          alignItems: flexS(),
        }}
        onLongPress={handleDrowng}
        //  onPress={translationX < 0 ? handleDrowng: null}
        onPress={handleDrowng}>
        <Animated.View
          //  onTouchMove={(event)=>console.log(event._dispatchInstances[0]['actualDuration'])}
          onTouchEnd={handleDrowng}
          //  onTouchEndCapture={handleDrowng}
          style={[
            styles.sideMenu,
            animatedStyle,
            {
              backgroundColor:
                darkmode === 'light' ? colors.WHITE : colors.DARKM,
              flexDirection: rowS(),
            },
          ]}>
          <View
            style={{
              flex: 3,
              flexDirection: rowS(),
            }}>
            <View>
              <Text style={[style_font, {fontSize: 13}]}>{items.name}</Text>
              <Text style={[style_font, {fontSize: 13}]}>
                {items.OriginP}
                {Language.SR} /{Language.perPiece}
              </Text>
            </View>
          </View>
          <View style={{flex: 1, justifyContent: 'center'}}>
            <Text style={[style_font, {fontSize: 13, textAlign: 'center'}]}>
              {items.priceTotal.toFixed(2)}
              {Language.SR}
            </Text>
            <View
              style={{
                flex: 1,
                flexDirection: rowS(),
                justifyContent: 'space-around',
                alignItems: 'center',
              }}>
              <TouchableOpacity
                onPress={() => {
                  touch(arr, items.id, 'plus', setArray, setPrice, price);
                }}
                hitSlop={15}>
                <FontAwesome5
                  style={{borderRadius: 10}}
                  name="plus-square"
                  color={darkmode === 'light' ? colors.BLACK : colors.WHITE}
                  size={15}
                />
              </TouchableOpacity>
              <Text style={[style_font, {marginHorizontal: 10}]}>
                {items.count}
              </Text>
              <TouchableOpacity
                onPress={() => {
                  touch(arr, items.id, 'minus', setArray, setPrice, price);
                }}
                hitSlop={15}>
                <FontAwesome5
                  name="minus-square"
                  color={darkmode === 'light' ? colors.BLACK : colors.WHITE}
                  size={15}
                />
              </TouchableOpacity>
            </View>
          </View>
        </Animated.View>
        <TouchableOpacity
          onPress={() => {
            Deletit(arr, items.id, setArray, setPrice);
            setTranslationX(0);
          }}
          style={[
            styles.iconContainer,
            {
              display:
                translationX === -70 && Languagesign === 'en'
                  ? 'flex'
                  : translationX === 70 && Languagesign === 'ar'
                  ? 'flex'
                  : 'none',
              alignItems: 'center',
              alignSelf: Leftn(),
            },
          ]}>
          <FontAwesome5 name="trash" size={40} color={colors.PREMREYON} />
        </TouchableOpacity>
      </TouchableOpacity>

      {/* </PanGestureHandler> */}
    </View>
  );
};

const styles = StyleSheet.create({
  sideMenu: {
    width: '100%',
    marginLeft: 0,
    padding: 0,
    paddingVertical: 15,
    paddingHorizontal: 15,
    justifyContent: 'space-around',
  },
  menuContent: {
    padding: 20,
  },
  Container: {
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  iconContainer: {
    height: 70,
    width: 70,
    backgroundColor: colors.BLACK,
    justifyContent: 'center',
    position: 'absolute',
    zIndex: 0,
  },
});

export default SideMenu;
