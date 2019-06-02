import '~/config/ReactotronConfig';

import React from 'react';
import { SafeAreaView } from 'react-native';
import { Provider } from 'react-redux';

import Routes from '~/routes';
import store from '~/store';

const App = () => (
  <Provider store={store}>
    <SafeAreaView style={{ flex: 1 }}>
      <Routes />
    </SafeAreaView>
  </Provider>
);

export default App;
