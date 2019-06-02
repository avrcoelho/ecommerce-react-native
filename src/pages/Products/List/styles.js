import { StyleSheet } from 'react-native';
// obtem a altura da statusbar
// import { getStatusBarHeight } from 'react-native-status-bar-height';

const styles = StyleSheet.create({
  container: {
    paddingBottom: 60,
  },

  listCategories: {
    height: 54,
    backgroundColor: '#fd8d8d',
  },

  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 54,
    paddingHorizontal: 10,
  },

  buttonText: {
    flex: 1,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },

  buttonTextActive: {
    flex: 1,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    borderBottomColor: '#fff',
    borderBottomWidth: 5,
  },

  listProducts: {
    backgroundColor: '#e6e6e6',
    alignSelf: 'stretch',
  },

  buttonPress: {
    flexDirection: 'column',
    alignItems: 'center',
  },

  listProductsItem: {
    backgroundColor: '#fff',
    margin: 10,
    padding: 10,
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },

  productImage: {
    width: 100,
    height: 150,
    marginBottom: 10,
  },

  productTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'left',
    alignSelf: 'stretch',
  },

  productBrand: {
    fontSize: 16,
    textAlign: 'left',
    color: '#999',
    alignSelf: 'stretch',
  },
  productPrice: {
    marginTop: 10,
    fontSize: 22,
    textAlign: 'left',
    fontWeight: 'bold',
    color: '#4bb96f',
    alignSelf: 'stretch',
  },

  loading: {
    color: '#000',
    marginTop: 20,
  },
});

export default styles;
