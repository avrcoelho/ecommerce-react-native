import React from 'react';
import { createStackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import PropTypes from 'prop-types';

import Main from './Main';

const TabIcon = ({ tintColor }) => <Icon name="shopping-cart" size={20} color={tintColor} />;

TabIcon.propTypes = {
  tintColor: PropTypes.string.isRequired,
};

export default createStackNavigator(
  {
    Main: {
      screen: Main,
      navigationOptions: {
        title: 'Carrinho de compras',
        headerTitleStyle: {
          color: '#fd8d8d',
          textAlign: 'center',
          flexGrow: 1,
          alignSelf: 'center',
        },
      },
    },
  },
  {
    navigationOptions: {
      tabBarIcon: TabIcon,
    },
  },
);
