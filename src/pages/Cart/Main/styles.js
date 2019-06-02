import { StyleSheet } from 'react-native';
// obtem a altura da statusbar
// import { getStatusBarHeight } from 'react-native-status-bar-height';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eee',
    flex: 1,
    justifyContent: 'flex-end',
  },

  list: {
    flex: 1,
    padding: 15,
  },

  listItem: {
    backgroundColor: '#fff',
    padding: 15,
    flexDirection: 'row',
    marginBottom: 15,
  },

  productImage: {
    height: 80,
    width: 50,
  },

  productInfo: {
    flex: 1,
    paddingLeft: 20,
  },

  productName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#999',
  },
  productBrand: {
    fontSize: 14,
    color: '#999',
    marginBottom: 15,
  },

  productPrice: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4bb96f',
  },

  options: {
    width: 70,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  producAmount: {
    height: 30,
    width: 40,
    borderColor: '#999',
    borderWidth: 1,
    color: '#000',
    paddingVertical: 5,
  },

  containerSubtotal: {
    backgroundColor: '#fff',
    height: 120,
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingVertical: 20,
  },

  containerSubtotalTxt: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#999',
  },

  containerSubtotalPrice: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    color: '#4bb96f',
  },
});

export default styles;
