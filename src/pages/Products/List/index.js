import React, { Component } from 'react';
import {
  View, Text, FlatList, Image, ActivityIndicator,
} from 'react-native';

import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import CategoryActions from '~/store/ducks/categories';
import ProductActions from '~/store/ducks/products';

import { TouchableOpacity } from 'react-native-gesture-handler';

import styles from './styles';

class Products extends Component {
  state = {
    loading: true,
    refresh: false,
  }

  static propTypes = {
    categories: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
      }),
    ).isRequired,
    products: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        brand: PropTypes.string,
        image: PropTypes.string,
        price: PropTypes.number,
      }),
    ).isRequired,
    actualCategory: PropTypes.oneOfType([PropTypes.oneOf([null]), PropTypes.number]),
    setCategoryRequest: PropTypes.func.isRequired,
    setProductRequest: PropTypes.func.isRequired,
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
  };

  async componentDidMount() {
    const { setCategoryRequest } = this.props;

    await setCategoryRequest();

    this.setState({ loading: false });
  }

  getProducts = async (category) => {
    const { setProductRequest } = this.props;

    await setProductRequest(category);

    this.setState({ loading: false, refresh: false });
  }

  handleGetProducts = (category) => {
    this.setState({ loading: true });

    this.getProducts(category);
  }

  handleRefreshProducts = (category) => {
    this.setState({ refresh: true });

    this.getProducts(category);
  }

  handleShowProduct = (product) => {
    const { navigation } = this.props;

    navigation.navigate('Product', { product });
  }

  render() {
    const { categories, products, activeCategory } = this.props;

    const { loading, refresh } = this.state;

    console.log(activeCategory)

    return (
      <View style={styles.container}>
        <FlatList
          style={styles.listCategories}
          data={categories}
          // recebe cada podcast e retorna o id como string
          keyExtractor={category => String(category.id)}
          // renerica cada item do podcast
          // renomei o item para o que quiser
          renderItem={({ item: category }) => (
            <TouchableOpacity
              style={category.id === activeCategory
                ? styles.buttonActive
                : styles.button}
              onPress={() => this.handleGetProducts(category.id)}
            >
              <Text style={styles.buttonText}
              >
                {category.title}
              </Text>
            </TouchableOpacity>
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
        {loading
          ? <ActivityIndicator style={styles.loading} size={30} />
          : (
            <FlatList
              style={styles.listProducts}
              numColumns={2}
              data={products}
              // recebe cada podcast e retorna o id como string
              keyExtractor={product => String(product.id)}
               // faz o refresh ao puxar a lista para baixo
              onRefresh={() => this.handleRefreshProducts(activeCategory)}
              refreshing={refresh}
              // renerica cada item do podcast
              // renomei o item para o que quiser
              renderItem={({ item: product }) => (
                <View style={styles.listProductsItem}>
                  <TouchableOpacity
                    style={styles.buttonPress}
                    onPress={() => this.handleShowProduct(product)}
                  >
                    <Image style={styles.productImage} source={{ uri: product.image }} />
                    <Text style={styles.productTitle}>{product.name}</Text>
                    <Text style={styles.productBrand}>{product.brand}</Text>
                    <Text style={styles.productPrice}>{`R$ ${product.priceFormat}`}</Text>
                  </TouchableOpacity>
                </View>
              )}
            />
          )
        }
      </View>
    );
  }
}

const formatPrice = (products) => {
  return products.map(prod => ({ ...prod, priceFormat: String(prod.price).replace('.', ',') }));
}

const mapStateToProps = state => ({
  activeCategory: state.categories.activeCategory,
  categories: state.categories.categories,
  products: formatPrice(state.products.products),
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({ ...CategoryActions, ...ProductActions }, dispatch)
);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Products);
