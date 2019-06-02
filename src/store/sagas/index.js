import { all, takeLatest } from 'redux-saga/effects';

import { ProductTypes } from '~/store/ducks/products';
import { CategoryTypes } from '~/store/ducks/categories';

import { getProducts } from './products';
import { getCategories } from './categories';

export default function* rootSaga() {
  return yield all([
    takeLatest(CategoryTypes.SET_CATEGORY_REQUEST, getCategories),
    takeLatest(ProductTypes.SET_PRODUCT_REQUEST, getProducts),
  ]);
}
