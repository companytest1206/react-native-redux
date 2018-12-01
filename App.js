/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { Provider } from 'react-redux';
// import { TextInput, Text, View, TouchableOpacity, Platform } from 'react-native';
// import { PersistGate } from 'redux-persist/integration/react';
import MainPage from './src/component/MainPage';
import { store, pStore } from './src/store';
import { PersistGate } from 'redux-persist/lib/integration/react';

// import { persistStore } from 'redux-persist';

// import { StackNavigator } from 'react-navigation';

// const suppato = createStackNavigator({
//     Home: {
//       screen: MainPage,
//     },
//   },
// );

// const AppNavigator = StackNavigator(
//   {
//     Index: {
//       screen: MainPage,
//     },
//   },
//   {
//     initialRouteName: 'Index',
//     headerMode: 'none',

//     /*
//    * Use modal on iOS because the card mode comes from the right,
//    * which conflicts with the drawer example gesture
//    */
//     mode: Platform.OS === 'ios' ? 'modal' : 'card',
//   }
// );


export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={pStore}>
          <MainPage />
        </PersistGate>
      </Provider>
    );
  }
}
