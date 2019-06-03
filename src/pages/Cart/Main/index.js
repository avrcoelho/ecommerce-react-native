import React, { Component } from 'react';
import
{
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import CartActions from '~/store/ducks/cart';

import styles from './styles';

class Main extends Component {
  static propTypes = {
    products: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        amount: PropTypes.number,
        name: PropTypes.string,
        brand: PropTypes.string,
        image: PropTypes.string,
      }),
    ).isRequired,
    removeCart: PropTypes.func.isRequired,
    changeAmount: PropTypes.func.isRequired,
  };

  calcSubtotal = () => {
    const { products } = this.props;

    const subtotal = products.reduce((a, b) => {
      return a + b.price * b.amount;
    }, 0);

    return String(subtotal.toFixed(2)).replace('.', ',');
  };

  handleRemove = (id) => {
    const { removeCart } = this.props;

    removeCart(id);
  };

  changeAmountProduct = (amount, id) => {
    const { changeAmount } = this.props;

    changeAmount(parseInt(amount === '' ? 0 : amount, 10), id);
  };

  render() {
    const { products } = this.props;
    const subtotal = this.calcSubtotal();

    return (
      <View style={styles.container}>
        <FlatList
          style={styles.list}
          data={products}
          keyExtractor={product => String(product.id)}
          renderItem={({ item: product }) => (
            <View style={styles.listItem}>
              <Image style={styles.productImage} source={{ uri: product.image }} />
              <View style={styles.productInfo}>
                <Text style={styles.productName}>{product.name}</Text>
                <Text style={styles.productBrand}>{product.brand}</Text>
                <Text style={styles.productPrice}>{`R$ ${product.priceFormat}`}</Text>
              </View>
              <View style={styles.options}>
                <TextInput
                  style={styles.producAmount}
                  value={String(product.amount !== 0 ? product.amount : '')}
                  keyboardType="numeric"
                  onChangeText={text => this.changeAmountProduct(text, product.id)}
                />
                <TouchableOpacity onPress={() => this.handleRemove(product.id)}>
                  <Icon name="times" size={20} color="#999" />
                </TouchableOpacity>
              </View>
            </View>
          )}
        />
        <View style={styles.containerSubtotal}>
          <Text style={styles.containerSubtotalTxt}>Subtotal</Text>
          <Text style={styles.containerSubtotalPrice}>{`R$ ${subtotal}`}</Text>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  products: state.cart.itemsCart,
});

const mapDispatchToProps = dispatch => bindActionCreators(CartActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);
