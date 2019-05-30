import { StatusBar, Platform } from 'react-native';

// deixa a statusbar com color branca
StatusBar.setBarStyle('light-content');

if (Platform.OS === 'android') {
  // no android vai preencher a statusbar com essa cor
  StatusBar.setBackgroundColor('#111');
}