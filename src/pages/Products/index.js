import React from 'react';
import { createStackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import PropTypes from 'prop-types';

import List from './List';
import Product from './Product';

const TabIcon = ({ tintColor }) => <Icon name="shopping-bag" size={20} color={tintColor} />;

TabIcon.propTypes = {
  tintColor: PropTypes.string.isRequired,
};

export default createStackNavigator(
  {
    List: {
      screen: List,
      navigationOptions: {
        title: 'GoEcommerce',
        headerTitleStyle: {
          color: '#fd8d8d',
          textAlign: 'center',
          flexGrow: 1,
          alignSelf: 'center',
        },
      },
    },
    Product: {
      screen: Product,
      navigationOptions: {
        title: 'Detalhaes do produto',
        headerTitleStyle: {
          color: '#fd8d8d',
          textAlign: 'center',
          flexGrow: 1,
          alignSelf: 'center',
        },
        headerTintColor: '#fd8d8d',
      },
    },
  },
  {
    navigationOptions: {
      tabBarIcon: TabIcon,
    },
  },
);
