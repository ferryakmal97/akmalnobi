import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Persistor, Store} from '~redux';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

import Routes from '~routes';

export default function App() {
  return (
    <Provider store={Store}>
      <PersistGate loading={false} persistor={Persistor}>
        <NavigationContainer>
          <Routes />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}
