import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import PropTypes from 'prop-types';

const TabIcon = ({ tintColor }) => <Icon name="shopping-cart" size={20} color={tintColor} />;

const Cart = () => (
  <View>
    <Text>Cart</Text>
  </View>
);

TabIcon.propTypes = {
  tintColor: PropTypes.string.isRequired,
};

Cart.navigationOptions = {
  tabBarIcon: TabIcon,
};

export default Cart;
