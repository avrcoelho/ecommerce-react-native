import { StyleSheet } from 'react-native';
// obtem a altura da statusbar
// import { getStatusBarHeight } from 'react-native-status-bar-height';

const styles = StyleSheet.create({
  container: {
    paddingBottom: 60,
    backgroundColor: '#eee',
    flex: 1,
  },

  product: {
    backgroundColor: '#fff',
    margin: 15,
    alignSelf: 'stretch',
    alignItems: 'center',
    padding: 15,
  },

  image: {
    width: 100,
    height: 200,
    marginTop: 15,
  },

  infoProduct: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 15,
  },

  txtInfo: {
    flex: 1,
    textAlign: 'left',
  },

  productName: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  productBrand: {
    fontSize: 16,
    color: '#999',
  },

  price: {
    flex: 1,
    textAlign: 'right',
    fontSize: 22,
    fontWeight: 'bold',
    color: '#4bb96f',
  },

  button: {
    backgroundColor: '#4bb96f',
    alignSelf: 'stretch',
    height: 54,
    marginTop: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },

  txtButton: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default styles;
