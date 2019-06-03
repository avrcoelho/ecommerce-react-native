import { call, put } from 'redux-saga/effects';

import api from '~/services/api';
import ProductActions from '~/store/ducks/products';
import CategoryActions from '~/store/ducks/categories';

export function* getProducts({ category }) {
  const { data } = yield call(api.get, `category_products/${category}`);

  yield put(ProductActions.setProductSuccess(data.products));
  yield put(CategoryActions.setActualCategory(category));
}
