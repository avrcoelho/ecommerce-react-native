import '~/config/ReactotronConfig';

import React from 'react';
import { SafeAreaView } from 'react-native';
import Routes from '~/routes';

import Header from '~/components/Header';

const App = () => (
  <SafeAreaView style={{ flex: 1, backgroundColor: '#e6e6e6' }}>
    <Header />
    <Routes />
  </SafeAreaView>
);

export default App;
