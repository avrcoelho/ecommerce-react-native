import React, { Component } from 'react';
import {
  View, Text, Image, TouchableOpacity, ScrollView,
} from 'react-native';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import CartActions from '~/store/ducks/cart';

import styles from './styles';

class Product extends Component {
  state = {
    product: {},
  };

  static propTypes = {
    navigation: PropTypes.shape({
      navigation: PropTypes.func,
    }).isRequired,
    addCart: PropTypes.func.isRequired,
  };

  componentDidMount() {
    const { navigation } = this.props;
    const product = navigation.getParam('product');

    this.setState({ product });
  }

  handleAddCart = (product) => {
    const { addCart, navigation } = this.props;

    addCart(product);
    navigation.navigate('Cart');
  };

  render() {
    const { product } = this.state;

    return (
      <ScrollView style={styles.container}>
        <View style={styles.product}>
          <Image style={styles.image} source={{ uri: product.image }} />
          <View style={styles.infoProduct}>
            <View style={styles.txtInfo}>
              <Text style={styles.productName}>{product.name}</Text>
              <Text style={styles.productBrand}>{product.brand}</Text>
            </View>
            <Text style={styles.price}>{`R$ ${product.priceFormat}`}</Text>
          </View>
          <TouchableOpacity style={styles.button} onPress={() => this.handleAddCart(product)}>
            <Text style={styles.txtButton}>Adicionar no carrinho</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(CartActions, dispatch);

export default connect(
  null,
  mapDispatchToProps,
)(Product);
