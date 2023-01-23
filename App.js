import React from 'react';
import Routes from './src/Navigations/Routes';
import 'react-native-gesture-handler';
// import PersistedStore from './PersistedStore';
import {PersistGate} from 'redux-persist/lib/integration/react';
import {persistor, store} from './src/redux/store';
import {Provider} from 'react-redux';
import {View} from 'react-native';
export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
          <Routes />
      </PersistGate>
    </Provider>
  );
}
