import { combineReducers } from 'redux';

import { reducer as products } from './products';
import { reducer as categories } from './categories';
import { reducer as cart } from './cart';

export default combineReducers({
  products,
  categories,
  cart,
});
