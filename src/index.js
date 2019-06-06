import '~/config/ReactotronConfig';

import React, { Component } from 'react';
import { SafeAreaView } from 'react-native';
import { Provider } from 'react-redux';
import CodePush from 'react-native-code-push';
import OneSignal from 'react-native-onesignal';

import Routes from '~/routes';
import store from '~/store';

class App extends Component {
  componentDidMount() {
    OneSignal.init('e49e8fd9-21a1-466e-b498-0835a166385a');

    OneSignal.addEventListener('received', this.onReceived);
    OneSignal.addEventListener('opened', this.onOpened);
    OneSignal.addEventListener('ids', this.onIds);
  }

  componentWillUnmount() {
    OneSignal.removeEventListener('received', this.onReceived);
    OneSignal.removeEventListener('opened', this.onOpened);
    OneSignal.removeEventListener('ids', this.onIds);
  }

  // informações recebidas da notificação
  onReceived = (data) => {};

  // ao clicar na notificação abre o app com as informações da notificação
  onOpened = (notification) => {};

  // relaciona o usuario que esta logado com a notificação
  onIds = (id) => {};

  render() {
    return (
      <Provider store={store}>
        <SafeAreaView style={{ flex: 1 }}>
          <Routes />
        </SafeAreaView>
      </Provider>
    );
  }
}

export default CodePush({
  checkFrequency: CodePush.CheckFrequency.ON_APP_RESUME,
})(App);
