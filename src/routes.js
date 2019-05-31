import { createAppContainer, createBottomTabNavigator } from 'react-navigation';

import Products from '~/pages/Products';
import Cart from '~/pages/Cart';

const Routes = createAppContainer(
  createBottomTabNavigator(
    {
      Products,
      Cart,
    },
    {
      // ocnfiguração do menu de rota
      tabBarOptions: {
        showIcon: true,
        showLabel: false,
        activeTintColor: '#fd8d8d',
        inactiveTintColor: '#999',
        style: {
          backgroundColor: '#fff',
        },
      },
    },
  ),
);

export default Routes;
