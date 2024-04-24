import React from 'react';
import {useColorScheme} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import {Store} from './redux/store';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();
import {NavigationContainer} from '@react-navigation/native';
import Home from './HomeMain';
import Order_details from './pagebased/Orderdetails';
import {useEffect} from 'react';
import useSwitchLanguage from './functions/SwitchLanguage';

/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  // useEffect(() => {}, []);
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={() => ({header: () => null})}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Order_details" component={Order_details} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
