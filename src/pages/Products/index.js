import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import PropTypes from 'prop-types';

const TabIcon = ({ tintColor }) => <Icon name="shopping-bag" size={20} color={tintColor} />;

const Products = () => (
  <View>
    <Text>Products</Text>
  </View>
);

TabIcon.propTypes = {
  tintColor: PropTypes.string.isRequired,
};

Products.navigationOptions = {
  tabBarIcon: TabIcon,
};

export default Products;
