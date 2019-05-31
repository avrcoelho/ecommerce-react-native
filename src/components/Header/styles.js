import { StyleSheet } from 'react-native';
// obtem a altura da statusbar
// import { getStatusBarHeight } from 'react-native-status-bar-height';

const styles = StyleSheet.create({
  container: {
    height: 54,
    // paddingTop: getStatusBarHeight() + 10,
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },

  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fd8d8d',
    flex: 1,
    textAlign: 'center',
  },

  icon: {
    fontWeight: 'bold',
  },
});

export default styles;
