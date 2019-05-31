import React from 'react';
import { View, Text, StatusBar } from 'react-native';

import styles from './styles';

const Header = () => (
  <View style={styles.container}>
    <StatusBar barStyle="white" />
    <Text style={styles.title}>Teste</Text>
  </View>
);

export default Header;
