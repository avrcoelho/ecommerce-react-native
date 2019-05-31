import React from 'react';
import {
  View, Text, FlatList, Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import PropTypes from 'prop-types';

import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from './styles';

const TabIcon = ({ tintColor }) => <Icon name="shopping-bag" size={20} color={tintColor} />;

const info = {
  categories: [
    {
      id: 1,
      title: 'Camisetas',
    },
    {
      id: 2,
      title: 'Camisas',
    },
    {
      id: 3,
      title: 'Calças',
    },
    {
      id: 4,
      title: 'Blusas',
    },
    {
      id: 5,
      title: 'Bonés',
    },
    {
      id: 6,
      title: 'Casacos',
    },
  ],
  category_products: [
    {
      id: 1,
      products: [
        {
          id: 1,
          name: 'Camiseta Hyperas Preta',
          brand: 'Quiksilver',
          image: 'https://t-static.dafiti.com.br/czCvp3wBNPfehf7omYZfJacnxPY=/fit-in/427x620/dafitistatic-a.akamaihd.net%2fp%2fquiksilver-camiseta-quiksilver-hyperas-preta-8710-7136243-1-product.jpg',
          price: 49.99,
        },
        {
          id: 2,
          name: 'Camiseta Double Tap Preta',
          brand: 'Quiksilver',
          image: 'https://t-static.dafiti.com.br/EpEXepU-tSbgo6ZMl4Y5BOdjelw=/fit-in/427x620/dafitistatic-a.akamaihd.net%2fp%2fquiksilver-camiseta-quiksilver-double-tap-preta-7115-8165043-1-product.jpg',
          price: 59.99,
        },
        {
          id: 3,
          name: 'Camiseta Logo Azul',
          brand: 'Red Bull',
          image: 'https://t-static.dafiti.com.br/aC9871vKWfL3bDgbhLx5sFLa7xs=/fit-in/427x620/dafitistatic-a.akamaihd.net%2fp%2fred-bull-camiseta-red-bull-logo-azul-0272-7714033-1-product.jpg',
          price: 54.99,
        },
        {
          id: 4,
          name: 'Camiseta Primo Tipper',
          brand: 'Rip Curl',
          image: 'https://t-static.dafiti.com.br/weG0u9eKZ4KBV-G0XFOQ5hoY4eI=/fit-in/427x620/dafitistatic-a.akamaihd.net%2fp%2frip-curl-camiseta-rip-curl-primo-tipper-preto-8138-3441052-1-product.jpg',
          price: 39.99,
        },
      ],
    },
    {
      id: 2,
      products: [
        {
          id: 2,
          name: 'Camiseta Double Tap Preta',
          brand: 'Quiksilver',
          image: 'https://t-static.dafiti.com.br/EpEXepU-tSbgo6ZMl4Y5BOdjelw=/fit-in/427x620/dafitistatic-a.akamaihd.net%2fp%2fquiksilver-camiseta-quiksilver-double-tap-preta-7115-8165043-1-product.jpg',
          price: 59.99,
        },
        {
          id: 3,
          name: 'Camiseta Logo Azul',
          brand: 'Red Bull',
          image: 'https://t-static.dafiti.com.br/aC9871vKWfL3bDgbhLx5sFLa7xs=/fit-in/427x620/dafitistatic-a.akamaihd.net%2fp%2fred-bull-camiseta-red-bull-logo-azul-0272-7714033-1-product.jpg',
          price: 54.99,
        },
        {
          id: 1,
          name: 'Camiseta Hyperas Preta',
          brand: 'Quiksilver',
          image: 'https://t-static.dafiti.com.br/czCvp3wBNPfehf7omYZfJacnxPY=/fit-in/427x620/dafitistatic-a.akamaihd.net%2fp%2fquiksilver-camiseta-quiksilver-hyperas-preta-8710-7136243-1-product.jpg',
          price: 49.99,
        },
        {
          id: 4,
          name: 'Camiseta Primo Tipper',
          brand: 'Rip Curl',
          image: 'https://t-static.dafiti.com.br/weG0u9eKZ4KBV-G0XFOQ5hoY4eI=/fit-in/427x620/dafitistatic-a.akamaihd.net%2fp%2frip-curl-camiseta-rip-curl-primo-tipper-preto-8138-3441052-1-product.jpg',
          price: 39.99,
        },
      ],
    },
    {
      id: 3,
      products: [
        {
          id: 4,
          name: 'Camiseta Primo Tipper',
          brand: 'Rip Curl',
          image: 'https://t-static.dafiti.com.br/weG0u9eKZ4KBV-G0XFOQ5hoY4eI=/fit-in/427x620/dafitistatic-a.akamaihd.net%2fp%2frip-curl-camiseta-rip-curl-primo-tipper-preto-8138-3441052-1-product.jpg',
          price: 39.99,
        },
        {
          id: 2,
          name: 'Camiseta Double Tap Preta',
          brand: 'Quiksilver',
          image: 'https://t-static.dafiti.com.br/EpEXepU-tSbgo6ZMl4Y5BOdjelw=/fit-in/427x620/dafitistatic-a.akamaihd.net%2fp%2fquiksilver-camiseta-quiksilver-double-tap-preta-7115-8165043-1-product.jpg',
          price: 59.99,
        },
        {
          id: 3,
          name: 'Camiseta Logo Azul',
          brand: 'Red Bull',
          image: 'https://t-static.dafiti.com.br/aC9871vKWfL3bDgbhLx5sFLa7xs=/fit-in/427x620/dafitistatic-a.akamaihd.net%2fp%2fred-bull-camiseta-red-bull-logo-azul-0272-7714033-1-product.jpg',
          price: 54.99,
        },
        {
          id: 1,
          name: 'Camiseta Hyperas Preta',
          brand: 'Quiksilver',
          image: 'https://t-static.dafiti.com.br/czCvp3wBNPfehf7omYZfJacnxPY=/fit-in/427x620/dafitistatic-a.akamaihd.net%2fp%2fquiksilver-camiseta-quiksilver-hyperas-preta-8710-7136243-1-product.jpg',
          price: 49.99,
        },
      ],
    },
    {
      id: 4,
      products: [
        {
          id: 2,
          name: 'Camiseta Double Tap Preta',
          brand: 'Quiksilver',
          image: 'https://t-static.dafiti.com.br/EpEXepU-tSbgo6ZMl4Y5BOdjelw=/fit-in/427x620/dafitistatic-a.akamaihd.net%2fp%2fquiksilver-camiseta-quiksilver-double-tap-preta-7115-8165043-1-product.jpg',
          price: 59.99,
        },
        {
          id: 3,
          name: 'Camiseta Logo Azul',
          brand: 'Red Bull',
          image: 'https://t-static.dafiti.com.br/aC9871vKWfL3bDgbhLx5sFLa7xs=/fit-in/427x620/dafitistatic-a.akamaihd.net%2fp%2fred-bull-camiseta-red-bull-logo-azul-0272-7714033-1-product.jpg',
          price: 54.99,
        },
        {
          id: 4,
          name: 'Camiseta Primo Tipper',
          brand: 'Rip Curl',
          image: 'https://t-static.dafiti.com.br/weG0u9eKZ4KBV-G0XFOQ5hoY4eI=/fit-in/427x620/dafitistatic-a.akamaihd.net%2fp%2frip-curl-camiseta-rip-curl-primo-tipper-preto-8138-3441052-1-product.jpg',
          price: 39.99,
        },
        {
          id: 1,
          name: 'Camiseta Hyperas Preta',
          brand: 'Quiksilver',
          image: 'https://t-static.dafiti.com.br/czCvp3wBNPfehf7omYZfJacnxPY=/fit-in/427x620/dafitistatic-a.akamaihd.net%2fp%2fquiksilver-camiseta-quiksilver-hyperas-preta-8710-7136243-1-product.jpg',
          price: 49.99,
        },
      ],
    },
    {
      id: 5,
      products: [
        {
          id: 1,
          name: 'Camiseta Hyperas Preta',
          brand: 'Quiksilver',
          image: 'https://t-static.dafiti.com.br/czCvp3wBNPfehf7omYZfJacnxPY=/fit-in/427x620/dafitistatic-a.akamaihd.net%2fp%2fquiksilver-camiseta-quiksilver-hyperas-preta-8710-7136243-1-product.jpg',
          price: 49.99,
        },
        {
          id: 2,
          name: 'Camiseta Double Tap Preta',
          brand: 'Quiksilver',
          image: 'https://t-static.dafiti.com.br/EpEXepU-tSbgo6ZMl4Y5BOdjelw=/fit-in/427x620/dafitistatic-a.akamaihd.net%2fp%2fquiksilver-camiseta-quiksilver-double-tap-preta-7115-8165043-1-product.jpg',
          price: 59.99,
        },
        {
          id: 3,
          name: 'Camiseta Logo Azul',
          brand: 'Red Bull',
          image: 'https://t-static.dafiti.com.br/aC9871vKWfL3bDgbhLx5sFLa7xs=/fit-in/427x620/dafitistatic-a.akamaihd.net%2fp%2fred-bull-camiseta-red-bull-logo-azul-0272-7714033-1-product.jpg',
          price: 54.99,
        },
        {
          id: 4,
          name: 'Camiseta Primo Tipper',
          brand: 'Rip Curl',
          image: 'https://t-static.dafiti.com.br/weG0u9eKZ4KBV-G0XFOQ5hoY4eI=/fit-in/427x620/dafitistatic-a.akamaihd.net%2fp%2frip-curl-camiseta-rip-curl-primo-tipper-preto-8138-3441052-1-product.jpg',
          price: 39.99,
        },
      ],
    },
    {
      id: 6,
      products: [
        {
          id: 2,
          name: 'Camiseta Double Tap Preta',
          brand: 'Quiksilver',
          image: 'https://t-static.dafiti.com.br/EpEXepU-tSbgo6ZMl4Y5BOdjelw=/fit-in/427x620/dafitistatic-a.akamaihd.net%2fp%2fquiksilver-camiseta-quiksilver-double-tap-preta-7115-8165043-1-product.jpg',
          price: 59.99,
        },
        {
          id: 3,
          name: 'Camiseta Logo Azul',
          brand: 'Red Bull',
          image: 'https://t-static.dafiti.com.br/aC9871vKWfL3bDgbhLx5sFLa7xs=/fit-in/427x620/dafitistatic-a.akamaihd.net%2fp%2fred-bull-camiseta-red-bull-logo-azul-0272-7714033-1-product.jpg',
          price: 54.99,
        },
        {
          id: 1,
          name: 'Camiseta Hyperas Preta',
          brand: 'Quiksilver',
          image: 'https://t-static.dafiti.com.br/czCvp3wBNPfehf7omYZfJacnxPY=/fit-in/427x620/dafitistatic-a.akamaihd.net%2fp%2fquiksilver-camiseta-quiksilver-hyperas-preta-8710-7136243-1-product.jpg',
          price: 49.99,
        },
        {
          id: 4,
          name: 'Camiseta Primo Tipper',
          brand: 'Rip Curl',
          image: 'https://t-static.dafiti.com.br/weG0u9eKZ4KBV-G0XFOQ5hoY4eI=/fit-in/427x620/dafitistatic-a.akamaihd.net%2fp%2frip-curl-camiseta-rip-curl-primo-tipper-preto-8138-3441052-1-product.jpg',
          price: 39.99,
        },
      ],
    },
  ],
  products: [
    {
      id: 1,
      name: 'Camiseta Hyperas Preta',
      brand: 'Quiksilver',
      image: 'https://t-static.dafiti.com.br/czCvp3wBNPfehf7omYZfJacnxPY=/fit-in/427x620/dafitistatic-a.akamaihd.net%2fp%2fquiksilver-camiseta-quiksilver-hyperas-preta-8710-7136243-1-product.jpg',
      price: 49.99,
    },
    {
      id: 2,
      name: 'Camiseta Double Tap Preta',
      brand: 'Quiksilver',
      image: 'https://t-static.dafiti.com.br/EpEXepU-tSbgo6ZMl4Y5BOdjelw=/fit-in/427x620/dafitistatic-a.akamaihd.net%2fp%2fquiksilver-camiseta-quiksilver-double-tap-preta-7115-8165043-1-product.jpg',
      price: 59.99,
    },
    {
      id: 3,
      name: 'Camiseta Logo Azul',
      brand: 'Red Bull',
      image: 'https://t-static.dafiti.com.br/aC9871vKWfL3bDgbhLx5sFLa7xs=/fit-in/427x620/dafitistatic-a.akamaihd.net%2fp%2fred-bull-camiseta-red-bull-logo-azul-0272-7714033-1-product.jpg',
      price: 54.99,
    },
    {
      id: 4,
      name: 'Camiseta Primo Tipper',
      brand: 'Rip Curl',
      image: 'https://t-static.dafiti.com.br/weG0u9eKZ4KBV-G0XFOQ5hoY4eI=/fit-in/427x620/dafitistatic-a.akamaihd.net%2fp%2frip-curl-camiseta-rip-curl-primo-tipper-preto-8138-3441052-1-product.jpg',
      price: 39.99,
    },
  ],
};


const Products = () => (
  <View>
    <FlatList
      style={styles.listCategories}
      data={info.categories}
          // recebe cada podcast e retorna o id como string
      keyExtractor={category => String(category.id)}
          // renerica cada item do podcast
          // renomei o item para o que quiser
      renderItem={({ item: category }) => (
        <TouchableOpacity style={styles.button} onPress={() => {}}>
          <Text style={styles.buttonText}>{category.title}</Text>
        </TouchableOpacity>
      )}
      horizontal
    />
    <FlatList
      style={styles.listProducts}
      numColumns={2}
      data={info.category_products[0].products}
          // recebe cada podcast e retorna o id como string
      keyExtractor={product => String(product.id)}
          // renerica cada item do podcast
          // renomei o item para o que quiser
      renderItem={({ item: product }) => (
        <View style={styles.listProductsItem}>
          <Image style={styles.productImage} source={{ uri: product.image }} />
          <Text style={styles.productTitle}>{product.name}</Text>
          <Text style={styles.productBrand}>{product.brand}</Text>
          <Text style={styles.productPrice}>{product.price}</Text>
        </View>
      )}
    />
  </View>
);

TabIcon.propTypes = {
  tintColor: PropTypes.string.isRequired,
};

Products.navigationOptions = {
  tabBarIcon: TabIcon,
};

export default Products;
