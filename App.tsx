import { Root } from './src/navigation/Root';
import React, { Fragment, useEffect } from 'react';

import { Platform, StatusBar } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { Provider } from 'react-redux';

import { store } from './src/app/store';

function App() {
  useEffect(() => SplashScreen?.hide(), []);
  return (
    <Fragment>
      <Provider store={store}>
        {Platform.OS === 'ios' && <StatusBar barStyle="dark-content" />}
        <Root />
      </Provider>
    </Fragment>
  );
}

export default App;
